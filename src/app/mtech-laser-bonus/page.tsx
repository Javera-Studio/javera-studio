import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MtechLaserForm } from "@/components/MtechLaserForm";
import { AnalyseCards, type AnalyseItem } from "@/components/AnalyseCards";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";

export const metadata: Metadata = {
  title: "Kostenlose Online-Präsenz-Analyse für MTech Laser Kundinnen | JAVERA Studio",
  description: "Exklusiv für Kundinnen von MTech Laser: kostenlose Online-Präsenz-Analyse im Wert von 150 € von JAVERA Studio – Website, Google-Profil, Social Media & Markenauftritt.",
  robots: { index: false, follow: false },
};

// Platzhalter – exakte Partnerkonditionen werden gemeinsam mit MTech Laser noch final abgestimmt.
const partnerVorteile = [
  { title: "Kostenlose Online-Präsenz-Analyse", desc: "Im Wert von 150 € – für Sie als MTech-Laser-Kundin geschenkt." },
  { title: "Individuelles Maßnahmen-PDF", desc: "Konkrete Handlungsempfehlungen speziell für Ihr Studio." },
  { title: "Exklusive Partnerkonditionen", desc: "Sonderkonditionen für MTech-Laser-Kundinnen bei einer Zusammenarbeit." },
  { title: "Bis zu 4 zinsfreie Raten", desc: "Flexible, zinsfreie Ratenzahlung bei größeren Projekten möglich." },
  { title: "Persönliche Betreuung", desc: "Direkter Kontakt und persönliche Beratung während des gesamten Prozesses." },
  { title: "Individuelle Lösung", desc: "Keine Standardpakete – jede Empfehlung wird individuell auf Ihr Studio, Ihre Ziele und Ihr Budget abgestimmt." },
];

const analyseItems: AnalyseItem[] = [
  {
    title: "Website",
    desc: "Falls bereits vorhanden",
    icon: <GlobeIcon />,
    details: ["den ersten Eindruck Ihrer Website", "Benutzerfreundlichkeit & Customer Experience", "eine klare Besucherführung bis zur Kontaktaufnahme oder Buchung", "Vertrauen und Professionalität"],
  },
  {
    title: "Google-Unternehmensprofil",
    desc: "Auffindbarkeit bei Google",
    icon: <PinIcon />,
    details: ["den Gesamteindruck Ihres Profils", "Vertrauen durch Vollständigkeit und Aktualität", "professionelle Präsentation Ihres Studios", "Auffindbarkeit für potenzielle Kundinnen"],
  },
  {
    title: "Social-Media-Kanäle",
    desc: "Auftritt & Wirkung",
    icon: <ShareIcon />,
    details: ["den professionellen Gesamteindruck", "Wiedererkennungswert Ihrer Marke", "Wirkung auf potenzielle Neukundinnen", "Einheitlichkeit Ihres Auftritts"],
  },
  {
    title: "Google Bewertungen",
    desc: "Wahrnehmung & Vertrauen",
    icon: <ReviewStarIcon />,
    details: ["den Gesamteindruck Ihrer Bewertungen", "Vertrauen aus Sicht potenzieller Neukundinnen", "professionelle Außenwirkung", "Umgang mit Kundenfeedback"],
  },
  {
    title: "Kontakt- & Buchungsmöglichkeiten",
    desc: "Einfachheit für Neukundinnen",
    icon: <CalendarIcon />,
    details: ["einfache Kontaktaufnahme", "unkomplizierte Buchungsmöglichkeiten", "klare Handlungsaufforderungen", "Nutzerfreundlichkeit aus Kundensicht"],
  },
  {
    title: "Markenauftritt",
    desc: "Einheitlichkeit & Wiedererkennung",
    icon: <SparkleIcon />,
    details: ["Wiedererkennungswert Ihrer Marke", "ein stimmiges Erscheinungsbild", "Professionalität Ihres Außenauftritts", "einen einheitlichen Markenauftritt"],
  },
  {
    title: "Sichtbarkeit",
    desc: "Wie leicht werden Sie gefunden?",
    icon: <EyeIcon />,
    details: ["wie leicht Ihr Studio gefunden wird", "Ihre Sichtbarkeit im regionalen Umfeld", "ungenutzte Potenziale", "Möglichkeiten zur besseren Auffindbarkeit"],
  },
  {
    title: "Erster Eindruck",
    desc: "Für Neukundinnen auf einen Blick",
    icon: <HeartIcon />,
    details: ["die Wirkung auf potenzielle Neukundinnen", "Professionalität und Vertrauen", "Klarheit Ihres Angebots", "den Gesamteindruck Ihres Online-Auftritts"],
  },
];

