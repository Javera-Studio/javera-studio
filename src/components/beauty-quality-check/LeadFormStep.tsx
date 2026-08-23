"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { FormFieldError } from "@/components/FormFieldError";
import type { BeautyQualityCheckAnswers } from "@/types/beauty-quality-check";

type LeadFormStepProps = {
  answers: BeautyQualityCheckAnswers;
  prefillWebsite?: string;
  onBack: () => void;
  onSubmitted: () => void;
};

type FieldErrors = Partial<Record<"firstName" | "studioName" | "email" | "consent", string>>;

export function LeadFormStep({ answers, prefillWebsite, onBack, onSubmitted }: LeadFormStepProps) {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const studioName = String(data.get("studioName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const instagram = String(data.get("instagram") || "").trim();
    const website = String(data.get("website") || "").trim();
    const region = String(data.get("region") || "").trim();
    const consent = data.get("consent") === "on";
    const hp_field = String(data.get("hp_field") || "");

    const nextErrors: FieldErrors = {};
    if (!firstName) nextErrors.firstName = "Bitte gib deinen Vornamen an.";
    if (!studioName) nextErrors.studioName = "Bitte gib deinen Studio-Namen an.";
    if (!email) nextErrors.email = "Bitte gib deine E-Mail-Adresse an.";
    if (!consent) nextErrors.consent = "Bitte stimme der Übermittlung deiner Antworten zu.";
    if (firstName.length > 80 || studioName.length > 120 || instagram.length > 200 || website.length > 200 || region.length > 120) {
      nextErrors.email = nextErrors.email ?? "Eingaben sind zu lang.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFormError("Bitte überprüfe die markierten Felder.");
      return;
    }
    setFormError(null);

    setSubmitting(true);
    try {
      const response = await fetch("/api/beauty-quality-check-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          studioName,
          email,
          instagram,
          website,
          region,
          consent,
          answers,
          hp_field,
        }),
      });
      const result = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok) {
        setFormError(result.error ?? "Fehler beim Senden. Bitte versuche es erneut.");
        toast.error(result.error ?? "Fehler beim Senden. Bitte versuche es erneut.");
        return;
      }
      onSubmitted();
    } catch (err) {
      const message = `Netzwerkfehler: ${err instanceof Error ? err.message : String(err)}`;
      setFormError(message);
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto w-full">
      <h2 className="font-serif text-2xl sm:text-3xl text-ink text-center">Fast geschafft.</h2>
      <p className="mt-3 text-center text-muted-foreground leading-relaxed">
        Damit ich mir deinen Online-Auftritt persönlich ansehen und dir meine Einschätzung schicken kann, brauche ich
        noch ein paar Angaben.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5 p-8 rounded-3xl bg-background border border-border/70">
        {/* Honeypot gegen Bots: bewusst unauffälliger Name (kein "company"/"website"-Muster), damit Browser- und Passwortmanager-Autofill echte Nutzer:innen nicht fälschlich blockiert. */}
        <input
          type="text"
          name="hp_field"
          tabIndex={-1}
          autoComplete="new-password"
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
        />
        {formError && (
          <p role="alert" className="text-sm text-red-600">{formError}</p>
        )}
        <div>
          <label htmlFor="lead-firstName" className="block text-sm text-ink mb-2">Vorname</label>
          <input
            id="lead-firstName"
            name="firstName"
            type="text"
            required
            maxLength={80}
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "lead-firstName-error" : undefined}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <FormFieldError id="lead-firstName-error" message={errors.firstName} />
        </div>
        <div>
          <label htmlFor="lead-studioName" className="block text-sm text-ink mb-2">Studio-/Unternehmensname</label>
          <input
            id="lead-studioName"
            name="studioName"
            type="text"
            required
            maxLength={120}
            aria-invalid={Boolean(errors.studioName)}
            aria-describedby={errors.studioName ? "lead-studioName-error" : undefined}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <FormFieldError id="lead-studioName-error" message={errors.studioName} />
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
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "lead-email-error" : undefined}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <FormFieldError id="lead-email-error" message={errors.email} />
        </div>
        <div>
          <label htmlFor="lead-instagram" className="block text-sm text-ink mb-2">Instagram-Profil (optional)</label>
          <input
            id="lead-instagram"
            name="instagram"
            type="text"
            maxLength={200}
            placeholder="z. B. @deinstudio"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="lead-website" className="block text-sm text-ink mb-2">Website (optional)</label>
          <input
            id="lead-website"
            name="website"
            type="text"
            maxLength={200}
            defaultValue={prefillWebsite}
            placeholder="z. B. deinestudio.at"
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="lead-region" className="block text-sm text-ink mb-2">Ort / Region (optional)</label>
          <input
            id="lead-region"
            name="region"
            type="text"
            maxLength={120}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <div className="flex items-start gap-3">
            <input
              id="lead-consent"
              name="consent"
              type="checkbox"
              required
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "lead-consent-error" : undefined}
              className="mt-1 h-4 w-4 shrink-0 rounded border border-border accent-mauve cursor-pointer"
            />
            <label htmlFor="lead-consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              Ich stimme zu, dass meine Antworten aus dem Beauty-Qualitätscheck zusammen mit meinen Kontaktdaten an
              Javera Studio übermittelt und zur Erstellung meiner persönlichen Einschätzung verarbeitet werden.
            </label>
          </div>
          <FormFieldError id="lead-consent-error" message={errors.consent} />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Wird gesendet…" : "Meinen Beauty-Qualitätscheck absenden"}
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
        ← Zurück
      </button>
    </div>
  );
}
