import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface ContactFormNotificationProps {
  name?: string
  email?: string
  message?: string
}

const ContactFormNotificationEmail = ({
  name,
  email,
  message,
}: ContactFormNotificationProps) => {
  const senderName = name?.trim() || 'Neue Anfrage'
  const senderEmail = email?.trim() || 'Keine E-Mail angegeben'
  const senderMessage = message?.trim() || 'Keine Nachricht übermittelt.'

  return (
    <Html lang="de" dir="ltr">
      <Head />
      <Preview>Neue Kontaktanfrage von {senderName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={eyebrow}>Javera Studio</Text>
          <Heading style={heading}>Neue Kontaktanfrage</Heading>
          <Text style={intro}>
            Über das Kontaktformular ist eine neue Nachricht eingegangen.
          </Text>

          <Section style={card}>
            <Text style={label}>Name</Text>
            <Text style={value}>{senderName}</Text>

            <Text style={label}>E-Mail</Text>
            <Text style={value}>{senderEmail}</Text>

            <Text style={label}>Nachricht</Text>
            <Text style={messageText}>{senderMessage}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: ContactFormNotificationEmail,
  subject: ({ name }: ContactFormNotificationProps) =>
    `Neue Kontaktanfrage${name?.trim() ? ` von ${name.trim()}` : ''}`,
  displayName: 'Kontaktformular Benachrichtigung',
  previewData: {
    name: 'Jagoda Teresa Okafor',
    email: 'jagoda.okafor@gmail.com',
    message: 'Hallo, ich interessiere mich für eine neue Website für mein Beauty Studio.',
  },
  to: 'hallo@javera-studio.at',
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Inter, Arial, sans-serif',
  color: '#1f1f1f',
  margin: '0',
  padding: '32px 0',
}

const container = {
  width: '100%',
  maxWidth: '560px',
  margin: '0 auto',
  padding: '0 24px',
}

const eyebrow = {
  fontSize: '12px',
  lineHeight: '18px',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: '#7a4e4e',
  margin: '0 0 12px',
}

const heading = {
  fontFamily: 'Playfair Display, Georgia, serif',
  fontSize: '32px',
  lineHeight: '1.15',
  fontWeight: '600',
  color: '#1f1f1f',
  margin: '0 0 12px',
}

const intro = {
  fontSize: '15px',
  lineHeight: '24px',
  color: '#5f5a58',
  margin: '0 0 24px',
}

const card = {
  backgroundColor: '#f7f7f7',
  border: '1px solid #eee3df',
  borderRadius: '8px',
  padding: '24px',
}

const label = {
  fontSize: '12px',
  lineHeight: '18px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: '#8b807d',
  margin: '0 0 6px',
}

const value = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#1f1f1f',
  margin: '0 0 18px',
}

const messageText = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#1f1f1f',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
}