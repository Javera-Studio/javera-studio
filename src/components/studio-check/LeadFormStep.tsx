"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ctaConfig } from "@/lib/data/studio-check";
import type { Goal, Segment } from "@/types/studio-check";

type LeadFormStepProps = {
  segment: Segment;
  goal: Goal;
  answers: Record<string, string>;
  onBack: () => void;
};

export function LeadFormStep({ segment, goal, answers, onBack }: LeadFormStepProps) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const cta = ctaConfig[segment];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent") === "on";
    const hp_company = String(data.get("hp_company") || "");

    if (!firstName || !email) { toast.error("Bitte fülle Vorname und E-Mail aus."); return; }
    if (!consent) { toast.error("Bitte stimme der Übermittlung deiner Antworten zu."); return; }
    if (firstName.length > 80 || email.length > 255 || contact.length > 200 || message.length > 2000) {
      toast.error("Eingaben sind zu lang.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/studio-check-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, contact, message, consent, segment, goal, answers, hp_company }),
      });
      const result = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok) { toast.error(result.error ?? "Fehler beim Senden. Bitte versuche es erneut."); return; }
      setDone(true);
      toast.success("Danke – dein persönlicher Kurzcheck ist auf dem Weg.");
    } catch (err) {
      toast.error(`Netzwerkfehler: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="max-w-xl mx-auto w-full text-center">
        <div className="w-14 h-14 mx-auto rounded-full grid place-content-center mb-6 bg-peach-soft">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-ink">
            <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-ink">Danke für deine Anfrage!</h2>
        <p className="mt-3 text-muted-foreground">
          Du erhältst deinen persönlichen Kurzcheck in Kürze per E-Mail von Javera Studio.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="mt-8 text-sm text-muted-foreground hover:text-ink transition-colors underline-offset-4 hover:underline"
        >
          ← Zurück zum Ergebnis
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto w-full">
      <h2 className="font-serif text-2xl sm:text-3xl text-ink text-center">{cta.question}</h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5 p-8 rounded-3xl bg-background border border-border/70">
        <input
          type="text"
          name="hp_company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
        />
        <div>
          <label htmlFor="lead-firstName" className="block text-sm text-ink mb-2">Vorname</label>
          <input
            id="lead-firstName"
            name="firstName"
            type="text"
            required
            maxLength={80}
            autoComplete="given-name"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="lead-email" className="block text-sm text-ink mb-2">E-Mail</label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            maxLength={255}
            autoComplete="email"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="lead-contact" className="block text-sm text-ink mb-2">Website oder Instagram-Profil (optional)</label>
          <input
            id="lead-contact"
            name="contact"
            type="text"
            maxLength={200}
            placeholder="z. B. deinestudio.at oder @deinstudio"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="lead-message" className="block text-sm text-ink mb-2">Nachricht (optional)</label>
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            maxLength={2000}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex items-start gap-3">
          <input
            id="lead-consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 shrink-0 rounded border border-border accent-mauve cursor-pointer"
          />
          <label htmlFor="lead-consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
            Ich stimme zu, dass meine Antworten aus dem Studio-Check zusammen mit meinen Kontaktdaten an
            Javera Studio übermittelt und zur Erstellung meines persönlichen Kurzchecks verarbeitet werden.
          </label>
        </div>
        <p className="text-xs text-muted-foreground">
          Für den persönlichen Kurzcheck ist die Angabe deiner E-Mail-Adresse erforderlich.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="w-full px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Wird gesendet…" : cta.buttonLabel}
        </button>
        <p className="text-xs text-center text-muted-foreground">
          Mehr dazu in der{" "}
          <Link href="/datenschutz" className="underline hover:text-ink transition-colors">Datenschutzerklärung</Link>.
        </p>
      </form>

      <button
        type="button"
        onClick={onBack}
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
      >
        ← Zurück zum Ergebnis
      </button>
    </div>
  );
}
