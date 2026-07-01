import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Preise Webdesign & Branding für Beauty-Studios | JAVERA Studio",
  description: "Transparente Preise für Websites, Logo Design, Flyer, Visitenkarten und Social Media Design für Nagelstudios, Kosmetikstudios, Wimpernstudios, PMU-Studios und Waxing-Studios.",
  alternates: { canonical: "https://www.javera-studio.at/preise" },
  openGraph: {
    title: "Preise Webdesign & Branding für Beauty-Studios | JAVERA Studio",
    description: "Transparente Preise für Websites, Logo Design, Flyer, Visitenkarten und Social Media Design für Nagelstudios, Kosmetikstudios, Wimpernstudios, PMU-Studios und Waxing-Studios.",
    url: "https://www.javera-studio.at/preise",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Preise Webdesign & Branding für Beauty-Studios | JAVERA Studio",
    description: "Transparente Preise für Websites, Logo Design, Flyer, Visitenkarten und Social Media Design für Nagelstudios, Kosmetikstudios, Wimpernstudios, PMU-Studios und Waxing-Studios.",
    images: ["/og-image.jpg"],
  },
};

type FeatureItem = { included: boolean; title: string; desc?: string };

function FeatureRow({ included, title, desc }: FeatureItem) {
  return (
    <div className={`flex gap-2.5 mb-2 ${included ? "" : "opacity-40"}`}>
      <span className="shrink-0 text-sm leading-[1.4] mt-px" style={{ color: included ? "#0F6E56" : undefined }}>
        {included ? "✓" : "✕"}
      </span>
      <div>
        <p className="text-sm font-medium text-ink leading-[1.4]">{title}</p>
        {desc && <p className="text-[11px] text-muted-foreground/70 mt-0.5 leading-snug">{desc}</p>}
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

export default function PreisePage() {
  const starterDesignContent: FeatureItem[] = [
    { included: true, title: "Individuelles Design", desc: "Passend zu deinem Studio, deinen Farben und deiner Marke." },
    { included: true, title: "Mobil optimiert", desc: "Perfekte Darstellung auf Smartphone, Tablet und PC." },
    { included: true, title: "Professionelle Texte", desc: "Texte werden auf Basis deiner Informationen erstellt." },
    { included: true, title: "Bildergalerie", desc: "Präsentiere deine Arbeiten und Ergebnisse professionell." },
  ];

  const starterBooking: FeatureItem[] = [
    { included: true, title: "Kontaktformular", desc: "Interessenten können dich direkt über die Website kontaktieren." },
    { included: true, title: "Integration bestehender Buchungslinks", desc: "Verlinkung zu Planity, Treatwell, Beautinda oder deinem Buchungssystem." },
    { included: true, title: "SEO-Basisoptimierung", desc: "Damit deine Website von Google besser gefunden werden kann." },
  ];

  const starterSupport: FeatureItem[] = [
    { included: true, title: "2 Korrekturrunden", desc: "Anpassungen nach deinen Wünschen vor der Veröffentlichung." },
    { included: true, title: "14 Tage Support", desc: "Kleine Änderungen und Unterstützung nach dem Launch." },
  ];

  const premiumDesignContent: FeatureItem[] = [
    { included: true, title: "Premium Branding & Design", desc: "Hochwertiger Markenauftritt mit exklusivem Design." },
    { included: true, title: "Mehrere Seiten", desc: "Mehr Platz für Leistungen, Bewertungen, Über mich und mehr." },
    { included: true, title: "Professionelle Texte", desc: "Texte werden individuell auf dein Business abgestimmt." },
    { included: true, title: "Erweiterte Galerie", desc: "Mehr Bilder, Vorher-Nachher-Ergebnisse und Referenzen." },
  ];

  const premiumOptionen: FeatureItem[] = [
    { included: true, title: "Sanfte Premium-Animationen", desc: "Elegante Effekte sorgen für einen modernen und hochwertigen Eindruck." },
    { included: true, title: "Instagram Feed Integration", desc: "Deine neuesten Instagram-Beiträge direkt auf der Website." },
    { included: true, title: "Integration bestehender Buchungssysteme", desc: "Vorhandene Buchungstools werden professionell eingebunden." },
    { included: true, title: "SEO-Basisoptimierung", desc: "Optimierung für eine bessere Auffindbarkeit bei Google." },
  ];

  const premiumSupport: FeatureItem[] = [
    { included: true, title: "4 Korrekturrunden", desc: "Mehr Flexibilität für Anpassungen und Feinschliff." },
    { included: true, title: "30 Tage Premium Support", desc: "Unterstützung und kleinere Änderungen nach dem Launch." },
  ];

  const erweiterungen = [
    { title: "Zusätzliche Leistungsseiten", desc: "Für Studios mit vielen Behandlungen oder Angeboten." },
    { title: "Mehrsprachige Website", desc: "In mehreren Sprachen für internationale Kundinnen." },
    { title: "Blog & CMS", desc: "Inhalte und Beiträge später selbst verwalten." },
    { title: "Einrichtung eines neuen Buchungssystems", desc: "Komplette Einrichtung und Konfiguration nach Aufwand." },
    { title: "Academy- oder Schulungsbereich", desc: "Ideal für Ausbildungen, Kurse und Workshops." },
    { title: "Online-Shop", desc: "Produkte direkt über die Website verkaufen." },
    { title: "Individuelle Sonderfunktionen", desc: "Spezielle Wünsche und Funktionen nach Absprache." },
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

  const preiseFaqs = [
    { q: "Was kostet eine Website für ein Nagelstudio?", a: "Eine Starter Website (One-Pager) startet bei 500 €, eine Premium Website mit mehreren Seiten ab 900 €. Der genaue Preis hängt vom Umfang deines Nagelstudios ab." },
    { q: "Was kostet eine Website für ein Kosmetikstudio?", a: "Genau wie bei anderen Beauty-Studios: Starter Website ab 500 €, Premium Website ab 900 €. Beide Pakete werden individuell auf Kosmetikstudios zugeschnitten." },
    { q: "Was kostet eine Website für ein Wimpernstudio oder PMU-Studio?", a: "Auch hier gelten die gleichen Pakete: 500 € für die Starter Website, ab 900 € für die Premium Website – unabhängig davon, ob du Wimpern, PMU oder Waxing anbietest." },
    { q: "Was kostet ein Logo für ein Beauty-Studio?", a: "Ein Logo-Design kostet 250 € und beinhaltet 3 Entwürfe, Farbvarianten sowie PNG- und PDF-Dateien." },
    { q: "Sind Hosting und Domain im Preis enthalten?", a: "Nein. Domain und Hosting laufen direkt über einen externen Anbieter auf deinen Namen und kosten ca. 15 € pro Jahr. So behältst du die volle Kontrolle über deine Website." },
    { q: "Gibt es versteckte Kosten?", a: "Nein. Alle Preise sind transparent aufgelistet. Laufende Kosten wie Domain, Hosting und Wartung sind klar gekennzeichnet und werden vorab besprochen." },
    { q: "Kann ich Website, Logo und Flyer zusammen buchen?", a: "Ja. Im Paket 'Beauty Studio Komplett' erhältst du Premium Website, Logo, 10 Social Media Posts und Flyer für 1.390 € statt 1.640 € einzeln." },
    { q: "Wie viel kostet die laufende Wartung meiner Website?", a: "Das Wartungspaket kostet 40 € pro Monat und beinhaltet bis zu 4 kleine Änderungen (Texte, Fotos, Aktionen). Einzelne spontane Änderungen ohne Paket kosten 50 € einmalig." },
    { q: "Gibt es Rabatt, wenn ich mehrere Leistungen kombiniere?", a: "Ja. Website-Kundinnen erhalten 10 % Rabatt auf alle Grafik-, Print- und Social-Media-Design-Leistungen." },
  ];

  const preiseFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preiseFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="bg-background text-ink min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(preiseFaqSchema) }}
      />
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center group" aria-label="Javera Studio – zur Startseite">
            <Image
              src="/javera-logo.png"
              alt="Javera Studio"
              width={160}
              height={48}
              className="h-9 md:h-10 w-auto transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-80"
            />
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-ink transition">
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
                    href="/#schreib-mir"
                    className="block text-center py-3 border border-border text-ink font-semibold text-sm rounded-xl hover:bg-secondary transition"
                  >
                    Kostenlose Demo anfragen
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
                  ab 900 €{" "}
                  <span className="text-sm font-normal text-muted-foreground">einmalig</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Mehrere Seiten · 10–14 Tage</p>
              </div>
              <hr className="border-t border-border/60 mb-5" />
              <SectionLabel>Design &amp; Inhalt</SectionLabel>
              {premiumDesignContent.map((f) => <FeatureRow key={f.title} {...f} />)}
              <SectionLabel>Premium Features</SectionLabel>
              {premiumOptionen.map((f) => <FeatureRow key={f.title} {...f} />)}
              <div className="mt-3 flex gap-2.5 bg-peach-soft/60 border border-mauve/20 rounded-xl px-3 py-2.5">
                <span className="shrink-0 text-sm leading-[1.4] mt-px">✨</span>
                <p className="text-sm font-semibold text-ink leading-[1.4]">Online-Präsenz Analyse inklusive</p>
              </div>
              <div className="mt-auto">
                <SectionLabel>Support</SectionLabel>
                {premiumSupport.map((f) => <FeatureRow key={f.title} {...f} />)}
                <div className="pt-6">
                  <Link
                    href="/#schreib-mir"
                    className="block text-center py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition"
                  >
                    Kostenlose Demo anfragen
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Online-Präsenz Analyse */}
          <div className="mt-5 bg-background border border-border rounded-2xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <p className="text-lg font-semibold text-ink mb-1">Online-Präsenz Analyse</p>
                <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
                  Du hast bereits eine Website oder einen bestehenden Online-Auftritt und möchtest wissen, wo Potenzial verloren geht?
                  <br /><br />
                  Die Online-Präsenz Analyse bewertet Website, Google-Profil, Sichtbarkeit und Außenwirkung und liefert konkrete Empfehlungen zur Verbesserung.
                </p>
              </div>
              <div className="shrink-0">
                <div className="text-2xl font-bold text-ink leading-none">150 €</div>
                <p className="text-xs text-muted-foreground mt-1">einmalig</p>
              </div>
            </div>
            <hr className="border-t border-border/60 mb-5" />
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0 mb-5">
              {["Website-Analyse", "Google Business Profil Check", "Branding & Außenwirkung", "Auffindbarkeit & Sichtbarkeit", "Buchungs- & Kontaktmöglichkeiten", "Persönliche Handlungsempfehlungen"].map((item) => (
                <div key={item} className="flex gap-2.5 mb-2.5">
                  <span className="shrink-0 text-sm leading-[1.4] mt-px" style={{ color: "#0F6E56" }}>✓</span>
                  <p className="text-sm font-medium text-ink leading-[1.4]">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-peach-soft border border-mauve/20 rounded-xl px-4 py-3 flex items-start gap-2">
              <span className="shrink-0 text-base leading-[1.4] mt-px">💎</span>
              <p className="text-sm text-ink"><strong>Bei Buchung einer Premium Website kostenlos enthalten.</strong></p>
            </div>
          </div>

          {/* Erweiterungen nach Wunsch */}
          <div className="mt-5 bg-background border border-border rounded-2xl p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Erweiterungen nach Wunsch</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
              {erweiterungen.map((item) => (
                <div key={item.title} className="flex gap-2.5 mb-2.5">
                  <span className="shrink-0 text-sm leading-[1.4] mt-px text-mauve">➕</span>
                  <div>
                    <p className="text-sm font-medium text-ink leading-[1.4]">{item.title}</p>
                    <p className="text-[11px] text-muted-foreground/70 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Laufende Kosten */}
          <div className="mt-5 grid sm:grid-cols-3 gap-4 items-stretch">
            <div className="bg-background border border-border rounded-2xl p-6 flex flex-col">
              <p className="font-semibold text-ink">Domain &amp; Hosting</p>
              <p className="text-xs text-muted-foreground mt-1">Eigene www-Adresse + Website online halten (bei externem Anbieter)</p>
              <p className="text-xs text-muted-foreground/80 mt-1 italic">direkt beim Anbieter — läuft auf deinen Namen</p>
              <p className="text-2xl font-bold text-ink mt-auto pt-4">15 € <span className="text-sm font-normal text-muted-foreground">/ Jahr</span></p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 flex flex-col">
              <p className="font-semibold text-ink">Wartungspaket</p>
              <p className="text-xs text-muted-foreground mt-1">Kleine laufende Anpassungen, neue Fotos, Texte & Aktionen · bis zu 4 Änderungen pro Monat</p>
              <p className="text-2xl font-bold text-ink mt-auto pt-4">40 € <span className="text-sm font-normal text-muted-foreground">/ Monat</span></p>
            </div>
            <div className="bg-background border border-border rounded-2xl p-6 flex flex-col">
              <p className="font-semibold text-ink">Einzeländerung</p>
              <p className="text-xs text-muted-foreground mt-1">Einzelne spontane Änderungen ohne Wartungspaket</p>
              <p className="text-2xl font-bold text-ink mt-auto pt-4">50 € <span className="text-sm font-normal text-muted-foreground">einmalig</span></p>
            </div>
          </div>

          {/* GRAFIK & PRINT */}
          <div className="mt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">Grafik &amp; Print Design</p>
            <div className="bg-background border border-border rounded-2xl overflow-hidden">
              {grafikItems.map((item, i) => (
                <div key={item.title} className={`flex items-center justify-between px-6 py-4 border-b border-border/40 last:border-0 ${i % 2 !== 0 ? "bg-cream/50" : ""}`}>
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
                <div key={item.title} className={`flex items-center justify-between px-6 py-4 border-b border-border/40 last:border-0 ${i % 2 !== 0 ? "bg-cream/50" : ""}`}>
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
                <p className="text-2xl font-bold text-ink mt-auto pt-4">550 €</p>
                <p className="text-xs text-muted-foreground mt-1">statt 570 € einzeln</p>
              </div>
              <div className="relative bg-background border-2 border-primary rounded-2xl p-6">
                <div className="absolute -top-3 left-6 bg-accent text-primary text-[11px] font-semibold px-3 py-1 rounded-full">Komplett</div>
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

          {/* 10% Rabatt */}
          <div className="mt-4 bg-peach-soft border border-mauve/20 rounded-2xl px-6 py-4 text-center">
            <p className="text-sm text-ink">
              <span className="text-mauve mr-1">★</span>
              <strong>Website-Kunden erhalten 10 % Rabatt</strong>{" "}auf alle Design-Leistungen (Grafik, Print &amp; Social Media).
            </p>
          </div>

          <p className="text-center text-[12px] text-muted-foreground mt-6">
            Alle Preise exkl. MwSt. (Kleinunternehmer) · Individuelle Angebote auf Anfrage
          </p>
          <div className="mt-6 text-center">
            <Link href="/#schreib-mir" className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium">
              Anfrage senden
            </Link>
            <p className="mt-3 text-xs text-muted-foreground">
              Nicht sicher welches Paket passt? Ich berate dich kurz und kostenlos.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">FAQ</div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight text-center">Häufige Fragen zu Preisen</h2>
          <div className="mt-12 space-y-3">
            {preiseFaqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-background border border-border/60 p-6 open:shadow-sm transition">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                  <span className="font-serif text-lg md:text-xl text-ink">{f.q}</span>
                  <span aria-hidden className="shrink-0 w-7 h-7 rounded-full border border-ink/20 flex items-center justify-center text-ink transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