const steps = [
  { n: "1", title: "Anfrage absenden", desc: "Sie füllen das kurze Formular weiter unten aus." },
  { n: "2", title: "Analyse", desc: "Ich analysiere Ihren gesamten Online-Auftritt in Ruhe und im Detail." },
  { n: "3", title: "Ihr Maßnahmen-PDF", desc: "Sie erhalten Ihr individuelles PDF mit konkreten Handlungsempfehlungen." },
  { n: "4", title: "Ihre Entscheidung", desc: "Sie entscheiden selbst, ob Sie die Empfehlungen eigenständig umsetzen oder meine Unterstützung in Anspruch nehmen möchten." },
];

const testimonials = [
  {
    quote: "Wenn ich Sterne vergeben könnte, dann 10 von 5. Jagoda hat der Himmel geschickt! Sie hat meine Vorstellungen so was von übertroffen, alles top! Ich kann Javera nur wärmstens weiterempfehlen.",
    name: "Michaela Kornherr",
    studio: "faceandmore.at",
    url: "https://faceandmore.at",
    initial: "M",
  },
  {
    quote: "Absolut zu empfehlen! Ich habe alles der lieben Jagoda anvertraut und bin mega glücklich mit dem Ergebnis. Professionell, schnell und zuverlässig!",
    name: "Paula Venc",
    studio: "paulavenc.at",
    url: "https://paulavenc.at",
    initial: "P",
  },
  {
    quote: "Absolute Herzensempfehlung! Sie hat nicht einfach nur eine Webseite erstellt, sondern meine Vision sichtbar gemacht und meinem Studio einen professionellen Online-Auftritt gegeben, der zu 100 % zu mir passt.",
    name: "Danijela Boskovic",
    studio: "Divine Beauty & Nails Studio",
    url: "https://divinenails.at",
    initial: "D",
  },
];

function StarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
      <path d="M12 21s7-7.4 7-12a7 7 0 10-14 0c0 4.6 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
      <circle cx="6" cy="12" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M8 11l8-4M8 13l8 4" />
    </svg>
  );
}

function ReviewStarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
      <path d="M12 3.5l2.4 5.1 5.6.7-4.1 3.9 1.1 5.6-4.9-2.8-4.9 2.8 1.1-5.6-4.1-3.9 5.6-.7z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 9.5h16M8 3v4M16 3v4" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
      <path d="M12 2.5l1.8 6.2L20 10.5l-6.2 1.8L12 18.5l-1.8-6.2L4 10.5l6.2-1.8z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
      <path d="M12 20s-7-4.3-9.2-8.5C1.5 8.3 3.1 5 6.6 5c2 0 3.4 1.1 4 2.2.6-1.1 2-2.2 4-2.2 3.5 0 5.1 3.3 3.8 6.5C16.2 15.7 12 20 12 20z" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-mauve" aria-hidden>
      <path d="M12 4v14M6 13l6 6 6-6" />
    </svg>
  );
}

function SectionDivider() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div aria-hidden className="h-px bg-border/50" />
    </div>
  );
}

