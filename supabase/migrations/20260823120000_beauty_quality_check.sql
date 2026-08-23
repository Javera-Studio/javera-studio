-- Anonymes Funnel-Tracking + Lead-Speicherung für /beauty-qualitaetscheck.
-- Getrennt von studio_check_events / dem Studio-Check-Lead-Flow, damit beide
-- Checks unabhängig voneinander ausgewertet werden können.

CREATE TABLE IF NOT EXISTS public.beauty_quality_check_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name TEXT NOT NULL CHECK (event_name IN (
    'beauty_quality_check_viewed',
    'beauty_quality_check_started',
    'beauty_quality_check_first_answer',
    'beauty_quality_check_completed',
    'beauty_quality_check_lead_submitted'
  )),
  path TEXT NOT NULL,
  session_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.beauty_quality_check_events ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Service role can insert beauty quality check events"
    ON public.beauty_quality_check_events FOR INSERT
    WITH CHECK (auth.role() = 'service_role');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Service role can read beauty quality check events"
    ON public.beauty_quality_check_events FOR SELECT
    USING (auth.role() = 'service_role');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE INDEX IF NOT EXISTS idx_beauty_quality_check_events_created ON public.beauty_quality_check_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_beauty_quality_check_events_session ON public.beauty_quality_check_events(session_id);
CREATE INDEX IF NOT EXISTS idx_beauty_quality_check_events_name ON public.beauty_quality_check_events(event_name);

-- Vollständige Lead-Datensätze inkl. Antworten, damit Jagoda die Checks
-- später in Ruhe persönlich auswerten kann (nicht nur per E-Mail-Postfach).
CREATE TABLE IF NOT EXISTS public.beauty_quality_check_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  studio_name TEXT NOT NULL,
  email TEXT NOT NULL,
  instagram TEXT,
  website TEXT,
  region TEXT,
  priority TEXT NOT NULL CHECK (priority IN ('sehr-interessant', 'interessant', 'niedrig')),
  answers JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.beauty_quality_check_leads ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "Service role can insert beauty quality check leads"
    ON public.beauty_quality_check_leads FOR INSERT
    WITH CHECK (auth.role() = 'service_role');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Service role can read beauty quality check leads"
    ON public.beauty_quality_check_leads FOR SELECT
    USING (auth.role() = 'service_role');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE INDEX IF NOT EXISTS idx_beauty_quality_check_leads_created ON public.beauty_quality_check_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_beauty_quality_check_leads_priority ON public.beauty_quality_check_leads(priority);
