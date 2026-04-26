
CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  studio_name TEXT NOT NULL,
  studio_type TEXT NOT NULL,
  has_website TEXT NOT NULL,
  goals TEXT[] NOT NULL,
  styles TEXT[] NOT NULL,
  content_status TEXT NOT NULL,
  start_time TEXT NOT NULL,
  budget TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to submit a request
CREATE POLICY "Anyone can submit a demo request"
ON public.demo_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No SELECT policy: nobody can read via the public API; only service role (admin) can read.
