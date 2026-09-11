import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { HeroVideo } from "@/components/HeroVideo";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { FaqHashOpen } from "@/components/FaqHashOpen";
import { SiteFooter } from "@/components/SiteFooter";
import { AiLabel } from "@/components/AiLabel";
import { brandQuotes } from "@/lib/brand-quotes";

export const metadata: Metadata = {
  title: "Javera Studio — Webdesign · Grafik · Branding für Beauty Studios Wien",
  description: "Website, Branding & Grafik für Beauty Studios in Wien. Von der Website über den visuellen Markenauftritt bis zu Flyern & Social Media – individuell gestaltet, professionell umgesetzt.",
  alternates: { canonical: "https://www.javera-studio.at/" },
  openGraph: {
    title: "Javera Studio — Webdesign · Grafik · Branding für Beauty Studios Wien",
    description: "Website, Branding & Grafik für Beauty Studios in Wien. Von der Website über den visuellen Markenauftritt bis zu Flyern & Social Media – individuell gestaltet, professionell umgesetzt.",
    url: "https://www.javera-studio.at/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Javera Studio — Webdesign · Grafik · Branding für Beauty Studios Wien",
    description: "Website, Branding & Grafik für Beauty Studios in Wien – individuell gestaltet, professionell umgesetzt.",
    images: ["/og-image.jpg"],
  },
};

/**
 * Startseiten-Struktur (überarbeitet – Fokus auf Kundenführung):
 *  1. Hero
 *  2. Vertrauensleiste (TrustBar)
 *  3. Über mich (kompakt)
 *  4. Drei echte Kundenprojekte (Face and More · Paula Venc · Divine Beauty & Nails) + Link zu /demo-websites
 *  5. Kundenbewertung
 *  6. Problem-/Nutzenabschnitt (vorerst stärkste bestehende Version: <Warum>)
 *  7. Kompakte Leistungsübersicht (<Angebot>)
 *  8. Ablauf der Zusammenarbeit
 *  9. Studio-Check
 * 10. FAQ
 * 11. Abschluss-CTA + Kontaktformular (allgemeine, unverbindliche Anfrage)
 * 12. Footer
 *
 * Geparkte, nicht mehr eingebundene Abschnitte liegen in
 * `src/components/home/parked-sections.tsx` (BrandManifesto, FeatureBadges, WarumJavera,
 * Zweifel) und `src/components/home/demo-showcase.tsx` (Demo-Projekte, Branding-Showcase).
 * Sie sind bewusst erhalten und dienen als Vorlage für die spätere Text-Konsolidierung von
 * „Warum eine Website" / „Warum Javera Studio" / „Keine Zeit, keine Technik" /
 * „kostenlose vs. kostenpflichtige Leistungen" / „Mehr als nur Webseiten".
 */

const benefits = [
  "Der erste Eindruck entsteht online — Noch bevor eine Kundin dein Studio besucht, informiert sie sich über Google oder Social Media.",
  "Vertrauen entscheidet — Eine professionelle Website schafft Vertrauen und hebt dein Studio von der Konkurrenz ab.",
  "Instagram allein reicht selten aus — Social Media ist wichtig – eine Website gibt deinem Studio ein dauerhaftes Zuhause im Internet und ergänzt deinen Online-Auftritt.",
  "Bei Google gefunden werden — Viele Kundinnen suchen aktiv nach Beauty-Studios in ihrer Nähe. Eine suchmaschinenoptimierte Website erhöht deine Sichtbarkeit und sorgt für mehr Anfragen.",
  "Ein einheitlicher Markenauftritt — Website, visueller Markenauftritt, Social Media und Print arbeiten zusammen und sorgen für einen professionellen, wiedererkennbaren Auftritt.",
];

