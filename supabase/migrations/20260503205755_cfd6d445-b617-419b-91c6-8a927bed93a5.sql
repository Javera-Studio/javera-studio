ALTER TABLE public.demo_requests
ADD COLUMN IF NOT EXISTS email text;

DROP POLICY IF EXISTS "Anyone can submit demo request" ON public.demo_requests;

CREATE POLICY "Anyone can submit demo request"
ON public.demo_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(name) >= 1
  AND char_length(name) <= 120
  AND char_length(email) >= 3
  AND char_length(email) <= 255
  AND email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
  AND char_length(studio_name) >= 1
  AND char_length(studio_name) <= 120
  AND studio_type = ANY (ARRAY['Nagelstudio', 'Kosmetikstudio', 'Friseur', 'Laser / Klinik', 'Sonstiges'])
  AND has_website = ANY (ARRAY['Ja', 'Nein'])
  AND content_status = ANY (ARRAY['Ja, alles bereit', 'Teilweise', 'Nein, brauche Unterstützung'])
  AND start_time = ANY (ARRAY['Sofort', 'In den nächsten Wochen', 'Erstmal nur informieren'])
  AND budget = ANY (ARRAY['Starter Website – ab 400€', 'Premium Website – ab 700€', 'Kostenlose Website (falls noch Plätze vorhanden)'])
  AND array_length(goals, 1) >= 1
  AND array_length(goals, 1) <= 10
  AND array_length(styles, 1) >= 1
  AND array_length(styles, 1) <= 10
  AND (notes IS NULL OR char_length(notes) <= 2000)
);