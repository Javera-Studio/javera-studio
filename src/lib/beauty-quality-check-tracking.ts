import { BEAUTY_QUALITY_CHECK_PATH, type BeautyQualityCheckEventName } from "@/lib/beauty-quality-check-events";

const SESSION_STORAGE_KEY = "beauty_quality_check_session_id";

/**
 * Liefert eine zufällige, rein anonyme Session-ID für den aktuellen Browser-Tab
 * und legt sie in sessionStorage ab. Keine IP, kein Name, keine E-Mail – nur
 * eine zufällige ID zur Zuordnung der Funnel-Events. Analog zu
 * studio-check-tracking.ts, aber mit eigenem Storage-Key.
 */
function getSessionId(): string | null {
  if (typeof window === "undefined") return null;

  try {
    const existing = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (existing) return existing;

    const id = crypto.randomUUID();
    window.sessionStorage.setItem(SESSION_STORAGE_KEY, id);
    return id;
  } catch {
    return null;
  }
}

/**
 * Sendet ein anonymes Funnel-Event an /api/beauty-quality-check-event.
 * Fire-and-forget: Fehler werden bewusst verschluckt, Tracking darf die
 * Nutzung des Checks nie blockieren. Deduplizierung pro Durchlauf übernimmt
 * der Aufrufer (BeautyQualityCheck.tsx) über Refs.
 */
export function trackBeautyQualityCheckEvent(eventName: BeautyQualityCheckEventName): void {
  const sessionId = getSessionId();
  if (!sessionId) return;

  fetch("/api/beauty-quality-check-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body: JSON.stringify({ eventName, path: BEAUTY_QUALITY_CHECK_PATH, sessionId }),
  }).catch(() => {
    // Analytics ist nicht kritisch – Netzwerkfehler hier bewusst ignorieren.
  });
}
