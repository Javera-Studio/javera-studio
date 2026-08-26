import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getClientIp, isRateLimited, isValidEmail } from "@/lib/rate-limit";
import { ctaConfig, getQuestionsForSegment, goalOptions, segmentOptions } from "@/lib/data/studio-check";
import { calculateResult } from "@/lib/studio-check-scoring";
import type { Goal, Segment, StudioCheckLeadPayload } from "@/types/studio-check";

let resend: Resend | undefined;

function getResendClient() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

const VALID_SEGMENTS: Segment[] = ["website", "social", "founding"];
const VALID_GOALS: Goal[] = ["neukundinnen", "professionalitaet", "leistungen", "buchung", "abgrenzung", "unsicher"];

export async function POST(req: NextRequest) {
  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json({ error: "Zu viele Anfragen. Bitte versuche es später erneut." }, { status: 429 });
  }

  const { firstName, email, contact, message, consent, segment, goals: rawGoals, goal: legacyGoal, answers, hp_company } =
    (await req.json()) as StudioCheckLeadPayload;

  // Honeypot: unsichtbares Feld, das nur Bots ausfüllen. Stiller Erfolg, keine Fehlermeldung.
  if (hp_company) {
    return NextResponse.json({ success: true });
  }

  // Abwärtskompatibilität: ältere Clients senden ein einzelnes `goal` statt `goals`.
  const goals: Goal[] = Array.isArray(rawGoals) ? rawGoals : legacyGoal ? [legacyGoal] : [];

  if (
    !firstName ||
    !email ||
    consent !== true ||
    !VALID_SEGMENTS.includes(segment) ||
    goals.length === 0 ||
    !goals.every((g) => VALID_GOALS.includes(g)) ||
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
    (contact?.length ?? 0) > 200 ||
    (message?.length ?? 0) > 2000
  ) {
    return NextResponse.json({ error: "Eingaben sind zu lang" }, { status: 400 });
  }

  // Score, Kategorien und Empfehlungen serverseitig neu berechnen statt dem Client zu vertrauen.
  const questions = getQuestionsForSegment(segment);
  const result = calculateResult(segment, goals, answers, questions);
  const segmentLabel = segmentOptions.find((o) => o.id === segment)?.label ?? segment;
  const goalLabels = goals.map((g) => goalOptions.find((o) => o.id === g)?.label ?? g).join(", ");

  const transcript = questions.map((q) => {
    const answer = q.answers.find((a) => a.id === answers[q.id]);
    return `- ${q.question}\n  → ${answer?.label ?? "(nicht beantwortet)"}`;
  });

  const lines = [
    `Vorname: ${firstName}`,
    `E-Mail: ${email}`,
    `Website/Instagram: ${contact || "–"}`,
    "",
    `Segment: ${segmentLabel}`,
    `Ziele: ${goalLabels}`,
    `Score: ${result.score}/100`,
    ...result.categories.map((c) => `  ${c.label}: ${c.percent}%`),
    `Stärkste Kategorie: ${result.strongest.label}`,
    `Schwächste Kategorie: ${result.weakest.label}`,
    "",
    "Empfehlungen:",
    ...(result.recommendations.length > 0 ? result.recommendations.map((r) => `- ${r.text}`) : ["–"]),
    "",
    "Nachricht:",
    message || "–",
    "",
    "Quiz-Transkript:",
    ...transcript,
  ];

  const { error } = await getResendClient().emails.send({
    from: "JAVERA Studio Website <website@javera-studio.at>",
    to: "hallo@javera-studio.at",
    replyTo: email,
    subject: `Neuer Studio-Check: ${ctaConfig[segment].buttonLabel} – ${firstName}`,
    text: lines.join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
