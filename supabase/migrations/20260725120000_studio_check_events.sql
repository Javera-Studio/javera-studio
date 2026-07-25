-- Anonymes Funnel-Tracking für /studio-check.
-- Speichert ausschließlich: Event-Name, Pfad, eine zufällige anonyme
-- Session-ID und den Zeitstempel. Keine IP-Adressen, keine Namen, keine
-- E-Mail-Adressen, keine konkreten Quiz-Antworten.

CREATE TABLE IF NOT EXISTS public.studio_check_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name TEXT NOT NULL CHECK (event_name IN (
    'studio_check_viewed',
    'studio_check_started',
    'studio_check_first_answer',
    'studio_check_completed',
    'studio_check_cta_clicked'
  )),
  path TEXT NOT NULL,
  session_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.studio_check_events ENABLE ROW LEVEL SECURITY;

-- Nur der Service-Role-Key (serverseitig, aus der API-Route) darf schreiben.
-- Keine SELECT-Policy für anon/authenticated: Auswertung erfolgt über das
-- Supabase-Dashboard bzw. mit dem Service-Role-Key, nie aus dem Browser.
DO $$ BEGIN
  CREATE POLICY "Service role can insert studio check events"
    ON public.studio_check_events FOR INSERT
    WITH CHECK (auth.role() = 'service_role');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Service role can read studio check events"
    ON public.studio_check_events FOR SELECT
    USING (auth.role() = 'service_role');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE INDEX IF NOT EXISTS idx_studio_check_events_created ON public.studio_check_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_studio_check_events_session ON public.studio_check_events(session_id);
CREATE INDEX IF NOT EXISTS idx_studio_check_events_name ON public.studio_check_events(event_name);
