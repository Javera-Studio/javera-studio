import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Server-only Supabase-Client mit Service-Role-Key.
 *
 * Diese Datei darf ausschließlich aus Route Handlers / Server-Code
 * importiert werden (nie aus einer "use client"-Datei) – sonst würde der
 * Service-Role-Key ins Browser-Bundle gelangen. Route Handlers (route.ts)
 * werden von Next.js nie ins Client-Bundle aufgenommen, daher ist der
 * Import in api/studio-check-event/route.ts sicher.
 */
export function getSupabaseAdminClient(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  if (!client) {
    client = createClient(url, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }

  return client;
}
