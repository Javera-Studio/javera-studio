import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/portrait.png";
import logo from "@/assets/javera-logo.png";
import problemImg from "@/assets/problem.jpg";
import successImg from "@/assets/success.jpg";
import ctaImg from "@/assets/cta.jpg";
import { SiteFooter as Footer } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Javera Studio — Webdesign für Beauty Studios Wien" },
      {
        name: "description",
        content:
          "Professionelle Websites für Nagelstudios, Kosmetikstudios & Beauty Brands in Wien. Individuell, modern und auf dein Studio abgestimmt.",
      },
      { property: "og:title", content: "Javera Studio — Webdesign für Beauty Studios Wien" },
      {
        property: "og:description",
        content:
          "Professionelle Websites für Nagelstudios, Kosmetikstudios & Beauty Brands in Wien. Individuell, modern und auf dein Studio abgestimmt.",
      },
      { property: "og:image", content: "https://javera-studio.lovable.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:url", content: "https://javera-studio.lovable.app/" },
      { name: "twitter:title", content: "Javera Studio — Webdesign für Beauty Studios Wien" },
      {
        name: "twitter:description",
        content:
          "Professionelle Websites für Nagelstudios, Kosmetikstudios & Beauty Brands in Wien.",
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
    url: "https://id-preview--c6fdd669-17cd-4e84-8923-e378702b9bf7.lovable.app",
    accent: "peach",
  },
  {
    title: "PURE SKIN Studio",
    category: "Kosmetikstudio",
    desc: "Cleanes, ruhiges Design für mehr Vertrauen, klare Angebote und mehr Anfragen.",
    focus: "Vertrauen & hochwertige Präsentation",
    url: "https://id-preview--f84fb1a2-8d8e-4dd1-8788-e75a54f962f2.lovable.app",
    accent: "mint",
  },
  {
    title: "Noir Vision",
    category: "Friseursalon",
    desc: "Auffällige Website für starke Markenwirkung, mehr Sichtbarkeit und neue Kundinnen.",
    focus: "Markenwirkung & Sichtbarkeit",
    url: "https://id-preview--bf8973d3-bbb2-4894-8b04-7bb733cee971.lovable.app",
    accent: "peach",
  },
  {
    title: "LUMEA Laser Clinic",
    category: "Beauty Klinik",
    desc: "Seriöse Klinik-Website mit Fokus auf Vertrauen, Beratung und professionelle Darstellung.",
    focus: "Seriosität & Beratung",
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

const steps = [
  {
    n: "01",
    title: "Anfrage senden",
    desc: "Du füllst ein kurzes Formular aus und sagst mir, was du brauchst.",
  },
  {
    n: "02",
    title: "Demo erhalten",
    desc: "Ich erstelle eine erste Version deiner Website – abgestimmt auf dein Studio.",
  },
  {
    n: "03",
    title: "Feinabstimmung",
    desc: "Wir passen Farben, Texte und Details gemeinsam an.",
  },
  {
    n: "04",
    title: "Online gehen",
    desc: "Ich unterstütze dich bei Veröffentlichung, Domain und Hosting.",
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
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-24 md:h-28 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center group"
          aria-label="Javera Studio – zur Startseite"
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
          <a href="#preise" className="hover:text-ink transition">Preise</a>
          <a href="#about" className="hover:text-ink transition">Über mich</a>
          <a href="#faq" className="hover:text-ink transition">FAQ</a>
        </nav>
        <Link
          to="/demo-anfrage"
          className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition"
        >
          Demo sichern
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
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
            Ich erstelle moderne Websites für Nagelstudios, Kosmetikstudios, Friseure und
            Beauty-Kliniken – klar, hochwertig und optimiert für mehr Terminbuchungen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/demo-anfrage"
              className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
            >
              Kostenlose Demo sichern
            </Link>
            <a
              href="#demos"
              className="px-7 py-3.5 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-primary-foreground transition font-medium"
            >
              Beispiele ansehen
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Spezialisiert auf Beauty · Demo zuerst möglich · SEO-Grundoptimierung inklusive
          </p>
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
          <div className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl bg-background shadow-xl border border-border/60 hidden sm:block">
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
            Beispiel-Websites für Beauty Businesses
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            So könnte deine Website aussehen – abgestimmt auf dein Studio, deinen Stil und deine
            Zielgruppe.
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
        <div className="mt-16 text-center">
          <Link
            to="/demo-anfrage"
            className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
          >
            Eigene Website anfragen
          </Link>
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
              Warum Instagram allein nicht reicht
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
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
              className="inline-block mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
            >
              Website anfragen
            </Link>
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
            Websites für Beauty Studios – die nicht nur gut aussehen, sondern Kundinnen bringen.
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
            <p className="text-ink font-medium">
              Du bekommst zuerst eine Demo – und entscheidest danach.
            </p>
          </div>
        </div>
        <div className="mt-12 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Das bekommst du
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {javeraPoints.map((p) => (
            <div key={p} className="flex items-start gap-4 py-3">
              <span className="mt-1 text-ink shrink-0">✔</span>
              <span className="text-ink leading-relaxed">{p}</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            to="/demo-anfrage"
            className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
          >
            Demo sichern
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
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            So einfach kommst du zu deiner Website
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.n}
              className="p-8 rounded-3xl border border-border/60 bg-background hover:bg-cream transition"
            >
              <span className="font-serif text-5xl text-muted-foreground/60">{s.n}</span>
              <h3 className="font-serif text-2xl text-ink mt-6">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-muted-foreground italic">
          Einfach, schnell und ohne komplizierten Prozess.
        </p>
        <div className="mt-8 text-center">
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
        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
          Keine Zeit, keine Technik – kein Problem.
        </h2>
        <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
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
          className="inline-block mt-10 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
        >
          Kostenlos starten
        </Link>
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
            Deine Website – modern &amp; verkaufsstark
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
            <p className="mt-4 text-muted-foreground">
              Perfekt für Studios, die sichtbar werden und erste Anfragen generieren möchten.
            </p>
            <ul className="mt-8 space-y-3 text-ink">
              <li>· modernes Design</li>
              <li>· mobil optimiert</li>
              <li>· klare Struktur &amp; Texte</li>
              <li>· Kontaktmöglichkeit</li>
              <li>· SEO-Grundoptimierung</li>
            </ul>
            <Link
              to="/demo-anfrage"
              className="mt-10 inline-block px-6 py-3 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-primary-foreground transition"
            >
              Anfragen
            </Link>
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
            <p className="mt-4 opacity-80">
              Ideal für Studios, die wachsen und sich klar von der Konkurrenz abheben wollen.
            </p>
            <ul className="mt-8 space-y-3 opacity-90">
              <li>· mehr Seiten &amp; Inhalte</li>
              <li>· individuelle Anpassung</li>
              <li>· stärkere Conversion-Struktur</li>
              <li>· bessere Google Sichtbarkeit</li>
              <li>· Premium Design</li>
            </ul>
            <Link
              to="/demo-anfrage"
              className="mt-10 inline-block px-6 py-3 rounded-full bg-background text-ink hover:opacity-90 transition"
            >
              Premium anfragen
            </Link>
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
            Über mich
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-[1.05rem]">
            <p>
              Ich bin Jagoda, Webdesignerin aus Wien und spezialisiert auf moderne Websites für
              Beauty Businesses.
            </p>
            <p>
              Durch meine Erfahrung in der IT verbinde ich klares Design mit Struktur und
              Funktion. So entsteht eine Website, die nicht nur gut aussieht, sondern Vertrauen
              aufbaut und neue Kundinnen anzieht.
            </p>
            <p>
              Ich arbeite bewusst unkompliziert: Du musst keine fertigen Texte oder Technik-Wissen
              mitbringen – ich führe dich Schritt für Schritt durch den gesamten Prozess.
            </p>
            <p>
              Als Mama von drei Kindern weiß ich, wie wertvoll Zeit ist – deshalb ist mir eine
              einfache, klare Zusammenarbeit besonders wichtig.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
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
        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight text-center">
          Häufige Fragen
        </h2>
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-background border border-border/60 p-6 open:shadow-sm transition"
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
        <div className="mt-12 text-center">
          <Link
            to="/demo-anfrage"
            className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
          >
            Kostenlose Demo sichern
          </Link>
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
            Bereit für eine Website, die zu deinem Studio passt und Kundinnen bringt?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Schick mir eine kurze Anfrage – ich melde mich persönlich bei dir.
          </p>
          <Link
            to="/demo-anfrage"
            className="inline-block mt-10 px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition font-medium"
          >
            Kostenlose Demo sichern
          </Link>
          <p className="mt-6 text-sm text-muted-foreground">
            Unverbindlich · unkompliziert · speziell für Beauty Studios
          </p>
        </div>
      </div>
    </section>
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
      <Zweifel />
      <Preise />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
