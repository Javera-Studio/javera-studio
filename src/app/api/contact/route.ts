import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getClientIp, isRateLimited, isValidEmail } from "@/lib/rate-limit";

let resend: Resend | undefined;

function getResendClient() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

/**
 * Erlaubte Werte für den internen "Grund der Anfrage"-Hinweis (ContactForm-Prop
 * `inquirySource`). Serverseitig auf genau diese zwei Varianten begrenzt, damit über das
 * versteckte Formularfeld kein beliebiger Text in die E-Mail eingeschleust werden kann.
 */
const ALLOWED_INQUIRY_SOURCES = ["Allgemeine Kontaktaufnahme", "Kostenlose Webseiten-Vorschau"] as const;
type InquirySource = (typeof ALLOWED_INQUIRY_SOURCES)[number];

function resolveInquirySource(value: unknown): InquirySource {
  return ALLOWED_INQUIRY_SOURCES.includes(value as InquirySource)
    ? (value as InquirySource)
    : "Allgemeine Kontaktaufnahme";
}

export async function POST(req: NextRequest) {
  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuche es später erneut." }, { status: 429 });
  }

  const { name, email, subject, message, hp_company, inquirySource } = (await req.json()) as {
    name: string;
    email: string;
    subject: string;
    message: string;
    hp_company?: string;
    inquirySource?: string;
  };
  const inquirySourceLabel = resolveInquirySource(inquirySource);

  // Honeypot: unsichtbares Feld, das nur Bots ausfüllen. Stiller Erfolg, keine Fehlermeldung.
  if (hp_company) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse" }, { status: 400 });
  }

  if (name.length > 120 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Eingaben sind zu lang" }, { status: 400 });
  }

  const { error } = await getResendClient().emails.send({
    from: "JAVERA Studio Website <website@javera-studio.at>",
    to: "hallo@javera-studio.at",
    replyTo: email,
    subject: `Neue Anfrage: ${subject}`,
    text: `Grund der Anfrage: ${inquirySourceLabel}\nName: ${name}\nE-Mail: ${email}\nBetreff: ${subject}\nNachricht: ${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
