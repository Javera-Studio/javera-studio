import type { FormEvent } from "react";
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import logo from "@/assets/javera-logo.png";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/demo-anfrage")({
  head: () => ({
    meta: [
      { title: "Anfrage senden – Javera Studio" },
      {
        name: "description",
        content:
          "Schick mir eine kurze Anfrage – ich melde mich persönlich bei dir.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: DemoAnfrage,
});

function DemoAnfrage() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    const privacy = data.get("privacy") === "on";

    if (!name || !email || !subject || !message) {
      toast.error("Bitte fülle alle Felder aus.");
      return;
    }
    if (!privacy) {
      toast.error("Bitte stimme der Datenschutzerklärung zu.");
      return;
    }
    if (name.length > 120 || email.length > 255 || subject.length > 200 || message.length > 5000) {
      toast.error("Eingaben sind zu lang.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "5c831a25-cd2b-4666-ae44-91194af7bc49",
          name,
          email,
          subject,
          message,
          datenschutz_zustimmung: "Ja – Datenschutzerklärung gelesen und akzeptiert",
        }),
      });
      const result = (await response.json()) as { success: boolean; message?: string };
      if (!result.success) {
        toast.error(`Fehler: ${result.message ?? "Unbekannter Fehler"}`);
        return;
      }
      setDone(true);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      toast.error(`Netzwerkfehler: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-background text-ink min-h-screen flex flex-col">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center group" aria-label="Javera Studio – zur Startseite">
            <img src={logo} alt="Javera Studio" className="h-9 md:h-10 w-auto transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-80" />
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-ink transition">← Zurück</Link>
        </div>
      </header>

      <section className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">Kontakt</div>
          <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight text-center">Schreib mir</h1>
          <p className="mt-4 text-center text-muted-foreground text-lg">
            Eine kurze Nachricht reicht – ich melde mich persönlich bei dir.
          </p>

          {done ? (
            <div className="mt-12 p-10 md:p-12 rounded-3xl bg-background border border-border/60 text-center">
              <div className="w-14 h-14 mx-auto rounded-full grid place-content-center mb-6" style={{ backgroundColor: "var(--mint-soft)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-ink">
                  <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-ink">Danke für deine Anfrage!</h2>
              <p className="mt-3 text-muted-foreground">Ich melde mich in Kürze persönlich bei dir.</p>
              <Link to="/" className="inline-block mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium">
                Zurück zur Startseite
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-5 p-8 md:p-10 rounded-3xl bg-background border border-border/60">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="da-name" className="block text-sm text-ink mb-2">Name</label>
                  <input
                    id="da-name"
                    name="name"
                    type="text"
                    required
                    maxLength={120}
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="da-email" className="block text-sm text-ink mb-2">E-Mail</label>
                  <input
                    id="da-email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="da-subject" className="block text-sm text-ink mb-2">Betreff</label>
                <input
                  id="da-subject"
                  name="subject"
                  type="text"
                  required
                  maxLength={200}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="da-message" className="block text-sm text-ink mb-2">Nachricht</label>
                <textarea
                  id="da-message"
                  name="message"
                  required
                  rows={5}
                  maxLength={5000}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  id="da-privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border border-border accent-mauve cursor-pointer"
                />
                <label htmlFor="da-privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Ich habe die{" "}
                  <Link to="/datenschutz" className="underline hover:text-ink transition-colors">
                    Datenschutzerklärung
                  </Link>{" "}
                  gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.
                </label>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Wird gesendet…" : "Nachricht senden"}
              </button>
              <p className="text-xs text-center text-muted-foreground">
                Deine Nachricht wird direkt an hallo@javera-studio.at übermittelt.
              </p>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
