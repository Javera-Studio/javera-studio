-- Kosten-/Verbrauchsmessung für den Website-Chatbot (Anthropic-API).
--
-- Speichert ausschließlich: customer_id (für spätere Mehrkunden-Version),
-- Modell, Token-Zähler aus der Anthropic-Response, eine grobe Kostenschätzung
-- und den Zeitstempel.
--
-- Es werden KEINE Chat-Nachrichten, KEINE IP-Adressen und KEINE
-- personenbezogenen Daten gespeichert.

CREATE TABLE IF NOT EXISTS public.chat_usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id TEXT NOT NULL DEFAULT 'javera',
  model TEXT NOT NULL,
  input_tokens INTEGER NOT NULL DEFAULT 0,
  output_tokens INTEGER NOT NULL DEFAULT 0,
  cache_creation_input_tokens INTEGER NOT NULL DEFAULT 0,
  cache_read_input_tokens INTEGER NOT NULL DEFAULT 0,
  est_cost_usd NUMERIC(10,6) NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.chat_usage ENABLE ROW LEVEL SECURITY;

-- Nur der Service-Role-Key (serverseitig, aus der API-Route) darf schreiben
-- und lesen. Keine Policy für anon/authenticated: Auswertung erfolgt über das
-- Supabase-Dashboard bzw. mit dem Service-Role-Key, nie aus dem Browser.
DO $$ BEGIN
  CREATE POLICY "Service role can insert chat usage"
    ON public.chat_usage FOR INSERT
    WITH CHECK (auth.role() = 'service_role');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "Service role can read chat usage"
    ON public.chat_usage FOR SELECT
    USING (auth.role() = 'service_role');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE INDEX IF NOT EXISTS idx_chat_usage_created
  ON public.chat_usage(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_chat_usage_customer_created
  ON public.chat_usage(customer_id, created_at DESC);
