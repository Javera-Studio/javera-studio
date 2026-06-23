import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import aboutImg from "@/assets/portrait.png";
import logo from "@/assets/javera-logo.png";
import problemImg from "@/assets/problem.jpg";
import successImg from "@/assets/success.jpg";
import instaMockup from "@/assets/insta.mockup.png";
import instaMockupFeed from "@/assets/insta.mockup.feed.png";
import demoLuxeNails from "@/assets/demo-luxe-nails.png";
import demoPureSkin from "@/assets/demo-pure-skin.png";
import demoSalonNoir from "@/assets/demo-salon-noir.png";
import demoLumea from "@/assets/demo-lumea.png";
import demoNailAtelier from "@/assets/demo-nail-atelier.png";
import demoLumisKlinik from "@/assets/demo-lumis-klinik.png";
import demoIvoryStudio from "@/assets/demo-ivorystudio.png";
import { SiteFooter as Footer } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Javera Studio — Webdesign · Grafik · Branding für Beauty Studios Wien" },
      {
        name: "description",
        content:
          "Website, Branding & Grafik für Beauty Studios in Wien. Von der Website über das Logo bis zu Flyern & Social Media – individuell gestaltet, professionell umgesetzt.",
      },
      { property: "og:title", content: "Javera Studio — Webdesign · Grafik · Branding für Beauty Studios Wien" },
      {
        property: "og:description",
        content:
          "Website, Branding & Grafik für Beauty Studios in Wien. Von der Website über das Logo bis zu Flyern & Social Media – individuell gestaltet, professionell umgesetzt.",
      },
      { property: "og:image", content: "https://www.javera-studio.at/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://www.javera-studio.at/" },
      { name: "twitter:title", content: "Javera Studio — Webdesign · Grafik · Branding für Beauty Studios Wien" },
      {
        name: "twitter:description",
        content:
          "Website, Branding & Grafik für Beauty Studios in Wien – individuell gestaltet, professionell umgesetzt.",
      },
      { name: "twitter:image", content: "https://www.javera-studio.at/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.javera-studio.at/" },
    ],
  }),
  component: Index,
});

const demos = [
  {
    title: "PURE SKIN Studio",
    category: "Kosmetikstudio",
    desc: "Cleanes, ruhiges Design für mehr Vertrauen, klare Angebote und mehr Anfragen.",
    focus: "Vertrauen & hochwertige Präsentation",
    url: "https://demo-pure-skin-studio-launch.vercel.app",
    accent: "mint",
    image: demoPureSkin,
  },
  {
    title: "Nail Atelier",
    category: "Nagelstudio",
    desc: "Elegantes Nail-Studio Design mit Fokus auf Ästhetik, Vertrauen und einen modernen Markenauftritt.",
    focus: "Eleganz & Markenwirkung",
    url: "https://demo-nailatelier.vercel.app",
    accent: "peach",
    image: demoNailAtelier,
  },
  {
    title: "Ivory Bridal Studio",
    category: "Bridal Stylistin",
    desc: "Elegante Onepage-Website für Brautstylistinnen – modern, vertrauensvoll und perfekt für Anfragen rund um den Hochzeitstag.",
    focus: "Vertrauen & Premium-Auftritt",
    url: "https://demo-ivorybridalstudio.vercel.app",
    accent: "mint",
    image: demoIvoryStudio,
  },
  {
    title: "LUMEA Laser Clinic",
    category: "Beauty Klinik",
    desc: "Seriöse Klinik-Website mit Fokus auf Vertrauen, Beratung und professionelle Darstellung.",
    focus: "Seriosität & Beratung",
    url: "https://demo-lumea-laser-clinic.vercel.app",
    accent: "mint",
    image: demoLumea,
  },
  {
    title: "Lumis Klinik",
    category: "Beauty Klinik",
    desc: "Moderne Klinik-Website mit Fokus auf Vertrauen, hochwertige Darstellung und professionelle Außenwirkung.",
    focus: "Vertrauen & Professionalität",
    url: "https://demo-lumis-klinik.vercel.app",
    accent: "mint",
    image: demoLumisKlinik,
  },
  {
    title: "Salon Noir",
    category: "Friseursalon",
    desc: "Auffällige Website für starke Markenwirkung, mehr Sichtbarkeit und neue Kundinnen.",
    focus: "Markenwirkung & Sichtbarkeit",
    url: "https://demo-noir-vision.vercel.app",
    accent: "peach",
    image: demoSalonNoir,
  },
];

const benefits = [
  "Mehr direkte Anfragen & Terminbuchungen durch einen Auftritt, der überzeugt",
  "Ein konsistentes Markenbild – von der Website bis zum Flyer",
  "Professioneller erster Eindruck auf jedem Kanal: online, print & social",
  "Bessere Sichtbarkeit bei Google durch gezielte SEO-Optimierung",
  "Social-Media-Content, der wirklich zu deiner Marke passt",
  "Klare Positionierung, die dich von der Konkurrenz abhebt",
  "Weniger Abhängigkeit von Instagram – mit einem starken eigenen Auftritt",
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
  {
    n: "01",
    title: "Anfrage senden",
    desc: "Du füllst ein kurzes Formular aus und sagst mir, was du brauchst.",
  },
  {
    n: "02",
    title: "Demo erhalten",
    desc: "Ich erstelle einen ersten Entwurf – abgestimmt auf dein Studio, deine Marke und deine Ziele.",
  },
  {
    n: "03",
    title: "Feinabstimmung",
    desc: "Wir passen Farben, Texte und Details gemeinsam an.",
  },
  {
    n: "04",
    title: "Fertigstellung & Launch",
    desc: "Dein Auftritt geht live – ich begleite dich bei jedem Schritt.",
  },
];

