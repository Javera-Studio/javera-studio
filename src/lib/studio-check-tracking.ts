import { STUDIO_CHECK_PATH, type StudioCheckEventName } from "@/lib/studio-check-events";

const SESSION_STORAGE_KEY = "studio_check_session_id";

/**
 * Liefert eine zufällige, rein anonyme Session-ID für den aktuellen Browser-Tab
 * und legt sie in sessionStorage ab (überlebt Restarts des Checks innerhalb
 * derselben Session, aber keine neuen Tabs/Sitzungen). Keine IP, kein Name,
 * keine E-Mail – nur eine zufällige ID zur Zuordnung der Funnel-Events.
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
    // sessionStorage kann in privaten/eingeschränkten Kontexten fehlschlagen.
    // Tracking ist dann einfach deaktiviert, die Seite funktioniert weiter.
    return null;
  }
}

/**
 * Sendet ein anonymes Funnel-Event an /api/studio-check-event.
 * Fire-and-forget: Fehler werden bewusst verschluckt, da Tracking nie die
 * eigentliche Nutzung des Studio-Checks blockieren oder stören darf.
 * Dedupliziert pro Durchlauf ("nur einmal pro Event") wird vom Aufrufer
 * (StudioCheck.tsx) über Refs sichergestellt.
 */
export function trackStudioCheckEvent(eventName: StudioCheckEventName): void {
  const sessionId = getSessionId();
  if (!sessionId) return;

  fetch("/api/studio-check-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body: JSON.stringify({ eventName, path: STUDIO_CHECK_PATH, sessionId }),
  }).catch(() => {
    // Analytics ist nicht kritisch – Netzwerkfehler hier bewusst ignorieren.
  });
}
