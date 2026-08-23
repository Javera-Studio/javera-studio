import { NextRequest, NextResponse } from "next/server";
import { getClientIp, isEventRateLimited } from "@/lib/rate-limit";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";
import {
  BEAUTY_QUALITY_CHECK_EVENT_NAMES,
  BEAUTY_QUALITY_CHECK_PATH,
  type BeautyQualityCheckEventName,
} from "@/lib/beauty-quality-check-events";

// UUID (crypto.randomUUID()-Format), wie ihn beauty-quality-check-tracking.ts erzeugt.
const SESSION_ID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isValidEventName(value: unknown): value is BeautyQualityCheckEventName {
  return typeof value === "string" && (BEAUTY_QUALITY_CHECK_EVENT_NAMES as readonly string[]).includes(value);
}

export async function POST(req: NextRequest) {
  if (isEventRateLimited(getClientIp(req))) {
    return NextResponse.json({ error: "Zu viele Anfragen." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültiger Request-Body" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Ungültiger Request-Body" }, { status: 400 });
  }

  const { eventName, path, sessionId } = body as Record<string, unknown>;

  if (
    !isValidEventName(eventName) ||
    path !== BEAUTY_QUALITY_CHECK_PATH ||
    typeof sessionId !== "string" ||
    !SESSION_ID_RE.test(sessionId)
  ) {
    return NextResponse.json({ error: "Ungültige oder unerwartete Felder" }, { status: 400 });
  }

  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: "Tracking derzeit nicht verfügbar" }, { status: 503 });
  }

  const { error } = await supabase.from("beauty_quality_check_events").insert({
    event_name: eventName,
    path,
    session_id: sessionId,
  });

  if (error) {
    return NextResponse.json({ error: "Ereignis konnte nicht gespeichert werden" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
