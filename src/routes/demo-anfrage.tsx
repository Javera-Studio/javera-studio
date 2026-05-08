import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import logo from "@/assets/javera-logo.png";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/demo-anfrage")({
  head: () => ({
    meta: [
      { title: "Kostenlose Analyse & Demo anfragen – Javera Studio" },
      {
        name: "description",
        content:
          "Sichere dir eine kostenlose Analyse & Demo für dein Beauty Studio. Kurzes Formular ausfüllen – Antwort innerhalb von 24 Stunden.",
      },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: DemoAnfrage,
});

const STUDIO_TYPES = ["Nagelstudio", "Kosmetikstudio", "Friseur", "Laser / Klinik", "Sonstiges"] as const;
const HAS_WEBSITE = ["Ja", "Nein"] as const;
const GOALS = [
  "Mehr Kundinnen gewinnen",
  "Mehr Terminbuchungen",
  "Professioneller auftreten",
  "Besser bei Google gefunden werden",
] as const;
const STYLES = [
  "Modern & clean",
  "Elegant & luxuriös",
  "Feminin & weich",
  "Minimalistisch & schlicht",
] as const;
const CONTENT = ["Ja, alles bereit", "Teilweise", "Nein, brauche Unterstützung"] as const;
const START = ["Sofort", "In den nächsten Wochen", "Erstmal nur informieren"] as const;
const PACKAGES = [
  { value: "Starter Website – ab 350€", title: "Starter Website", price: "ab 350€" },
  { value: "Premium Website – ab 600€", title: "Premium Website", price: "ab 600€" },
  { value: "Noch unsicher – bitte beraten", title: "Noch unsicher", price: "bitte beraten" },
] as const;
const PACKAGE_VALUES = PACKAGES.map((p) => p.value) as [string, ...string[]];

const schema = z.object({
  name: z.string().trim().min(1, "Bitte gib deinen Namen an").max(120),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse an").max(255),
  studio_name: z.string().trim().min(1, "Bitte gib den Namen deines Studios an").max(120),
  studio_type: z.enum(STUDIO_TYPES, { message: "Bitte wähle die Art deines Studios" }),
  has_website: z.enum(HAS_WEBSITE, { message: "Bitte wähle eine Option" }),
  goals: z.array(z.enum(GOALS)).min(1, "Bitte wähle mindestens ein Ziel"),
  styles: z.array(z.enum(STYLES)).min(1, "Bitte wähle mindestens einen Stil"),
  content_status: z.enum(CONTENT, { message: "Bitte wähle eine Option" }),
  start_time: z.enum(START, { message: "Bitte wähle einen Zeitraum" }),
  budget: z.enum(PACKAGE_VALUES, { message: "Bitte wähle ein Paket" }),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
});

type FormState = {
  name: string;
  email: string;
  studio_name: string;
  studio_type: string;
  has_website: string;
  goals: string[];
  styles: string[];
  content_status: string;
  start_time: string;
  budget: string;
  notes: string;
};

const initial: FormState = {
  name: "",
  email: "",
  studio_name: "",
  studio_type: "",
  has_website: "",
  goals: [],
  styles: [],
  content_status: "",
  start_time: "",
  budget: "",
  notes: "",
};

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center group" aria-label="Javera Studio – zur Startseite">
          <img
            src={logo}
            alt="Javera Studio"
            className="h-9 md:h-10 w-auto transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-80"
          />
        </Link>
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-ink transition"
        >
          ← Zurück
        </Link>
      </div>
    </header>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-muted-foreground ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function DemoAnfrage() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const { [key]: _omit, ...rest } = e;
      return rest;
    });
  };

  const toggleArr = (key: "goals" | "styles", value: string) => {
    setForm((f) => {
      const has = f[key].includes(value);
      return { ...f, [key]: has ? f[key].filter((v) => v !== value) : [...f[key], value] };
    });
    setErrors((e) => {
      if (!e[key]) return e;
      const { [key]: _omit, ...rest } = e;
      return rest;
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const parsed = schema.safeParse({
      ...form,
      notes: form.notes.trim() || undefined,
    });
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0];
        if (typeof k === "string" && !fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    const response = await fetch("/api/public/demo-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: parsed.data.name,
        email: parsed.data.email,
        studio_name: parsed.data.studio_name,
        studio_type: parsed.data.studio_type,
        has_website: parsed.data.has_website,
        goals: parsed.data.goals,
        styles: parsed.data.styles,
        content_status: parsed.data.content_status,
        start_time: parsed.data.start_time,
        budget: parsed.data.budget,
        notes: parsed.data.notes ?? null,
      }),
    });
    setSubmitting(false);
    if (!response.ok) {
      setServerError("Etwas ist schiefgelaufen. Bitte versuch es gleich nochmal.");
      return;
    }
    setDone(true);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-background text-ink min-h-screen">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-50 blur-3xl"
          style={{ backgroundColor: "var(--mint-soft)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-50 blur-3xl"
          style={{ backgroundColor: "var(--peach-soft)" }}
        />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="w-8 h-px bg-muted-foreground/50" />
            Demo Anfrage
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
            Kostenlose Analyse & Demo
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Ich nehme aktuell 3 neue Studios auf — füll das kurze Formular aus und ich erstelle dir eine kostenlose Demo, die genau zu deinem Studio passt.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="max-w-2xl mx-auto px-6">
          {done ? (
            <div className="rounded-3xl border border-border/60 bg-cream p-10 md:p-14 text-center">
              <div
                className="w-14 h-14 mx-auto rounded-full grid place-content-center mb-6"
                style={{ backgroundColor: "var(--mint-soft)" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-7 h-7 text-ink"
                >
                  <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink">Vielen Dank!</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Deine Anfrage ist angekommen. Ich melde mich innerhalb von 24 Stunden bei dir
                zurück.
              </p>
              <Link
                to="/"
                className="inline-block mt-8 px-7 py-3.5 rounded-full bg-ink text-primary-foreground hover:opacity-90 transition font-medium"
              >
                Zurück zur Startseite
              </Link>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border/60 bg-background p-8 md:p-12 space-y-10"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name" required error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    maxLength={120}
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ink/20 transition"
                    placeholder="Dein Name"
                  />
                </Field>
                <Field label="E-Mail" required error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    maxLength={255}
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ink/20 transition"
                    placeholder="deine@email.de"
                  />
                </Field>
              </div>

              <Field label="Studio Name" required error={errors.studio_name}>
                <input
                  type="text"
                  value={form.studio_name}
                  onChange={(e) => update("studio_name", e.target.value)}
                  maxLength={120}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ink/20 transition"
                  placeholder="Name deines Studios"
                />
              </Field>

              <Field label="Art deines Studios" required error={errors.studio_type}>
                <select
                  value={form.studio_type}
                  onChange={(e) => update("studio_type", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ink/20 transition"
                >
                  <option value="">Bitte auswählen</option>
                  {STUDIO_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Hast du aktuell eine Website?" required error={errors.has_website}>
                <div className="flex flex-wrap gap-3">
                  {HAS_WEBSITE.map((opt) => {
                    const active = form.has_website === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => update("has_website", opt)}
                        className={`px-5 py-2.5 rounded-full border transition text-sm ${
                          active
                            ? "bg-ink text-primary-foreground border-ink"
                            : "border-border text-ink hover:border-ink/50"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Was ist dein Ziel mit der Website?" required error={errors.goals}>
                <div className="flex flex-wrap gap-2.5">
                  {GOALS.map((g) => {
                    const active = form.goals.includes(g);
                    return (
                      <button
                        type="button"
                        key={g}
                        onClick={() => toggleArr("goals", g)}
                        className={`px-4 py-2 rounded-full border transition text-sm ${
                          active
                            ? "bg-ink text-primary-foreground border-ink"
                            : "border-border text-ink hover:border-ink/50"
                        }`}
                      >
                        {g}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-muted-foreground">Mehrfachauswahl möglich</p>
              </Field>

              <Field label="Welcher Stil passt am besten zu deinem Studio?" required error={errors.styles}>
                <div className="flex flex-wrap gap-2.5">
                  {STYLES.map((s) => {
                    const active = form.styles.includes(s);
                    return (
                      <button
                        type="button"
                        key={s}
                        onClick={() => toggleArr("styles", s)}
                        className={`px-4 py-2 rounded-full border transition text-sm ${
                          active
                            ? "bg-ink text-primary-foreground border-ink"
                            : "border-border text-ink hover:border-ink/50"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-muted-foreground">Mehrfachauswahl möglich</p>
              </Field>

              <Field label="Hast du bereits Bilder / Inhalte?" required error={errors.content_status}>
                <div className="flex flex-col gap-2.5">
                  {CONTENT.map((opt) => {
                    const active = form.content_status === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => update("content_status", opt)}
                        className={`px-4 py-3 rounded-xl border text-left transition text-sm ${
                          active
                            ? "bg-ink text-primary-foreground border-ink"
                            : "border-border text-ink hover:border-ink/50"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Wann möchtest du starten?" required error={errors.start_time}>
                <select
                  value={form.start_time}
                  onChange={(e) => update("start_time", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ink/20 transition"
                >
                  <option value="">Bitte auswählen</option>
                  {START.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Ich interessiere mich für:" required error={errors.budget}>
                <div className="grid sm:grid-cols-2 gap-3">
                  {PACKAGES.map((pkg) => {
                    const active = form.budget === pkg.value;
                    return (
                      <button
                        type="button"
                        key={pkg.value}
                        onClick={() => update("budget", pkg.value)}
                        aria-pressed={active}
                        className={`relative text-left px-5 py-4 rounded-2xl border transition ${
                          active
                            ? "bg-ink text-primary-foreground border-ink shadow-md"
                            : "border-border bg-background text-ink hover:border-ink/50"
                        }`}
                      >
                        <span
                          className={`absolute top-4 right-4 w-4 h-4 rounded-full border-2 transition ${
                            active
                              ? "bg-primary-foreground border-primary-foreground"
                              : "border-border"
                          }`}
                          aria-hidden
                        />
                        <div className="font-medium pr-6">{pkg.title}</div>
                        <div
                          className={`text-sm mt-1 ${
                            active ? "text-primary-foreground/80" : "text-muted-foreground"
                          }`}
                        >
                          {pkg.price}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Zusätzliche Infos" error={errors.notes}>
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  maxLength={2000}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ink/20 transition resize-y"
                  placeholder="Erzähl mir kurz mehr über dein Studio oder deine Wünsche."
                />
              </Field>

              {serverError && (
                <p className="text-sm text-destructive text-center">{serverError}</p>
              )}

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-8 py-4 rounded-full bg-ink text-primary-foreground hover:opacity-90 transition font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Wird gesendet…" : "Kostenlose Analyse & Demo"}
                </button>
                <p className="mt-4 text-sm text-muted-foreground">
                  Ich melde mich innerhalb von 24 Stunden bei dir zurück.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
