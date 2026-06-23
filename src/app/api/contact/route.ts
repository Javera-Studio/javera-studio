import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json() as {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Fehlende Felder" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "JAVERA Studio Website <onboarding@resend.dev>",
    to: "hallo@javera-studio.at",
    replyTo: email,
    subject: `Neue Anfrage: ${subject}`,
    text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
