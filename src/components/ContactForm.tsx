"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { FormFieldError } from "@/components/FormFieldError";

type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message" | "privacy", string>>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

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
    const hp_company = String(data.get("hp_company") || "");

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Bitte gib deinen Namen an.";
    if (!email) nextErrors.email = "Bitte gib deine E-Mail-Adresse an.";
    if (!subject) nextErrors.subject = "Bitte gib einen Betreff an.";
    if (!message) nextErrors.message = "Bitte schreib eine Nachricht.";
    if (!privacy) nextErrors.privacy = "Bitte stimme der Datenschutzerklärung zu.";
    if (name.length > 120 || email.length > 255 || subject.length > 200 || message.length > 5000) {
      nextErrors.message = "Eingaben sind zu lang.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormError("Bitte überprüfe die markierten Felder.");
      return;
    }
    setFormError(null);

    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, hp_company }),
      });
      const result = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok) {
        setFormError(result.error ?? "Fehler beim Senden. Bitte versuche es erneut.");
        toast.error(result.error ?? "Fehler beim Senden. Bitte versuche es erneut.");
        return;
      }
      setDone(true);
      toast.success("Danke für deine Anfrage – ich melde mich in Kürze.");
      form.reset();
    } catch (err) {
      const message = `Netzwerkfehler: ${err instanceof Error ? err.message : String(err)}`;
      setFormError(message);
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="schreib-mir" className="py-12 md:py-16 bg-cream">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">Kontakt</div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight text-center">Schreib mir</h2>
        <p className="reveal reveal-delay mt-4 text-center text-muted-foreground text-lg">
          Eine kurze Nachricht reicht – ich melde mich persönlich bei dir.
        </p>

        {done ? (
          <div className="reveal mt-12 p-10 md:p-12 rounded-3xl bg-background border border-border/60 text-center">
            <div className="w-14 h-14 mx-auto rounded-full grid place-content-center mb-6" style={{ backgroundColor: "var(--mint-soft, #e6f4ee)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-ink">
                <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-ink">Danke für deine Anfrage!</h3>
            <p className="mt-3 text-muted-foreground">Ich melde mich in Kürze persönlich bei dir.</p>
            <button type="button" onClick={() => setDone(false)} className="mt-6 text-sm text-ink underline hover:opacity-70">
              Weitere Nachricht schreiben
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal mt-12 space-y-5 p-8 md:p-10 rounded-3xl bg-background border border-border/60">
            <input
              type="text"
              name="hp_company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
            />
            {formError && (
              <p role="alert" className="text-sm text-red-600">{formError}</p>
            )}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="sm-name" className="block text-sm text-ink mb-2">Name</label>
                <input id="sm-name" name="name" type="text" required maxLength={120} autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "sm-name-error" : undefined} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
                <FormFieldError id="sm-name-error" message={errors.name} />
              </div>
              <div>
                <label htmlFor="sm-email" className="block text-sm text-ink mb-2">E-Mail</label>
                <input id="sm-email" name="email" type="email" required maxLength={255} autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "sm-email-error" : undefined} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
                <FormFieldError id="sm-email-error" message={errors.email} />
              </div>
            </div>
            <div>
              <label htmlFor="sm-subject" className="block text-sm text-ink mb-2">Betreff</label>
              <input id="sm-subject" name="subject" type="text" required maxLength={200} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "sm-subject-error" : undefined} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
              <FormFieldError id="sm-subject-error" message={errors.subject} />
            </div>
            <div>
              <label htmlFor="sm-message" className="block text-sm text-ink mb-2">Nachricht</label>
              <textarea id="sm-message" name="message" required rows={5} maxLength={5000} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "sm-message-error" : undefined} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
              <FormFieldError id="sm-message-error" message={errors.message} />
            </div>
            <div>
              <div className="flex items-start gap-3">
                <input id="sm-privacy" name="privacy" type="checkbox" required aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "sm-privacy-error" : undefined} className="mt-1 h-4 w-4 shrink-0 rounded border border-border accent-mauve cursor-pointer" />
                <label htmlFor="sm-privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Ich habe die{" "}
                  <Link href="/datenschutz" className="underline hover:text-ink transition-colors">Datenschutzerklärung</Link>
                  {" "}gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.
                </label>
              </div>
              <FormFieldError id="sm-privacy-error" message={errors.privacy} />
            </div>
            <button type="submit" disabled={submitting} className="w-full px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium disabled:opacity-60 disabled:cursor-not-allowed">
              {submitting ? "Wird gesendet…" : "Nachricht senden"}
            </button>
            <p className="text-xs text-center text-muted-foreground">Deine Nachricht wird direkt an hallo@javera-studio.at übermittelt.</p>
          </form>
        )}
      </div>
    </section>
  );
}
