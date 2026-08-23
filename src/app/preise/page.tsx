import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteSection } from "@/components/QuoteSection";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { AiLabel } from "@/components/AiLabel";
import { brandQuotes } from "@/lib/brand-quotes";
import { pricing, formatEuro } from "@/lib/data/pricing";

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
        {desc && <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{desc}</p>}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-[0.06em] mt-8 mb-4">
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
    { included: true, title: "Barrierefreiheit nach WCAG 2.2 AA", desc: "Deine Website ist so gebaut, dass sie auch für Menschen mit Seh- oder Bewegungseinschränkungen gut nutzbar ist – zusätzliches Vertrauenssignal für deine Kundinnen und ein Pluspunkt bei Google." },
  ];

  const starterBooking: FeatureItem[] = [
    { included: true, title: "Kontaktformular", desc: "Interessenten können dich direkt über die Website kontaktieren." },
    { included: true, title: "Integration bestehender Buchungslinks", desc: "Verlinkung zu Planity, Treatwell, Beautinda oder deinem Buchungssystem." },
    { included: true, title: "SEO-Basisoptimierung", desc: "Damit deine Website von Google besser gefunden werden kann." },
  ];

  const starterSupport: FeatureItem[] = [
    { included: true, title: `${pricing.websites.starter.korrekturrunden} Korrekturrunden`, desc: "Anpassungen nach deinen Wünschen vor der Veröffentlichung." },
    { included: true, title: `${pricing.websites.starter.supportTage} Tage Support`, desc: "Kleine Änderungen und Unterstützung nach dem Launch." },
  ];

  const premiumDesignContent: FeatureItem[] = [
    { included: true, title: "Premium Branding & Design", desc: "Hochwertiger Markenauftritt mit exklusivem Design." },
    { included: true, title: "Mehrere Seiten", desc: "Mehr Platz für Leistungen, Bewertungen, Über mich und mehr." },
    { included: true, title: "Professionelle Texte", desc: "Texte werden individuell auf dein Business abgestimmt." },
    { included: true, title: "Erweiterte Galerie", desc: "Mehr Bilder, Vorher-Nachher-Ergebnisse und Referenzen." },
    { included: true, title: "Barrierefreiheit nach WCAG 2.2 AA", desc: "Deine Website ist so gebaut, dass sie auch für Menschen mit Seh- oder Bewegungseinschränkungen gut nutzbar ist – zusätzliches Vertrauenssignal für deine Kundinnen und ein Pluspunkt bei Google." },
  ];

  const premiumOptionen: FeatureItem[] = [
    { included: true, title: "Sanfte Premium-Animationen", desc: "Elegante Effekte sorgen für einen modernen und hochwertigen Eindruck." },
    { included: true, title: "Instagram Feed Integration", desc: "Deine neuesten Instagram-Beiträge direkt auf der Website." },
    { included: true, title: "Integration bestehender Buchungssysteme", desc: "Vorhandene Buchungstools werden professionell eingebunden." },
    { included: true, title: "SEO-Basisoptimierung", desc: "Optimierung für eine bessere Auffindbarkeit bei Google." },
  ];

  const premiumSupport: FeatureItem[] = [
    { included: true, title: `${pricing.websites.premium.korrekturrunden} Korrekturrunden`, desc: "Mehr Flexibilität für Anpassungen und Feinschliff." },
    { included: true, title: `${pricing.websites.premium.supportTage} Tage Premium Support`, desc: "Unterstützung und kleinere Änderungen nach dem Launch." },
  ];

  const erweiterungen = pricing.erweiterungen.map((item) => ({
    title: item.titel,
    desc: item.beschreibung,
  }));

  const grafikItems = pricing.branding.map((item) => ({
    title: item.titel,
    desc: item.beschreibung,
    price: formatEuro(item.betrag),
  }));

  const socialItems = pricing.social.map((item) => ({
    title: item.titel,
    desc: item.beschreibung,
    price: formatEuro(item.betrag),
  }));

  const logoPricing = pricing.branding.find((item) => item.titel === "Logo Design")!;
  const beautyStudioKomplett = pricing.pakete.find((item) => item.titel === "Beauty Studio Komplett")!;
  const maxRaten = Math.max(...pricing.zahlung.ratenzahlung.map((r) => r.raten));

  const preiseFaqs = [
    { q: "Was kostet eine Website für ein Beauty-Studio?", a: `Eine Starter Website (One-Pager) startet bei ${formatEuro(pricing.websites.starter.betrag)}, eine Premium Website mit mehreren Seiten ab ${formatEuro(pricing.websites.premium.betrag)}. Der genaue Preis hängt vom Umfang deines Studios ab.` },
    { q: "Was kostet ein Logo für ein Beauty-Studio?", a: `Ein Logo-Design kostet ${formatEuro(logoPricing.betrag)} und beinhaltet 3 Entwürfe, Farbvarianten sowie PNG- und PDF-Dateien.` },
    { q: "Sind Hosting und Domain im Preis enthalten?", a: `Nein. Domain und Hosting laufen direkt über einen externen Anbieter auf deinen Namen und kosten ca. ${formatEuro(pricing.technik.domainHosting.betrag)} pro Jahr. So behältst du die volle Kontrolle über deine Website.` },
    { q: "Gibt es versteckte Kosten?", a: "Nein. Alle Preise sind transparent aufgelistet. Laufende Kosten wie Domain, Hosting und Wartung sind klar gekennzeichnet und werden vorab besprochen." },
    { q: "Kann ich Website, Logo und Flyer zusammen buchen?", a: `Ja. Im Paket 'Beauty Studio Komplett' erhältst du Premium Website, Logo, 10 Social Media Posts, Flyer und ein Google Business Profil für ${formatEuro(beautyStudioKomplett.betrag)} statt ${formatEuro(beautyStudioKomplett.statt)} einzeln.` },
    { q: "Wie viel kostet die laufende Wartung meiner Website?", a: `Das Wartungspaket kostet ${formatEuro(pricing.technik.wartung.betrag)} pro Monat und beinhaltet bis zu 4 kleine Änderungen (Texte, Fotos, Aktionen). Einzelne spontane Änderungen ohne Paket kosten ${formatEuro(pricing.technik.einzelaenderung.betrag)} einmalig.` },
    { q: "Wie läuft die Bezahlung ab?", a: `Ich arbeite transparent und ohne versteckte Kosten. Nach dem Erstgespräch erhältst du ein individuelles Festpreis-Angebot. Nach deiner Zusage werden ${pricing.zahlung.anzahlungProzent} % des Betrags als Anzahlung fällig, die restlichen ${pricing.zahlung.anzahlungProzent} % nach Fertigstellung deiner Website oder deines Projekts.` },
    { q: "Warum kostet eine professionelle Website mehr als ein Baukasten?", a: "Eine professionelle Website ist individuell auf dein Beauty-Studio abgestimmt und wird speziell für deine Marke gestaltet. Im Gegensatz zu einem Baukastensystem erhältst du keine Standardvorlage, sondern eine Website, die dein Studio professionell präsentiert, Vertrauen schafft und auf deine Zielgruppe zugeschnitten ist. Dazu gehören unter anderem individuelles Design, eine klare Struktur, Suchmaschinenoptimierung, mobile Optimierung sowie persönliche Betreuung während des gesamten Projekts. Viele Beauty-Studios investieren mehrere Tausend Euro in ihre Einrichtung, Geräte oder Schulungen. Die Website ist jedoch oft der erste Eindruck, den potenzielle Kundinnen von deinem Studio bekommen – sie ist dein digitales Schaufenster und spielt eine entscheidende Rolle dabei, ob jemand Vertrauen fasst und einen Termin bei dir anfragt." },
    { q: "Kann ich meine Website auch in Raten bezahlen?", a: `Ja. Gerade der Start in die Selbstständigkeit bringt viele Investitionen mit sich. Deshalb biete ich für größere Projekte auf Wunsch eine zinsfreie Ratenzahlung in bis zu ${maxRaten} Teilzahlungen an. Gemeinsam finden wir eine Lösung, die zu deinem Budget passt.` },
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
      <Navbar />

      {/* Page intro */}
      <section id="preise" className="pt-32 pb-4 md:pt-40 md:pb-6 relative overflow-hidden scroll-mt-16">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
          style={{ backgroundColor: "#E5DCD5" }}
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
          <p className="mt-4 text-xs text-muted-foreground">Preise zuletzt aktualisiert am {pricing.standDatum}</p>
        </div>
      </section>

      {/* ANALYSE & STRATEGIE */}
      <section className="py-14 md:py-20 bg-peach-muted">
        <div className="max-w-5xl mx-auto px-6">
          <p id="analyse" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5 scroll-mt-24">Analyse &amp; Strategie</p>

          {/* Online-Präsenz Analyse */}
          <div className="bg-background rounded-[2rem] p-8 md:p-10">
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
                <div className="text-2xl font-bold text-ink leading-none">{formatEuro(pricing.analyse.onlinePraesenzAnalyse.betrag)}</div>
                <p className="text-xs text-muted-foreground mt-1">{pricing.analyse.onlinePraesenzAnalyse.einheit}</p>
              </div>
            </div>
            <div className="h-px bg-ink/10 mb-5" />
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0 mb-5">
              {["Website-Analyse", "Google Business Profil Check", "Branding & Außenwirkung", "Auffindbarkeit & Sichtbarkeit", "Buchungs- & Kontaktmöglichkeiten", "Persönliche Handlungsempfehlungen"].map((item) => (
                <div key={item} className="flex gap-2.5 mb-2.5">
                  <span className="shrink-0 text-sm leading-[1.4] mt-px" style={{ color: "#0F6E56" }}>✓</span>
                  <p className="text-sm font-medium text-ink leading-[1.4]">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#E5DCD5]/60 rounded-2xl px-4 py-3 flex items-start gap-2">
              <span className="shrink-0 text-base leading-[1.4] mt-px">💎</span>
              <p className="text-sm text-ink"><strong>{pricing.analyse.onlinePraesenzAnalyse.hinweis}</strong></p>
            </div>
          </div>

          {/* Website-Gesundheitscheck */}
          <div className="mt-5 bg-background rounded-[2rem] p-8 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <p className="text-lg font-semibold text-ink mb-1">Website-Gesundheitscheck</p>
                <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
                  Deine Website ist bereits online, aber du möchtest wissen, ob sie technisch gesund ist und zuverlässig funktioniert?
                  <br /><br />
                  Beim Website-Gesundheitscheck prüfe ich die technischen Grundlagen deiner Website und zeige dir verständlich, wo Optimierungspotenzial besteht – damit deine Website schneller lädt, besser gefunden wird und auch mobil zuverlässig funktioniert.
                </p>
              </div>
              <div className="shrink-0">
                <div className="text-2xl font-bold text-ink leading-none">{formatEuro(pricing.analyse.websiteGesundheitscheck.betrag)}</div>
                <p className="text-xs text-muted-foreground mt-1">{pricing.analyse.websiteGesundheitscheck.einheit}</p>
              </div>
            </div>
            <div className="h-px bg-ink/10 mb-5" />
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0 mb-5">
              {["Ladegeschwindigkeit auf Mobilgeräten und Desktop", "Technische SEO-Grundlagen", "Mobile Darstellung und Benutzerfreundlichkeit", "Fehlerhafte oder nicht funktionierende Links", "Meta-Titel und Meta-Beschreibungen", "Bilder, Dateigrößen und Ladeverhalten", "Core Web Vitals und Website-Performance", "Verständliche Handlungsempfehlungen"].map((item) => (
                <div key={item} className="flex gap-2.5 mb-2.5">
                  <span className="shrink-0 text-sm leading-[1.4] mt-px" style={{ color: "#0F6E56" }}>✓</span>
                  <p className="text-sm font-medium text-ink leading-[1.4]">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#E5DCD5]/60 rounded-2xl px-4 py-3">
              <p className="text-sm text-ink"><strong>Hinweis:</strong> Der Website-Gesundheitscheck beinhaltet die Analyse und konkrete Empfehlungen. Die technische Umsetzung der Optimierungen ist nicht im Preis enthalten und kann bei Bedarf separat angeboten werden.</p>
            </div>
          </div>

          {/* Google Business Profil */}
          <div id="google-business" className="mt-5 bg-background rounded-[2rem] p-8 md:p-10 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <p className="text-lg font-semibold text-ink mb-1">Google Business Profil</p>
                <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
                  Ich richte dein Google-Unternehmensprofil professionell ein oder optimiere dein bestehendes Profil – damit dein Studio bei Google einen hochwertigen ersten Eindruck hinterlässt und lokal besser gefunden wird.
                </p>
              </div>
              <div className="shrink-0 flex gap-6 sm:flex-col sm:gap-2 sm:text-right">
                <div>
                  <p className="text-xl font-bold text-ink leading-none">{formatEuro(pricing.analyse.googleBusinessEinrichtung.betrag)}</p>
                  <p className="text-xs text-muted-foreground mt-1">Einrichtung</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-ink leading-none">{formatEuro(pricing.analyse.googleBusinessOptimierung.betrag)}</p>
                  <p className="text-xs text-muted-foreground mt-1">Optimierung</p>
                </div>
              </div>
            </div>
            <div className="h-px bg-ink/10 mb-5" />
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
              {["Unternehmenseintrag einrichten oder optimieren", "Kategorien & Leistungen eintragen", "SEO-optimierte Beschreibung", "Kontaktdaten & Öffnungszeiten", "Logo & Bilder einpflegen"].map((item) => (
                <div key={item} className="flex gap-2.5 mb-2.5">
                  <span className="shrink-0 text-sm leading-[1.4] mt-px" style={{ color: "#0F6E56" }}>✓</span>
                  <p className="text-sm font-medium text-ink leading-[1.4]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WEBSEITEN */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <p id="website" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5 scroll-mt-24">Webseiten</p>
          <div className="grid md:grid-cols-2 gap-5 items-stretch">
            {/* Starter Website */}
            <div className="bg-background rounded-[2rem] p-8 flex flex-col">
              <p className="text-lg font-semibold text-ink mb-1">{pricing.websites.starter.titel}</p>
              <p className="text-sm text-muted-foreground">{pricing.websites.starter.beschreibung}</p>
              <div className="py-5">
                <div className="text-3xl font-bold text-ink leading-none">
                  {formatEuro(pricing.websites.starter.betrag)}{" "}
                  <span className="text-sm font-normal text-muted-foreground">{pricing.websites.starter.einheit}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{pricing.websites.starter.seiten} · {pricing.websites.starter.dauer}</p>
              </div>
              <div className="h-px bg-ink/10 mb-5" />
              <SectionLabel>Design &amp; Inhalt</SectionLabel>
              {starterDesignContent.map((f) => <FeatureRow key={f.title} {...f} />)}
              <SectionLabel>Buchung &amp; Sichtbarkeit</SectionLabel>
              {starterBooking.map((f) => <FeatureRow key={f.title} {...f} />)}
              <div className="mt-auto">
                <SectionLabel>Support</SectionLabel>
                {starterSupport.map((f) => <FeatureRow key={f.title} {...f} />)}
                <div className="pt-6">
                  <Link
                    href="#schreib-mir"
                    className="block text-center py-3 text-ink font-semibold text-sm rounded-full hover:bg-cream transition"
                  >
                    Kostenlose Vorschau anfragen
                  </Link>
                </div>
              </div>
            </div>

            {/* Premium Website */}
            <div className="relative bg-[#E5DCD5]/50 rounded-[2rem] p-8 flex flex-col">
              <div className="absolute -top-3 left-8 bg-accent text-primary text-[11px] font-semibold px-3 py-1 rounded-full">
                Empfohlen
              </div>
              <p className="text-lg font-semibold text-ink mb-1">{pricing.websites.premium.titel}</p>
              <p className="text-sm text-muted-foreground">Mehrseiter · je nach Wunsch &amp; Umfang</p>
              <div className="py-5">
                <div className="text-3xl font-bold text-ink leading-none">
                  {pricing.websites.premium.betragPraefix} {formatEuro(pricing.websites.premium.betrag)}{" "}
                  <span className="text-sm font-normal text-muted-foreground">{pricing.websites.premium.einheit}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{pricing.websites.premium.seiten} · {pricing.websites.premium.dauer}</p>
              </div>
              <div className="h-px bg-ink/10 mb-5" />
              <SectionLabel>Design &amp; Inhalt</SectionLabel>
              {premiumDesignContent.map((f) => <FeatureRow key={f.title} {...f} />)}
              <SectionLabel>Premium Features</SectionLabel>
              {premiumOptionen.map((f) => <FeatureRow key={f.title} {...f} />)}
              <div className="mt-3 flex gap-2.5 bg-background/60 rounded-xl px-3 py-2.5">
                <span className="shrink-0 text-sm leading-[1.4] mt-px">✨</span>
                <p className="text-sm font-semibold text-ink leading-[1.4]">Online-Präsenz Analyse inklusive</p>
              </div>
              <div className="mt-auto">
                <SectionLabel>Support</SectionLabel>
                {premiumSupport.map((f) => <FeatureRow key={f.title} {...f} />)}
                <div className="pt-6">
                  <Link
                    href="#schreib-mir"
                    className="block text-center py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-full hover:bg-primary/90 transition"
                  >
                    Kostenlose Vorschau anfragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITALE ERWEITERUNGEN */}
      <section className="py-14 md:py-20 bg-peach-muted">
        <div className="max-w-5xl mx-auto px-6">
          <p id="erweiterungen" className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5 scroll-mt-24">Digitale Erweiterungen</p>
          <div className="bg-background rounded-[2rem] p-8 md:p-10">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
              {erweiterungen.map((item) => (
                <div key={item.title} className="flex gap-2.5 mb-2.5">
                  <span className="shrink-0 text-sm leading-[1.4] mt-px text-mauve">➕</span>
                  <div>
                    <p className="text-sm font-medium text-ink leading-[1.4]">{item.title}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNIK & BETREUUNG */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">Technik &amp; Betreuung</p>
          <div className="grid sm:grid-cols-3 gap-5 items-stretch">
            <div id="domain-hosting" className="bg-background rounded-[2rem] p-6 flex flex-col scroll-mt-24">
              <p className="font-semibold text-ink">Domain &amp; Hosting</p>
              <p className="text-xs text-muted-foreground mt-1">Eigene www-Adresse + Website online halten (bei externem Anbieter)</p>
              <p className="text-xs text-muted-foreground mt-1 italic">direkt beim Anbieter — läuft auf deinen Namen</p>
              <p className="text-2xl font-bold text-ink mt-auto pt-4">{formatEuro(pricing.technik.domainHosting.betrag)} <span className="text-sm font-normal text-muted-foreground">{pricing.technik.domainHosting.einheit}</span></p>
            </div>
            <div id="wartung" className="bg-background rounded-[2rem] p-6 flex flex-col scroll-mt-24">
              <p className="font-semibold text-ink">Wartungspaket</p>
              <p className="text-xs text-muted-foreground mt-1">Kleine laufende Anpassungen, neue Fotos, Texte & Aktionen · {pricing.technik.wartung.inklusive}</p>
              <p className="text-2xl font-bold text-ink mt-auto pt-4">{formatEuro(pricing.technik.wartung.betrag)} <span className="text-sm font-normal text-muted-foreground">{pricing.technik.wartung.einheit}</span></p>
            </div>
            <div className="bg-background rounded-[2rem] p-6 flex flex-col">
              <p className="font-semibold text-ink">Einzeländerung</p>
              <p className="text-xs text-muted-foreground mt-1">Einzelne spontane Änderungen ohne Wartungspaket</p>
              <p className="text-2xl font-bold text-ink mt-auto pt-4">{formatEuro(pricing.technik.einzelaenderung.betrag)} <span className="text-sm font-normal text-muted-foreground">{pricing.technik.einzelaenderung.einheit}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDING & PRINT */}
      <section id="grafik-print" className="py-14 md:py-20 bg-peach-muted scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">Branding &amp; Print</p>
          <div className="bg-background rounded-[2rem] overflow-hidden">
            {grafikItems.map((item, i) => (
              <div key={item.title} className={`flex items-center justify-between px-7 py-5 border-b border-ink/5 last:border-0 ${i % 2 !== 0 ? "bg-cream/40" : ""}`}>
                <div>
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <p className="text-sm font-bold text-ink shrink-0 ml-6">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section id="social" className="py-14 md:py-20 bg-cream scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">Social Media</p>
          <div className="bg-background rounded-[2rem] overflow-hidden">
            {socialItems.map((item, i) => (
              <div key={item.title} className={`flex items-center justify-between px-7 py-5 border-b border-ink/5 last:border-0 ${i % 2 !== 0 ? "bg-cream/40" : ""}`}>
                <div>
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <p className="text-sm font-bold text-ink shrink-0 ml-6">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAKETE */}
      <section id="pakete" className="py-14 md:py-20 bg-peach-muted scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-5">Pakete</p>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-background rounded-[2rem] p-6 flex flex-col">
              <p className="font-semibold text-ink mb-1">{pricing.pakete[0].titel}</p>
              <p className="text-xs text-muted-foreground">{pricing.pakete[0].beschreibung}</p>
              <p className="text-2xl font-bold text-ink mt-auto pt-4">{formatEuro(pricing.pakete[0].betrag)}</p>
              <p className="text-xs text-muted-foreground mt-1">statt {formatEuro(pricing.pakete[0].statt)} einzeln</p>
            </div>
            <div className="relative bg-[#E5DCD5]/50 rounded-[2rem] p-6">
              <div className="absolute -top-3 left-6 bg-accent text-primary text-[11px] font-semibold px-3 py-1 rounded-full">Komplett</div>
              <p className="font-semibold text-ink mb-1 mt-1">{pricing.pakete[1].titel}</p>
              <p className="text-xs text-muted-foreground mb-4">{pricing.pakete[1].beschreibung}</p>
              <p className="text-2xl font-bold text-ink">{formatEuro(pricing.pakete[1].betrag)}</p>
              <p className="text-xs text-muted-foreground mt-1">statt {formatEuro(pricing.pakete[1].statt)} einzeln</p>
            </div>
            <div className="bg-background rounded-[2rem] p-6">
              <p className="font-semibold text-ink mb-1">{pricing.pakete[2].titel}</p>
              <p className="text-xs text-muted-foreground mb-4">{pricing.pakete[2].beschreibung}</p>
              <p className="text-2xl font-bold text-ink">{formatEuro(pricing.pakete[2].betrag)}</p>
              <p className="text-xs text-muted-foreground mt-1">statt {formatEuro(pricing.pakete[2].statt)} einzeln</p>
            </div>
          </div>

          {/* Druck & Lieferung */}
          <p className="text-xs text-muted-foreground italic mt-6">
            Bestellung, Druck & Lieferung vieler Printprodukte kann vollständig von JAVERA STUDIO übernommen werden – Preis auf Anfrage.
          </p>

          {/* 10% Rabatt */}
          <div className="mt-4 bg-[#E5DCD5]/60 rounded-[1.75rem] px-6 py-4 text-center">
            <p className="text-sm text-ink">
              <span className="text-mauve mr-1">★</span>
              <strong>Website-Kunden erhalten {pricing.zahlung.websiteRabattProzent} % Rabatt</strong>{" "}auf alle Design-Leistungen (Grafik, Print &amp; Social Media).
            </p>
          </div>

          <p className="text-center text-[12px] text-muted-foreground mt-6">
            Aufgrund der Kleinunternehmerregelung wird keine Umsatzsteuer zusätzlich verrechnet · Individuelle Angebote auf Anfrage
          </p>
          <div className="mt-6 text-center">
            <Link href="#schreib-mir" className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium">
              Anfrage senden
            </Link>
            <p className="mt-3 text-xs text-muted-foreground">
              Nicht sicher welches Paket passt? Ich berate dich kurz und kostenlos.
            </p>
          </div>
        </div>
      </section>

      <QuoteSection quote={brandQuotes.websiteSpiegeltWerte} />

      {/* Zinsfreie Ratenzahlung */}
      <section id="finanzierung" className="py-14 md:py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[0.85fr_1.5fr] gap-10 md:gap-14 items-center">
            {/* Fließtext */}
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Finanzierung</div>
              <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">Zinsfreie Ratenzahlung</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Ich weiß, dass eine professionelle Website eine Investition ist und die Kosten gerade für Gründerinnen und kleinere Beauty-Unternehmen eine wichtige Rolle spielen können. Deshalb biete ich für größere Projekte eine zinsfreie Ratenzahlung an – damit du deinen professionellen Markenauftritt nicht auf später verschieben musst.
              </p>

              <div className="mt-8 space-y-5">
                {pricing.zahlung.ratenzahlung.map((rate) => (
                  <div key={rate.abBetrag} className="flex items-start gap-3">
                    <span aria-hidden className="mt-0.5 text-sm" style={{ color: "#0F6E56" }}>✓</span>
                    <div>
                      <p className="text-sm font-semibold text-ink">Projekte ab {formatEuro(rate.abBetrag)}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">Zahlung in {rate.raten} zinsfreien Monatsraten</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                Die erste Rate wird jeweils bei Auftragserteilung fällig, die weiteren Raten monatlich.
              </p>
              <p className="mt-4 max-w-[92%] text-xs text-muted-foreground leading-relaxed italic">
                Die Ratenzahlung ist ein freiwilliges Angebot und muss vor Projektbeginn gemeinsam vereinbart werden. Sie ist nicht automatisch Bestandteil jedes Projekts und wird individuell geprüft sowie im Vertrag festgehalten.
              </p>

              <div className="mt-8">
                <Link
                  href="#schreib-mir"
                  className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
                >
                  Ratenzahlung anfragen
                </Link>
              </div>
            </div>

            {/* Bild + schwebendes Editorial Panel */}
            <div className="md:relative">
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2.25rem] overflow-hidden">
                <Image
                  src="/ratenzahlung.jpg"
                  alt="Zinsfreie Ratenzahlung für deinen professionellen Online-Auftritt bei JAVERA Studio"
                  fill
                  className="object-cover"
                />
                <AiLabel className="top-2 left-2" />
              </div>
              <div className="w-[78%] ml-auto mr-6 -mt-12 md:ml-0 md:mr-0 md:mt-0 md:absolute md:left-0 md:right-auto md:-bottom-12 md:w-[68%] md:-translate-x-[14%] bg-rose-gold-soft rounded-[32px] p-8 md:p-11">
                <p className="font-serif text-lg md:text-xl text-ink leading-relaxed">
                  Jedes Studio verdient einen Auftritt, der die Qualität seiner Arbeit widerspiegelt.
                </p>
                <p className="mt-4 font-serif text-lg md:text-xl text-ink/70 leading-relaxed">
                  Deshalb dürfen große Ideen auch Schritt für Schritt entstehen.
                </p>
              </div>
            </div>
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

      <ContactForm />
      <SiteFooter />
      <ScrollRevealInit />
    </main>
  );
}
