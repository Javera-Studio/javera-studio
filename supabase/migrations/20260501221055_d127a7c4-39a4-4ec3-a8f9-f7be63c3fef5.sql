SET LOCAL role TO anon;
INSERT INTO public.contact_messages (name, email, message) VALUES ('Test', 'test@example.com', 'Hallo Test.');
RESET role;