-- Automatische Lead-Priorisierung fuer /beauty-qualitaetscheck wurde entfernt
-- (Leads werden vorerst manuell anhand der vollstaendigen Antworten bewertet).
-- Die Spalte "priority" bleibt bestehen (kein Datenverlust, kein Risiko durch
-- Spalten-Loeschung), wird aber serverseitig nicht mehr befuellt. Dafuer darf
-- sie nicht mehr NOT NULL sein, sonst schlaegt jeder Insert fehl.

ALTER TABLE public.beauty_quality_check_leads ALTER COLUMN priority DROP NOT NULL;
