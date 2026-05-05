import * as React from 'react'
import { render } from '@react-email/components'
import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
})

export const Route = createFileRoute('/api/public/contact')({
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

        const supabase: any = createClient(supabaseUrl, supabaseServiceKey)

        const { error: insertError } = await supabase.from('contact_messages').insert(parsed)
        if (insertError) {
          console.error('Failed to store contact message', { error: insertError })
          return Response.json({ error: 'Speichern fehlgeschlagen' }, { status: 500 })
        }

        const template = TEMPLATES['contact-form-notification']
        if (!template) {
          return Response.json({ error: 'E-Mail-Vorlage fehlt' }, { status: 500 })
        }

        const messageId = crypto.randomUUID()
        const element = React.createElement(template.component, parsed)
        const html = await render(element)
        const text = await render(element, { plainText: true })
        const subject =
          typeof template.subject === 'function' ? template.subject(parsed) : template.subject
        const recipient = template.to ?? 'hello@javera-studio.com'
        const normalizedRecipient = recipient.toLowerCase()

        const { data: existingToken, error: tokenLookupError } = await supabase
          .from('email_unsubscribe_tokens')
          .select('token')
          .eq('email', normalizedRecipient)
          .maybeSingle()

        if (tokenLookupError) {
          console.error('Failed to look up unsubscribe token for contact email', {
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
            console.error('Failed to create unsubscribe token for contact email', {
              error: tokenInsertError,
            })
            return Response.json({ error: 'Versandvorbereitung fehlgeschlagen' }, { status: 500 })
          }
        }

        await supabase.from('email_send_log').insert({
          message_id: messageId,
          template_name: 'contact-form-notification',
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
            label: 'contact-form-notification',
            idempotency_key: `contact-${messageId}`,
            unsubscribe_token: unsubscribeToken,
            queued_at: new Date().toISOString(),
          },
        })

        if (enqueueError) {
          console.error('Failed to enqueue contact email', { error: enqueueError })
          await supabase.from('email_send_log').insert({
            message_id: messageId,
            template_name: 'contact-form-notification',
            recipient_email: recipient,
            status: 'failed',
            error_message: 'Failed to enqueue contact email',
          })
          return Response.json({ error: 'Versand fehlgeschlagen' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})