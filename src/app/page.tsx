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
import { Heart, Palette, Handshake, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Javera Studio — Webdesign · Grafik · Branding für Beauty Studios Wien",
  description: "Website, Branding & Grafik für Beauty Studios in Wien. Von der Website über das Logo bis zu Flyern & Social Media – individuell gestaltet, professionell umgesetzt.",
  alternates: { canonical: "https://www.javera-studio.at/" },
  openGraph: {
    title: "Javera Studio — Webdesign · Grafik · Branding für Beauty Studios Wien",
    description: "Website, Branding & Grafik für Beauty Studios in Wien. Von der Website über das Logo bis zu Flyern & Social Media – individuell gestaltet, professionell umgesetzt.",
    url: "https://www.javera-studio.at/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Javera Studio — Webdesign · Grafik · Branding für Beauty Studios Wien",
    description: "Website, Branding & Grafik für Beauty Studios in Wien – individuell gestaltet, professionell umgesetzt.",
    images: ["/og-image.jpg"],
  },
};

const demos = [
  { title: "PURE SKIN Studio", category: "Kosmetikstudio", desc: "Cleanes, ruhiges Design für mehr Vertrauen, klare Angebote und mehr Anfragen.", focus: "Vertrauen & hochwertige Präsentation", url: "https://demo-pure-skin-studio-launch.vercel.app", image: "/demo-pure-skin.png" },
  { title: "Nail Atelier", category: "Nagelstudio", desc: "Elegantes Nail-Studio Design mit Fokus auf Ästhetik, Vertrauen und einen modernen Markenauftritt.", focus: "Eleganz & Markenwirkung", url: "https://demo-nailatelier.vercel.app", image: "/demo-nail-atelier.png" },
  { title: "Ivory Bridal Studio", category: "Bridal Stylistin", desc: "Elegante Onepage-Website für Brautstylistinnen – modern, vertrauensvoll und perfekt für Anfragen rund um den Hochzeitstag.", focus: "Vertrauen & Premium-Auftritt", url: "https://demo-ivorybridalstudio.vercel.app", image: "/demo-ivorystudio.png" },
  { title: "LUMEA Laser Clinic", category: "Beauty Klinik", desc: "Seriöse Klinik-Website mit Fokus auf Vertrauen, Beratung und professionelle Darstellung.", focus: "Seriosität & Beratung", url: "https://demo-lumea-laser-clinic.vercel.app", image: "/demo-lumea.png" },
  { title: "Lumis Klinik", category: "Beauty Klinik", desc: "Moderne Klinik-Website mit Fokus auf Vertrauen, hochwertige Darstellung und professionelle Außenwirkung.", focus: "Vertrauen & Professionalität", url: "https://demo-lumis-klinik.vercel.app", image: "/demo-lumis-klinik.png" },
  { title: "Salon Noir", category: "Friseursalon", desc: "Auffällige Website für starke Markenwirkung, mehr Sichtbarkeit und neue Kundinnen.", focus: "Markenwirkung & Sichtbarkeit", url: "https://demo-noir-vision.vercel.app", image: "/demo-salon-noir.png" },
];

const benefits = [
  "Der erste Eindruck entsteht online — Noch bevor eine Kundin dein Studio besucht, informiert sie sich über Google oder Social Media.",
  "Vertrauen entscheidet — Eine professionelle Website schafft Vertrauen und hebt dein Studio von der Konkurrenz ab.",
  "Instagram allein reicht selten aus — Social Media ist wichtig – eine Website gibt deinem Studio ein dauerhaftes Zuhause im Internet und ergänzt deinen Online-Auftritt.",
  "Bei Google gefunden werden — Viele Kundinnen suchen aktiv nach Beauty-Studios in ihrer Nähe. Eine suchmaschinenoptimierte Website erhöht deine Sichtbarkeit und sorgt für mehr Anfragen.",
  "Ein einheitlicher Markenauftritt — Website, Logo, Social Media und Print arbeiten zusammen und sorgen für einen professionellen, wiedererkennbaren Auftritt.",
];

