import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/javera-logo.png";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise – Javera Studio · Webdesign · Grafik · Branding Wien" },
      {
        name: "description",
        content:
          "Transparente Preise für Website, Logo, Grafik & Social Media Design. Alle Leistungen einzeln buchbar – für Beauty Studios in Wien.",
      },
    ],
  }),
  component: PreisePage,
});

type FeatureItem = { included: boolean; title: string; desc?: string };

function FeatureRow({ included, title, desc }: FeatureItem) {
  return (
    <div className={`flex gap-2.5 mb-2.5 text-sm ${included ? "" : "opacity-40"}`}>
      <span
        className="shrink-0 leading-tight text-base"
        style={{ color: included ? "#0F6E56" : undefined }}
      >
        {included ? "✓" : "✕"}
      </span>
      <div>
        <strong className="text-ink">{title}</strong>
        {desc && (
          <>
            <br />
            <span className="text-muted-foreground">{desc}</span>
          </>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold text-muted-foreground/70 uppercase tracking-[0.06em] mt-8 mb-4">
      {children}
    </p>
  );
}

function PreisePage() {
  const starterDesignContent: FeatureItem[] = [
    { included: true, title: "Individuelles Design", desc: "Farben, Stil & Aufbau passend zu deinem Studio" },
    { included: true, title: "Professionelle Texte", desc: "Struktur und Inhalte werden gemeinsam erarbeitet" },
    { included: true, title: "Bildergalerie", desc: "Bis zu 9 Fotos sauber integriert" },
    { included: true, title: "Mobil optimiert", desc: "Perfekt auf Smartphone, Tablet & Desktop" },
  ];

  const starterBooking: FeatureItem[] = [
    { included: true, title: "Buchungslink integriert", desc: "Verlinkung zu Instagram, WhatsApp oder Buchungstool" },
    { included: true, title: "SEO-Basisoptimierung", desc: "Bessere Auffindbarkeit bei Google" },
  ];

  const starterSupport: FeatureItem[] = [
    { included: true, title: "2 Überarbeitungsrunden", desc: "Feinanpassungen nach deinem Feedback" },
    { included: true, title: "14 Tage Nachbetreuung", desc: "Persönliche Unterstützung nach dem Launch" },
  ];

  const premiumDesignContent: FeatureItem[] = [
    { included: true, title: "Premium Branding & Design", desc: "Individuelle Markenwirkung mit hochwertiger Ästhetik" },
    { included: true, title: "Fertige Texte inklusive", desc: "Komplette Texte auf Basis eines kurzen Briefings" },
    { included: true, title: "Erweiterte Galerie", desc: "Unbegrenzte Fotos, professionell integriert" },
    { included: true, title: "Mobil optimiert", desc: "Perfekt abgestimmt auf alle Geräte & Bildschirmgrößen" },
  ];

  const premiumOptionen: FeatureItem[] = [
    { included: true, title: "Instagram Feed eingebunden", desc: "Deine Posts live direkt auf der Website" },
    { included: true, title: "Buchungs-Widget", desc: "Termine direkt auf der Website buchen" },
    { included: true, title: "Scroll-Animationen", desc: "Sanfte Premium-Animationen beim Scrollen" },
    { included: true, title: "Blog & CMS", desc: "Inhalte später selbst bearbeitbar" },
  ];

  const premiumSupport: FeatureItem[] = [
    { included: true, title: "Unbegrenzte Überarbeitungen", desc: "Gemeinsam bis alles perfekt passt" },
    { included: true, title: "30 Tage Premium-Support", desc: "Persönliche Betreuung nach Veröffentlichung" },
  ];

  const grafikItems = [
    { title: "Flyer einseitig", desc: "A5 oder A6 · inkl. 2 Korrekturschleifen", price: "100 €" },
    { title: "Flyer zweiseitig", desc: "A5 oder A6 · inkl. 2 Korrekturschleifen", price: "150 €" },
    { title: "Roll-Up / Banner", desc: "Druckfertige Datei · Druckkoordination optional", price: "200 €" },
    { title: "Visitenkarte", desc: "Beidseitig · PNG & druckfertige PDF", price: "100 €" },
    { title: "Geschenkskarten / Gutscheine", desc: "Druckfertiges Gutschein-Design", price: "100 €" },
    { title: "Logo Design", desc: "3 Entwürfe · Farbvarianten · PNG & PDF", price: "250 €" },
  ];

  const socialItems = [
    { title: "Social Media Paket (5 Posts)", desc: "Individuelle Content-Layouts im Brand-Design", price: "220 €" },
    { title: "Story Templates (5 Stück)", desc: "Canva-bearbeitbar · individuell angepasst", price: "150 €" },
    { title: "Instagram Highlight Cover Set (6 Stück)", desc: "Minimalistische Cover Icons für Instagram Highlights", price: "90 €" },
  ];

  return (
    <main className="bg-background text-ink min-h-screen">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center group" aria-label="Javera Studio – zur Startseite">
            <img
              src={logo}
              alt="Javera Studio"
              className="h-9 md:h-10 w-auto transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-80"
            />
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-ink transition">
            ← Zurück
          </Link>
        </div>
      </header>

      {/* Page intro */}
      <section className="pt-32 pb-4 md:pt-40 md:pb-6 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
          style={{ backgroundColor: "var(--peach-soft)" }}
        />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="w-8 h-px bg-muted-foreground/50" />
            Preise
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
            Transparente Preise
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Alle Leistungen sind einzeln buchbar – auch wenn du schon eine Website hast. Ich stimme alles auf dein bestehendes Branding ab.
          </p>
        </div>
      </section>

      {/* Price content */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-6">

          {/* WEBSITE */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">Website</p>
          <div className="grid md:grid-cols-2 gap-5 items-stretch">
            {/* Starter Website */}
            <div className="bg-background border border-border rounded-2xl p-8 flex flex-col">
              <p className="text-lg font-semibold text-ink mb-1">Starter Website</p>
              <p className="text-sm text-muted-foreground">One-Pager · alle Infos auf einer Seite</p>
              <div className="py-5">
                <div className="text-3xl font-bold text-ink leading-none">
                  500 €{" "}
                  <span className="text-sm font-normal text-muted-foreground">einmalig</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">1 Seite · 5–7 Tage</p>
              </div>
              <hr className="border-t border-border/60 mb-5" />
              <SectionLabel>Design &amp; Inhalt</SectionLabel>
              {starterDesignContent.map((f) => <FeatureRow key={f.title} {...f} />)}
              <SectionLabel>Buchung &amp; Sichtbarkeit</SectionLabel>
              {starterBooking.map((f) => <FeatureRow key={f.title} {...f} />)}
              <div className="mt-auto">
                <SectionLabel>Support</SectionLabel>
                {starterSupport.map((f) => <FeatureRow key={f.title} {...f} />)}
                <div className="pt-6">
                  <Link
                    to="/demo-anfrage"
                    className="block text-center py-3 border border-border text-ink font-semibold text-sm rounded-xl hover:bg-secondary transition"
                  >
                    Kostenlose Analyse &amp; Demo anfragen
                  </Link>
                </div>
              </div>
            </div>

            {/* Premium Website */}
            <div className="relative bg-background border-2 border-primary rounded-2xl p-8 flex flex-col">
              <div className="absolute -top-3 left-8 bg-accent text-primary text-[11px] font-semibold px-3 py-1 rounded-full">
                Empfohlen
              </div>
              <p className="text-lg font-semibold text-ink mb-1">Premium Website</p>
              <p className="text-sm text-muted-foreground">Mehrseiter · je nach Wunsch &amp; Umfang</p>
              <div className="py-5">
                <div className="text-3xl font-bold text-ink leading-none">
                  ab 800 €{" "}
                  <span className="text-sm font-normal text-muted-foreground">einmalig</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Mehrere Seiten · 10–14 Tage</p>
              </div>
              <hr className="border-t border-border/60 mb-5" />
              <SectionLabel>Design &amp; Inhalt</SectionLabel>
              {premiumDesignContent.map((f) => <FeatureRow key={f.title} {...f} />)}
              <SectionLabel>Optionale Erweiterungen</SectionLabel>
              {premiumOptionen.map((f) => <FeatureRow key={f.title} {...f} />)}
              <div className="mt-auto">
                <SectionLabel>Support</SectionLabel>
                {premiumSupport.map((f) => <FeatureRow key={f.title} {...f} />)}
                <div className="pt-6">
                  <Link
                    to="/demo-anfrage"
                    className="block text-center py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition"
                  >
                    Kostenlose Analyse &amp; Demo anfragen
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Laufende Kosten */}
          <div className="mt-5 grid sm:grid-cols-3 gap-4 items-stretch">
            <div className="bg-background border border-border rounded-2xl p-6 flex flex-col">
              <p className="font-semibold text-ink">Domain &amp; Hosting</p>
              <p className="text-xs text-muted-foreground mt-1">Eigene www-Adresse + Website online halten (bei externem Anbieter)</p>
              <p className="text-xs text-muted-foreground/80 mt-1 italic">direkt beim Anbieter — läuft auf deinen Namen</p>
              <p className="text-2xl font-bold text-ink mt-auto pt-4">
                15 €{" "}
                <span className="text-sm font-normal text-muted-foreground">/ Monat</span>
              </p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 flex flex-col">
              <p className="font-semibold text-ink">Wartungspaket</p>
              <p className="text-xs text-muted-foreground mt-1">Kleine laufende Anpassungen, neue Fotos, Texte & Aktionen · bis zu 4 Änderungen pro Monat</p>
              <p className="text-2xl font-bold text-ink mt-auto pt-4">
                40 €{" "}
                <span className="text-sm font-normal text-muted-foreground">/ Monat</span>
              </p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 flex flex-col">
              <p className="font-semibold text-ink">Einzeländerung</p>
              <p className="text-xs text-muted-foreground mt-1">Einzelne spontane Änderungen ohne Wartungspaket</p>
              <p className="text-2xl font-bold text-ink mt-auto pt-4">
                50 €{" "}
                <span className="text-sm font-normal text-muted-foreground">einmalig</span>
              </p>
            </div>
          </div>

          {/* GRAFIK & PRINT */}
          <div className="mt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">Grafik &amp; Print Design</p>
            <div className="bg-background border border-border rounded-2xl overflow-hidden">
              {grafikItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-center justify-between px-6 py-4 border-b border-border/40 last:border-0 ${i % 2 !== 0 ? "bg-cream/50" : ""}`}
                >
                  <div>
                    <p className="text-sm font-medium text-ink">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <p className="text-sm font-bold text-ink shrink-0 ml-6">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">Social Media Design</p>
            <div className="bg-background border border-border rounded-2xl overflow-hidden">
              {socialItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-center justify-between px-6 py-4 border-b border-border/40 last:border-0 ${i % 2 !== 0 ? "bg-cream/50" : ""}`}
                >
                  <div>
                    <p className="text-sm font-medium text-ink">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                  <p className="text-sm font-bold text-ink shrink-0 ml-6">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PAKETE */}
          <div className="mt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">Pakete</p>
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-background border border-border rounded-2xl p-6 flex flex-col">
                <p className="font-semibold text-ink mb-1">Starter Branding</p>
                <p className="text-xs text-muted-foreground">Logo + Visitenkarte + 5 Social Media Posts</p>
                <p className="text-2xl font-bold text-ink mt-auto pt-4">500 €</p>
                <p className="text-xs text-muted-foreground mt-1">statt 570 € einzeln</p>
              </div>
              <div className="relative bg-background border-2 border-primary rounded-2xl p-6">
                <div className="absolute -top-3 left-6 bg-accent text-primary text-[11px] font-semibold px-3 py-1 rounded-full">
                  Komplett
                </div>
                <p className="font-semibold text-ink mb-1 mt-1">Beauty Studio Komplett</p>
                <p className="text-xs text-muted-foreground mb-4">Premium Website + Logo + 10 Social Media Posts + Flyer</p>
                <p className="text-2xl font-bold text-ink">1.390 €</p>
                <p className="text-xs text-muted-foreground mt-1">statt 1.640 € einzeln</p>
              </div>
              <div className="bg-background border border-border rounded-2xl p-6">
                <p className="font-semibold text-ink mb-1">Social Media Visibility Paket</p>
                <p className="text-xs text-muted-foreground mb-4">5 Social Media Posts + 5 Story Templates + 6 Highlight Covers</p>
                <p className="text-2xl font-bold text-ink">420 €</p>
                <p className="text-xs text-muted-foreground mt-1">statt 460 € einzeln</p>
              </div>
            </div>
          </div>

          {/* Druck & Lieferung */}
          <p className="text-xs text-muted-foreground/80 italic mt-6">
            Bestellung, Druck & Lieferung vieler Printprodukte kann vollständig von JAVERA STUDIO übernommen werden – Preis auf Anfrage.
          </p>

          {/* 20% Rabatt */}
<div className="mt-4 bg-peach-soft border border-mauve/20 rounded-2xl px-6 py-4 text-center">
  <p className="text-sm text-ink">
    <span className="text-mauve mr-1">★</span>
    <strong>Website-Kunden erhalten 20 % Rabatt</strong> auf alle Design-Leistungen (Grafik, Print &amp; Social Media).
  </p>
</div>

          <p className="text-center text-[12px] text-muted-foreground mt-6">
            Alle Preise exkl. MwSt. (Kleinunternehmer) · Individuelle Angebote auf Anfrage
          </p>
          <div className="mt-6 text-center">
            <Link
              to="/demo-anfrage"
              className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
            >
              Anfrage senden
            </Link>
            <p className="mt-3 text-xs text-muted-foreground">
              Nicht sicher welches Paket passt? Ich berate dich kurz und kostenlos.
            </p>
          </div>

        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
