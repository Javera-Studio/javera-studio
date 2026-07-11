"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

export function MtechLaserForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const studio = String(data.get("studio") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const website = String(data.get("website") || "").trim();
    const instagram = String(data.get("instagram") || "").trim();
    const googleProfile = String(data.get("googleProfile") || "").trim();
    const message = String(data.get("message") || "").trim();
    const mtechProduct = String(data.get("mtechProduct") || "").trim();
    const privacy = data.get("privacy") === "on";
    const hp_company = String(data.get("hp_company") || "");

    if (!name || !studio || !email || !phone || !message) {
      toast.error("Bitte fülle alle Pflichtfelder aus.");
      return;
    }
    if (!privacy) {
      toast.error("Bitte stimme der Datenschutzerklärung zu.");
      return;
    }
    if (name.length > 120 || studio.length > 120 || email.length > 255 || phone.length > 60 || message.length > 5000 || mtechProduct.length > 255) {
      toast.error("Eingaben sind zu lang.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/mtech-laser-analyse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, studio, email, phone, website, instagram, googleProfile, message, mtechProduct, hp_company }),
      });
      const result = (await response.json()) as { success?: boolean; error?: string };
      if (!response.ok) {
        toast.error(result.error ?? "Fehler beim Senden. Bitte versuche es erneut.");
        return;
      }
      setDone(true);
      toast.success("Danke für Ihre Anfrage – ich melde mich in Kürze.");
      form.reset();
    } catch (err) {
      toast.error(`Netzwerkfehler: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="reveal p-10 md:p-12 rounded-3xl bg-background border border-border/60 text-center">
        <div className="w-14 h-14 mx-auto rounded-full grid place-content-center mb-6" style={{ backgroundColor: "var(--peach-soft)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-ink">
            <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-ink">Vielen Dank für Ihre Anfrage!</h3>
        <p className="mt-3 text-muted-foreground">Ich melde mich in Kürze persönlich bei Ihnen, um Ihre kostenlose Online-Präsenz-Analyse zu starten.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="reveal space-y-5 p-8 md:p-10 rounded-3xl bg-background border border-border/60">
      <input
        type="text"
        name="hp_company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
      />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="mt-name" className="block text-sm text-ink mb-2">Name *</label>
          <input id="mt-name" name="name" type="text" required maxLength={120} autoComplete="name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div>
          <label htmlFor="mt-studio" className="block text-sm text-ink mb-2">Studio *</label>
          <input id="mt-studio" name="studio" type="text" required maxLength={120} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="mt-email" className="block text-sm text-ink mb-2">E-Mail *</label>
          <input id="mt-email" name="email" type="email" required maxLength={255} autoComplete="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div>
          <label htmlFor="mt-phone" className="block text-sm text-ink mb-2">Telefonnummer *</label>
          <input id="mt-phone" name="phone" type="tel" required maxLength={60} autoComplete="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="mt-website" className="block text-sm text-ink mb-2">Website <span className="text-muted-foreground/70">(optional)</span></label>
          <input id="mt-website" name="website" type="text" maxLength={255} placeholder="www.dein-studio.at" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div>
          <label htmlFor="mt-instagram" className="block text-sm text-ink mb-2">Instagram <span className="text-muted-foreground/70">(optional)</span></label>
          <input id="mt-instagram" name="instagram" type="text" maxLength={255} placeholder="@deinstudio" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div>
          <label htmlFor="mt-google" className="block text-sm text-ink mb-2">Google-Profil <span className="text-muted-foreground/70">(optional)</span></label>
          <input id="mt-google" name="googleProfile" type="text" maxLength={255} placeholder="Link zum Google-Profil" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
      </div>
      <div>
        <label htmlFor="mt-message" className="block text-sm text-ink mb-2">Nachricht *</label>
        <textarea id="mt-message" name="message" required rows={5} maxLength={5000} placeholder="Erzählen Sie mir kurz von Ihrem Studio und Ihrem aktuellen Online-Auftritt." className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <div className="bg-peach-soft/60 border border-mauve/20 rounded-xl px-4 py-3">
        <label htmlFor="mt-mtech-product" className="block text-sm text-ink mb-2">
          Ich habe bei MTech Laser folgendes Produkt/Leistung erworben <span className="text-muted-foreground/70">(optional)</span>
        </label>
        <input id="mt-mtech-product" name="mtechProduct" type="text" maxLength={255} placeholder="z. B. Diodenlaser, Schulung, …" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>
      <div className="flex items-start gap-3">
        <input id="mt-privacy" name="privacy" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 rounded border border-border accent-mauve cursor-pointer" />
        <label htmlFor="mt-privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
          Ich habe die{" "}
          <Link href="/datenschutz" className="underline hover:text-ink transition-colors">Datenschutzerklärung</Link>
          {" "}gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.
        </label>
      </div>
      <button type="submit" disabled={submitting} className="w-full px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium disabled:opacity-60 disabled:cursor-not-allowed">
        {submitting ? "Wird gesendet…" : "Kostenlose Analyse anfragen"}
      </button>
      <p className="text-xs text-center text-muted-foreground">Ihre Anfrage wird direkt und vertraulich an JAVERA Studio übermittelt.</p>
    </form>
  );
}
