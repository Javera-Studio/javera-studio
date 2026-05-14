import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import aboutImg from "@/assets/portrait.png";
import logo from "@/assets/javera-logo.png";
import problemImg from "@/assets/problem.jpg";
import successImg from "@/assets/success.jpg";
import ctaImg from "@/assets/cta.jpg";
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
      { property: "og:image", content: "https://javera-studio.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://javera-studio.lovable.app/" },
      { name: "twitter:title", content: "Javera Studio — Webdesign · Grafik · Branding für Beauty Studios Wien" },
      {
        name: "twitter:description",
        content:
          "Website, Branding & Grafik für Beauty Studios in Wien – individuell gestaltet, professionell umgesetzt.",
      },
      { name: "twitter:image", content: "https://javera-studio.lovable.app/og-image.jpg" },
    ],
  }),
  component: Index,
});

const demos = [
  {
    title: "Luxe Nails Vienna",
    category: "Nagelstudio",
    desc: "Elegante Website für ein Premium-Nagelstudio mit klarer Preisstruktur und Fokus auf Terminbuchungen.",
    focus: "klare Preise & mehr Buchungen",
    url: "https://luxe-nails-wien.lovable.app",
    accent: "peach",
  },
  {
    title: "PURE SKIN Studio",
    category: "Kosmetikstudio",
    desc: "Cleanes, ruhiges Design für mehr Vertrauen, klare Angebote und mehr Anfragen.",
    focus: "Vertrauen & hochwertige Präsentation",
    url: "https://pure-skin-studio-wien.lovable.app",
    accent: "mint",
  },
  {
    title: "Salon Noir",
    category: "Friseursalon",
    desc: "Auffällige Website für starke Markenwirkung, mehr Sichtbarkeit und neue Kundinnen.",
    focus: "Markenwirkung & Sichtbarkeit",
    url: "https://salon-noir.lovable.app",
    accent: "peach",
  },
  {
    title: "LUMEA Laser Clinic",
    category: "Beauty Klinik",
    desc: "Seriöse Klinik-Website mit Fokus auf Vertrauen, Beratung und professionelle Darstellung.",
    focus: "Seriosität & Beratung",
    url: "https://lumea-laser-clinic.lovable.app",
    accent: "mint",
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
  "Persönliche Zusammenarbeit direkt mit Jagoda – von Anfang bis Ende",
  "Schnelle Umsetzung mit klaren, sichtbaren Ergebnissen",
  "SEO-Grundoptimierung für bessere Sichtbarkeit bei Google",
  "20 % Rabatt auf alle Design-Leistungen für Website-Kunden",
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
    a: "Nein. Erst wenn du mit der Demo zufrieden bist und wir alles abgestimmt haben, beginnt die Zusammenarbeit. Keine Vorauszahlung, keine versteckten Kosten.",
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
    a: "Sehr – ein einheitliches Design über alle Kanäle macht deinen Auftritt stärker und professioneller. Als Website-Kundin erhältst du außerdem 20 % Rabatt auf alle Grafik- und Design-Leistungen.",
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
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#demos" className="hover:text-ink transition">Demos</a>
          <a href="#warum" className="hover:text-ink transition">Warum</a>
          <a href="#ablauf" className="hover:text-ink transition">Ablauf</a>
          <Link to="/preise" className="hover:text-ink transition">Preise</Link>
          <a href="#about" className="hover:text-ink transition">Über mich</a>
          <a href="#faq" className="hover:text-ink transition">FAQ</a>
          <Link to="/blog" className="hover:text-ink transition">Blog</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/demo-anfrage"
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
            <a href="#demos" onClick={close} className="py-2.5 hover:text-ink transition">Demos</a>
            <a href="#warum" onClick={close} className="py-2.5 hover:text-ink transition">Warum</a>
            <a href="#ablauf" onClick={close} className="py-2.5 hover:text-ink transition">Ablauf</a>
            <Link to="/preise" onClick={close} className="py-2.5 hover:text-ink transition">Preise</Link>
            <a href="#about" onClick={close} className="py-2.5 hover:text-ink transition">Über mich</a>
            <a href="#faq" onClick={close} className="py-2.5 hover:text-ink transition">FAQ</a>
            <Link to="/blog" onClick={close} className="py-2.5 hover:text-ink transition">Blog</Link>
            <Link
              to="/demo-anfrage"
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
            to="/demo-anfrage"
            className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
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
          to="/demo-anfrage"
          className="flex-shrink-0 inline-flex items-center justify-center px-6 py-3 bg-mauve text-white text-sm tracking-wide hover:bg-primary transition-colors rounded-sm shadow-sm"
        >
          Kostenlose Demo
        </Link>
      </div>
    </section>
  );
}

