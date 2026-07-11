import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getClientIp, isRateLimited, isValidEmail } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuche es später erneut." }, { status: 429 });
  }

  const {
    name,
    studio,
    email,
    phone,
    website,
    instagram,
    googleProfile,
    message,
    mtechProduct,
    hp_company,
  } = (await req.json()) as {
    name: string;
    studio: string;
    email: string;
    phone: string;
    website?: string;
    instagram?: string;
    googleProfile?: string;
    message: string;
    mtechProduct?: string;
    hp_company?: string;
  };

  // Honeypot: unsichtbares Feld, das nur Bots ausfüllen. Stiller Erfolg, keine Fehlermeldung.
  if (hp_company) {
    return NextResponse.json({ success: true });
  }

  if (!name || !studio || !email || !phone || !message) {
    return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse" }, { status: 400 });
  }

  if (
    name.length > 120 ||
    studio.length > 120 ||
    phone.length > 60 ||
    message.length > 5000 ||
    (mtechProduct?.length ?? 0) > 255
  ) {
    return NextResponse.json({ error: "Eingaben sind zu lang" }, { status: 400 });
  }

  const lines = [
    `Name: ${name}`,
    `Studio: ${studio}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone}`,
    `Website: ${website || "–"}`,
    `Instagram: ${instagram || "–"}`,
    `Google-Unternehmensprofil: ${googleProfile || "–"}`,
    `Bei MTech Laser erworben: ${mtechProduct || "–"}`,
    "",
    "Nachricht:",
    message,
  ];

  const { error } = await resend.emails.send({
    from: "JAVERA Studio Website <website@javera-studio.at>",
    to: "hallo@javera-studio.at",
    replyTo: email,
    subject: `Neue Anfrage: Kostenlose Online-Präsenz-Analyse (MTech Laser Bonus) – ${studio}`,
    text: lines.join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
