// Zentrale Definition der Studio-Check-Funnel-Events. Wird sowohl vom
// Client-Tracking (StudioCheck.tsx) als auch von der API-Route
// (api/studio-check-event) importiert, damit die Allow-Liste an einer
// einzigen Stelle gepflegt wird.

export const STUDIO_CHECK_EVENT_NAMES = [
  "studio_check_viewed",
  "studio_check_started",
  "studio_check_first_answer",
  "studio_check_completed",
  "studio_check_cta_clicked",
] as const;

export type StudioCheckEventName = (typeof STUDIO_CHECK_EVENT_NAMES)[number];

export const STUDIO_CHECK_PATH = "/studio-check";
