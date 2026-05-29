import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
})

const FALLBACK_ACCESS_KEY = '5c831a25-cd2b-4666-ae44-91194af7bc49'

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY ?? FALLBACK_ACCESS_KEY

        let parsed: z.infer<typeof schema>
        try {
          parsed = schema.parse(await request.json())
        } catch {
          return Response.json({ error: 'Ungültige Formulardaten' }, { status: 400 })
        }

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            name: parsed.name,
            email: parsed.email,
            message: parsed.message,
            subject: `Neue Kontaktanfrage von ${parsed.name}`,
          }),
        })

        const result = (await response.json()) as { success: boolean; message?: string }

        if (!result.success) {
          console.error('Web3Forms submission failed', result)
          return Response.json({ error: 'Versand fehlgeschlagen' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})
