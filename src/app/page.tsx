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
import { pricing, formatEuro } from "@/lib/data/pricing";

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
 *  4. Echte Kundenprojekte als kompaktes, einheitliches Grid (<Kundenprojekte>) – Mockup,
 *     Name, Branche/Ort, ein Satz Beschreibung, wenige Tags, ein Design-/Mehrwertsatz,
 *     Link zur Live-Website. Aktuell: Face and More, Paula Venc, Divine Beauty & Nails,
 *     Anita Brows & Lashes. Keine der drei Kundenprojekte wird mehr optisch als
 *     "Hauptprojekt" hervorgehoben – bewusst einheitliche Darstellung, gut erweiterbar.
 *  5. Alle Kundenbewertungen vollständig (<Testimonials>)
 *  6. Button „Mehr über meine Arbeit erfahren" -> /meine-arbeit
 *  7. Kompakter Problem-/Nutzenabschnitt (<Warum>) – ersetzt den bisherigen ausführlichen
 *     „Warum eine Website"-Block mit den fünf Standardargumenten
 *  8. Kompakte Leistungsübersicht (<Leistungsuebersicht>) – Website als Hauptleistung,
 *     digitale Präsenz & Printdesign als Ergänzungen, keine kostenlos/kostenpflichtig-
 *     Trennung mehr (Positionierung: Webdesign · digitale Präsenz · Printdesign)
 *  9. Ablauf der Zusammenarbeit
 * 10. Studio-Check
 * 11. FAQ
 * 12. Kontaktbereich: Bild + dezenter Vorschau-Link (<KontaktVisual>) + Kontaktformular
 *     (allgemeine, unverbindliche Anfrage)
 * 13. Footer
 *
 * Der bisherige Social-Media-Bereich von Face and More (Instagram-Mockups, Highlight-Cover
 * etc.) liegt vollständig auf `/meine-arbeit#face-and-more`
 * (`src/components/portfolio/face-and-more-social.tsx`) und wird auf der Startseite seit
 * der Kundenprojekte-Verdichtung nicht mehr separat verlinkt.
 *
 * Geparkte, nicht mehr eingebundene Abschnitte/Texte liegen in
 * `src/components/home/parked-sections.tsx` (BrandManifesto, FeatureBadges, WarumJavera,
 * Zweifel, warumBenefitsLegacy, divineKalenderStory). Sie sind bewusst erhalten und dienen
 * als Archiv bzw. Vorlage für eine spätere Text-Konsolidierung von „Warum Javera Studio" /
 * „Keine Zeit, keine Technik" / „kostenlose vs. kostenpflichtige Leistungen" /
 * „Mehr als nur Webseiten" – sie werden nicht erneut auf der Startseite eingebunden.
 */

const steps = [
  { n: "01", title: "Kurze Anfrage", desc: "Du erzählst mir kurz von deinem Studio, deinem bestehenden Auftritt und davon, was du verändern möchtest. Dafür reichen zunächst wenige Stichpunkte oder ein Link zu deiner aktuellen Website beziehungsweise deinem Social-Media-Profil." },
  { n: "02", title: "Kostenlose Vorschau", desc: "Ich entwickle eine erste visuelle Richtung für deine Website. So bekommst du vorab ein Gefühl dafür, wie dein Studio online wirken könnte – kostenlos und unverbindlich." },
  { n: "03", title: "Entscheidung und Umsetzung", desc: "Gefällt dir die Richtung, erhältst du ein transparentes Angebot. Erst nach deiner Zusage beginnen die vollständige Ausarbeitung, die Texte und die gemeinsame Feinabstimmung." },
  { n: "04", title: "Fertigstellung und Veröffentlichung", desc: "Nach der finalen Abstimmung geht deine Website online. Ich übernehme die technische Einrichtung und begleite dich auch nach der Veröffentlichung persönlich weiter." },
];

