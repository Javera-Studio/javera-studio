import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getClientIp, isRateLimited, isValidEmail } from "@/lib/rate-limit";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";
import { getVisibleQuestions } from "@/lib/data/beauty-quality-check";
import type { BeautyQualityCheckAnswers, BeautyQualityCheckLeadPayload } from "@/types/beauty-quality-check";

let resend: Resend | undefined;

function getResendClient() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

function buildTranscript(answers: BeautyQualityCheckAnswers): string[] {
  const visible = getVisibleQuestions(answers);
  const lines: string[] = [];

  for (const q of visible) {
    const raw = answers[q.id];
    let answerText: string;

    if (q.type === "text") {
      answerText = typeof raw === "string" && raw.trim() ? raw.trim() : "(nicht beantwortet)";
    } else if (q.type === "single") {
      const option = q.options.find((o) => o.id === raw);
      answerText = option?.label ?? "(nicht beantwortet)";
    } else {
      const ids = Array.isArray(raw) ? raw : [];
      answerText =
        ids.length > 0
          ? ids.map((id) => q.options.find((o) => o.id === id)?.label ?? id).join(", ")
          : "(nicht beantwortet)";
    }

    lines.push(`- ${q.question}\n  → ${answerText}`);

    if (q.type !== "text" && "followUpText" in q && q.followUpText) {
      const followUpValue = answers[`${q.id}__text`];
      const selected = q.type === "single" ? raw === q.followUpText.whenOptionId : Array.isArray(raw) && raw.includes(q.followUpText.whenOptionId);
      if (selected && typeof followUpValue === "string" && followUpValue.trim()) {
        lines.push(`  ↳ ${q.followUpText.label}: ${followUpValue.trim()}`);
      }
    }
  }

  return lines;
}

export async function POST(req: NextRequest) {
  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuche es später erneut." }, { status: 429 });
  }

  const { firstName, studioName, email, instagram, website, region, consent, answers, hp_field } =
    (await req.json()) as BeautyQualityCheckLeadPayload;

  console.info("[beauty-quality-check-lead] Submit gestartet");

  // Honeypot: unsichtbares Feld, das nur Bots ausfüllen. Stiller Erfolg, keine Fehlermeldung an den Absender.
  if (hp_field) {
    console.warn("[beauty-quality-check-lead] Honeypot ausgelöst, Anfrage ignoriert");
    return NextResponse.json({ success: true });
  }

  if (
    !firstName ||
    !studioName ||
    !email ||
    consent !== true ||
    typeof answers !== "object" ||
    answers === null
  ) {
    return NextResponse.json({ error: "Fehlende oder ungültige Felder" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse" }, { status: 400 });
  }

  if (
    firstName.length > 80 ||
    studioName.length > 120 ||
    (instagram?.length ?? 0) > 200 ||
    (website?.length ?? 0) > 200 ||
    (region?.length ?? 0) > 120
  ) {
    return NextResponse.json({ error: "Eingaben sind zu lang" }, { status: 400 });
  }

  // Grobe Obergrenze für den gesamten Antworten-Payload, damit kein beliebig
  // großes JSON-Objekt an E-Mail-Versand und Datenbank durchgereicht wird.
  if (JSON.stringify(answers).length > 20_000) {
    return NextResponse.json({ error: "Antworten sind zu umfangreich" }, { status: 400 });
  }

  const transcript = buildTranscript(answers);
  const websiteFromAnswers = answers["has-website__text"];
  const resolvedWebsite = website || (typeof websiteFromAnswers === "string" ? websiteFromAnswers : undefined);

  const lines = [
    `Vorname: ${firstName}`,
    `Studio: ${studioName}`,
    `E-Mail: ${email}`,
    `Instagram: ${instagram || "–"}`,
    `Website: ${resolvedWebsite || "–"}`,
    `Ort/Region: ${region || "–"}`,
    "",
    "Antworten:",
    ...transcript,
  ];

  // Lead-Speicherung ist Voraussetzung für Erfolg, nicht nur "best effort": ohne
  // gespeicherten Datensatz darf die Danke-Seite nicht angezeigt werden.
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    console.error("[beauty-quality-check-lead] Supabase nicht konfiguriert – Lead konnte nicht gespeichert werden");
    return NextResponse.json(
      { error: "Deine Anfrage konnte nicht gespeichert werden. Bitte versuche es erneut oder schreib uns direkt." },
      { status: 500 }
    );
  }

  const { error: supabaseError } = await supabase.from("beauty_quality_check_leads").insert({
    first_name: firstName,
    studio_name: studioName,
    email,
    instagram: instagram || null,
    website: resolvedWebsite || null,
    region: region || null,
    answers,
  });

  if (supabaseError) {
    console.error("[beauty-quality-check-lead] Supabase insert fehlgeschlagen:", supabaseError.message);
    return NextResponse.json(
      { error: "Deine Anfrage konnte nicht gespeichert werden. Bitte versuche es erneut oder schreib uns direkt." },
      { status: 500 }
    );
  }
  console.info("[beauty-quality-check-lead] Supabase insert erfolgreich");

  const { error: resendError } = await getResendClient().emails.send({
    from: "JAVERA Studio Website <website@javera-studio.at>",
    to: "hallo@javera-studio.at",
    replyTo: email,
    subject: `Neuer Beauty-Qualitätscheck – ${studioName || firstName}`,
    text: lines.join("\n"),
  });

  if (resendError) {
    console.error("[beauty-quality-check-lead] Resend Versand fehlgeschlagen:", resendError.message);
    return NextResponse.json({ error: resendError.message }, { status: 500 });
  }
  console.info("[beauty-quality-check-lead] Resend Versand erfolgreich");

  return NextResponse.json({ success: true });
}
