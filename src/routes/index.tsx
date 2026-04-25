import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/portrait.png";
import logo from "@/assets/javera-logo.png";
import problemImg from "@/assets/problem.jpg";
import successImg from "@/assets/success.jpg";
import ctaImg from "@/assets/cta.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Javera Studio – Websites für Beauty Studios, die Kundinnen bringen" },
      {
        name: "description",
        content:
          "Mehr Kundinnen & Buchungen für dein Beauty Studio. Javera Studio erstellt Websites, die Vertrauen aufbauen und gezielt zur Terminbuchung führen.",
      },
      {
        property: "og:title",
        content: "Javera Studio – Websites für Beauty Studios, die Kundinnen bringen",
      },
      {
        property: "og:description",
        content:
          "Websites für Nagelstudios, Kosmetikstudios, Friseure & Beauty Kliniken – professionell, feminin, conversionstark.",
      },
    ],
  }),
  component: Index,
});

const demos = [
  {
    title: "Luxe Nails Vienna",
    category: "Nagelstudio",
    desc: "Elegante Website für ein Premium-Nagelstudio – optimiert für mehr Terminbuchungen und eine klare, verkaufsstarke Preisstruktur.",
    focus: "Fokus: mehr Anfragen & Premium-Auftritt",
    url: "https://id-preview--c6fdd669-17cd-4e84-8923-e378702b9bf7.lovable.app",
    accent: "peach",
  },
  {
    title: "PURE SKIN Studio",
    category: "Kosmetikstudio",
    desc: "Cleanes Kosmetikstudio-Design – aufgebaut für Vertrauen, klare Angebote und mehr Anfragen.",
    focus: "Fokus: mehr Anfragen & Premium-Auftritt",
    url: "https://id-preview--f84fb1a2-8d8e-4dd1-8788-e75a54f962f2.lovable.app",
    accent: "mint",
  },
  {
    title: "Noir Vision",
    category: "Friseursalon",
    desc: "Auffällige Friseur-Website – für starke Markenwirkung, mehr Sichtbarkeit und neue Kundinnen.",
    focus: "Fokus: mehr Anfragen & Premium-Auftritt",
    url: "https://id-preview--bf8973d3-bbb2-4894-8b04-7bb733cee971.lovable.app",
    accent: "peach",
  },
  {
    title: "LUMEA Laser Clinik",
    category: "Beauty Klinik",
    desc: "Seriöse Beauty-Klinik-Website mit Fokus auf Vertrauen, Zertifikate und Beratung.",
    focus: "Fokus: mehr Anfragen & Premium-Auftritt",
    url: "https://id-preview--6183d25e-927c-4ff6-8999-b034f30ec1bb.lovable.app",
    accent: "mint",
  },
];

const benefits = [
  "Mehr direkte Anfragen & Terminbuchungen",
  "Du wirkst sofort professionell und vertrauenswürdig",
  "Bessere Sichtbarkeit bei Google",
  "Weniger Abhängigkeit von Instagram",
  "Klare Positionierung gegenüber deiner Konkurrenz",
  "Rund um die Uhr sichtbar für neue Kundinnen",
];

const javeraPoints = [
  "Spezialisierung auf Beauty Studios (Nails, Kosmetik, Friseur, Laser)",
  "Individuelles Webdesign statt Standard-Templates",
  "Farben, Stil und Konzept passend zu deiner Marke",
  "Fokus auf mehr Sichtbarkeit, Anfragen und Kundinnen",
  "Persönliche Zusammenarbeit statt anonymer Agentur",
  "Schnelle und unkomplizierte Umsetzung",
  "SEO-Grundoptimierung für bessere Auffindbarkeit",
];

const FormIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
  </svg>
);
const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" strokeLinecap="round" />
    <circle cx="9" cy="10" r="1.2" />
    <path d="m7 14 3-3 3 3 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const TuneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-7 h-7">
    <path d="M4 7h10M4 12h6M4 17h12" strokeLinecap="round" />
    <circle cx="17" cy="7" r="2" />
    <circle cx="13" cy="12" r="2" />
    <circle cx="19" cy="17" r="2" />
  </svg>
);