const steps = [
  { n: "01", title: "Anfrage senden", desc: "Du füllst ein kurzes Formular aus und sagst mir, was du brauchst." },
  { n: "02", title: "Demo erhalten", desc: "Ich erstelle einen ersten Entwurf – abgestimmt auf dein Studio, deine Marke und deine Ziele." },
  { n: "03", title: "Feinabstimmung", desc: "Wir passen Farben, Texte und Details gemeinsam an." },
  { n: "04", title: "Fertigstellung & Launch", desc: "Dein Auftritt geht live – ich begleite dich bei jedem Schritt." },
];

const faqs = [
  { q: "Erstellst du auch Websites für Nagelstudios, Kosmetikstudios, Wimpernstudios, PMU-Studios oder Waxing-Studios?", a: "Ja, genau darauf bin ich spezialisiert. Ich gestalte Websites, Branding und Grafik ausschließlich für Beauty-Professionals – egal ob Nagelstudio, Kosmetikstudio, Wimpernstudio, PMU-Studio oder Waxing-Studio." },
  { q: "Was kostet eine Website für mein Beauty-Studio?", a: "Das hängt vom gewünschten Umfang ab. Auf meiner Preise-Seite findest du alle Pakete für Website, Branding und Social Media transparent aufgelistet – ohne versteckte Kosten." },
  { q: "Wird meine Website bei Google gefunden?", a: "Ja. Jede Website enthält eine SEO-Grundoptimierung, damit dein Studio bei Suchen wie 'Nagelstudio Wien' oder 'Kosmetikstudio in meiner Nähe' gefunden wird." },
  { q: "Was kostet mich die Demo?", a: "Nichts. Die Analyse & Demo-Vorschau ist kostenlos und unverbindlich – du entscheidest danach, ob du weitermachen möchtest." },
  { q: "Brauche ich eigene Texte oder Bilder?", a: "Nein. Du musst keine fertigen Texte mitbringen. Es reicht, wenn du mir Stichpunkte zu deinem Studio, deinen Leistungen, Preisen und deiner Arbeitsweise gibst. Ich unterstütze dich bei der Struktur und formuliere die Website-Texte professionell für dein Beauty-Studio. Eigene Fotos sind hilfreich, aber nicht zwingend notwendig." },
  { q: "Was passiert, wenn mir die Website nicht gefällt?", a: "Wir passen sie so lange an, bis sie wirklich zu deinem Studio passt. Dein Feedback ist fester Teil des Prozesses." },
  { q: "Wie lange dauert es, bis meine Website fertig ist?", a: "Die erste Demo bekommst du meist innerhalb weniger Tage. Die finale Umsetzung hängt vom Abstimmungstempo ab, bleibt aber bewusst schnell und unkompliziert." },
  { q: "Ich bin kein Technik-Mensch – ist das ein Problem?", a: "Nein. Ich erkläre dir jeden Schritt verständlich und übernehme die komplette Technik – Domain, Hosting und Einrichtung inklusive." },
  { q: "Kann ich auch nur Social Media Design oder Print bestellen – ohne Website?", a: "Ja. Website, visueller Markenauftritt, Flyer und Social Media Design sind einzeln buchbar – ganz gleich ob du ein Nagelstudio, Wimpernstudio oder PMU-Studio führst." },
  { q: "Kann ich meine Website auch in Raten bezahlen?", id: "faq-ratenzahlung", a: "Ja. Gerade der Start in die Selbstständigkeit bringt viele Investitionen mit sich. Deshalb biete ich für größere Projekte auf Wunsch eine zinsfreie Ratenzahlung in bis zu 4 Teilzahlungen an. Gemeinsam finden wir eine Lösung, die zu deinem Budget passt." },
];

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden text-primary-foreground" style={{ backgroundColor: "#F8F5F2" }}>
      <HeroVideo />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(28, 13, 7, 0.52)" }} aria-hidden />
      <AiLabel className="bottom-6 left-6" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-28 md:pt-48 md:pb-36 text-center">
        <h1 className="hero-headline font-serif max-w-3xl mx-auto text-[2.4rem] md:text-[3.375rem] lg:text-[4.05rem] leading-[1.15] md:leading-[1.1] text-white text-balance">
          Dein Studio ist professionell. Wirkt es online genauso?
        </h1>
        <p className="hero-subtitle mt-8 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Individuelle Websites für etablierte Beauty- und Kosmetikstudios, die ihre Expertise sichtbar machen, Vertrauen aufbauen und die passenden Kundinnen erreichen möchten.
        </p>
        <div className="hero-cta mt-10 flex flex-wrap gap-3 justify-center">
          <Link href="/webseiten-vorschau" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Webseiten-Vorschau
          </Link>
          <a href="#schreib-mir" className="px-7 py-3.5 rounded-full border border-white/40 text-white hover:bg-white hover:text-ink transition font-medium">
            Unverbindlich anfragen
          </a>
        </div>
        <p className="hero-cta mt-6 text-sm">
          <a href="#kundenprojekte" className="inline-flex items-center gap-1.5 text-white/75 underline underline-offset-4 decoration-white/40 hover:text-white hover:decoration-white transition">
            Ausgewählte Projekte ansehen <span aria-hidden>→</span>
          </a>
        </p>
      </div>
    </section>
  );
}

