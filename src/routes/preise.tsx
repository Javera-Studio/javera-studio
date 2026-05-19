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
    <p className="text-[11px] font-semibold text-muted-foreground/70 uppercase tracking-[0.06em] mt-4 mb-2.5 first:mt-0">
      {children}
    </p>
  );
}

function PreisePage() {
  const starterDesignContent: FeatureItem[] = [
    { included: true, title: "Individuelles Design", desc: "Farben, Stil & Aufbau passend zu deinem Studio" },
    { included: true, title: "Texte & Struktur", desc: "Professionelle Struktur mit vorbereiteten Texten" },
    { included: true, title: "Galerie", desc: "Saubere Bildergalerie mit bis zu 9 Fotos" },
    { included: true, title: "Mobil optimiert", desc: "Perfekt angepasst für Smartphone, Tablet & Desktop" },
  ];

  const starterBooking: FeatureItem[] = [
    { included: true, title: "Buchungslink integriert", desc: "Verlinkung zu Treatwell, Booksy oder Fresha" },
    { included: true, title: "SEO-Basisoptimierung", desc: "Bessere Sichtbarkeit bei Google" },
    { included: false, title: "Interaktive Animationen" },
    { included: false, title: "Vorher/Nachher-Slider" },
    { included: false, title: "Direktes Buchungs-Widget" },
  ];

  const starterSupport: FeatureItem[] = [
    { included: true, title: "2 Überarbeitungsrunden", desc: "Feinanpassungen nach deinem Feedback" },
    { included: true, title: "14 Tage Nachbetreuung", desc: "Support nach dem Launch der Website" },
  ];

  const premiumDesignContent: FeatureItem[] = [
    { included: true, title: "Premium Branding & Design", desc: "Individuelle Markenwirkung mit hochwertigem Look" },
    { included: true, title: "Fertige Premium-Texte", desc: "Komplette Texte auf Basis eines kurzen Briefings" },
    { included: true, title: "Erweiterte Galerie", desc: "Unbegrenzte Bilder mit Kategorien & Filtern" },
    { included: true, title: "Mobil optimiert", desc: "Perfekt abgestimmt auf alle Geräte" },
  ];

  const premiumInteractive: FeatureItem[] = [
    { included: true, title: "Elegante Scroll-Animationen", desc: "Sanfte Premium-Animationen beim Scrollen" },
    { included: true, title: "Vorher/Nachher-Slider", desc: "Ideal für Beauty-, Haut- & Laserbehandlungen" },
    { included: true, title: "Buchungs-Widget integriert", desc: "Termine direkt auf der Website buchen" },
    { included: true, title: "SEO erweitert + Google Maps", desc: "Mehr Sichtbarkeit & professioneller Google-Auftritt" },
    { included: true, title: "Erweiterbar mit Blog & CMS", desc: "Preise, Blog oder Inhalte später selbst editierbar möglich" },
  ];

  const premiumSupport: FeatureItem[] = [
    { included: true, title: "Unbegrenzte Überarbeitungen", desc: "Gemeinsame Feinanpassung bis alles perfekt passt" },
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
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-background border border-border rounded-2xl p-8">
              <p className="text-lg font-semibold text-ink mb-1">Starter Website</p>
              <p className="text-sm text-muted-foreground mb-5">One-Pager · alle Infos auf einer Seite · Treatwell-Link</p>
              <div className="text-3xl font-bold text-ink leading-none">
                400 – 500 €{" "}
                <span className="text-sm font-normal text-muted-foreground">einmalig</span>
              </div>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-xs bg-secondary text-foreground/70 rounded-full px-2.5 py-0.5">1 Seite</span>
                <span className="text-xs bg-secondary text-foreground/70 rounded-full px-2.5 py-0.5">5–7 Tage</span>
              </div>
              <hr className="border-t border-border/60 my-5" />
              <SectionLabel>Design & Inhalt</SectionLabel>
              {starterDesignContent.map((f) => <FeatureRow key={f.title} {...f} />)}
              <SectionLabel>Buchung & Sichtbarkeit</SectionLabel>
              {starterBooking.map((f) => <FeatureRow key={f.title} {...f} />)}
              <SectionLabel>Support</SectionLabel>
              {starterSupport.map((f) => <FeatureRow key={f.title} {...f} />)}
              <Link
                to="/demo-anfrage"
                className="block text-center mt-6 py-3 bg-secondary text-ink font-semibold text-sm rounded-xl hover:bg-secondary/80 transition"
              >
                Kostenlose Analyse & Demo
              </Link>
            </div>

            <div className="relative bg-background border-2 border-primary rounded-2xl p-8">
              <div className="absolute -top-3 left-8 bg-accent text-primary text-[11px] font-semibold px-3 py-1 rounded-full">
                Empfohlen
              </div>
              <p className="text-lg font-semibold text-ink mb-1">Premium Website</p>
              <p className="text-sm text-muted-foreground mb-5">Multi-Page · Animationen · Instagram Feed · Vorher/Nachher Slider</p>
              <div className="text-3xl font-bold text-ink leading-none">
                700 – 900 €{" "}
                <span className="text-sm font-normal text-muted-foreground">einmalig</span>
              </div>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-xs bg-secondary text-foreground/70 rounded-full px-2.5 py-0.5">3–5 Seiten</span>
                <span className="text-xs bg-secondary text-foreground/70 rounded-full px-2.5 py-0.5">10–14 Tage</span>
              </div>
              <hr className="border-t border-border/60 my-5" />
              <SectionLabel>Design & Inhalt</SectionLabel>
              {premiumDesignContent.map((f) => <FeatureRow key={f.title} {...f} />)}
              <SectionLabel>Interaktiv & Buchung</SectionLabel>
              {premiumInteractive.map((f) => <FeatureRow key={f.title} {...f} />)}
              <SectionLabel>Support</SectionLabel>
              {premiumSupport.map((f) => <FeatureRow key={f.title} {...f} />)}
              <Link
                to="/demo-anfrage"
                className="block text-center mt-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition"
              >
                Kostenlose Analyse & Demo
              </Link>
            </div>
          </div>

          {/* Laufende Kosten */}
          <div className="mt-5 grid sm:grid-cols-3 gap-4">
            <div className="bg-background border border-border rounded-2xl p-6">
              <p className="font-semibold text-ink">Domain &amp; Hosting</p>
              <p className="text-xs text-muted-foreground mt-1 mb-3">Eigene www-Adresse + Website online halten (bei externem Anbieter)</p>
              <p className="text-2xl font-bold text-ink">
                15 €{" "}
                <span className="text-sm font-normal text-muted-foreground">/ Monat</span>
              </p>
              <p className="text-xs text-muted-foreground/80 mt-2 italic">direkt beim Anbieter — läuft auf deinen Namen</p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6">
              <p className="font-semibold text-ink">Wartungspaket</p>
              <p className="text-xs text-muted-foreground mt-1 mb-3">Kleine laufende Anpassungen, neue Fotos, Texte & Aktionen · bis zu 4 Änderungen pro Monat</p>
              <p className="text-2xl font-bold text-ink">
                30 €{" "}
                <span className="text-sm font-normal text-muted-foreground">/ Monat</span>
              </p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6">
              <p className="font-semibold text-ink">Einzeländerung</p>
              <p className="text-xs text-muted-foreground mt-1 mb-3">Einzelne spontane Änderungen ohne Wartungspaket</p>
              <p className="text-2xl font-bold text-ink">
                40 – 50 €{" "}
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
              <div className="bg-background border border-border rounded-2xl p-6">
                <p className="font-semibold text-ink mb-1">Starter Branding</p>
                <p className="text-xs text-muted-foreground mb-4">Logo + Visitenkarte + 5 Social Media Posts</p>
                <p className="text-2xl font-bold text-ink">ab 550 €</p>
              </div>
              <div className="relative bg-background border-2 border-primary rounded-2xl p-6">
                <div className="absolute -top-3 left-6 bg-accent text-primary text-[11px] font-semibold px-3 py-1 rounded-full">
                  Komplett
                </div>
                <p className="font-semibold text-ink mb-1 mt-1">Beauty Studio Komplett</p>
                <p className="text-xs text-muted-foreground mb-4">Premium Website + Logo + 10 Social Posts + Flyer</p>
                <p className="text-2xl font-bold text-ink">ab 1.099 €</p>
              </div>
              <div className="bg-background border border-border rounded-2xl p-6">
                <p className="font-semibold text-ink mb-1">Social Media Visibility Paket</p>
                <p className="text-xs text-muted-foreground mb-4">5 Social Media Posts + 5 Story Templates + 6 Highlight Covers</p>
                <p className="text-2xl font-bold text-ink">ab 420 €</p>
              </div>
            </div>
          </div>

          {/* Druck & Lieferung */}
          <p className="text-xs text-muted-foreground/80 italic mt-6">
            Bestellung, Druck & Lieferung vieler Printprodukte kann vollständig von JAVERA STUDIO übernommen werden – Preis auf Anfrage.
          </p>

          {/* 20% Rabatt */}
          <div className="mt-4 flex items-start gap-3 bg-peach-soft border border-mauve/20 rounded-2xl px-6 py-4">
            <span className="text-mauve text-lg leading-none shrink-0 mt-0.5">★</span>
            <p className="text-sm text-ink">
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
