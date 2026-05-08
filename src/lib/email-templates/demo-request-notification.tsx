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

interface DemoRequestNotificationProps {
  name?: string
  email?: string
  studio_name?: string
  studio_type?: string
  has_website?: string
  goals?: string[]
  styles?: string[]
  content_status?: string
  start_time?: string
  budget?: string
  notes?: string | null
}

const DemoRequestNotificationEmail = ({
  name,
  email,
  studio_name,
  studio_type,
  has_website,
  goals,
  styles,
  content_status,
  start_time,
  budget,
  notes,
}: DemoRequestNotificationProps) => {
  const contactName = name?.trim() || 'Neue Anfrage'
  const contactEmail = email?.trim() || 'Keine E-Mail angegeben'
  const studioName = studio_name?.trim() || 'Kein Studio angegeben'
  const safeNotes = notes?.trim() || 'Keine zusätzlichen Infos'

  return (
    <Html lang="de" dir="ltr">
      <Head />
      <Preview>Neue Demo-Anfrage von {contactName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={eyebrow}>Javera Studio</Text>
          <Heading style={heading}>Neue Demo-Anfrage</Heading>
          <Text style={intro}>
            Es ist eine neue Anfrage für eine Website über das Demo-Formular eingegangen.
          </Text>

          <Section style={card}>
            <Text style={label}>Name</Text>
            <Text style={value}>{contactName}</Text>

            <Text style={label}>E-Mail</Text>
            <Text style={value}>{contactEmail}</Text>

            <Text style={label}>Studio</Text>
            <Text style={value}>{studioName}</Text>

            <Text style={label}>Art des Studios</Text>
            <Text style={value}>{studio_type || '—'}</Text>

            <Text style={label}>Hat bereits Website</Text>
            <Text style={value}>{has_website || '—'}</Text>

            <Text style={label}>Ziele</Text>
            <Text style={value}>{goals?.length ? goals.join(', ') : '—'}</Text>

            <Text style={label}>Stil</Text>
            <Text style={value}>{styles?.length ? styles.join(', ') : '—'}</Text>

            <Text style={label}>Inhalte vorhanden</Text>
            <Text style={value}>{content_status || '—'}</Text>

            <Text style={label}>Start</Text>
            <Text style={value}>{start_time || '—'}</Text>

            <Text style={label}>Gewähltes Paket</Text>
            <Text style={value}>{budget || '—'}</Text>

            <Text style={label}>Zusätzliche Infos</Text>
            <Text style={messageText}>{safeNotes}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: DemoRequestNotificationEmail,
  subject: ({ name, studio_name }: DemoRequestNotificationProps) =>
    `Neue Demo-Anfrage${name?.trim() ? ` von ${name.trim()}` : ''}${studio_name?.trim() ? ` – ${studio_name.trim()}` : ''}`,
  displayName: 'Demo Anfrage Benachrichtigung',
  previewData: {
    name: 'Jagoda Teresa Okafor',
    email: 'jagoda.okafor@gmail.com',
    studio_name: 'Studio Rose',
    studio_type: 'Kosmetikstudio',
    has_website: 'Nein',
    goals: ['Mehr Kundinnen gewinnen', 'Mehr Terminbuchungen'],
    styles: ['Elegant & luxuriös'],
    content_status: 'Teilweise',
    start_time: 'Sofort',
    budget: 'Noch unsicher – bitte beraten',
    notes: 'Bitte feminin und hochwertig.',
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