const faqs = [
  {
    q: "Wie lange dauert es, bis meine Website fertig ist?",
    a: "In den meisten Fällen bekommst du deine erste Demo bereits innerhalb weniger Tage. Die finale Umsetzung hängt davon ab, wie schnell wir Anpassungen abstimmen, ist aber bewusst einfach und effizient gehalten.",
  },
  {
    q: "Brauche ich eigene Texte oder Bilder?",
    a: "Nein. Du musst nichts fertig vorbereitet haben. Ich helfe dir bei Struktur und Texten. Eigene Bilder sind ideal, aber nicht zwingend – ich kann dich auch dabei unterstützen.",
  },
  {
    q: "Ist meine Website auch für Handy optimiert?",
    a: "Ja, jede Website wird so aufgebaut, dass sie auf Smartphone, Tablet und Desktop perfekt funktioniert.",
  },
  {
    q: "Hilfst du mir bei Domain und Hosting?",
    a: "Ja. Ich erkläre dir alles verständlich und unterstütze dich beim Einrichten. Domain und Hosting laufen direkt über einen Anbieter auf deinen Namen, damit du volle Kontrolle hast.",
  },
  {
    q: "Wird meine Website bei Google gefunden?",
    a: "Ja, jede Website enthält eine SEO-Grundoptimierung, damit du besser gefunden wirst und online sichtbar bist.",
  },
  {
    q: "Was passiert nach der Demo?",
    a: "Du bekommst eine erste Version deiner Website. Danach passen wir alles gemeinsam an, bis es genau zu deinem Studio passt – erst dann geht sie online.",
  },
  {
    q: "Was kostet mich die Demo?",
    a: "Die Analyse & Demo-Vorschau ist kostenlos und unverbindlich. Du siehst, wie deine Website aussehen könnte – und entscheidest danach, ob du weitermachen möchtest.",
  },
  {
    q: "Muss ich sofort bezahlen?",
    a: "Nein. Erst wenn du mit der Demo zufrieden bist und es zur Auftragserteilung kommt, wird eine Anzahlung von 50 % fällig. Die restlichen 50 % bezahlst du erst, wenn deine Website live ist und du zufrieden bist.",
  },
  {
    q: "Was passiert, wenn mir die Website nicht gefällt?",
    a: "Wir passen so lange an, bis sie wirklich zu deinem Studio passt. Dein Feedback ist Teil des Prozesses – das ist kein Fertigprodukt von der Stange.",
  },
  {
    q: "Ich bin kein Technik-Mensch – ist das ein Problem?",
    a: "Überhaupt nicht. Du musst dich um nichts kümmern. Ich erkläre dir jeden Schritt verständlich und übernehme alles Technische für dich.",
  },
  {
    q: "Arbeite ich direkt mit dir oder mit einem Team?",
    a: "Du arbeitest ausschließlich mit mir – Jagoda. Kein anonymes Team, keine Weiterleitung. Ich bin deine direkte Ansprechpartnerin von Anfang bis Ende.",
  },
  {
    q: "Kann ich auch nur ein Logo oder Social Media Design bestellen – ohne Website?",
    a: "Ja – alle Grafik- und Designleistungen sind einzeln buchbar. Du brauchst keine Website bei mir, um Flyer, Logo oder Social Media Posts zu beauftragen. Ich stimme alles auf dein bestehendes Branding oder deine Website ab.",
  },
  {
    q: "Wie lange dauert es, bis ein Logo oder Flyer fertig ist?",
    a: "Für ein Logo plane 5–7 Werktage (3 Entwürfe inkl. Korrekturrunden). Für Flyer und Print-Designs rechne mit 3–5 Werktagen.",
  },
  {
    q: "Lohnt es sich, Website und Social Media Design zusammen zu buchen?",
    a: "Sehr – ein einheitliches Design über alle Kanäle macht deinen Auftritt stärker und professioneller. Als Website-Kundin erhältst du außerdem 10 % Rabatt auf alle Grafik- und Design-Leistungen.",
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-24 md:h-28 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center group"
          aria-label="Javera Studio – zur Startseite"
          onClick={close}
        >
          <img
            src={logo}
            alt="Javera Studio"
            className="h-16 md:h-20 w-auto transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-80 group-hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
          />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-xs text-muted-foreground">
          <a href="#kundenprojekte" className="hover:text-ink transition">Meine Arbeit</a>
          <a href="#warum" className="hover:text-ink transition">Warum</a>
          <a href="#ablauf" className="hover:text-ink transition">Ablauf</a>
          <Link to="/preise" className="hover:text-ink transition">Preise</Link>
          <a href="#about" className="hover:text-ink transition">Über mich</a>
          <a href="#faq" className="hover:text-ink transition">FAQ</a>
          <Link to="/blog" className="hover:text-ink transition">Blog</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/" hash="schreib-mir"
            className="hidden sm:inline-flex text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition"
          >
            Kostenlose Analyse & Demo
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/70 text-ink hover:bg-cream transition"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
          >
            <span className="relative block w-5 h-3.5">
              <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-1.5 h-px w-5 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 top-3 h-px w-5 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4 gap-1 text-sm text-muted-foreground">
            <a href="#kundenprojekte" onClick={close} className="py-2.5 hover:text-ink transition">Meine Arbeit</a>
            <a href="#warum" onClick={close} className="py-2.5 hover:text-ink transition">Warum</a>
            <a href="#ablauf" onClick={close} className="py-2.5 hover:text-ink transition">Ablauf</a>
            <Link to="/preise" onClick={close} className="py-2.5 hover:text-ink transition">Preise</Link>
            <a href="#about" onClick={close} className="py-2.5 hover:text-ink transition">Über mich</a>
            <a href="#faq" onClick={close} className="py-2.5 hover:text-ink transition">FAQ</a>
            <Link to="/blog" onClick={close} className="py-2.5 hover:text-ink transition">Blog</Link>
            <Link
              to="/" hash="schreib-mir"
              onClick={close}
              className="mt-3 inline-flex justify-center text-sm px-4 py-3 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition"
            >
              Kostenlose Analyse & Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-primary-foreground"
      style={{ backgroundColor: "#F8F5F2" }}
    >
      {/* Fullscreen background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ backgroundColor: "#F8F5F2" }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        aria-hidden="true"
        ref={(el) => {
          if (el) el.playbackRate = 0.5;
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
        <source src="/hero.webm" type="video/webm" />
      </video>


      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(28, 13, 7, 0.45)" }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32 text-center">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/80 mb-6 hero-subtitle">
          <span className="w-8 h-px bg-white/50" />
          Aktuell: Kostenlose Analyse & Demo für dein Studio
        </div>
        <h1 className="hero-headline font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
          Mehr Kundinnen &amp; Buchungen für dein <em className="text-white/75">Beauty Studio</em> – mit einer Website, die verkauft.
        </h1>
        <p className="hero-subtitle mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Ich helfe Beautystudios mit modernem Webdesign, Branding und visueller Gestaltung professionell sichtbar zu werden – für einen hochwertigen Auftritt und mehr Terminbuchungen.
        </p>
        <div className="hero-cta mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            to="/" hash="schreib-mir"
            className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
          >
            Kostenlose Analyse & Demo
          </Link>
          <a
            href="#demos"
            className="px-7 py-3.5 rounded-full border border-white/40 text-white hover:bg-white hover:text-ink transition font-medium"
          >
            Beispiele ansehen
          </a>
        </div>
        <p className="hero-cta mt-6 text-sm text-white/80">
          Unverbindlich · Antwort in 24h · kostenlos starten
        </p>
      </div>
    </section>
  );
}

function Announcement() {
  return (
    <section
      aria-label="Aktuelles Angebot"
      className="relative border-y border-mauve/20 bg-gradient-to-r from-peach-soft via-accent/40 to-peach-soft"
    >
      <div className="max-w-5xl mx-auto px-6 py-8 md:py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
        <div className="flex-shrink-0 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-mauve">
          <span className="h-px w-6 bg-mauve/60" />
          Angebot
        </div>
        <p className="flex-1 font-serif text-base md:text-lg leading-relaxed text-ink">
          Kostenlose Website-Analyse &amp; Demo für Beauty Studios — sieh deinen Auftritt online, bevor du dich entscheidest.
        </p>
        <Link
          to="/" hash="schreib-mir"
          className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 bg-mauve text-white text-sm tracking-wide hover:bg-primary transition-colors rounded-sm shadow-sm"
        >
          Kostenlose Demo
        </Link>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-400" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function FaceAndMore() {
  const leistungen = [
    "Kompletter Website-Relaunch",
    "Migration von Wix zu Vercel",
    "Mobile Optimierung",
    "Domain erfolgreich migriert",
    "Leistungsseiten & FAQ-Bereich",
    "SEO-freundliche Struktur",
  ];

  return (
    <section id="kundenprojekte" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-14 md:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Kundenprojekte
          </div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
            Aus Ideen werden Ergebnisse
          </h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg leading-relaxed">
            Von modernen Websites bis zu praktischen digitalen Lösungen: Hier findest du ausgewählte Projekte, die ich gemeinsam mit Beauty Studios umgesetzt habe – individuell, durchdacht und abgestimmt auf die Bedürfnisse jedes Unternehmens.
          </p>
        </div>

        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Kundenprojekt
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="reveal md:col-span-7 flex flex-col gap-6">
            <div className="w-full drop-shadow-2xl">
              <img
                src="/faceandmoremockup.png"
                alt="Website faceandmore.at am Smartphone"
                loading="lazy"
                className="w-full"
              />
            </div>
            <p className="font-serif text-lg text-ink leading-relaxed">
              Das Ergebnis: Eine moderne Premium-Website, die Kompetenz sichtbar macht und Vertrauen schafft.
            </p>
            <a
              href="https://faceandmore.at"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium w-fit"
            >
              Webseite ansehen
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-5">
            <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
              Face and More –<br />Hautanalyse & Premium Hautpflege Wien
            </h2>
            <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">
              Für Face and More durfte ich einen kompletten Website-Relaunch umsetzen – modern, klar und auf Premium ausgerichtet.
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
              <img
                src={instaMockupFeed}
                alt="Instagram Feed & Story Mockup für Face & More"
                loading="lazy"
                className="w-full rounded-2xl drop-shadow-xl"
              />
              <img
                src={instaMockup}
                alt="Instagram-Profil Mockup für Face & More"
                loading="lazy"
                className="w-3/4 mx-auto"
                style={{ filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.13))" }}
              />
            </div>
            {/* Desktop: overlapping layout – Feed groß, Profil versetzt */}
            <div className="hidden md:block relative" style={{ paddingBottom: "11rem" }}>
              <div className="w-[70%] relative z-10 drop-shadow-2xl">
                <img
                  src={instaMockupFeed}
                  alt="Instagram Feed & Story Mockup für Face & More"
                  loading="lazy"
                  className="w-full rounded-2xl"
                />
              </div>
              <div
                className="absolute bottom-0 w-[51%] z-20"
                style={{ left: "50%", transform: "translateY(-30%)", filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.14))" }}
              >
                <img
                  src={instaMockup}
                  alt="Instagram-Profil Mockup für Face & More"
                  loading="lazy"
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
  const leistungen = [
    "Komplette Website gestaltet",
    "Mobile Optimierung umgesetzt",
    "Domain eingerichtet",
    "Treatwell integriert",
    "Gesamte technische Einrichtung übernommen",
  ];

  return (
    <section className="py-12 md:py-16 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
              Paula Venc –<br />Private Nailartist Wien
            </h2>
            <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">
              Für Paula durfte ich einen eleganten One-Pager entwickeln, der perfekt zu ihrem Studio und ihrer ruhigen, privaten Atmosphäre passt. Alle wichtigen Informationen sind übersichtlich an einem Ort gebündelt – professionell, modern und genau auf ihre Bedürfnisse abgestimmt.
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

          <div className="reveal md:col-span-7 flex flex-col gap-6">
            <div className="w-full drop-shadow-2xl">
              <img
                src="/paulavencmockup.png"
                alt="Website paulavenc.at am Smartphone"
                loading="lazy"
                className="w-full"
              />
            </div>
            <p className="font-serif italic text-lg text-mauve leading-relaxed">
              „Die richtige Lösung ist nicht immer die größte Website, sondern die passende Website."
            </p>
            <a
              href="https://paulavenc.at"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium w-fit"
            >
              Website ansehen
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

function DivineBeautyNails() {
  const leistungen = [
    "Digitales Kalendersystem für das Team",
    "Komplette Website entwickelt",
    "Mobile Optimierung umgesetzt",
    "Kontaktmöglichkeiten integriert",
    "Übersichtliche Leistungsdarstellung",
    "SEO-freundliche Struktur",
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Kundenprojekt
        </div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
          Divine Beauty &amp; Nails Studio
        </h2>
        <p className="reveal reveal-delay mt-3 text-muted-foreground text-lg mb-12 md:mb-16">
          Website, digitale Studioorganisation &amp; ein professioneller Online-Auftritt für ein Beauty Studio in Wien.
        </p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="reveal md:col-span-7 flex flex-col gap-6">
            <div className="w-full drop-shadow-2xl">
              <img
                src="/divinenailsmockup.png"
                alt="Website divinenails.at am Smartphone"
                loading="lazy"
                className="w-full"
              />
            </div>
            <p className="font-serif text-base text-ink leading-relaxed">
              Das Ergebnis: Ein digitaler Auftritt, der Studioorganisation und professionelle Sichtbarkeit verbindet.
            </p>
            <a
              href="https://divinenails.at"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium w-fit"
            >
              Website ansehen
              <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-5">
            <p className="reveal text-muted-foreground text-lg leading-relaxed">
              Die Zusammenarbeit mit Divine Beauty &amp; Nails begann mit einer praktischen Lösung für den Studioalltag: einem übersichtlichen digitalen Kalendersystem für mehrere Mitarbeiterinnen.
            </p>
            <p className="reveal mt-4 text-muted-foreground text-lg leading-relaxed">
              Nach der erfolgreichen Einführung durfte ich anschließend auch den neuen Online-Auftritt des Studios umsetzen – modern, mobil optimiert und passend zur Atmosphäre des Studios.
            </p>
            <p className="reveal mt-6 text-sm text-muted-foreground uppercase tracking-widest">Gemeinsam haben wir:</p>
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

        <div className="reveal mt-14 md:mt-20 rounded-3xl bg-background border border-border/60 p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-14 items-start">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-white/60">
                  <img src="/kalender-feedback.jpg" alt="Feedback zur Kalender-Lösung" loading="lazy" className="w-full" />
                </div>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border/40 bg-background">
                  <img src="/kalender-anleitung.png" alt="Individuelle Team-Anleitung" loading="lazy" className="w-full" />
                </div>
                <p className="mt-2 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Team-Anleitung</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Wie alles begann</p>
              <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                Manchmal beginnt eine gute Zusammenarbeit mit einer kleinen, praktischen Lösung.
              </h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Für das Team von Divine Beauty &amp; Nails entstand zuerst ein einfaches Kalendersystem mit gemeinsamer Terminübersicht, Farben pro Mitarbeiterin und einer individuellen Anleitung, damit das Team sofort selbstständig arbeiten konnte.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "Wenn ich Sterne vergeben könnte, dann 10 von 5. Jagoda hat mich angeschrieben wegen meiner Homepage. Sie hat der Himmel geschickt! Ich war schon lange unglücklich mit meiner alten und hatte keine Zeit und Kontakte für eine neue Homepage. Jagoda hat meine Vorstellungen so was von übertroffen, alles top! Du hast mich und mein Studio so schnell, ästhetisch, authentisch und professionell umgesetzt, mir fehlen noch immer die Worte und ich hab Gänsehaut, wenn ich auf faceandmore klicke! Ich kann Javera nur wärmstens weiterempfehlen.",
    name: "Michaela Kornherr",
    studio: "faceandmore.at",
    initial: "M",
  },
  {
    quote: "Absolut zu empfehlen! Ich habe lange keine Website gehabt – ich habe alles der lieben Jagoda anvertraut und bin mega glücklich mit dem Ergebnis. Professionell, schnell und zuverlässig! Sie hat mich super unterstützt und war bei jeder Frage sofort da. Danke dir, liebe Jagoda!",
    name: "Paula Venc",
    studio: "paulavenc.at",
    initial: "P",
  },
  {
    quote: "Absolute Herzensempfehlung! Nach 8 Jahren Selbstständigkeit habe ich endlich jemanden gefunden, der meine Vorstellungen zu 100 % verstanden und perfekt umgesetzt hat. Von der ersten Minute an wusste ich, dass ich in den richtigen Händen bin. Sie hat nicht einfach nur eine Webseite erstellt, sondern meine Vision sichtbar gemacht und meinem Studio einen professionellen Online-Auftritt gegeben, der zu 100 % zu mir passt.",
    name: "Danijela Boskovic",
    studio: "Divine Beauty & Nails Studio",
    initial: "D",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = (idx: number) => {
    if (idx === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(idx);
      setVisible(true);
    }, 300);
  };

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((active + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Stimmen meiner Kundinnen</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Was Kundinnen sagen</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <button
              type="button"
              onClick={prev}
              aria-label="Vorherige Bewertung"
              className="absolute -left-5 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border/60 bg-background flex items-center justify-center text-ink hover:bg-peach-soft transition z-10 shadow-sm"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M12.5 5l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Nächste Bewertung"
              className="absolute -right-5 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-border/60 bg-background flex items-center justify-center text-ink hover:bg-peach-soft transition z-10 shadow-sm"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M7.5 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className="rounded-3xl bg-background border border-border/60 p-8 md:p-12 shadow-sm"
              style={{ transition: "opacity 300ms ease", opacity: visible ? 1 : 0 }}
            >
              <div className="flex items-center gap-1 mb-1">
                {[0,1,2,3,4].map((i) => <StarIcon key={i} />)}
              </div>
              <p className="text-xs text-muted-foreground mb-6">5 von 5 Sternen · Google Bewertung</p>
              <blockquote className="font-serif text-xl md:text-2xl text-ink leading-relaxed">
                „{t.quote}"
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-peach-soft flex items-center justify-center text-ink font-serif text-base flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-medium text-ink text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.studio}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Bewertung ${i + 1}`}
                className="h-1.5 rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: i === active ? "1.75rem" : "0.375rem",
                  backgroundColor: i === active ? "var(--ink)" : "color-mix(in oklab, var(--ink) 25%, transparent)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoCard({ d, i, featured = false }: { d: typeof demos[0]; i: number; featured?: boolean }) {
  return (
    <div
      key={d.title}
      className={`reveal-card reveal-stagger-${(i % 4) + 1} group relative bg-background rounded-3xl border border-border/60 hover:shadow-xl hover:shadow-ink/5 transition overflow-hidden flex flex-col ${featured ? "p-7 md:p-10" : "p-6 md:p-8"}`}
    >
      <div
        className={`relative rounded-2xl overflow-hidden mb-6 flex items-center justify-center ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}
        style={{ backgroundColor: "var(--peach-soft)" }}
      >
        <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 text-[10px] uppercase tracking-wider font-medium text-ink shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-mauve" />
          Showcase Project
        </span>
        <img
          src={d.image}
          alt={`${d.title} Demo Vorschau`}
          loading="lazy"
          className="w-full h-full object-contain transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">
        {d.category}
      </div>
      <h3 className={`font-serif text-ink mt-2 ${featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"}`}>{d.title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{d.desc}</p>
      <p className="mt-auto pt-4 text-sm text-ink/70 italic">→ Fokus: {d.focus}</p>
      <a
        href={d.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition"
      >
        Demo ansehen
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

function Demos() {
  const row1 = demos.slice(0, 3);
  const row2 = demos.slice(3);

  return (
    <section id="demos" className="py-12 md:py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Demo Projekte
          </div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
            Beispiel-Websites für Beauty Businesses
          </h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg">
            Jede Demo wurde für eine andere Zielgruppe und Markenidentität entwickelt. So bekommst du ein Gefühl dafür, wie unterschiedlich ein Webauftritt wirken kann – und welche Richtung zu deinem Business passt.
          </p>
        </div>

        {/* Row 1: 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {row1.map((d, i) => (
            <DemoCard key={d.title} d={d} i={i} />
          ))}
        </div>

        {/* Row 2: 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
          {row2.map((d, i) => (
            <DemoCard key={d.title} d={d} i={i} />
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <Link
            to="/" hash="schreib-mir"
            className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
          >
            Kostenlose Analyse & Demo
          </Link>
          <p className="mt-3 text-xs text-muted-foreground">
            Weitere Projekte in Umsetzung
          </p>
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
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Warum eine Website
            </div>
            <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
              Warum Instagram allein nicht reicht
            </h2>
            <div className="reveal reveal-delay mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Viele Kundinnen suchen direkt über Google nach Beauty Studios in ihrer Nähe.
                Ohne Website verlierst du täglich potenzielle Anfragen an Studios, die
                professioneller wirken und leichter auffindbar sind.
              </p>
              <p>
                Eine eigene Website sorgt dafür, dass du Vertrauen aufbaust, sichtbar wirst und
                konstant neue Kundinnen gewinnst – auch dann, wenn du gerade nicht arbeitest.
              </p>
            </div>
            <Link
              to="/" hash="schreib-mir"
              className="reveal inline-block mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
            >
              Kostenlose Analyse & Demo
            </Link>
          </div>
          <ul className="space-y-1">
            {benefits.map((b, i) => (
              <li
                key={b}
                className={`reveal reveal-stagger-${(i % 6) + 1} flex items-start gap-5 py-5 border-b border-border/60 last:border-0`}
              >
                <span className="font-serif text-2xl text-muted-foreground/60 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-ink pt-1">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6 md:gap-8">
          <figure className="reveal relative rounded-3xl overflow-hidden aspect-[4/5]">
            <img
              src={problemImg}
              alt="Stiller Schreibtisch mit Smartphone – das Warten auf Anfragen"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.2em] text-background bg-ink/60 backdrop-blur px-3 py-2 rounded-full text-center">
              Vorher · Wenig Sichtbarkeit
            </figcaption>
          </figure>
          <figure className="reveal reveal-delay relative rounded-3xl overflow-hidden aspect-[4/5]">
            <img
              src={successImg}
              alt="Modernes, gebuchtes Beauty Studio mit zufriedener Kundin"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 right-4 text-xs uppercase tracking-[0.2em] text-background bg-ink/60 backdrop-blur px-3 py-2 rounded-full text-center">
              Nachher · Konstant gebucht
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Angebot() {
  const free = [
    "Erstgespräch & Kennenlernen",
    "Projektbesprechung & erste Ideen",
    "Erste Design-/Demo-Vorschau",
    "Individuelle Konzeptideen für deinen Online-Auftritt",
    "Beratung zu Aufbau, Buchungssystem & Struktur",
  ];
  const paid = [
    "Online-Präsenz Analyse & Optimierungsplan",
    "Individuelle Website-Erstellung",
    "Logo Design & Branding-Elemente",
    "Flyer, Visitenkarten & Print-Design (druckfertig)",
    "Social Media Design (Posts, Stories, Cover Sets)",
    "Mobile Optimierung & SEO-Grundoptimierung",
    "Domain & Hosting Einrichtung",
    "Buchungs-/Kalenderlösungen",
    "Zusätzliche Unterseiten oder Erweiterungen",
    "Änderungen, Pflege & laufende Betreuung der Inhalte",
  ];
  return (
    <section id="angebot" className="py-12 md:py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Mein Angebot
          </div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
            Was du bei mir bekommst
          </h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg">
            Transparente Leistungen – von der kostenlosen Erstberatung bis zum fertigen Gesamtauftritt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="reveal relative rounded-3xl border border-border/60 bg-background p-8 md:p-10 shadow-sm">
            <div className="absolute -top-3 left-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-soft text-ink text-[11px] uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-ink/70" />
              Kostenlos
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-ink mt-2">
              Unverbindlich &amp; kostenlos
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Kennenlernen, beraten, Ideen sammeln – ohne Verpflichtung.
            </p>
            <ul className="mt-8 space-y-4">
              {free.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/" hash="schreib-mir"
              className="inline-block mt-10 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
            >
              Kostenlose Demo anfragen
            </Link>
          </div>

          <div className="reveal reveal-delay relative rounded-3xl border border-mauve/30 bg-gradient-to-br from-peach-soft via-background to-accent/40 p-8 md:p-10 shadow-sm">
            <div className="absolute -top-3 left-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mauve text-white text-[11px] uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              Leistungen
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-ink mt-2">
              Kostenpflichtige Leistungen
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Alles, was dein Studio professionell, sichtbar und unverwechselbar macht – online wie offline.
            </p>
            <ul className="mt-8 grid sm:grid-cols-1 gap-y-4">
              {paid.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Individuelles Angebot nach deinem Bedarf – fair &amp; transparent kalkuliert.
            </p>
          </div>
        </div>

        {/* Online-Präsenz Analyse – standalone premium service */}
        <div className="reveal mt-8 relative rounded-3xl border border-mauve/30 bg-gradient-to-br from-peach-soft via-background to-accent/40 p-8 md:p-10 shadow-sm">
          <div className="absolute -top-3 left-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mauve text-white text-[11px] uppercase tracking-[0.2em]">
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            Strategie-Service
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mt-2">
                Online-Präsenz Analyse
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
                Du hast bereits eine Website oder einen bestehenden Online-Auftritt und möchtest wissen, wo Potenzial verloren geht?
                <br /><br />
                Die Online-Präsenz Analyse bewertet Website, Google-Profil, Sichtbarkeit und Außenwirkung und liefert konkrete Empfehlungen zur Verbesserung.
              </p>
            </div>
            <div className="shrink-0 sm:text-right mt-2">
              <p className="font-serif text-3xl text-ink leading-none">150 €</p>
              <p className="text-sm text-muted-foreground mt-1">einmalig</p>
            </div>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              "Website Analyse",
              "Google Business Profil Analyse",
              "Sichtbarkeit & Auffindbarkeit",
              "Branding & Vertrauen",
              "Buchungs- und Kontaktmöglichkeiten",
              "Konkreter Optimierungsplan",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink/80 italic leading-relaxed">
            Ergebnis: Ein strukturierter Bericht mit klaren Verbesserungsvorschlägen und priorisierten Handlungspunkten.
          </p>
          <div className="mt-5 flex items-start gap-2 bg-background/60 border border-mauve/20 rounded-2xl px-4 py-3">
            <span className="shrink-0 text-base leading-[1.5]">💎</span>
            <p className="text-sm text-ink">
              <strong>Bei Buchung einer Premium Website kostenlos enthalten.</strong>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/preise"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition"
          >
            Alle Preise ansehen <span aria-hidden>→</span>
          </Link>
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
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Warum Javera Studio
          </div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
            Mehr als eine Website – dein komplettes visuelles Erscheinungsbild, das Kundinnen bringt.
          </h2>
          <div className="reveal reveal-delay mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Von der Website über das Logo bis zu Instagram-Posts und Flyern – ich gestalte alles, was dein Beauty Studio sichtbar und unverwechselbar macht.
            </p>
            <p>
              Du bekommst kein Fertigprodukt von der Stange, sondern ein durchgängiges visuelles Konzept, das zu deiner Marke, deinem Stil und deinen Kundinnen passt.
            </p>
            <p className="text-ink font-medium">
              Starte mit einer kostenlosen Website-Analyse – ich zeige dir, wo Potenzial steckt und was dein Auftritt wirklich braucht.
            </p>
          </div>
        </div>
        <div className="mt-12 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Das bekommst du
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {javeraPoints.map((p, i) => (
            <div
              key={p}
              className={`reveal reveal-stagger-${(i % 7) + 1} flex items-start gap-4 py-3`}
            >
              <span className="mt-1 text-ink shrink-0">✔</span>
              <span className="text-ink leading-relaxed">{p}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 reveal">
          <Link
            to="/" hash="schreib-mir"
            className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
          >
            Kostenlose Analyse & Demo
          </Link>
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
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Ablauf
          </div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
            So läuft unsere Zusammenarbeit ab
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`reveal-card reveal-stagger-${i + 1} p-8 rounded-3xl border border-border/60 bg-background hover:bg-cream transition`}
            >
              <span className="font-serif text-5xl text-muted-foreground/60">{s.n}</span>
              <h3 className="font-serif text-2xl text-ink mt-6">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-12 text-center text-muted-foreground italic">
          Einfach, schnell und ohne komplizierten Prozess.
        </p>
        <div className="mt-8 text-center reveal">
          <Link
            to="/" hash="schreib-mir"
            className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
          >
            Jetzt starten
          </Link>
        </div>
      </div>
    </section>
  );
}

function Zweifel() {
  return (
    <section className="py-12 md:py-16 bg-peach-soft">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Keine Sorge
        </div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
          Keine Zeit, keine Technik – kein Problem.
        </h2>
        <div className="reveal reveal-delay mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
          <p>
            Du musst keine fertigen Texte haben, keine Bilder vorbereiten und dich auch nicht
            mit Technik auskennen.
          </p>
          <p>
            Ich übernehme Struktur, Design und Aufbau für dich und führe dich Schritt für
            Schritt durch den gesamten Prozess.
          </p>
          <p>
            Du bekommst eine erste Demo – und wir passen alles gemeinsam an, bis es perfekt zu
            deinem Studio passt.
          </p>
        </div>
        <Link
          to="/" hash="schreib-mir"
          className="reveal inline-block mt-10 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
        >
          Kostenlose Analyse & Demo
        </Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Wer bin ich
          </div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
            Über mich
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-[1.05rem]">
            <p className="reveal reveal-stagger-1">
              Ich bin Jagoda – Webdesignerin & Grafikerin aus Wien, spezialisiert auf Beauty Studios. Ich begleite dich beim Aufbau eines professionellen Gesamtauftritts – von der Website über das Branding bis zu Social-Media-Design und Print.
            </p>
            <p className="reveal reveal-stagger-2">
              Durch meine Erfahrung in der IT verbinde ich klares Design mit Struktur und
              Funktion. So entsteht eine Website, die nicht nur gut aussieht, sondern Vertrauen
              aufbaut und neue Kundinnen anzieht.
            </p>
            <p className="reveal reveal-stagger-3">
              Ich arbeite bewusst unkompliziert: Du musst keine fertigen Texte oder Technik-Wissen
              mitbringen – ich führe dich Schritt für Schritt durch den gesamten Prozess.
            </p>
            <p className="reveal reveal-stagger-4">
              Als Mama von drei Kindern weiß ich, wie wertvoll Zeit ist – deshalb ist mir eine
              einfache, klare Zusammenarbeit besonders wichtig.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="reveal aspect-[4/5] rounded-3xl overflow-hidden">
            <img
              src={aboutImg}
              alt="Jagoda – Webdesignerin aus Wien"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            aria-hidden
            className="absolute -z-10 -top-6 -right-6 w-full h-full rounded-3xl"
            style={{ backgroundColor: "var(--peach-soft)" }}
          />
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
          FAQ
        </div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight text-center">
          Häufige Fragen
        </h2>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className={`reveal reveal-stagger-${(i % 6) + 1} group rounded-2xl bg-background border border-border/60 p-6 open:shadow-sm transition`}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                <span className="font-serif text-lg md:text-xl text-ink">{f.q}</span>
                <span
                  aria-hidden
                  className="shrink-0 w-7 h-7 rounded-full border border-ink/20 flex items-center justify-center text-ink transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 text-center reveal">
          <Link
            to="/" hash="schreib-mir"
            className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
          >
            Kostenlose Analyse & Demo
          </Link>
          <p className="mt-3 text-xs text-muted-foreground">
            Unverbindlich · Antwort in 24h · kostenlos starten
          </p>
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
            <img
              src="/anfrage.png"
              alt="Beauty Studio Besitzerin arbeitet entspannt am Laptop"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            aria-hidden
            className="absolute -z-10 -bottom-6 -left-6 w-full h-full rounded-3xl"
            style={{ backgroundColor: "var(--mint-soft)" }}
          />
        </div>
        <div className="order-1 md:order-2 text-center md:text-left">
          <h2 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
            Bereit für einen Auftritt, der dein Studio wirklich widerspiegelt – und neue Kundinnen bringt?
          </h2>
          <p className="reveal reveal-delay mt-6 text-lg text-muted-foreground">
            Schick mir eine kurze Anfrage – ich melde mich persönlich bei dir.
          </p>
          <Link
            to="/" hash="schreib-mir"
            className="reveal inline-block mt-10 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
          >
            Kostenlose Analyse & Demo
          </Link>
          <p className="reveal mt-3 text-xs text-muted-foreground">
            Unverbindlich · Antwort in 24h · kostenlos starten
          </p>
          <p className="reveal mt-4 text-sm text-muted-foreground">
            speziell für Beauty Studios
          </p>
        </div>
      </div>
    </section>
  );
}

function SchreibMir() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    const privacy = data.get("privacy") === "on";

    if (!name || !email || !subject || !message) {
      toast.error("Bitte fülle alle Felder aus.");
      return;
    }
    if (!privacy) {
      toast.error("Bitte stimme der Datenschutzerklärung zu.");
      return;
    }
    if (name.length > 120 || email.length > 255 || subject.length > 200 || message.length > 5000) {
      toast.error("Eingaben sind zu lang.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "5c831a25-cd2b-4666-ae44-91194af7bc49",
          name,
          email,
          subject,
          message,
          datenschutz_zustimmung: "Ja – Datenschutzerklärung gelesen und akzeptiert",
        }),
      });
      const result = (await response.json()) as { success: boolean; message?: string };
      if (!result.success) {
        toast.error(`Fehler: ${result.message ?? "Unbekannter Fehler"}`);
        return;
      }
      setDone(true);
      toast.success("Danke für deine Anfrage – ich melde mich in Kürze.");
      form.reset();
    } catch (err) {
      toast.error(`Netzwerkfehler: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="schreib-mir" className="py-12 md:py-16 bg-cream">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
          Kontakt
        </div>
        <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight text-center">
          Schreib mir
        </h2>
        <p className="reveal reveal-delay mt-4 text-center text-muted-foreground text-lg">
          Eine kurze Nachricht reicht – ich melde mich persönlich bei dir.
        </p>

        {done ? (
          <div className="reveal mt-12 p-10 md:p-12 rounded-3xl bg-background border border-border/60 text-center">
            <div
              className="w-14 h-14 mx-auto rounded-full grid place-content-center mb-6"
              style={{ backgroundColor: "var(--mint-soft, #e6f4ee)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-ink">
                <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-ink">Danke für deine Anfrage!</h3>
            <p className="mt-3 text-muted-foreground">Ich melde mich in Kürze persönlich bei dir.</p>
            <button type="button" onClick={() => setDone(false)} className="mt-6 text-sm text-ink underline hover:opacity-70">
              Weitere Nachricht schreiben
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal mt-12 space-y-5 p-8 md:p-10 rounded-3xl bg-background border border-border/60">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="sm-name" className="block text-sm text-ink mb-2">Name</label>
                <input
                  id="sm-name"
                  name="name"
                  type="text"
                  required
                  maxLength={120}
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label htmlFor="sm-email" className="block text-sm text-ink mb-2">E-Mail</label>
                <input
                  id="sm-email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label htmlFor="sm-subject" className="block text-sm text-ink mb-2">Betreff</label>
              <input
                id="sm-subject"
                name="subject"
                type="text"
                required
                maxLength={200}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="sm-message" className="block text-sm text-ink mb-2">Nachricht</label>
              <textarea
                id="sm-message"
                name="message"
                required
                rows={5}
                maxLength={5000}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                id="sm-privacy"
                name="privacy"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 rounded border border-border accent-mauve cursor-pointer"
              />
              <label htmlFor="sm-privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                Ich habe die{" "}
                <Link to="/datenschutz" className="underline hover:text-ink transition-colors">
                  Datenschutzerklärung
                </Link>{" "}
                gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.
              </label>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Wird gesendet…" : "Nachricht senden"}
            </button>
            <p className="text-xs text-center text-muted-foreground">
              Deine Nachricht wird direkt an hallo@javera-studio.at übermittelt.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function FeaturedLuxe() {
  const mockups: { src?: string; alt: string; span: string; aspect: string; label: string }[] = [
    // Zeile 1: Visitenkarten + Preisliste nebeneinander
    { src: "/luxe-visitenkarten.png", alt: "Visitenkarten Mockup",    span: "md:col-span-6",  aspect: "aspect-[3/4]",  label: "Visitenkarten" },
    { src: "/luxe-preisliste.png",    alt: "Preisliste Mockup",       span: "md:col-span-6",  aspect: "aspect-[3/4]",  label: "Preisliste" },

    // Zeile 2: Social Posts
    { src: "/luxe-social-1.png",      alt: "Social Media Template 1", span: "md:col-span-4",  aspect: "aspect-[9/16]", label: "Social Post" },
    { src: "/luxe-social-2.png",      alt: "Social Media Template 2", span: "md:col-span-4",  aspect: "aspect-[9/16]", label: "Social Post" },
    { src: "/luxe-social-3.png",      alt: "Social Media Template 3", span: "md:col-span-4",  aspect: "aspect-[9/16]", label: "Social Post" },

    // Zeile 3: Gutschein groß unten
    { src: "/luxe-gutschein.png",     alt: "Gutschein Mockup",        span: "md:col-span-12", aspect: "aspect-[16/9]", label: "Gutscheine" },
  ];

  const bullets = [
    "Website Design",
    "Logo Design",
    "Preislisten",
    "Gutscheine",
    "Social Media Templates",
    "Visitenkarten",
  ];

  return (
    <section className="relative py-14 md:py-20 bg-background overflow-hidden">
      {/* soft warm wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--peach-soft) 70%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Intro */}
        <div className="max-w-2xl mx-auto text-center mb-20 md:mb-28">
          <div className="reveal text-xs uppercase tracking-[0.28em] text-muted-foreground mb-5">
            <span className="editorial-rule mr-3" />
            Komplettes Branding
            <span className="editorial-rule ml-3" />
          </div>
          <h2 className="reveal font-serif text-4xl md:text-6xl text-ink leading-[1.05] tracking-tight">
            Mehr als nur Webseiten
          </h2>
          <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">
            Ich entwickle nicht nur moderne Websites, sondern komplette visuelle
            Markenauftritte für Beauty Studios — abgestimmt auf Stil, Zielgruppe
            und Markenwirkung.
          </p>
        </div>

        {/* Featured hero — asymmetric */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="reveal-card md:col-span-7 order-2 md:order-1">
            <div
              className="relative rounded-[2rem] overflow-hidden group"
              style={{
                boxShadow:
                  "0 30px 80px -30px color-mix(in oklab, var(--ink) 25%, transparent)",
              }}
            >
              <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border/50 text-[10px] uppercase tracking-wider font-medium text-ink shadow-sm">
    <span className="w-1.5 h-1.5 rounded-full bg-mauve" />
    Showcase Project
  </span>
              <div
                className="aspect-[4/5] md:aspect-[5/6] w-full"
                style={{ backgroundColor: "var(--peach-soft)" }}
              >
                <img
                  src={demoLuxeNails}
                  alt="Luxe Nails Vienna — Website & Branding Hero"
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2 reveal reveal-delay">
            <div className="text-[11px] uppercase tracking-[0.32em] text-rose-gold mb-5">
              Featured Project
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight">
              Luxe Nails<br />Vienna
            </h3>
            <div className="mt-6 h-px w-12 bg-ink/20" />
            <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">
              Luxuriöses Branding-Konzept für ein modernes Wiener Nagelstudio —
              inklusive Website, Preislisten, Gutscheinen, Visitenkarten und
              Social Media Assets.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-sm text-ink/80"
                >
                  <span
                    aria-hidden
                    className="inline-block h-[6px] w-[6px] rounded-full"
                    style={{ backgroundColor: "var(--rose-gold)" }}
                  />
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="https://demo-luxe-nails-vienna.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-10 text-sm font-medium tracking-wide text-ink border-b border-ink/30 pb-1 hover:border-ink transition"
            >
              Projekt ansehen
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Branding mockups gallery */}
        <div className="mt-24 md:mt-36">
          <div className="flex items-end justify-between mb-10 md:mb-14">
            <div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground mb-3">
                Brand Identity
              </div>
              <h4 className="font-serif text-2xl md:text-3xl text-ink">
                Visuelle Markenwelt
              </h4>
              <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">
                Jedes Element — vom Logo bis zum Gutschein — ist aufeinander abgestimmt und auf deine Zielgruppe zugeschnitten.
              </p>
            </div>
            <div className="hidden md:block text-xs text-muted-foreground italic">
              Branding · Print · Social
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-5 md:gap-6">
            {mockups.map((m, i) => (
              <figure
                key={i}
                className={`reveal-card reveal-stagger-${(i % 6) + 1} ${m.span} group relative overflow-hidden rounded-2xl bg-cream`}
                style={{
                  boxShadow:
                    "0 20px 50px -25px color-mix(in oklab, var(--ink) 18%, transparent)",
                }}
              >
                <div className={`${m.aspect} w-full overflow-hidden`}>
                  {m.src ? (
                    <img
                      src={m.src}
                      alt={m.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.05]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {m.label}
                    </div>
                  )}
                </div>
                <figcaption className="absolute left-4 bottom-4 text-[10px] uppercase tracking-[0.25em] text-ink/0 group-hover:text-ink/70 bg-background/0 group-hover:bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 transition-all duration-500">
                  {m.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  useEffect(() => {
    const selector = ".reveal, .reveal-card";
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(selector).forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-background text-ink">
      <Nav />
      <Hero />
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
      <SchreibMir />
      <Footer />
    </main>
  );
}
