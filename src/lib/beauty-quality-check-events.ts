// Zentrale Definition der Beauty-Qualitätscheck-Funnel-Events. Wird sowohl vom
// Client-Tracking (BeautyQualityCheck.tsx) als auch von der API-Route
// (api/beauty-quality-check-event) importiert, damit die Allow-Liste an einer
// einzigen Stelle gepflegt wird. Eigene Event-Namen (Präfix beauty_quality_check_),
// damit die Auswertung getrennt von /studio-check erfolgen kann.

export const BEAUTY_QUALITY_CHECK_EVENT_NAMES = [
  "beauty_quality_check_viewed",
  "beauty_quality_check_started",
  "beauty_quality_check_first_answer",
  "beauty_quality_check_completed",
  "beauty_quality_check_lead_submitted",
] as const;

export type BeautyQualityCheckEventName = (typeof BEAUTY_QUALITY_CHECK_EVENT_NAMES)[number];

export const BEAUTY_QUALITY_CHECK_PATH = "/beauty-qualitaetscheck";
