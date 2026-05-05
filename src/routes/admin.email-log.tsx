import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

interface LogEntry {
  id: string;
  message_id: string | null;
  template_name: string;
  recipient_email: string;
  status: string;
  error_message: string | null;
  created_at: string;
  metadata: any;
}

interface LogResponse {
  summary: { total: number; sent: number; pending: number; failed: number; dlq: number; other: number };
  entries: LogEntry[];
}

export const Route = createFileRoute("/admin/email-log")({
  head: () => ({
    meta: [
      { title: "Admin – E-Mail-Versandprotokoll" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminEmailLog,
});

function statusColor(status: string) {
  switch (status) {
    case "sent": return "bg-green-100 text-green-800 border-green-200";
    case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "failed": return "bg-orange-100 text-orange-800 border-orange-200";
    case "dlq": return "bg-red-100 text-red-800 border-red-200";
    default: return "bg-muted text-foreground border-border";
  }
}

function templateLabel(t: string) {
  if (t === "contact-form-notification") return "Kontaktformular";
  if (t === "demo-request-notification") return "Anfrage Website";
  return t;
}

function AdminEmailLog() {
  const [password, setPassword] = useState("");
  const [data, setData] = useState<LogResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const load = async (pw?: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/public/admin-email-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw ?? password }),
      });
      if (!res.ok) {
        if (res.status === 401) throw new Error("Falsches Passwort");
        throw new Error(`Fehler ${res.status}`);
      }
      const json = (await res.json()) as LogResponse;
      setData(json);
    } catch (e: any) {
      setError(e.message ?? "Fehler beim Laden");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <form
          onSubmit={(e) => { e.preventDefault(); load(); }}
          className="bg-card border border-border rounded-lg p-6 w-full max-w-sm space-y-4"
        >
          <h1 className="text-xl font-semibold">Admin-Login</h1>
          <p className="text-sm text-muted-foreground">E-Mail-Versandprotokoll – bitte Passwort eingeben.</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin-Passwort"
            className="w-full border border-input bg-background rounded px-3 py-2 text-sm"
            autoFocus
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-primary text-primary-foreground rounded px-3 py-2 text-sm font-medium disabled:opacity-50"
          >
            {loading ? "Lade…" : "Anmelden"}
          </button>
        </form>
      </div>
    );
  }

  const entries = filter === "all" ? data.entries : data.entries.filter((e) => e.status === filter);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold">E-Mail-Versandprotokoll</h1>
            <p className="text-sm text-muted-foreground">Kontakt- und Website-Anfragen (letzte 500)</p>
          </div>
          <button
            onClick={() => load()}
            disabled={loading}
            className="bg-secondary text-secondary-foreground rounded px-3 py-2 text-sm disabled:opacity-50"
          >
            {loading ? "Lade…" : "Aktualisieren"}
          </button>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { key: "all", label: "Gesamt", value: data.summary.total },
            { key: "sent", label: "Zugestellt", value: data.summary.sent },
            { key: "pending", label: "In Warteschlange", value: data.summary.pending },
            { key: "failed", label: "Fehlgeschlagen", value: data.summary.failed },
            { key: "dlq", label: "Endgültig fehlgeschlagen", value: data.summary.dlq },
          ].map((s) => (
            <button
              key={s.key}
              onClick={() => setFilter(s.key)}
              className={`text-left border rounded-lg p-3 transition ${filter === s.key ? "border-primary bg-primary/5" : "border-border bg-card"}`}
            >
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className="text-2xl font-semibold mt-1">{s.value}</div>
            </button>
          ))}
        </div>

        <div className="border border-border rounded-lg overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left">
                  <th className="px-3 py-2 font-medium">Zeit</th>
                  <th className="px-3 py-2 font-medium">Typ</th>
                  <th className="px-3 py-2 font-medium">Empfänger</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                  <th className="px-3 py-2 font-medium">Versuche</th>
                  <th className="px-3 py-2 font-medium">Fehler</th>
                </tr>
              </thead>
              <tbody>
                {entries.length === 0 && (
                  <tr><td colSpan={6} className="px-3 py-8 text-center text-muted-foreground">Keine Einträge</td></tr>
                )}
                {entries.map((e) => {
                  const attempts = e.metadata?.attempts ?? e.metadata?.read_ct ?? e.metadata?.retry_count;
                  return (
                    <tr key={e.id} className="border-t border-border align-top">
                      <td className="px-3 py-2 whitespace-nowrap text-muted-foreground">
                        {new Date(e.created_at).toLocaleString("de-DE")}
                      </td>
                      <td className="px-3 py-2">{templateLabel(e.template_name)}</td>
                      <td className="px-3 py-2 break-all">{e.recipient_email}</td>
                      <td className="px-3 py-2">
                        <span className={`inline-block border rounded px-2 py-0.5 text-xs ${statusColor(e.status)}`}>
                          {e.status}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-center">{attempts ?? "—"}</td>
                      <td className="px-3 py-2 text-destructive max-w-md break-words">
                        {e.error_message ?? ""}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