const javeraPoints = [
  "Spezialisierung auf Beauty Studios – Nails, Kosmetik, Friseur & Co.",
  "Website, Branding & Grafik aus einer Hand",
  "Einheitliches Design über alle Kanäle: Web, Print & Social Media",
  "Individuell gestaltet – kein Template, keine 08/15-Lösung",
  "Persönliche Zusammenarbeit direkt mit mir – von Anfang bis Ende",
  "Schnelle Umsetzung mit klaren, sichtbaren Ergebnissen",
  "SEO-Grundoptimierung für bessere Sichtbarkeit bei Google",
  "10 % Rabatt auf alle Design-Leistungen für Website-Kunden",
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
  { q: "Kann ich auch nur ein Logo oder Social Media Design bestellen – ohne Website?", a: "Ja. Website, Logo, Flyer und Social Media Design sind einzeln buchbar – ganz gleich ob du ein Nagelstudio, Wimpernstudio oder PMU-Studio führst." },
  { q: "Kann ich meine Website auch in Raten bezahlen?", id: "faq-ratenzahlung", a: "Ja. Gerade der Start in die Selbstständigkeit bringt viele Investitionen mit sich. Deshalb biete ich für größere Projekte auf Wunsch eine zinsfreie Ratenzahlung in bis zu 4 Teilzahlungen an. Gemeinsam finden wir eine Lösung, die zu deinem Budget passt." },
];

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden text-primary-foreground" style={{ backgroundColor: "#F8F5F2" }}>
      <HeroVideo />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(28, 13, 7, 0.45)" }} aria-hidden />
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 mb-6 hero-subtitle">
          <span className="w-8 h-px bg-white/50" />
          Aktuell: Kostenlose Analyse & Vorschau für dein Studio
        </div>
        <h1 className="hero-headline font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
          Mehr Kundinnen &amp; Buchungen für dein <em className="text-white/75">Beauty Studio</em> – mit einer Website, die verkauft.
        </h1>
        <p className="hero-subtitle mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Ich helfe Beautystudios mit modernem Webdesign, Branding und visueller Gestaltung professionell sichtbar zu werden – für einen hochwertigen Auftritt und mehr Terminbuchungen.
        </p>
        <div className="hero-cta mt-8 flex flex-wrap gap-3 justify-center">
          <a href="#schreib-mir" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Vorschau anfragen
          </a>
          <a href="#kundenprojekte" className="px-7 py-3.5 rounded-full border border-white/40 text-white hover:bg-white hover:text-ink transition font-medium">
            Referenzen
          </a>
        </div>
        <p className="hero-cta mt-6 text-sm text-white/80">Unverbindlich · Antwort in 24h · kostenlos starten</p>
      </div>
    </section>
  );
}

function BrandManifesto() {
  return (
    <section aria-label="Markenphilosophie" className="py-12 md:py-16 bg-background">
      <div className="reveal max-w-xl mx-auto px-6 text-center">
        <div className="mirror-frame relative w-28 h-28 md:w-36 md:h-36 mx-auto mb-10 rounded-2xl overflow-hidden shadow-sm">
          <Image src="/spiegel.png" alt="" fill sizes="144px" className="object-cover" aria-hidden />
        </div>
        <p className="font-serif text-2xl md:text-3xl text-ink leading-[1.7]">
          Deine Website ist das Fenster zu deinem Studio
          <br className="hidden md:block" /> und der Spiegel deiner Qualität.
        </p>
        <span className="editorial-rule mt-10" aria-hidden />
      </div>
    </section>
  );
}

const featureBadges = [
  { icon: Heart, title: "1 Monat persönliche Nachbetreuung nach Webseitenlaunch", href: "#ablauf" },
  { icon: Palette, title: "Individuelle Vorschau in 48 Std.", href: "#kontakt" },
  { icon: Handshake, title: "Webdesign, Branding & Drucksorten aus einer Hand", href: "/preise#preise" },
  { icon: CreditCard, title: "Bis zu 4 zinsfreie Teilzahlungen", href: "/preise#finanzierung" },
];