function Demos() {
  return (
    <section id="demos" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Demo Projekte
          </div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">
            Beispiel-Websites für Beauty Businesses
          </h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg">
            So könnte deine Website aussehen – abgestimmt auf dein Studio, deinen Stil und deine
            Zielgruppe.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {demos.map((d, i) => (
            <div
              key={d.title}
              className={`reveal-card reveal-stagger-${(i % 4) + 1} group relative bg-background rounded-3xl p-8 md:p-10 border border-border/60 hover:shadow-xl hover:shadow-ink/5 transition`}
            >
              <div
                className="w-12 h-12 rounded-full mb-6"
                style={{
                  backgroundColor:
                    d.accent === "mint" ? "var(--mint-soft)" : "var(--peach-soft)",
                }}
              />
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {d.category}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mt-2">{d.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{d.desc}</p>
              <p className="mt-3 text-sm text-ink/70 italic">→ Fokus: {d.focus}</p>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition"
              >
                Demo ansehen
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center reveal">
          <Link
            to="/demo-anfrage"
            className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
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
    <section id="warum" className="py-24 md:py-32">
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
              to="/demo-anfrage"
              className="reveal inline-block mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
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
    "Analyse deines Studios, Brandings oder deiner bestehenden Website",
    "Erste Design-/Demo-Vorschau",
    "Individuelle Konzeptideen für deinen Online-Auftritt",
    "Beratung zu Aufbau, Buchungssystem & Struktur",
  ];
  const paid = [
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
    <section id="angebot" className="py-24 md:py-32 bg-cream">
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
              to="/demo-anfrage"
              className="inline-block mt-10 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
            >
              Erstgespräch anfragen
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
    <section className="py-24 md:py-32 bg-mint-soft">
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
            to="/demo-anfrage"
            className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
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
    <section id="ablauf" className="py-24 md:py-32">
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
            to="/demo-anfrage"
            className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
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
    <section className="py-24 md:py-32 bg-peach-soft">
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
          to="/demo-anfrage"
          className="reveal inline-block mt-10 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
        >
          Kostenlose Analyse & Demo
        </Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
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
    <section id="faq" className="py-24 md:py-32 bg-cream">
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
            to="/demo-anfrage"
            className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
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
    <section id="kontakt" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="reveal aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-ink/10">
            <img
              src={ctaImg}
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
            to="/demo-anfrage"
            className="reveal inline-block mt-10 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
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
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      toast.error("Bitte fülle alle Felder aus.");
      return;
    }
    if (name.length > 120 || email.length > 255 || message.length > 5000) {
      toast.error("Eingaben sind zu lang.");
      return;
    }

    setSubmitting(true);
    const response = await fetch("/api/public/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    setSubmitting(false);

    if (!response.ok) {
      toast.error("Etwas ist schiefgelaufen. Bitte versuch es gleich nochmal.");
      return;
    }
    setDone(true);
    toast.success("Danke für deine Anfrage – ich melde mich in Kürze.");
    form.reset();
  }

  return (
    <section id="schreib-mir" className="py-24 md:py-32 bg-cream">
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
            <h3 className="font-serif text-2xl md:text-3xl text-ink">
              Danke für deine Anfrage!
            </h3>
            <p className="mt-3 text-muted-foreground">
              Ich melde mich in Kürze persönlich bei dir.
            </p>
            <button
              type="button"
              onClick={() => setDone(false)}
              className="mt-6 text-sm text-ink underline hover:opacity-70"
            >
              Weitere Nachricht schreiben
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal mt-12 space-y-5 p-8 md:p-10 rounded-3xl bg-background border border-border/60"
          >
            <div>
              <label htmlFor="sm-name" className="block text-sm text-ink mb-2">
                Name
              </label>
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
              <label htmlFor="sm-email" className="block text-sm text-ink mb-2">
                E-Mail
              </label>
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
            <div>
              <label htmlFor="sm-message" className="block text-sm text-ink mb-2">
                Nachricht
              </label>
              <textarea
                id="sm-message"
                name="message"
                required
                rows={5}
                maxLength={5000}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Wird gesendet…" : "Nachricht senden"}
            </button>
            <p className="text-xs text-center text-muted-foreground">
              Deine Nachricht wird direkt an hello@javera-studio.at übermittelt.
            </p>
          </form>
        )}
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
      <Demos />
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