const faqs = [
  { q: "Was kostet mich die kostenlose Webseiten-Vorschau?", a: "Nichts. Die Webseiten-Vorschau ist kostenlos und unverbindlich – du entscheidest danach in Ruhe, ob du weitermachen möchtest." },
  { q: "Was kostet eine Website für mein Beauty-Studio?", a: `Eine Starter Website startet bei ${formatEuro(pricing.websites.starter.betrag)}, eine Premium Website mit bis zu 3 Seiten ab ${formatEuro(pricing.websites.premium.betrag)}. Domain, Hosting und ggf. E-Mail laufen direkt über den jeweiligen Anbieter auf deinen Namen – ein Wartungsabo bei Javera Studio ist nicht verpflichtend.` },
  { q: "Brauche ich eigene Texte oder Bilder?", a: "Nein. Ein paar Stichpunkte zu deinem Studio und deinen Leistungen reichen aus – ich formuliere daraus professionelle Website-Texte. Eigene Fotos sind hilfreich, aber nicht zwingend notwendig." },
  { q: "Wie lange dauert es, bis meine Website fertig ist?", a: "Die erste Vorschau bekommst du meist innerhalb weniger Tage. Die finale Umsetzung hängt vom Abstimmungstempo ab, bleibt aber bewusst schnell und unkompliziert." },
  { q: "Ich habe schon eine Website – lohnt sich ein Redesign?", a: "Das kommt auf deine aktuelle Situation an. Manchmal reichen gezielte Optimierungen, manchmal lohnt sich eine komplette Neuausrichtung. Die kostenlose Vorschau zeigt dir unverbindlich, welche Richtung zu deinem Studio passt." },
  { q: "Kann ich später noch Änderungen an meiner Website vornehmen lassen?", a: `Ja. Nach dem Launch bekommst du eine kostenlose Nachbetreuung. Danach lassen sich weitere Anpassungen flexibel über das Wartungspaket (${formatEuro(pricing.technik.wartung.betrag)} ${pricing.technik.wartung.einheit}, ${pricing.technik.wartung.inklusive}) oder als Einzeländerung (${formatEuro(pricing.technik.einzelaenderung.betrag)} einmalig) dazubuchen – ganz ohne verpflichtendes Abo.` },
];

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden text-primary-foreground" style={{ backgroundColor: "#F8F5F2" }}>
      <HeroVideo />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(28, 13, 7, 0.52)" }} aria-hidden />
      <AiLabel className="bottom-6 left-6" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-28 md:pt-48 md:pb-36 text-center">
        <h1 className="hero-headline font-serif text-[2.4rem] md:text-[3.375rem] lg:text-[4.05rem] leading-[1.15] md:leading-[1.1] text-white text-balance">
          Die Qualität deines Studios.
          <br />
          Auch online spürbar.
        </h1>
        <p className="hero-subtitle mt-8 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Individuelle Websites für Beauty- und Kosmetikstudios, die zeigen, was deine Arbeit besonders macht.
        </p>
        <div className="hero-cta mt-24 md:mt-28 flex flex-wrap gap-3 justify-center">
          <Link href="/webseiten-vorschau" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Webseiten-Vorschau
          </Link>
          <a href="#schreib-mir" className="px-7 py-3.5 rounded-full border border-white/40 text-white hover:bg-white hover:text-ink transition font-medium">
            Unverbindlich anfragen
          </a>
        </div>
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

type CustomerProject = {
  name: string;
  location: string;
  description: string;
  tags: string[];
  valueStatement: string;
  url: string;
  mockupSrc: string;
  mockupAlt: string;
};

// Kompakte, einheitliche Struktur für alle echten Kundenprojekte: Mockup, Name,
// Branche/Ort, ein Satz Beschreibung, wenige Tags, ein individueller Design-/
// Mehrwertsatz, Link zur Live-Website. Keine Preise, keine ausführlichen
// Leistungslisten mehr direkt auf der Startseite (siehe /meine-arbeit für mehr).
const customerProjects: CustomerProject[] = [
  {
    name: "Face and More",
    location: "Hautanalyse & Premium Hautpflege · Wien",
    description: "Kompletter Website-Relaunch, der die fachliche Kompetenz und den Premium-Anspruch des Studios online klar erkennbar macht.",
    tags: ["Premium Website", "Leistungsseiten", "SEO-Struktur"],
    valueStatement: "Viele Leistungen brauchen keine komplizierte Website – sondern eine Struktur, die Orientierung schafft und Kompetenz sichtbar macht.",
    url: "https://faceandmore.at",
    mockupSrc: "/faceandmoremockup.png",
    mockupAlt: "Website faceandmore.at am Smartphone",
  },
  {
    name: "Paula Venc",
    location: "Private Nailartist · Wien",
    description: "Eleganter One-Pager, der alle wichtigen Informationen ruhig und übersichtlich an einem Ort bündelt.",
    tags: ["One-Pager", "Treatwell-Buchung", "Eigene Domain"],
    valueStatement: "Manchmal braucht es nicht viele Seiten, sondern einen klaren Auftritt, der auf den ersten Blick Vertrauen schafft.",
    url: "https://paulavenc.at",
    mockupSrc: "/paulavencmockup.png",
    mockupAlt: "Website paulavenc.at am Smartphone",
  },
  {
    name: "Divine Beauty & Nails",
    location: "Beauty Studio · Wien",
    description: "Neuer Online-Auftritt mit klarer Leistungsdarstellung, entstanden im Anschluss an ein digitales Kalendersystem für das Team.",
    tags: ["Website", "Kalendersystem", "Kontaktmöglichkeiten", "SEO-Struktur"],
    valueStatement: "Eine Website darf nicht nur schön aussehen – sie soll den Weg von der ersten Information bis zur Terminbuchung einfach machen.",
    url: "https://divinenails.at",
    mockupSrc: "/divinenailsmockup.png",
    mockupAlt: "Website divinenails.at am Smartphone",
  },
  {
    name: "Anita Brows & Lashes",
    location: "Lash & Brow Studio · Wien 1010",
    description: "Hochwertiger Website-Relaunch als kompakter One-Pager mit zusätzlicher Preisseite.",
    tags: ["One-Pager", "Preisseite", "SEO", "Terminbuchung"],
    valueStatement: "Auch eine kompakte Website kann Qualität, Persönlichkeit und die Atmosphäre eines Studios spürbar machen.",
    url: "https://www.anitabrowsandlashes.at/",
    mockupSrc: "/mockup-anitabrowsandlashes.png",
    mockupAlt: "Website anitabrowsandlashes.at am Smartphone",
  },
];