const steps = [
  {
    n: "01",
    title: "Erzähl mir von deinem Studio",
    desc: "Du füllst ein kurzes Formular aus und sagst mir, was du brauchst.",
    Icon: FormIcon,
  },
  {
    n: "02",
    title: "Du bekommst deine Demo",
    desc: "Ich erstelle eine erste Version deiner Website – abgestimmt auf dein Studio.",
    Icon: DesignIcon,
  },
  {
    n: "03",
    title: "Wir machen sie perfekt",
    desc: "Wir passen Farben, Texte und Details gemeinsam an, bis alles genau zu dir passt.",
    Icon: TuneIcon,
  },
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center group"
          aria-label="Javera Studio – zur Startseite"
        >
          <img
            src={logo}
            alt="Javera Studio"
            className="h-9 md:h-10 w-auto transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-80 group-hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#demos" className="hover:text-ink transition">Demos</a>
          <a href="#warum" className="hover:text-ink transition">Warum</a>
          <a href="#ablauf" className="hover:text-ink transition">Ablauf</a>
          <a href="#preise" className="hover:text-ink transition">Preise</a>
          <a href="#about" className="hover:text-ink transition">Über mich</a>
        </nav>
        <a
          href="#kontakt"
          className="text-sm px-4 py-2 rounded-full bg-ink text-primary-foreground hover:opacity-90 transition"
        >
          Demo sichern
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-60 blur-3xl"
        style={{ backgroundColor: "var(--mint-soft)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-60 blur-3xl"
        style={{ backgroundColor: "var(--peach-soft)" }}
      />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="w-8 h-px bg-muted-foreground/50" />
            Spezialisiert auf Beauty Websites
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink">
            Mehr Kundinnen &amp; Buchungen für dein <em className="text-muted-foreground">Beauty Studio</em> – mit einer Website, die verkauft.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Ich erstelle Websites für Beauty Studios, die Vertrauen aufbauen, professionell wirken
            und deine Kundinnen direkt zur Terminbuchung führen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="px-7 py-3.5 rounded-full bg-ink text-primary-foreground hover:opacity-90 transition font-medium"
            >
              Kostenlose Demo für dein Studio sichern
            </a>
            <a
              href="#demos"
              className="px-7 py-3.5 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-primary-foreground transition font-medium"
            >
              Beispiele ansehen
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-ink/10">
            <img
              src={heroImg}
              alt="Modernes Beauty Studio Interior"
              width={1536}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl bg-background shadow-xl border border-border/60 hidden sm:block"
          >
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Made for</div>
            <div className="font-serif text-lg text-ink">Beauty Studios</div>
          </div>
        </div>
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
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Vier Welten. Ein Standard.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Beispiele, wie deine Website aussehen könnte – zugeschnitten auf dein Studio.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {demos.map((d) => (
            <div
              key={d.title}
              className="group relative bg-background rounded-3xl p-8 md:p-10 border border-border/60 hover:shadow-xl hover:shadow-ink/5 transition"
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
              <p className="mt-3 text-sm text-ink/70 italic">→ {d.focus.replace("Fokus: ", "Fokus: ")}</p>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-ink border-b border-ink/30 pb-1 hover:border-ink transition"
              >
                Website ansehen
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
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
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Warum eine moderne Website entscheidend ist.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Instagram allein reicht heute nicht mehr. Ohne Website verlierst du täglich
                potenzielle Kundinnen an Studios, die professioneller wirken und leichter
                auffindbar sind.
              </p>
              <p>
                Eine eigene Website sorgt dafür, dass du Vertrauen aufbaust, bei Google gefunden
                wirst und konstant neue Anfragen bekommst – auch dann, wenn du gerade nicht
                arbeitest.
              </p>
            </div>
          </div>
          <ul className="space-y-1">
            {benefits.map((b, i) => (
              <li
                key={b}
                className="flex items-start gap-5 py-5 border-b border-border/60 last:border-0"
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
          <figure className="relative rounded-3xl overflow-hidden aspect-[4/5]">
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
          <figure className="relative rounded-3xl overflow-hidden aspect-[4/5]">
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

function Javera() {
  return (
    <section className="py-24 md:py-32 bg-mint-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Warum Javera Studio
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Websites für Beauty Studios – die nicht nur schön sind, sondern Kundinnen bringen.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Ich helfe Beauty Studios dabei, online professionell aufzutreten und mehr Kundinnen
              zu gewinnen – durch Websites, die klar aufgebaut sind und gezielt zur Anfrage oder
              Terminbuchung führen.
            </p>
            <p>
              Du bekommst keine Standardlösung, sondern ein Design, das zu deinem Studio passt
              und deine Leistungen richtig präsentiert.
            </p>
          </div>
        </div>
        <div className="mt-12 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Das bekommst du
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {javeraPoints.map((p) => (
            <div key={p} className="flex items-start gap-4 py-3">
              <span
                className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "var(--ink)" }}
              />
              <span className="text-ink leading-relaxed">{p}</span>
            </div>
          ))}
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
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            So einfach läuft’s ab.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s) => {
            const Icon = s.Icon;
            return (
              <div
                key={s.n}
                className="p-8 md:p-10 rounded-3xl border border-border/60 bg-background hover:bg-cream transition"
              >
                <div className="flex items-center justify-between text-muted-foreground/60">
                  <span className="font-serif text-5xl">{s.n}</span>
                  <span className="text-ink/70"><Icon /></span>
                </div>
                <h3 className="font-serif text-2xl text-ink mt-6">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-12 text-center text-muted-foreground italic">
          Einfach, schnell und ohne komplizierten Prozess.
        </p>
      </div>
    </section>
  );
}

function Preise() {
  return (
    <section id="preise" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Angebot
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Deine Website – modern &amp; verkaufsstark.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-10 rounded-3xl bg-background border border-border/60">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Starter Website
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-serif text-5xl text-ink">ab 300–400€</span>
            </div>
            <ul className="mt-8 space-y-3 text-ink">
              <li>· Perfekt für kleinere Studios, die sichtbar werden wollen</li>
              <li>· Klare Struktur, die Kundinnen direkt zur Anfrage führt</li>
              <li>· Mobil optimiert für Instagram-Besucher</li>
              <li>· Sauberes, professionelles Design</li>
            </ul>
            <a
              href="#kontakt"
              className="mt-10 inline-block px-6 py-3 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-primary-foreground transition"
            >
              Anfragen
            </a>
          </div>
          <div
            className="relative p-10 rounded-3xl text-primary-foreground"
            style={{ backgroundColor: "var(--ink)" }}
          >
            <div className="absolute top-6 right-6 text-xs px-3 py-1 rounded-full bg-background/10 border border-background/20">
              Empfohlen
            </div>
            <div className="text-xs uppercase tracking-wider opacity-70">Premium Website</div>
            <div className="mt-3">
              <span className="font-serif text-5xl">ab 500–800€</span>
            </div>
            <ul className="mt-8 space-y-3 opacity-90">
              <li>· Für Studios, die wachsen und sich abheben wollen</li>
              <li>· Mehr Seiten für Vertrauen &amp; bessere Google Sichtbarkeit</li>
              <li>· Strategisch aufgebaut für mehr Anfragen</li>
              <li>· Stärkere Markenwirkung &amp; Premium-Auftritt</li>
            </ul>
            <a
              href="#kontakt"
              className="mt-10 inline-block px-6 py-3 rounded-full bg-background text-ink hover:opacity-90 transition"
            >
              Anfragen
            </a>
          </div>
        </div>
        <p className="mt-8 text-sm text-muted-foreground text-center">
          zzgl. Hosting &amp; Domain (ca. 10–20€/Monat)
        </p>
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
            Über mich
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Webdesign mit Herz – aus Wien.
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-[1.05rem]">
            <p>
              Ich helfe Beauty Studios in Wien und Umgebung, mehr Kundinnen zu gewinnen – durch
              Websites, die professionell wirken und Vertrauen aufbauen.
            </p>
            <p>
              Durch meine Erfahrung in der IT verbinde ich klares Design mit Struktur und
              Funktion. So entsteht eine Website, die nicht nur gut aussieht, sondern für dich
              arbeitet.
            </p>
            <p>
              Ich arbeite bewusst einfach und effizient, damit du ohne großen Aufwand zu einer
              Website kommst, die wirklich zu deinem Studio passt.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img
              src={aboutImg}
              alt="Webdesignerin bei der Arbeit"
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

function CTA() {
  return (
    <section id="kontakt" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-ink/10">
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
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
            Lass uns deine Website erstellen.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Bereit für mehr Kundinnen und einen professionellen Online-Auftritt?
          </p>
          <a
            href="mailto:hello@javerastudio.com"
            className="inline-block mt-10 px-8 py-4 rounded-full bg-ink text-primary-foreground hover:opacity-90 transition font-medium"
          >
            Kostenlose Demo für dein Studio sichern
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-serif text-ink">
          Javera <span className="italic">Studio</span>
        </div>
        <div>© {new Date().getFullYear()} Javera Studio. Made in Vienna.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="bg-background text-ink">
      <Nav />
      <Hero />
      <Demos />
      <Warum />
      <Javera />
      <Ablauf />
      <Preise />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
