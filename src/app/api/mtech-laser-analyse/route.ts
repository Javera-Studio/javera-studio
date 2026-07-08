import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
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
  };

  if (!name || !studio || !email || !phone || !message) {
    return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
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