function ProjectCard({ project, index }: { project: CustomerProject; index: number }) {
  return (
    <div className={`reveal reveal-stagger-${(index % 4) + 1} flex flex-col gap-5`}>
      <div className="w-full rounded-2xl overflow-hidden drop-shadow-2xl">
        <Image src={project.mockupSrc} alt={project.mockupAlt} loading="lazy" width={1200} height={800} className="w-full" />
      </div>
      <div>
        <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">{project.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.1em] text-muted-foreground">{project.location}</p>
        <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[11px] uppercase tracking-wide px-3 py-1 rounded-full bg-cream text-ink/70 border border-border/50">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-5 font-script text-mauve-dark text-xl md:text-2xl leading-snug">{project.valueStatement}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium w-fit"
        >
          Website ansehen <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}

function Kundenprojekte() {
  return (
    <section id="kundenprojekte" className="py-12 md:py-16 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14 md:mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Ausgewählte Kundenprojekte</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Websites, die zeigen, was hinter einem Studio steckt.</h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg leading-relaxed">Jedes Studio bringt andere Leistungen, Ziele und Herausforderungen mit. Deshalb entsteht jede Website individuell – abgestimmt auf die Positionierung, die Kundinnen und den tatsächlichen Studioalltag.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-14 md:gap-y-16">
          {customerProjects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MeineArbeitLink() {
  return (
    <section aria-label="Mehr über meine Arbeit" className="pb-4 md:pb-8">
      <div className="reveal max-w-6xl mx-auto px-6 text-center">
        <Link href="/meine-arbeit" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-ink hover:bg-cream transition-all hover:scale-[1.02] font-medium">
          Mehr über meine Arbeit erfahren <span aria-hidden>→</span>
        </Link>
        <p className="mt-3 text-xs text-muted-foreground">Weitere Designkonzepte, Demo-Websites & visuelle Markenwelten</p>
      </div>
    </section>
  );
}

const onlineAuftrittFragen = [
  "Ist sofort erkennbar, wofür dein Studio steht?",
  "Werden deine wichtigsten Behandlungen verständlich präsentiert?",
  "Wirkt dein Online-Auftritt so hochwertig wie deine Arbeit und deine Preise?",
  "Finden Interessentinnen schnell zur Anfrage oder Buchung?",
];

function Warum() {
  return (
    <section id="warum" className="py-14 md:py-20 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Der erste Eindruck entsteht online</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Gute Arbeit allein reicht nicht, wenn man sie online nicht erkennt.</h2>
            <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">
              Deine Kundinnen sehen deine Erfahrung, deine Geräte und die Qualität deiner Behandlungen nicht sofort. Sie sehen zuerst deine Website, dein Google-Profil oder deinen Social-Media-Auftritt. Genau dort entsteht der erste Eindruck von deinem Studio.
            </p>

            <ol className="mt-10">
              {onlineAuftrittFragen.map((f, i) => (
                <li key={f} className={`reveal reveal-stagger-${i + 1} flex items-start gap-5 py-4 border-b border-border/60 last:border-0`}>
                  <span className="font-serif text-xl text-muted-foreground/70 w-7 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg text-ink leading-relaxed">{f}</span>
                </li>
              ))}
            </ol>

            <p className="reveal mt-8 text-muted-foreground text-lg leading-relaxed">
              Wenn eine dieser Fragen schwer zu beantworten ist, kann es sein, dass dein Online-Auftritt noch nicht zeigt, was dein Studio heute wirklich ausmacht.
            </p>
            <p className="reveal mt-4 font-medium text-lg md:text-xl text-ink leading-relaxed">
              Eine klare, professionell aufgebaute Website macht deine Expertise sichtbar, schafft Vertrauen und führt Interessentinnen gezielt zum nächsten Schritt.
            </p>

            <Link href="/webseiten-vorschau" className="reveal inline-block mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
              Kostenlose Webseiten-Vorschau anfragen
            </Link>
          </div>

          <figure className="reveal md:sticky md:top-28">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
              <Image src="/bild1.png" alt="Website auf dem Smartphone – der erste Eindruck online" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
              <AiLabel />
            </div>
            <figcaption className="mt-4 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Der erste Eindruck online.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

const websiteLeistungen = [
  "Individuelles Design statt Standardvorlage",
  "Klare Struktur für Leistungen und Angebote",
  "Professionelle Texte auf Basis der Kundeninformationen",
  "Optimierte Darstellung auf Smartphone, Tablet und Desktop",
  "Technische und inhaltliche SEO-Grundlagen",
  "Einbindung vorhandener Buchungs- und Kontaktmöglichkeiten",
];

const digitalePraesenzLeistungen = [
  "Einrichtung oder Optimierung des Google-Unternehmensprofils",
  "Visuelle Social-Media-Vorlagen",
  "Highlight-Cover und wiederverwendbare Beitragslayouts",
  "Abstimmung der digitalen Kontaktpunkte auf den bestehenden Auftritt",
];

const printLeistungen = ["Visitenkarten", "Flyer", "Gutscheine", "Preislisten", "Roll-ups und weitere Druckmaterialien"];

function Leistungsuebersicht() {
  return (
    <section id="angebot" className="py-12 md:py-16 bg-cream scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14 md:mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Was ich für dein Studio übernehme</div>
          <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Du brauchst nicht einfach eine schönere Website. Du brauchst eine, die zu deinem heutigen Studio passt.</h2>
          <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">Vielleicht ist dein Angebot gewachsen, deine Spezialisierung klarer geworden oder dein Studio längst professioneller als zu Beginn. Deine Website sollte diese Entwicklung sichtbar machen.</p>
          <p className="reveal mt-4 text-muted-foreground text-lg leading-relaxed">Ich entwickle daraus einen klaren digitalen Auftritt – mit einer individuellen Website als Grundlage und passenden Ergänzungen dort, wo sie für dein Unternehmen sinnvoll sind.</p>
        </div>

        {/* Hauptleistung: Website – visuell und inhaltlich im Vordergrund */}
        <div className="reveal grid md:grid-cols-[2fr_3fr] gap-6 md:gap-12 pb-10 md:pb-12 border-b border-border/60">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-mauve-dark mb-3">Hauptleistung</div>
            <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">Website &amp; Struktur</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">Individuelles Webdesign, klare Leistungsseiten und professionelle Texte, die zeigen, wofür dein Studio steht und was deine Arbeit besonders macht.</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {websiteLeistungen.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ergänzungen: digitale Präsenz & Printdesign – bewusst kleiner/zurückhaltender */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 pt-10 md:pt-12">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Ergänzung</div>
            <h3 className="font-serif text-xl text-ink leading-tight">Sichtbarkeit &amp; digitaler Auftritt</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Eine gute Website wirkt am stärksten, wenn auch die übrigen digitalen Kontaktpunkte ein stimmiges und professionelles Bild vermitteln.</p>
            <ul className="mt-4 space-y-2">
              {digitalePraesenzLeistungen.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/85">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-ink/40 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal reveal-delay">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Ergänzung</div>
            <h3 className="font-serif text-xl text-ink leading-tight">Printdesign</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Auf Wunsch übertrage ich deinen bestehenden Auftritt auch auf ausgewählte Materialien, die deine Kundinnen im Studio und darüber hinaus begleiten – als Design bzw. druckfertige Datei.</p>
            <ul className="mt-4 space-y-2">
              {printLeistungen.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/85">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-ink/40 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Unabhängigkeit & laufende Kosten */}
        <div className="reveal mt-12 md:mt-16 pt-8 border-t border-border/60">
          <h3 className="font-serif text-lg text-ink">Deine Website. Deine Kontrolle.</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-3xl">Domain, Hosting und E-Mail laufen direkt über den jeweiligen Anbieter auf deinen Namen. Du bleibst unabhängig, bezahlst nur die vergleichsweise geringen Anbietergebühren und bist nicht an ein verpflichtendes Wartungsabo bei Javera Studio gebunden. Unterstützung und spätere Änderungen kannst du bei Bedarf flexibel dazubuchen.</p>
        </div>

        {/* Dezente Handlungswege – bewusst zurückhaltender als der primäre Vorschau-CTA */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <Link href="/leistungen" className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
            Alle Leistungen ansehen <span aria-hidden>→</span>
          </Link>
          <Link href="/preise" className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
            Preise ansehen <span aria-hidden>→</span>
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
        <div className="max-w-2xl mb-14 md:mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">So funktioniert die Zusammenarbeit</div>
          <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Von der ersten Idee bis zu deinem neuen Online-Auftritt.</h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg leading-relaxed">Du musst noch nicht genau wissen, wie deine Website aussehen soll. Wir klären gemeinsam, was zu deinem Studio, deinen Leistungen und deinen Zielen passt.</p>
        </div>

        <div className="divide-y divide-border/60 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:divide-y-0 lg:divide-x">
          {steps.map((s, i) => (
            <div key={s.n} className={`reveal reveal-stagger-${i + 1} py-8 first:pt-0 last:pb-0 lg:py-0 lg:px-6 lg:first:pl-0`}>
              <span className="font-serif text-4xl text-muted-foreground/50">{s.n}</span>
              <h3 className="font-serif text-xl text-ink mt-4">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 md:mt-16 pt-8 border-t border-border/60 max-w-2xl">
          <p className="font-medium text-lg text-ink">Keine fertigen Texte und kein technisches Vorwissen nötig.</p>
          <p className="mt-3 text-muted-foreground leading-relaxed">Du gibst mir die wichtigsten Informationen zu deinem Studio. Ich kümmere mich um Struktur, Formulierungen, Design und technische Umsetzung und führe dich verständlich durch jeden Schritt.</p>
        </div>

        <div className="mt-8">
          <Link href="/webseiten-vorschau" className="reveal inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
            Mehr zur kostenlosen Vorschau <span aria-hidden>→</span>
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
            <details key={f.q} className={`reveal reveal-stagger-${(i % 6) + 1} group scroll-mt-28 rounded-2xl bg-background border border-border/60 p-6 open:shadow-sm transition`}>
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
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Studio-Check</div>
        <h2 className="reveal font-serif text-2xl md:text-3xl text-ink leading-tight">Du siehst dein Studio jeden Tag. Wie sehen es neue Kundinnen online?</h2>
        <p className="reveal reveal-delay mt-4 text-muted-foreground leading-relaxed">Mit dem kostenlosen Studio-Check schätzt du deinen bestehenden Online-Auftritt selbst ein und erkennst, wo du genauer hinschauen solltest.</p>
        <Link
          href="/studio-check"
          className="reveal inline-block mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
        >
          Studio-Check starten
        </Link>
        <p className="reveal mt-3 text-xs text-muted-foreground">Ca. 3 Minuten · Sofortiges Ergebnis · Ohne E-Mail</p>
      </div>
    </section>
  );
}

function KontaktVisual() {
  return (
    <section id="kontakt" aria-label="Kontakt" className="relative py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">
        <div className="relative order-2 md:order-1">
          <div className="reveal relative aspect-[3/2] rounded-3xl overflow-hidden shadow-xl shadow-ink/10">
            <Image src="/anfrage.png" alt="Beauty Studio Besitzerin arbeitet entspannt am Laptop" loading="lazy" width={1536} height={1024} className="w-full h-full object-cover" />
            <AiLabel />
          </div>
          <div aria-hidden className="absolute -z-10 -bottom-6 -left-6 w-full h-full rounded-3xl" style={{ backgroundColor: "var(--mint-soft)" }} />
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-center text-center md:text-left">
          <Link href="/webseiten-vorschau" className="reveal inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition self-center md:self-start">
            Du möchtest zuerst eine kostenlose Webseiten-Vorschau? <span aria-hidden>→</span>
          </Link>
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
      <Kundenprojekte />
      <Testimonials />
      <MeineArbeitLink />
      <Warum />
      <Leistungsuebersicht />
      <Ablauf />
      <StudioCheckCTA />
      <FAQ />
      <KontaktVisual />
      <ContactForm
        title="Was möchtest du an deinem Online-Auftritt verändern?"
        intro="Erzähl mir kurz von deinem Studio und deinem Vorhaben. Du musst noch keinen fertigen Plan haben – wir klären gemeinsam, was du brauchst."
        submitLabel="Anfrage senden"
      />
      <SiteFooter />
    </main>
  );
}
