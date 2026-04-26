
DROP POLICY "Anyone can submit a demo request" ON public.demo_requests;

CREATE POLICY "Anyone can submit a valid demo request"
ON public.demo_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(name) BETWEEN 1 AND 120
  AND char_length(studio_name) BETWEEN 1 AND 120
  AND studio_type IN ('Nagelstudio','Kosmetikstudio','Friseur','Laser / Klinik','Sonstiges')
  AND has_website IN ('Ja','Nein')
  AND content_status IN ('Ja, alles bereit','Teilweise','Nein, brauche Unterstützung')
  AND start_time IN ('Sofort','In den nächsten Wochen','Erstmal nur informieren')
  AND budget IN ('300–400€','500–800€')
  AND array_length(goals, 1) BETWEEN 1 AND 10
  AND array_length(styles, 1) BETWEEN 1 AND 10
  AND (notes IS NULL OR char_length(notes) <= 2000)
);
