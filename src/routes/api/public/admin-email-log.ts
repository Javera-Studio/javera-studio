import { createFileRoute } from "@tanstack/react-router";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const Route = createFileRoute("/api/public/admin-email-log")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { password } = await request.json().catch(() => ({ password: "" }));
        const expected = process.env.ADMIN_PASSWORD;
        if (!expected || password !== expected) {
          return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
          });
        }

        const { data, error } = await supabaseAdmin
          .from("email_send_log")
          .select("*")
          .in("template_name", ["contact-form-notification", "demo-request-notification"])
          .order("created_at", { ascending: false })
          .limit(500);

        if (error) {
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Deduplicate by message_id (latest status per email)
        const seen = new Set<string>();
        const latest: any[] = [];
        for (const row of data ?? []) {
          const key = row.message_id ?? row.id;
          if (seen.has(key)) continue;
          seen.add(key);
          latest.push(row);
        }

        // Compute summary
        const summary = { total: latest.length, sent: 0, pending: 0, failed: 0, dlq: 0, other: 0 };
        for (const r of latest) {
          if (r.status === "sent") summary.sent++;
          else if (r.status === "pending") summary.pending++;
          else if (r.status === "failed") summary.failed++;
          else if (r.status === "dlq") summary.dlq++;
          else summary.other++;
        }

        return Response.json({ summary, entries: latest });
      },
    },
  },
});