function FeatureBadges() {
  return (
    <section id="vorteile" aria-label="Deine Vorteile" className="py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {featureBadges.map((f, i) => {
            const Icon = f.icon;
            const cardClassName = `reveal reveal-stagger-${(i % 6) + 1} group flex flex-col items-center text-center gap-4 rounded-2xl border border-ink/10 bg-accent px-6 py-9 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-mauve/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve/40`;
            const content = (
              <>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-peach-soft text-mauve transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden />
                </span>
                <p className="font-serif text-base md:text-lg text-ink leading-snug transition-colors duration-300 group-hover:text-mauve">{f.title}</p>
              </>
            );
            return f.href.startsWith("/") ? (
              <Link key={f.title} href={f.href} className={cardClassName}>
                {content}
              </Link>
            ) : (
              <a key={f.title} href={f.href} className={cardClassName}>
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Wer bin ich</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Über mich</h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-[1.05rem]">
            <p className="reveal reveal-stagger-1">Ich bin Jagoda – Webdesignerin & Grafikerin aus Wien, spezialisiert auf Beauty Studios. Ich begleite dich beim Aufbau eines professionellen Gesamtauftritts – von der Website über das Branding bis zu Social-Media-Design und Print.</p>
            <p className="reveal reveal-stagger-2">Durch meine Erfahrung in der IT verbinde ich klares Design mit Struktur und Funktion. So entsteht eine Website, die nicht nur gut aussieht, sondern Vertrauen aufbaut und neue Kundinnen anzieht.</p>
            <p className="reveal reveal-stagger-3">Ich arbeite bewusst unkompliziert: Du musst keine fertigen Texte oder Technik-Wissen mitbringen – ich führe dich Schritt für Schritt durch den gesamten Prozess.</p>
            <p className="reveal reveal-stagger-4">Als Mama von drei Kindern weiß ich, wie wertvoll Zeit ist – deshalb ist mir eine einfache, klare Zusammenarbeit besonders wichtig.</p>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="reveal aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src="/portrait.png" alt="Jagoda – Webdesignerin aus Wien" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
          </div>
          <div aria-hidden className="absolute -z-10 -top-6 -right-6 w-full h-full rounded-3xl" style={{ backgroundColor: "var(--peach-soft)" }} />
        </div>
      </div>
    </section>
  );
}

function Warum() {
  return (
    <section id="warum" className="py-12 md:py-16">
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
            <a href="#schreib-mir" className="reveal inline-block mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
              Kostenlose Vorschau anfragen
            </a>
          </div>
          <ul className="space-y-1">
            {benefits.map((b, i) => (
              <li key={b} className={`reveal reveal-stagger-${(i % 6) + 1} flex items-start gap-5 py-5 border-b border-border/60 last:border-0`}>
                <span className="font-serif text-2xl text-muted-foreground/60 w-8">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg text-ink pt-1">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6 md:gap-8">
          <figure className="reveal relative rounded-3xl overflow-hidden aspect-[4/5]">
            <Image src="/problem.jpg" alt="Stiller Schreibtisch mit Smartphone – das Warten auf Anfragen" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
            <figcaption className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.2em] text-background bg-ink/60 backdrop-blur px-3 py-2 rounded-full text-center">Vorher · Wenig Sichtbarkeit</figcaption>
          </figure>
          <figure className="reveal reveal-delay relative rounded-3xl overflow-hidden aspect-[4/5]">
            <Image src="/success.jpg" alt="Modernes, gebuchtes Beauty Studio mit zufriedener Kundin" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
            <figcaption className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.2em] text-background bg-ink/60 backdrop-blur px-3 py-2 rounded-full text-center">Nachher · Konstant gebucht</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Angebot() {
  const free = ["Erstgespräch & Kennenlernen", "Projektbesprechung & erste Ideen", "Erste Design-/Demo-Vorschau", "Individuelle Konzeptideen für deinen Online-Auftritt", "Beratung zu Aufbau, Buchungssystem & Struktur"];
  const paid = ["Online-Präsenz Analyse & Optimierungsplan", "Individuelle Website-Erstellung", "Logo Design & Branding-Elemente", "Flyer, Visitenkarten & Print-Design (druckfertig)", "Social Media Design (Posts, Stories, Cover Sets)", "Mobile Optimierung & SEO-Grundoptimierung", "Domain & Hosting Einrichtung", "Buchungs-/Kalenderlösungen", "Zusätzliche Unterseiten oder Erweiterungen", "Änderungen, Pflege & laufende Betreuung der Inhalte"];

  return (
    <section id="angebot" className="py-12 md:py-16 bg-cream">
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
            <a href="#schreib-mir" className="inline-block mt-10 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
              Kostenlose Vorschau anfragen
            </a>
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

        <div className="reveal mt-8 relative rounded-3xl border border-mauve/30 bg-gradient-to-br from-peach-soft via-background to-accent/40 p-8 md:p-10 shadow-sm">
          <div className="absolute -top-3 left-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mauve text-white text-[11px] uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />Strategie-Service
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mt-2">Online-Präsenz Analyse</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
                Du hast bereits eine Website oder einen bestehenden Online-Auftritt und möchtest wissen, wo Potenzial verloren geht?<br /><br />
                Die Online-Präsenz Analyse bewertet Website, Google-Profil, Sichtbarkeit und Außenwirkung und liefert konkrete Empfehlungen zur Verbesserung.
              </p>
            </div>
            <div className="shrink-0 sm:text-right mt-2">
              <p className="font-serif text-3xl text-ink leading-none">150 €</p>
              <p className="text-sm text-muted-foreground mt-1">einmalig</p>
            </div>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {["Website Analyse", "Google Business Profil Analyse", "Sichtbarkeit & Auffindbarkeit", "Branding & Vertrauen", "Buchungs- und Kontaktmöglichkeiten", "Konkreter Optimierungsplan"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" /><span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink/80 italic leading-relaxed">Ergebnis: Ein strukturierter Bericht mit klaren Verbesserungsvorschlägen und priorisierten Handlungspunkten.</p>
          <div className="mt-5 flex items-start gap-2 bg-background/60 border border-mauve/20 rounded-2xl px-4 py-3">
            <span className="shrink-0 text-base leading-[1.5]">💎</span>
            <p className="text-sm text-ink"><strong>Bei Buchung einer Premium Website kostenlos enthalten.</strong></p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/preise" className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
            Alle Preise ansehen <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FaceAndMore() {
  const leistungen = ["Kompletter Website-Relaunch", "Migration von Wix zu Vercel", "Mobile Optimierung", "Domain erfolgreich migriert", "Leistungsseiten & FAQ-Bereich", "SEO-freundliche Struktur"];
  return (
    <section id="kundenprojekte" className="py-12 md:py-16">
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
            <p className="reveal mt-8 font-serif text-base text-ink/70 italic leading-relaxed">
              „Ein professioneller Auftritt endet nicht bei der Website – er setzt sich auf Social Media fort."
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
            <p className="font-serif italic text-lg text-mauve leading-relaxed">„Die richtige Lösung ist nicht immer die größte Website, sondern die passende Website."</p>
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

function Demos() {
  const row1 = demos.slice(0, 3);
  const row2 = demos.slice(3);
  return (
    <section id="demos" className="py-12 md:py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Demo Projekte</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Beispiel-Websites für Beauty Businesses</h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg">Jede Demo wurde für eine andere Zielgruppe und Markenidentität entwickelt. So bekommst du ein Gefühl dafür, wie unterschiedlich ein Webauftritt wirken kann – und welche Richtung zu deinem Business passt.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {row1.map((d, i) => (
            <div key={d.title} className={`reveal-card reveal-stagger-${(i % 4) + 1} group relative bg-background rounded-3xl border border-border/60 hover:shadow-xl hover:shadow-ink/5 transition overflow-hidden flex flex-col p-6 md:p-8`}>
              <div className="relative rounded-2xl overflow-hidden mb-6 flex items-center justify-center aspect-[16/10]" style={{ backgroundColor: "var(--peach-soft)" }}>
                <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 text-[10px] uppercase tracking-wider font-medium text-ink shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-mauve" />Showcase Project
                </span>
                <Image src={d.image} alt={`${d.title} Demo Vorschau`} loading="lazy" width={600} height={375} className="w-full h-full object-contain transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{d.category}</div>
              <h3 className="font-serif text-ink mt-2 text-2xl md:text-3xl">{d.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{d.desc}</p>
              <p className="mt-auto pt-4 text-sm text-ink/70 italic">→ Fokus: {d.focus}</p>
              <a href={d.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
                Demo ansehen <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
          {row2.map((d, i) => (
            <div key={d.title} className={`reveal-card reveal-stagger-${(i % 4) + 1} group relative bg-background rounded-3xl border border-border/60 hover:shadow-xl hover:shadow-ink/5 transition overflow-hidden flex flex-col p-6 md:p-8`}>
              <div className="relative rounded-2xl overflow-hidden mb-6 flex items-center justify-center aspect-[16/10]" style={{ backgroundColor: "var(--peach-soft)" }}>
                <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 text-[10px] uppercase tracking-wider font-medium text-ink shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-mauve" />Showcase Project
                </span>
                <Image src={d.image} alt={`${d.title} Demo Vorschau`} loading="lazy" width={600} height={375} className="w-full h-full object-contain transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{d.category}</div>
              <h3 className="font-serif text-ink mt-2 text-2xl md:text-3xl">{d.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{d.desc}</p>
              <p className="mt-auto pt-4 text-sm text-ink/70 italic">→ Fokus: {d.focus}</p>
              <a href={d.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
                Demo ansehen <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center reveal">
          <a href="#schreib-mir" className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Vorschau anfragen
          </a>
          <p className="mt-3 text-xs text-muted-foreground">Weitere Projekte in Umsetzung</p>
        </div>
      </div>
    </section>
  );
}

function FeaturedLuxe() {
  const mockups = [
    { src: "/luxe-visitenkarten.png", alt: "Visitenkarten Mockup", span: "md:col-span-6", aspect: "aspect-[3/4]", label: "Visitenkarten" },
    { src: "/luxe-preisliste.png", alt: "Preisliste Mockup", span: "md:col-span-6", aspect: "aspect-[3/4]", label: "Preisliste" },
    { src: "/luxe-social-1.png", alt: "Social Media Template 1", span: "md:col-span-4", aspect: "aspect-[9/16]", label: "Social Post" },
    { src: "/luxe-social-2.png", alt: "Social Media Template 2", span: "md:col-span-4", aspect: "aspect-[9/16]", label: "Social Post" },
    { src: "/luxe-social-3.png", alt: "Social Media Template 3", span: "md:col-span-4", aspect: "aspect-[9/16]", label: "Social Post" },
    { src: "/luxe-gutschein.png", alt: "Gutschein Mockup", span: "md:col-span-12", aspect: "aspect-[16/9]", label: "Gutscheine" },
  ];
  const bullets = ["Website Design", "Logo Design", "Preislisten", "Gutscheine", "Social Media Templates", "Visitenkarten"];

  return (
    <section className="relative py-14 md:py-20 bg-background overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-60" style={{ background: "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--peach-soft) 70%, transparent) 0%, transparent 70%)" }} />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-20 md:mb-28">
          <div className="reveal text-xs uppercase tracking-[0.28em] text-muted-foreground mb-5">
            <span className="editorial-rule mr-3" />Komplettes Branding<span className="editorial-rule ml-3" />
          </div>
          <h2 className="reveal font-serif text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight">Mehr als nur Webseiten</h2>
          <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">Ich entwickle nicht nur moderne Websites, sondern komplette visuelle Markenauftritte für Beauty Studios — abgestimmt auf Stil, Zielgruppe und Markenwirkung.</p>
        </div>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="reveal-card md:col-span-7 order-2 md:order-1">
            <div className="relative rounded-[2rem] overflow-hidden group" style={{ boxShadow: "0 30px 80px -30px color-mix(in oklab, var(--ink) 25%, transparent)" }}>
              <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 text-[10px] uppercase tracking-wider font-medium text-ink shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-mauve" />Showcase Project
              </span>
              <div className="aspect-[4/5] md:aspect-[5/6] w-full" style={{ backgroundColor: "var(--peach-soft)" }}>
                <Image src="/demo-luxe-nails.png" alt="Luxe Nails Vienna — Website & Branding Hero" loading="lazy" width={800} height={1000} className="w-full h-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]" />
              </div>
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 reveal reveal-delay">
            <div className="text-[11px] uppercase tracking-[0.32em] text-rose-gold mb-5">Featured Project</div>
            <h3 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight">Luxe Nails<br />Vienna</h3>
            <div className="mt-6 h-px w-12 bg-ink/20" />
            <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">Luxuriöses Branding-Konzept für ein modernes Wiener Nagelstudio — inklusive Website, Preislisten, Gutscheinen, Visitenkarten und Social Media Assets.</p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-ink/80">
                  <span aria-hidden className="inline-block h-[6px] w-[6px] rounded-full" style={{ backgroundColor: "var(--rose-gold)" }} />{b}
                </li>
              ))}
            </ul>
            <a href="https://demo-luxe-nails-vienna.vercel.app" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 mt-10 text-sm font-medium tracking-wide text-ink border-b border-ink/30 pb-1 hover:border-ink transition">
              Projekt ansehen <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
        <div className="mt-24 md:mt-36">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-3">Brand Identity</div>
              <h4 className="font-serif text-2xl md:text-3xl text-ink">Visuelle Markenwelt</h4>
              <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">Jedes Element — vom Logo bis zum Gutschein — ist aufeinander abgestimmt und auf deine Zielgruppe zugeschnitten.</p>
            </div>
            <div className="hidden md:block text-xs text-muted-foreground italic">Branding · Print · Social</div>
          </div>
          <div className="grid md:grid-cols-12 gap-5 md:gap-6">
            {mockups.map((m, i) => (
              <figure key={i} className={`reveal-card reveal-stagger-${(i % 6) + 1} ${m.span} group relative overflow-hidden rounded-2xl bg-cream`} style={{ boxShadow: "0 20px 50px -25px color-mix(in oklab, var(--ink) 18%, transparent)" }}>
                <div className={`${m.aspect} w-full overflow-hidden`}>
                  <Image src={m.src} alt={m.alt} loading="lazy" width={800} height={800} className="w-full h-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.05]" />
                </div>
                <figcaption className="absolute left-4 bottom-4 text-[10px] uppercase tracking-[0.25em] text-ink/0 group-hover:text-ink/70 bg-background/0 group-hover:bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 transition-all duration-500">{m.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Javera() {
  return (
    <section className="py-12 md:py-16 bg-mint-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Warum Javera Studio</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Mehr als eine Website – dein komplettes visuelles Erscheinungsbild, das Kundinnen bringt.</h2>
          <div className="reveal reveal-delay mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>Von der Website über das Logo bis zu Instagram-Posts und Flyern – ich gestalte alles, was dein Beauty Studio sichtbar und unverwechselbar macht.</p>
            <p>Du bekommst kein Fertigprodukt von der Stange, sondern ein durchgängiges visuelles Konzept, das zu deiner Marke, deinem Stil und deinen Kundinnen passt.</p>
            <p className="text-ink font-medium">Starte mit einer kostenlosen Website-Analyse – ich zeige dir, wo Potenzial steckt und was dein Auftritt wirklich braucht.</p>
          </div>
        </div>
        <div className="mt-12 text-sm uppercase tracking-[0.2em] text-muted-foreground">Das bekommst du</div>
        <div className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {javeraPoints.map((p, i) => (
            <div key={p} className={`reveal reveal-stagger-${(i % 7) + 1} flex items-start gap-4 py-3`}>
              <span className="mt-1 text-ink shrink-0">✔</span>
              <span className="text-ink leading-relaxed">{p}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 reveal">
          <a href="#schreib-mir" className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Vorschau anfragen
          </a>
        </div>
      </div>
    </section>
  );
}

function Ablauf() {
  return (
    <section id="ablauf" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Ablauf</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">So läuft unsere Zusammenarbeit ab</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className={`reveal-card reveal-stagger-${i + 1} p-8 rounded-3xl border border-border/60 bg-background hover:bg-cream transition`}>
              <span className="font-serif text-5xl text-muted-foreground/60">{s.n}</span>
              <h3 className="font-serif text-2xl text-ink mt-6">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-12 text-center text-muted-foreground italic">Einfach, schnell und ohne komplizierten Prozess.</p>
        <div className="mt-8 text-center reveal">
          <a href="#schreib-mir" className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Jetzt starten
          </a>
        </div>
      </div>
    </section>
  );
}

function Zweifel() {
  return (
    <section className="py-12 md:py-16 bg-peach-soft">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Keine Sorge</div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Keine Zeit, keine Technik – kein Problem.</h2>
        <div className="reveal reveal-delay mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
          <p>Du musst keine fertigen Texte haben, keine Bilder vorbereiten und dich auch nicht mit Technik auskennen.</p>
          <p>Ich übernehme Struktur, Design und Aufbau für dich und führe dich Schritt für Schritt durch den gesamten Prozess.</p>
          <p>Du bekommst eine erste Demo – und wir passen alles gemeinsam an, bis es perfekt zu deinem Studio passt.</p>
        </div>
        <a href="#schreib-mir" className="reveal inline-block mt-10 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
          Kostenlose Vorschau anfragen
        </a>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-cream">
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
          <a href="#schreib-mir" className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Vorschau anfragen
          </a>
          <p className="mt-3 text-xs text-muted-foreground">Unverbindlich · Antwort in 24h · kostenlos starten</p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="kontakt" className="relative py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">
        <div className="relative order-2 md:order-1 flex flex-col">
          <div className="reveal flex-1 rounded-3xl overflow-hidden shadow-xl shadow-ink/10">
            <Image src="/anfrage.png" alt="Beauty Studio Besitzerin arbeitet entspannt am Laptop" loading="lazy" width={1536} height={1024} className="w-full h-full object-cover" />
          </div>
          <div aria-hidden className="absolute -z-10 -bottom-6 -left-6 w-full h-full rounded-3xl" style={{ backgroundColor: "var(--mint-soft)" }} />
        </div>
        <div className="order-1 md:order-2 text-center md:text-left">
          <h2 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">Bereit für einen Auftritt, der dein Studio wirklich widerspiegelt – und neue Kundinnen bringt?</h2>
          <p className="reveal reveal-delay mt-6 text-lg text-muted-foreground">Schick mir eine kurze Anfrage – ich melde mich persönlich bei dir.</p>
          <a href="#schreib-mir" className="reveal inline-block mt-10 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Vorschau anfragen
          </a>
          <p className="reveal mt-3 text-xs text-muted-foreground">Unverbindlich · Antwort in 24h · kostenlos starten</p>
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
      <BrandManifesto />
      <FeatureBadges />
      <About />
      <Warum />
      <Angebot />
      <FaceAndMore />
      <FaceAndMoreSocial />
      <PaulaVenc />
      <DivineBeautyNails />
      <Testimonials />
      <Demos />
      <FeaturedLuxe />
      <Javera />
      <Ablauf />
      <Zweifel />
      <FAQ />
      <CTA />
      <ContactForm />
      <SiteFooter />
    </main>
  );
}
