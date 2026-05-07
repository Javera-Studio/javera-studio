import * as React from 'react'
import { render } from '@react-email/components'
import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  studio_name: z.string().trim().min(1).max(120),
  studio_type: z.enum(['Nagelstudio', 'Kosmetikstudio', 'Friseur', 'Laser / Klinik', 'Sonstiges']),
  has_website: z.enum(['Ja', 'Nein']),
  goals: z
    .array(
      z.enum([
        'Mehr Kundinnen gewinnen',
        'Mehr Terminbuchungen',
        'Professioneller auftreten',
        'Besser bei Google gefunden werden',
      ]),
    )
    .min(1)
    .max(10),
  styles: z
    .array(
      z.enum(['Modern & clean', 'Elegant & luxuriös', 'Feminin & weich', 'Minimalistisch & schlicht']),
    )
    .min(1)
    .max(10),
  content_status: z.enum(['Ja, alles bereit', 'Teilweise', 'Nein, brauche Unterstützung']),
  start_time: z.enum(['Sofort', 'In den nächsten Wochen', 'Erstmal nur informieren']),
  budget: z.enum([
    'Starter Website – ab 350€',
    'Premium Website – ab 600€',
    'Kostenlose Website (falls noch Plätze vorhanden)',
  ]),
  notes: z.string().trim().max(2000).nullish(),
})

export const Route = createFileRoute('/api/public/demo-request')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

        if (!supabaseUrl || !supabaseServiceKey) {
          return Response.json({ error: 'Server configuration error' }, { status: 500 })
        }

        let parsed: z.infer<typeof schema>
        try {
          parsed = schema.parse(await request.json())
        } catch {
          return Response.json({ error: 'Ungültige Formulardaten' }, { status: 400 })
        }

        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        const { error } = await supabase.from('demo_requests').insert({
          ...parsed,
          notes: parsed.notes?.trim() ? parsed.notes.trim() : null,
        })

        if (error) {
          console.error('Failed to store demo request', { error })
          return Response.json({ error: 'Speichern fehlgeschlagen' }, { status: 500 })
        }

        const template = TEMPLATES['demo-request-notification']
        if (!template) {
          return Response.json({ error: 'E-Mail-Vorlage fehlt' }, { status: 500 })
        }

        const messageId = crypto.randomUUID()
        const recipient = template.to ?? 'hallo@javera-studio.at'
        const element = React.createElement(template.component, {
          ...parsed,
          notes: parsed.notes?.trim() ? parsed.notes.trim() : null,
        })
        const html = await render(element)
        const text = await render(element, { plainText: true })
        const subject =
          typeof template.subject === 'function' ? template.subject(parsed) : template.subject
        const normalizedRecipient = recipient.toLowerCase()

        const { data: existingToken, error: tokenLookupError } = await supabase
          .from('email_unsubscribe_tokens')
          .select('token')
          .eq('email', normalizedRecipient)
          .maybeSingle()

        if (tokenLookupError) {
          console.error('Failed to look up unsubscribe token for demo request email', {
            error: tokenLookupError,
          })
          return Response.json({ error: 'Versandvorbereitung fehlgeschlagen' }, { status: 500 })
        }

        let unsubscribeToken = existingToken?.token
        if (!unsubscribeToken) {
          unsubscribeToken = crypto.randomUUID()

          const { error: tokenInsertError } = await supabase.from('email_unsubscribe_tokens').upsert(
            { email: normalizedRecipient, token: unsubscribeToken },
            { onConflict: 'email' },
          )

          if (tokenInsertError) {
            console.error('Failed to create unsubscribe token for demo request email', {
              error: tokenInsertError,
            })
            return Response.json({ error: 'Versandvorbereitung fehlgeschlagen' }, { status: 500 })
          }
        }

        await supabase.from('email_send_log').insert({
          message_id: messageId,
          template_name: 'demo-request-notification',
          recipient_email: recipient,
          status: 'pending',
        })

        const { error: enqueueError } = await supabase.rpc('enqueue_email', {
          queue_name: 'transactional_emails',
          payload: {
            message_id: messageId,
            to: recipient,
            from: 'javera-studio <noreply@javera-studio.com>',
            sender_domain: 'notify.javera-studio.com',
            subject,
            html,
            text,
            purpose: 'transactional',
            label: 'demo-request-notification',
            idempotency_key: `demo-request-${messageId}`,
            unsubscribe_token: unsubscribeToken,
            queued_at: new Date().toISOString(),
          },
        })

        if (enqueueError) {
          console.error('Failed to enqueue demo request email', { error: enqueueError })
          await supabase.from('email_send_log').insert({
            message_id: messageId,
            template_name: 'demo-request-notification',
            recipient_email: recipient,
            status: 'failed',
            error_message: 'Failed to enqueue demo request email',
          })
          return Response.json({ error: 'Versand fehlgeschlagen' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})