const trustPoints = [
  "Spezialisiert auf Beauty & Kosmetik",
  "Individuelles Design statt Standardvorlage",
  "Texte und Technik inklusive",
  "Keine verpflichtenden Abos",
];

function TrustBar() {
  return (
    <section id="vertrauen" aria-label="Darauf kannst du dich verlassen" className="border-y border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
          {trustPoints.map((p, i) => (
            <li key={p} className={`reveal reveal-stagger-${i + 1} flex items-center gap-3 text-sm text-ink/80 lg:justify-center lg:text-center`}>
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--rose-gold)" }} />
              <span className="leading-snug">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12 md:py-16 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="order-2 md:order-1">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Wer hinter Javera Studio steht</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Persönliches Webdesign mit Struktur und einem klaren Blick fürs Ganze.</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-[1.05rem]">
            <p className="reveal reveal-stagger-1">Ich bin Jagoda, Webdesignerin aus Wien und Gründerin von Javera Studio. Ich unterstütze Beauty- und Kosmetikstudios dabei, ihre Qualität auch online professionell sichtbar zu machen.</p>
            <p className="reveal reveal-stagger-2">Durch meinen beruflichen Hintergrund in IT, Prozessen und digitaler Organisation verbinde ich ästhetisches Design mit klarer Struktur und funktionierender Technik. Du arbeitest während des gesamten Projekts direkt mit mir – persönlich, verständlich und ohne technisches Vorwissen.</p>
          </div>
        </div>
        <div className="order-1 md:order-2 md:relative">
          <div className="reveal relative aspect-[4/5] rounded-[2.25rem] overflow-hidden">
            <Image src="/portrait.png" alt="Jagoda – Webdesignerin aus Wien" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 w-[78%] ml-auto mr-6 -mt-12 md:ml-0 md:mr-0 md:mt-0 md:absolute md:left-0 md:right-auto md:-bottom-12 md:w-[70%] md:-translate-x-[15%] md:translate-y-[10%] bg-rose-gold-soft rounded-[32px] p-6 md:p-8">
            <p className="font-serif text-base md:text-lg text-ink leading-relaxed">
              Ich möchte, dass du deine Website ansiehst und genau dasselbe fühlst wie deine Kundin nach dem Blick in den Spiegel.
            </p>
            <p className="mt-3 font-serif text-2xl md:text-3xl text-ink leading-snug">
              „Das bin ich.“
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaceAndMore() {
  const leistungen = ["Kompletter Website-Relaunch", "Migration von Wix zu Vercel", "Mobile Optimierung", "Domain erfolgreich migriert", "Leistungsseiten & FAQ-Bereich", "SEO-freundliche Struktur"];
  return (
    <section id="kundenprojekte" className="py-12 md:py-16 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14 md:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Kundenprojekte</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Aus Ideen werden Ergebnisse</h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg leading-relaxed">Von modernen Websites bis zu praktischen digitalen Lösungen: Hier findest du ausgewählte Projekte, die ich gemeinsam mit Beauty Studios umgesetzt habe – individuell, durchdacht und abgestimmt auf die Bedürfnisse jedes Unternehmens.</p>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Kundenprojekt</div>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="reveal md:col-span-7 flex flex-col gap-6">
            <div className="w-full drop-shadow-2xl">
              <Image src="/faceandmoremockup.png" alt="Website faceandmore.at am Smartphone" loading="lazy" width={1200} height={800} className="w-full" />
            </div>
            <p className="font-serif text-lg text-ink leading-relaxed">Das Ergebnis: Eine moderne Premium-Website, die Kompetenz sichtbar macht und Vertrauen schafft.</p>
            <a href="https://faceandmore.at" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium w-fit">
              Webseite ansehen <span aria-hidden>→</span>
            </a>
          </div>
          <div className="md:col-span-5">
            <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Face and More –<br />Hautanalyse & Premium Hautpflege Wien</h2>
            <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">Für Face and More durfte ich einen kompletten Website-Relaunch umsetzen – modern, klar und auf Premium ausgerichtet.</p>
            <p className="reveal mt-5 text-sm text-muted-foreground uppercase tracking-widest">Gemeinsam haben wir:</p>
            <ul className="reveal mt-4 space-y-3">
              {leistungen.map((l) => (
                <li key={l} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" /><span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaceAndMoreSocial() {
  const leistungen = [
    "Instagram-Profil optimiert",
    "6 Highlight-Cover gestaltet",
    "1 Karussell-Post Vorlage erstellt",
    "2 editierbare Beitragsvorlagen entwickelt",
    "6 Story-Vorlagen für regelmäßige Inhalte",
    "Einheitliches Branding für Website & Social Media",
  ];

  return (
    <section className="py-12 md:py-16 bg-stone-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left: Mockup Images */}
          <div className="reveal md:col-span-7">
            {/* Mobile: stacked */}
            <div className="flex flex-col gap-4 md:hidden">
              <Image
                src="/insta.mockup.feed.png"
                alt="Instagram Feed & Story Mockup für Face & More"
                loading="lazy"
                width={800}
                height={600}
                className="w-full rounded-2xl drop-shadow-xl"
              />
              <Image
                src="/insta.mockup.png"
                alt="Instagram-Profil Mockup für Face & More"
                loading="lazy"
                width={600}
                height={600}
                className="w-3/4 mx-auto"
                style={{ filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.13))" }}
              />
            </div>
            {/* Desktop: overlapping layout – Feed groß, Profil versetzt */}
            <div className="hidden md:block relative" style={{ paddingBottom: "11rem" }}>
              <div className="w-[56%] relative z-10 drop-shadow-2xl">
                <Image
                  src="/insta.mockup.feed.png"
                  alt="Instagram Feed & Story Mockup für Face & More"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full rounded-2xl"
                />
              </div>
              <div
                className="absolute bottom-0 w-[41%] z-20"
                style={{ left: "38%", transform: "translateY(-30%)", filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.14))" }}
              >
                <Image
                  src="/insta.mockup.png"
                  alt="Instagram-Profil Mockup für Face & More"
                  loading="lazy"
                  width={600}
                  height={600}
                  className="w-full"
                />
              </div>
            </div>
            <p className="reveal mt-8 font-script text-mauve-dark text-2xl md:text-3xl">
              Ein professioneller Auftritt endet nicht bei der Website – er setzt sich auf Social Media fort.
            </p>
          </div>

          {/* Right: Text */}
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4 break-words">
              Social Media Visibility Paket
            </div>
            <h2 className="reveal font-serif text-3xl md:text-5xl text-ink leading-tight">
              Instagram-Auftritt mit Wiedererkennungswert
            </h2>
            <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">
              Neben dem Website-Relaunch wurde auch der Instagram-Auftritt von Face &amp; More überarbeitet. Ziel war ein professioneller, einheitlicher Markenauftritt, der Vertrauen schafft und die Expertise des Studios sichtbar macht.
            </p>
            <p className="reveal mt-5 text-sm text-muted-foreground uppercase tracking-widest">Gemeinsam haben wir:</p>
            <ul className="reveal mt-4 space-y-3">
              {leistungen.map((l) => (
                <li key={l} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaulaVenc() {
  const leistungen = ["Komplette Website gestaltet", "Mobile Optimierung umgesetzt", "Domain eingerichtet", "Treatwell integriert", "Gesamte technische Einrichtung übernommen"];
  return (
    <section className="py-12 md:py-16 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Paula Venc –<br />Private Nailartist Wien</h2>
            <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">Für Paula durfte ich einen eleganten One-Pager entwickeln, der perfekt zu ihrem Studio und ihrer ruhigen, privaten Atmosphäre passt. Alle wichtigen Informationen sind übersichtlich an einem Ort gebündelt – professionell, modern und genau auf ihre Bedürfnisse abgestimmt.</p>
            <p className="reveal mt-5 text-sm text-muted-foreground uppercase tracking-widest">Gemeinsam haben wir:</p>
            <ul className="reveal mt-4 space-y-3">
              {leistungen.map((l) => (
                <li key={l} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" /><span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal md:col-span-7 flex flex-col gap-6">
            <div className="w-full drop-shadow-2xl">
              <Image src="/paulavencmockup.png" alt="Website paulavenc.at am Smartphone" loading="lazy" width={1200} height={800} className="w-full" />
            </div>
            <p className="font-script text-mauve-dark text-2xl md:text-3xl">Die richtige Lösung ist nicht immer die größte Website, sondern die passende Website.</p>
            <a href="https://paulavenc.at" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium w-fit">
              Website ansehen <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DivineBeautyNails() {
  const leistungen = ["Digitales Kalendersystem für das Team", "Komplette Website entwickelt", "Mobile Optimierung umgesetzt", "Kontaktmöglichkeiten integriert", "Übersichtliche Leistungsdarstellung", "SEO-freundliche Struktur"];
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Kundenprojekt</div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Divine Beauty &amp; Nails Studio</h2>
        <p className="reveal reveal-delay mt-3 text-muted-foreground text-lg mb-12 md:mb-16">Website, digitale Studioorganisation &amp; ein professioneller Online-Auftritt für ein Beauty Studio in Wien.</p>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="reveal md:col-span-7 flex flex-col gap-6">
            <div className="w-full drop-shadow-2xl">
              <Image src="/divinenailsmockup.png" alt="Website divinenails.at am Smartphone" loading="lazy" width={1200} height={800} className="w-full" />
            </div>
            <p className="font-serif text-base text-ink leading-relaxed">Das Ergebnis: Ein digitaler Auftritt, der Studioorganisation und professionelle Sichtbarkeit verbindet.</p>
            <a href="https://divinenails.at" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium w-fit">
              Website ansehen <span aria-hidden>→</span>
            </a>
          </div>
          <div className="md:col-span-5">
            <p className="reveal text-muted-foreground text-lg leading-relaxed">Die Zusammenarbeit mit Divine Beauty &amp; Nails begann mit einer praktischen Lösung für den Studioalltag: einem übersichtlichen digitalen Kalendersystem für mehrere Mitarbeiterinnen.</p>
            <p className="reveal mt-4 text-muted-foreground text-lg leading-relaxed">Nach der erfolgreichen Einführung durfte ich anschließend auch den neuen Online-Auftritt des Studios umsetzen – modern, mobil optimiert und passend zur Atmosphäre des Studios.</p>
            <p className="reveal mt-6 text-sm text-muted-foreground uppercase tracking-widest">Gemeinsam haben wir:</p>
            <ul className="reveal mt-4 space-y-3">
              {leistungen.map((l) => (
                <li key={l} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" /><span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="reveal mt-14 md:mt-20 rounded-3xl bg-background border border-border/60 p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-14 items-start">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-white/60">
                <Image src="/kalender-feedback.jpg" alt="Feedback zur Kalender-Lösung" loading="lazy" width={600} height={800} className="w-full" />
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border/40 bg-background">
                  <Image src="/kalender-anleitung.png" alt="Individuelle Team-Anleitung" loading="lazy" width={600} height={800} className="w-full" />
                </div>
                <p className="mt-2 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Team-Anleitung</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Wie alles begann</p>
              <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">Manchmal beginnt eine gute Zusammenarbeit mit einer kleinen, praktischen Lösung.</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">Für das Team von Divine Beauty &amp; Nails entstand zuerst ein einfaches Kalendersystem mit gemeinsamer Terminübersicht, Farben pro Mitarbeiterin und einer individuellen Anleitung, damit das Team sofort selbstständig arbeiten konnte.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoWebsitesLink() {
  return (
    <section aria-label="Demo-Websites" className="pb-4 md:pb-8">
      <div className="reveal max-w-6xl mx-auto px-6 text-center">
        <Link href="/demo-websites" className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
          Demo-Websites ansehen <span aria-hidden>→</span>
        </Link>
        <p className="mt-3 text-xs text-muted-foreground">Beispiel-Websites für weitere Beauty-Bereiche</p>
      </div>
    </section>
  );
}

function Warum() {
  return (
    <section id="warum" className="py-12 md:py-16 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-28">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Warum eine Website</div>
            <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Deine Website ist das Schaufenster deines Studios im Internet.</h2>
            <div className="reveal reveal-delay mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>Viele Beauty-Studios investieren Tausende Euro in ihre Einrichtung, hochwertige Geräte und regelmäßige Schulungen – und das aus gutem Grund.</p>
              <p>Doch der erste Eindruck entsteht heute oft lange bevor eine Kundin dein Studio betritt.</p>
              <p>Sie besucht deine Website, schaut sich deine Arbeiten an und entscheidet innerhalb weniger Sekunden, ob sie Vertrauen fasst oder weitersucht.</p>
              <p>Deshalb verdient dein Studio eine Website, die genauso hochwertig wirkt wie deine Arbeit.</p>
            </div>
            <Link href="/webseiten-vorschau" className="reveal inline-block mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
              Kostenlose Webseiten-Vorschau anfragen
            </Link>
          </div>
          <ul className="space-y-1">
            {benefits.map((b, i) => (
              <li key={b} className={`reveal reveal-stagger-${(i % 6) + 1} flex items-start gap-5 py-5 border-b border-border/60 last:border-0`}>
                <span className="font-serif text-2xl text-muted-foreground/80 w-8">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg text-ink pt-1">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="reveal mt-20 mb-10 text-center font-script text-mauve-dark text-3xl md:text-4xl">
          {brandQuotes.vertrauenVorTermin}
        </p>

        <div className="relative grid md:grid-cols-2 gap-6 md:gap-8">
          <figure className="reveal">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
              <Image src="/bild1.png" alt="Website auf dem Smartphone – der erste Eindruck online" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
              <AiLabel />
            </div>
            <figcaption className="mt-5 text-center">
              <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">01 — Online</span>
              <span className="block mt-1.5 font-serif text-lg text-ink">Der erste Eindruck online.</span>
            </figcaption>
          </figure>

          <div aria-hidden className="hidden md:flex absolute left-1/2 top-[38%] -translate-x-1/2 z-10 items-center gap-2 text-mauve">
            <span className="editorial-rule" />
            <span className="text-sm">→</span>
            <span className="editorial-rule" />
          </div>

          <figure className="reveal reveal-delay">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
              <Image src="/success.jpg" alt="Modernes, gebuchtes Beauty Studio mit zufriedener Kundin" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
              <AiLabel />
            </div>
            <figcaption className="mt-5 text-center">
              <span className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">02 — Im Studio</span>
              <span className="block mt-1.5 font-serif text-lg text-ink">Das Erlebnis im Studio.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Angebot() {
  const free = ["Erstgespräch & Kennenlernen", "Projektbesprechung & erste Ideen", "Erste Design-/Demo-Vorschau", "Individuelle Konzeptideen für deinen Online-Auftritt", "Beratung zu Aufbau, Buchungssystem & Struktur"];
  const paid = ["Online-Präsenz Analyse & Optimierungsplan", "Individuelle Website-Erstellung", "Visueller Markenauftritt (Farben, Typografie, Bildsprache)", "Flyer, Visitenkarten & Print-Design (druckfertig)", "Social Media Design (Posts, Stories, Cover Sets)", "Mobile Optimierung & SEO-Grundoptimierung", "Domain & Hosting Einrichtung", "Buchungs-/Kalenderlösungen", "Zusätzliche Unterseiten oder Erweiterungen", "Änderungen, Pflege & laufende Betreuung der Inhalte"];

  return (
    <section id="angebot" className="py-12 md:py-16 bg-cream scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Mein Angebot</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Was du bei mir bekommst</h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg">Transparente Leistungen – von der kostenlosen Erstberatung bis zum fertigen Gesamtauftritt.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="reveal relative rounded-3xl border border-border/60 bg-background p-8 md:p-10 shadow-sm">
            <div className="absolute -top-3 left-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-soft text-ink text-[11px] uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/70" />Kostenlos
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-ink mt-2">Unverbindlich &amp; kostenlos</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">Kennenlernen, beraten, Ideen sammeln – ohne Verpflichtung.</p>
            <ul className="mt-8 space-y-4">
              {free.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" /><span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/webseiten-vorschau" className="inline-block mt-10 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
              Kostenlose Webseiten-Vorschau anfragen
            </Link>
          </div>
          <div className="reveal reveal-delay relative rounded-3xl border border-mauve/30 bg-gradient-to-br from-peach-soft via-background to-accent/40 p-8 md:p-10 shadow-sm">
            <div className="absolute -top-3 left-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mauve text-white text-[11px] uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />Leistungen
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-ink mt-2">Kostenpflichtige Leistungen</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">Alles, was dein Studio professionell, sichtbar und unverwechselbar macht – online wie offline.</p>
            <ul className="mt-8 grid sm:grid-cols-1 gap-y-4">
              {paid.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" /><span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">Individuelles Angebot nach deinem Bedarf – fair &amp; transparent kalkuliert.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/leistungen" className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
            Alle Leistungen ansehen <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Ablauf() {
  return (
    <section id="ablauf" className="py-12 md:py-16 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Ablauf</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">So läuft unsere Zusammenarbeit ab</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className={`reveal-card reveal-stagger-${i + 1} p-8 rounded-3xl border border-border/60 bg-background hover:bg-cream transition`}>
              <span className="font-serif text-5xl text-muted-foreground/80">{s.n}</span>
              <h3 className="font-serif text-2xl text-ink mt-6">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-12 text-center text-muted-foreground italic">Einfach, schnell und ohne komplizierten Prozess.</p>
        <div className="mt-8 text-center reveal">
          <Link href="/webseiten-vorschau" className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Webseiten-Vorschau anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-cream scroll-mt-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">FAQ</div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight text-center">Häufige Fragen</h2>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} id={f.id} className={`reveal reveal-stagger-${(i % 6) + 1} group scroll-mt-28 rounded-2xl bg-background border border-border/60 p-6 open:shadow-sm transition`}>
              <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                <span className="font-serif text-lg md:text-xl text-ink">{f.q}</span>
                <span aria-hidden className="shrink-0 w-7 h-7 rounded-full border border-ink/20 flex items-center justify-center text-ink transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 text-center reveal">
          <Link href="/webseiten-vorschau" className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Webseiten-Vorschau anfragen
          </Link>
          <p className="mt-3 text-xs text-muted-foreground">Unverbindlich · Antwort in 24h · kostenlos starten</p>
        </div>
      </div>
    </section>
  );
}

function StudioCheckCTA() {
  return (
    <section id="studio-check" className="py-12 md:py-16 scroll-mt-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="reveal relative rounded-3xl border border-mauve/30 bg-gradient-to-br from-peach-soft via-background to-accent/40 p-8 md:p-12 shadow-sm text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
            Noch unsicher, wie dein Studio online auf neue Kundinnen wirkt?
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Finde es in nur 3 Minuten heraus.
          </p>
          <p className="mt-6 text-sm font-medium text-ink">Der kostenlose Studio-Check bewertet unter anderem:</p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-md mx-auto text-left">
            {["Vertrauen", "Markenauftritt", "Sichtbarkeit", "Buchungsmöglichkeiten"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-ink">
                <span className="shrink-0 text-sm" style={{ color: "#0F6E56" }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/studio-check"
            className="inline-block mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
          >
            Kostenlosen Studio-Check starten
          </Link>
          <p className="mt-3 text-xs text-muted-foreground">Keine E-Mail · Sofortiges Ergebnis · Kostenlos</p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="kontakt" className="relative py-12 md:py-16 overflow-hidden scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">
        <div className="relative order-2 md:order-1 flex flex-col">
          <div className="reveal relative flex-1 rounded-3xl overflow-hidden shadow-xl shadow-ink/10">
            <Image src="/anfrage.png" alt="Beauty Studio Besitzerin arbeitet entspannt am Laptop" loading="lazy" width={1536} height={1024} className="w-full h-full object-cover" />
            <AiLabel />
          </div>
          <div aria-hidden className="absolute -z-10 -bottom-6 -left-6 w-full h-full rounded-3xl" style={{ backgroundColor: "var(--mint-soft)" }} />
        </div>
        <div className="order-1 md:order-2 text-center md:text-left">
          <h2 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">Bereit für einen Auftritt, der dein Studio wirklich widerspiegelt – und neue Kundinnen bringt?</h2>
          <p className="reveal reveal-delay mt-6 text-lg text-muted-foreground">Schick mir eine kurze Anfrage – ich melde mich persönlich bei dir.</p>
          <Link href="/webseiten-vorschau" className="reveal inline-block mt-10 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Webseiten-Vorschau anfragen
          </Link>
          <p className="reveal mt-4 text-sm text-muted-foreground">
            Nur eine allgemeine Frage oder Beratungswunsch?{" "}
            <a href="#schreib-mir" className="text-ink underline underline-offset-4 hover:text-mauve transition-colors">
              Unverbindlich anfragen
            </a>
          </p>
          <p className="reveal mt-4 text-sm text-muted-foreground">speziell für Beauty Studios</p>
        </div>
      </div>
    </section>
  );
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <main className="bg-background text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollRevealInit />
      <FaqHashOpen />
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <FaceAndMore />
      <FaceAndMoreSocial />
      <PaulaVenc />
      <DivineBeautyNails />
      <DemoWebsitesLink />
      <Testimonials />
      <Warum />
      <Angebot />
      <Ablauf />
      <StudioCheckCTA />
      <FAQ />
      <CTA />
      <ContactForm />
      <SiteFooter />
    </main>
  );
}