export default function MtechLaserBonusPage() {
  return (
    <main className="bg-background text-ink min-h-screen">
      {/* Top bar – dezenter Partner-Hinweis */}
      <div className="bg-ink text-white/90 text-center py-2.5 px-6">
        <p className="text-[11px] md:text-xs uppercase tracking-[0.15em]">
          ✨ Exklusiver Partnerbonus für Kundinnen von MTech Laser
        </p>
      </div>

      {/* Minimal header – keine Navigation */}
      <header className="py-6 px-6 flex justify-center">
        <Image
          src="/javera-logo.png"
          alt="JAVERA Studio"
          width={160}
          height={48}
          className="h-9 md:h-10 w-auto"
        />
      </header>

      {/* Hero – zweispaltig */}
      <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24">
        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl"
          style={{ backgroundColor: "var(--peach-soft)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: "var(--peach-soft)" }}
        />
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[0.82fr_1fr] gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="hero-cta inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-primary text-xs font-semibold mb-6">
              <StarIcon className="w-3.5 h-3.5" />
              In Partnerschaft mit MTech Laser
            </div>
            <h1 className="hero-headline font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
              Herzlichen Glückwunsch zu Ihrer Investition!
            </h1>
            <p className="hero-subtitle mt-6 text-lg text-muted-foreground leading-relaxed">
              Sie haben gerade einen wichtigen Schritt für Ihr Beauty-Business gemacht. Als Kundin von MTech Laser erhalten Sie deshalb exklusiv eine kostenlose Online-Präsenz-Analyse im Wert von 150&nbsp;€.
            </p>
            <div className="hero-cta mt-8">
              <Link
                href="#formular"
                className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
              >
                Jetzt kostenlose Analyse sichern
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-50"
              style={{ backgroundColor: "var(--peach-soft)" }}
            />
            <div
              className="reveal relative aspect-[3/2] rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 30px 60px -30px color-mix(in oklab, var(--ink) 16%, transparent)" }}
            >
              <Image
                src="/analysehero.png"
                alt="JAVERA Studio Online-Präsenz-Analyse für MTech Laser Kundinnen"
                priority
                width={1536}
                height={1024}
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ boxShadow: "inset 0 0 60px 6px color-mix(in oklab, var(--ink) 12%, transparent)" }}
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Warum dieser Bonus */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Hintergrund</div>
          <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Warum dieser Bonus?</h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-[1.05rem] text-left">
            <p className="reveal reveal-stagger-1">
              Viele Beauty-Unternehmerinnen investieren in Geräte und Schulungen – der Online-Auftritt bleibt dabei oft auf der Strecke. Dabei informieren sich potenzielle Kundinnen fast immer zuerst online, bevor sie einen Termin buchen.
            </p>
            <p className="reveal reveal-stagger-2">
              MTech Laser möchte Sie auch nach dem Gerätekauf oder Ihrer Schulung weiter unterstützen. Deshalb ergänzt JAVERA Studio diesen Betreuungsansatz mit einer kostenlosen Online-Präsenz-Analyse.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Wie sehen potenzielle Kundinnen Ihr Studio online */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[0.82fr_1fr] gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Der Blick von außen</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Wie sehen potenzielle Kundinnen Ihr Studio online?</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p className="reveal reveal-stagger-1">Der erste Eindruck entsteht heute meist online. Für die Analyse betrachte ich Ihren gesamten Online-Auftritt bewusst aus der Sicht einer potenziellen Neukundin.</p>
              <p className="reveal reveal-stagger-2">Zusätzlich analysiere ich Ihren Außenauftritt aus Marketing-Sicht und zeige Ihnen konkrete Möglichkeiten auf, wie Sie professioneller auftreten, mehr Vertrauen schaffen und noch mehr potenzielle Kundinnen erreichen können.</p>
            </div>
          </div>
          <div className="relative">
            <div
              className="reveal aspect-[3/2] rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 20px 50px -25px color-mix(in oklab, var(--ink) 18%, transparent)" }}
            >
              <Image
                src="/analyse.png"
                alt="Online-Präsenz-Analyse aus Sicht einer potenziellen Neukundin"
                loading="lazy"
                width={1536}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Was wird analysiert */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Umfang der Analyse</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Was wird analysiert?</h2>
            <p className="reveal reveal-delay mt-3 text-sm text-muted-foreground">Klicken Sie auf eine Karte für Details.</p>
          </div>
          <AnalyseCards items={analyseItems} />
        </div>
      </section>

      <SectionDivider />

      {/* Ihr Weg zur Analyse */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Ablauf</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Ihr Weg zur Analyse</h2>
          </div>
          <div>
            {steps.map((step, i) => (
              <div key={step.n}>
                <div className={`reveal-card reveal-stagger-${i + 1} flex items-start gap-5 bg-background border border-border/60 rounded-2xl p-6`}>
                  <div className="shrink-0 w-11 h-11 rounded-full border-2 border-primary flex items-center justify-center font-serif text-lg text-primary">
                    {step.n}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{step.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDownIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="reveal mt-8 bg-background border border-mauve/20 rounded-2xl px-6 py-5 text-center">
            <p className="text-sm text-ink leading-relaxed">
              <strong>Die Analyse und das PDF sind vollständig kostenlos.</strong> Auch wenn später keine Zusammenarbeit entsteht, können Sie die Empfehlungen selbst umsetzen.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Exklusive Vorteile */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Ihre Vorteile</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Exklusive Vorteile für MTech-Laser-Kundinnen</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {partnerVorteile.map((item, i) => (
              <div key={item.title} className={`reveal-card reveal-stagger-${(i % 4) + 1} bg-cream border border-border/60 rounded-2xl p-6`}>
                <span className="inline-flex w-9 h-9 rounded-full bg-accent items-center justify-center text-primary mb-4">
                  <StarIcon className="w-4 h-4" />
                </span>
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Über JAVERA Studio */}
      <section className="py-14 md:py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Über JAVERA Studio</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Ihre Ansprechpartnerin für den Online-Auftritt</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p className="reveal reveal-stagger-1">Ich bin Jagoda, Gründerin von JAVERA Studio – Webdesign &amp; Branding ausschließlich für Beauty-Unternehmen: Nagel-, Wimpern-, Kosmetik- und PMU-Studios, Waxing-Studios, Beauty Academies und viele mehr.</p>
              <p className="reveal reveal-stagger-2">Jedes Studio ist anders – deshalb entwickle ich jede Lösung individuell. Nicht jedes Studio benötigt automatisch eine große Website: Manchmal reichen bereits kleinere Optimierungen an Google-Profil, Instagram oder Markenauftritt, um spürbar mehr Anfragen zu bekommen.</p>
              <p className="reveal reveal-stagger-3">Genau das zeigt Ihnen die kostenlose Online-Präsenz-Analyse: wo Sie heute stehen und welcher nächste Schritt für Ihr Studio wirklich sinnvoll ist.</p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="reveal aspect-[4/5] rounded-3xl overflow-hidden">
              <Image src="/jagoda.PNG" alt="Jagoda – Gründerin von JAVERA Studio" loading="lazy" width={965} height={1226} className="w-full h-full object-cover" />
            </div>
            <div aria-hidden className="absolute -z-10 -top-6 -right-6 w-full h-full rounded-3xl" style={{ backgroundColor: "var(--peach-soft)" }} />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Kundenstimmen */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Vertrauen</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Kundenstimmen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal-card reveal-stagger-${i + 1} bg-cream border border-border/60 rounded-2xl p-6 flex flex-col hover:shadow-md hover:border-mauve/40 transition`}
              >
                <div className="flex items-center gap-1 mb-3">{[0, 1, 2, 3, 4].map((s) => <StarIcon key={s} className="w-4 h-4 text-yellow-400" />)}</div>
                <p className="text-sm text-ink leading-relaxed flex-1">„{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-background flex items-center justify-center text-ink font-serif text-sm flex-shrink-0">{t.initial}</div>
                  <div>
                    <p className="font-medium text-ink text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground underline underline-offset-2">{t.studio}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Anfrageformular */}
      <section id="formular" className="py-14 md:py-20 bg-cream scroll-mt-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">Jetzt anfragen</div>
          <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight text-center">Kostenlose Online-Präsenz-Analyse anfordern</h2>
          <p className="reveal reveal-delay mt-4 text-center text-muted-foreground">
            Füllen Sie das Formular aus – ich melde mich persönlich bei Ihnen.
          </p>
          <div className="mt-10">
            <MtechLaserForm />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Abschluss */}
      <section className="py-14 md:py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="reveal font-serif text-2xl md:text-3xl text-ink leading-tight">
            Herzlichen Glückwunsch nochmals zu Ihrer Investition.
          </h2>
          <p className="reveal reveal-stagger-1 mt-4 text-muted-foreground leading-relaxed">
            Ich freue mich darauf, auch Ihren Online-Auftritt gemeinsam mit Ihnen auf das nächste Level zu bringen.
          </p>
          <p className="reveal reveal-stagger-2 mt-6 text-sm text-muted-foreground italic">Jagoda, JAVERA Studio</p>
        </div>
      </section>

      {/* Minimaler Footer – nur Rechtliches */}
      <footer className="py-8 border-t border-border/60">
        <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} JAVERA Studio</span>
          <Link href="/impressum" className="hover:text-ink transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-ink transition-colors">Datenschutzerklärung</Link>
        </div>
      </footer>

      <ScrollRevealInit />
    </main>
  );
}
