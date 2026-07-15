import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { QuoteSection } from "@/components/QuoteSection";
import { brandQuotes } from "@/lib/brand-quotes";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { SiteFooter } from "@/components/SiteFooter";
import { Search, Monitor, Palette, MapPin, Share2, Printer, CreditCard, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Webdesign für Beauty-Studios | Websites, Branding & Google Business | JAVERA Studio",
  description: "Professionelles Webdesign, Branding, Google Business, Social Media Design und Drucksorten für Kosmetikstudios, Nagelstudios, PMU-, Lash- & Brow-Studios sowie Beauty Academies.",
  alternates: { canonical: "https://www.javera-studio.at/leistungen" },
  openGraph: {
    title: "Webdesign für Beauty-Studios | Websites, Branding & Google Business | JAVERA Studio",
    description: "Professionelles Webdesign, Branding, Google Business, Social Media Design und Drucksorten für Kosmetikstudios, Nagelstudios, PMU-, Lash- & Brow-Studios sowie Beauty Academies.",
    url: "https://www.javera-studio.at/leistungen",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Webdesign für Beauty-Studios | Websites, Branding & Google Business | JAVERA Studio",
    description: "Professionelles Webdesign, Branding, Google Business, Social Media Design und Drucksorten für Kosmetikstudios, Nagelstudios, PMU-, Lash- & Brow-Studios sowie Beauty Academies.",
    images: ["/og-image.jpg"],
  },
};

const warum = [
  { title: "Erster Eindruck", desc: "Deine Website entscheidet oft, bevor eine Kundin dein Studio betritt." },
  { title: "Vertrauen", desc: "Ein professioneller Auftritt schafft Vertrauen und hebt dich von der Konkurrenz ab." },
  { title: "Sichtbarkeit bei Google", desc: "Mit Website & Google Business wirst du dort gefunden, wo gesucht wird." },
  { title: "Mehr Buchungen", desc: "Ein klarer, hochwertiger Auftritt macht aus Anfragen leichter Buchungen." },
  { title: "Professionelle Wirkung", desc: "Website, Branding und Print wirken zusammen wie aus einem Guss." },
];

type ServiceCard = {
  icon: LucideIcon;
  badge?: string;
  title: string;
  desc: string;
  points: string[];
  buttonLabel: string;
  href: string;
};

const services: ServiceCard[] = [
  {
    icon: Search,
    badge: "⭐ Perfekt für bestehende Studios",
    title: "Online-Präsenz Analyse",
    desc: "Ich analysiere deine aktuelle Online-Präsenz und zeige dir verständlich, wo Potenzial liegt – von deiner Website über Google Business bis hin zu Branding und Sichtbarkeit. Du erhältst konkrete Handlungsempfehlungen, die dir helfen, professioneller aufzutreten und mehr Vertrauen bei potenziellen Kundinnen aufzubauen.",
    points: ["Website", "Branding", "Google Business", "Sichtbarkeit", "Individuelle Empfehlungen"],
    buttonLabel: "Analyse anfragen",
    href: "#schreib-mir",
  },
  {
    icon: Monitor,
    badge: "🚀 Ideal für Gründerinnen & Redesigns",
    title: "Professionelle Websites",
    desc: "Ob One-Pager oder mehrseitige Premium Website – ich gestalte deinen Online-Auftritt individuell für dein Kosmetikstudio, Nagelstudio, Lash- oder Brow-Studio, PMU-Studio oder deine Beauty Academy. Responsive, mobil optimiert und mit SEO-Grundoptimierung für bessere Sichtbarkeit bei Google.",
    points: ["One-Pager", "Premium Website", "Responsive Design", "SEO-Grundoptimierung"],
    buttonLabel: "Mehr erfahren",
    href: "/preise#website",
  },
  {
    icon: Palette,
    title: "Branding",
    desc: "Ein starkes Branding für dein Beauty-Unternehmen schafft Wiedererkennung und Vertrauen. Ich entwickle Logo, Farbwelt, Typografie und ein stimmiges Corporate Design, das zu deinem Studio passt.",
    points: ["Logo", "Farben", "Typografie", "Corporate Design"],
    buttonLabel: "Mehr erfahren",
    href: "/preise#grafik-print",
  },
  {
    icon: MapPin,
    title: "Google Business",
    desc: "Ich richte dein Google Business Profil ein oder optimiere ein bestehendes Profil, damit dein Studio auf Google Maps gefunden wird. Mehr lokale Sichtbarkeit sorgt für mehr Vertrauen und mehr Anfragen aus deiner Umgebung.",
    points: ["Google Maps", "Lokale Sichtbarkeit", "Optimierung", "Kundenvertrauen"],
    buttonLabel: "Mehr erfahren",
    href: "#schreib-mir",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    desc: "Damit dein Auftritt auf Instagram & Co. genauso professionell wirkt wie deine Website, gestalte ich Story-Vorlagen, Highlight-Cover und Feed-Templates – abgestimmt auf dein Branding.",
    points: ["Story-Vorlagen", "Highlight-Cover", "Feed-Templates", "Einheitliches Branding"],
    buttonLabel: "Mehr erfahren",
    href: "/preise#social",
  },
  {
    icon: Printer,
    title: "Drucksorten",
    desc: "Auch offline soll dein Auftritt überzeugen: Flyer, Visitenkarten und Gutscheine gestalte ich passend zu deinem Branding – für einen einheitlichen Auftritt on- und offline.",
    points: ["Flyer", "Visitenkarten", "Gutscheine", "Print-Material"],
    buttonLabel: "Mehr erfahren",
    href: "/preise#grafik-print",
  },
];

const prozess = [
  { n: "01", title: "Kostenlose Vorschau", desc: "Du erhältst unverbindlich eine erste Design-Vorschau für dein Studio." },
  { n: "02", title: "Persönliches Gespräch", desc: "Wir besprechen deine Wünsche, dein Studio und deine Ziele." },
  { n: "03", title: "Design & Entwicklung", desc: "Ich gestalte und entwickle deinen Auftritt individuell für dich." },
  { n: "04", title: "Feedback & Anpassungen", desc: "Wir passen Farben, Texte und Details gemeinsam an, bis alles passt." },
  { n: "05", title: "Veröffentlichung", desc: "Dein neuer Auftritt geht live – ich begleite dich bei jedem Schritt." },
  { n: "06", title: "1 Monat persönliche Nachbetreuung", desc: "Auch nach dem Launch bin ich für kleine Anpassungen für dich da." },
];

const zahlungsplaene = [
  {
    title: "Premium Website",
    price: "ab 900 €",
    points: ["Bis zu 3 zinsfreie Teilzahlungen", "Erste Rate bei Projektstart", "Weitere Raten monatlich"],
  },
  {
    title: "Komplexe Projekte",
    price: "ab 1.400 €",
    points: ["Bis zu 4 zinsfreie Teilzahlungen", "Erste Rate bei Projektstart", "Weitere Raten monatlich"],
  },
];

const faqs = [
  { q: "Was ist im Website-Paket enthalten?", a: "Jedes Website-Paket enthält ein individuelles, mobil optimiertes Design, professionelle Texte auf Basis deiner Informationen sowie eine SEO-Grundoptimierung. Je nach Paket kommen weitere Features wie eine Bildergalerie, ein Kontaktformular oder die Integration bestehender Buchungslinks dazu. Die genauen Inhalte findest du auf der Preise-Seite." },
  { q: "Wie lange dauert die Erstellung?", a: "Eine Starter Website ist meist innerhalb von 5–7 Tagen fertig, eine Premium Website nach 10–14 Tagen. Die erste Demo bekommst du oft schon nach wenigen Tagen, danach passe ich gemeinsam mit dir die Feinheiten an." },
  { q: "Kann ich meine Website später erweitern?", a: "Ja. Du kannst jederzeit weitere Unterseiten, Funktionen oder Inhalte ergänzen lassen – deine Website wächst mit deinem Studio mit." },
  { q: "Kann ich meine Website auch in Raten bezahlen?", a: "Ja. Für größere Projekte biete ich auf Wunsch eine zinsfreie Ratenzahlung in bis zu 4 Teilzahlungen an, damit der Start in die Selbstständigkeit nicht am Budget scheitert." },
  { q: "Kann ich auch einzelne Leistungen buchen?", a: "Ja. Website, Branding, Google Business, Social Media Design und Drucksorten sind einzeln buchbar – du musst nicht alles auf einmal beauftragen." },
  { q: "Erstellt JAVERA Studio auch Logos?", a: "Ja. Ich gestalte individuelle Logos inklusive mehrerer Entwürfe, Farbvarianten und druckfertiger Dateien – abgestimmt auf dein Beauty-Unternehmen." },
  { q: "Übernimmt JAVERA Studio Google Business?", a: "Ja. Ich richte dein Google Business Profil ein oder optimiere ein bestehendes Profil, damit dein Studio auf Google Maps besser gefunden wird." },
  { q: "Kann ich ein individuelles Paket anfragen?", a: "Ja, jederzeit. Jedes Beauty-Unternehmen ist unterschiedlich – deshalb lassen sich alle Leistungen individuell kombinieren. Ein maßgeschneidertes Paket ist immer möglich, einfach unverbindlich anfragen." },
  { q: "Brauche ich bereits ein Logo?", a: "Nein. Falls du noch kein Logo hast, entwickle ich es gemeinsam mit dir – als Teil deines Branding-Pakets oder einzeln buchbar." },
  { q: "Kann ich später weitere Leistungen ergänzen?", a: "Ja. Ob zusätzliche Social Media Designs, weitere Drucksorten oder eine Erweiterung deiner Website – du kannst jederzeit weitere Leistungen dazubuchen." },
];

export default function LeistungenPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.javera-studio.at/" },
      { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://www.javera-studio.at/leistungen" },
    ],
  };

  return (
    <main className="bg-background text-ink min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <ScrollRevealInit />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-4 md:pt-40 md:pb-6 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
          style={{ backgroundColor: "var(--peach-soft)" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <Link href="/" className="hover:text-ink transition">Startseite</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">Leistungen</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="w-8 h-px bg-muted-foreground/50" />
            Leistungen
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
            Professionelle Websites &amp; Branding für Beauty-Studios
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            JAVERA Studio begleitet Beauty-Unternehmen auf dem Weg zu einem professionellen Online-Auftritt – von der Website über Branding und Google Business bis hin zu Social Media Design und Drucksorten.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Individuelles Beauty Webdesign aus Wien für Kosmetikstudios, Nagelstudios, Lash- und Brow-Studios, PMU-Studios sowie Beauty Academies – alles aus einer Hand.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="#preise-teaser" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
              Preise ansehen
            </a>
            <a href="#schreib-mir" className="px-7 py-3.5 rounded-full border border-border text-ink hover:bg-cream transition-all hover:scale-[1.02] font-medium">
              Kostenlose Vorschau sichern
            </a>
          </div>
        </div>
      </section>

      {/* Markenphilosophie */}
      <section aria-label="Markenphilosophie" className="py-14 md:py-20">
        <div className="reveal max-w-3xl mx-auto px-6 text-center">
          <div className="mirror-frame relative w-[138px] h-[138px] mx-auto rounded-2xl overflow-hidden shadow-sm">
            <Image src="/spiegel.png" alt="" fill sizes="138px" className="object-cover" aria-hidden />
          </div>
          <p className="mt-10 font-script text-mauve-dark text-3xl md:text-4xl">
            Deine Website ist das Fenster zu deinem Studio. Hier findest du alles, was sie braucht, um deine Qualität widerzuspiegeln.
          </p>
        </div>
      </section>

      {/* Warum ein professioneller Online-Auftritt */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Online-Auftritt</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Warum ein professioneller Online-Auftritt?</h2>
            <p className="reveal reveal-delay mt-4 text-muted-foreground leading-relaxed">
              Der erste Eindruck von deinem Studio entsteht heute meist online – lange bevor eine Kundin deinen Salon betritt. Ein professioneller Auftritt entscheidet darüber, ob Vertrauen entsteht und aus einer Anfrage eine Buchung wird.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {warum.map((w, i) => (
              <div key={w.title} className={`reveal reveal-stagger-${(i % 6) + 1} rounded-2xl bg-background border border-border/60 p-5`}>
                <p className="font-serif text-lg text-ink">{w.title}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial: So entsteht dein Markenauftritt */}
      <section className="py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Prozess</div>
          <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">So entsteht dein Markenauftritt.</h2>
          <p className="reveal mt-8 font-script text-mauve-dark text-3xl md:text-4xl whitespace-pre-line">
            {"Jede Website erzählt eine Geschichte.\nMeine beginnt damit, deine zu verstehen."}
          </p>
          <p className="reveal reveal-delay mt-8 text-muted-foreground leading-relaxed">
            Jeder professionelle Markenauftritt beginnt lange bevor die erste Website entsteht. Er beginnt damit, dein Studio, deine Persönlichkeit und deine Ziele wirklich zu verstehen. Aus dieser Grundlage entstehen Design, Texte und eine Website, die die Qualität deiner Arbeit widerspiegeln.
          </p>
        </div>

        <div className="reveal mt-12 max-w-4xl mx-auto px-6">
          <div className="relative aspect-[3/2] rounded-[2.25rem] overflow-hidden">
            <Image src="/leistungen.png" alt="Persönliches Gespräch als Ausgangspunkt für den Markenauftritt" loading="lazy" width={1536} height={1024} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Meine Leistungen */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Leistungen</div>
            <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Meine Leistungen</h2>
            <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg">Von der ersten Analyse bis zum fertigen Markenauftritt – einzeln buchbar oder als Komplettpaket.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className={`reveal reveal-stagger-${(i % 6) + 1} relative flex flex-col rounded-2xl border border-border/60 bg-background p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-mauve/30`}
                >
                  {s.badge && (
                    <div className="absolute -top-3 left-8 bg-accent text-primary text-[11px] font-semibold px-3 py-1 rounded-full">
                      {s.badge}
                    </div>
                  )}
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-peach-soft text-mauve">
                    <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-ink mt-6">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-ink">
                        <span aria-hidden className="text-sm" style={{ color: "#0F6E56" }}>✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-7">
                    <Link
                      href={s.href}
                      className="block text-center py-3 border border-border text-ink font-semibold text-sm rounded-xl hover:bg-secondary transition"
                    >
                      {s.buttonLabel}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <QuoteSection quote={brandQuotes.ersterEindruckOnline} />

      {/* Alles aus einer Hand */}
      <section className="py-12 md:py-16 bg-peach-soft">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Aus einer Hand</div>
          <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Alles aus einer Hand</h2>
          <p className="reveal reveal-delay mt-6 text-muted-foreground text-lg leading-relaxed">
            Website, Logo, Google Business und Drucksorten sollten optisch zusammenpassen – nur so entsteht ein stimmiger, professioneller Markenauftritt. Bei JAVERA Studio bekommst du ein einheitliches Design über alle Kanäle hinweg, ohne mehrere Anbieter koordinieren zu müssen.
          </p>
        </div>
      </section>

      {/* So läuft die Zusammenarbeit ab */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Ablauf</div>
            <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">So läuft die Zusammenarbeit bei Website-Interesse ab</h2>
            <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg">Bei anderen Leistungen wie Branding, Google Business oder Social Media Design stimme ich den Ablauf individuell mit dir ab.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prozess.map((s, i) => (
              <div key={s.n} className={`reveal-card reveal-stagger-${(i % 6) + 1} p-8 rounded-3xl border border-border/60 bg-background hover:bg-cream transition`}>
                <span className="font-serif text-5xl text-muted-foreground/60">{s.n}</span>
                <h3 className="font-serif text-2xl text-ink mt-6">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preise Teaser */}
      <section id="preise-teaser" className="py-12 md:py-16 bg-cream scroll-mt-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Preise</div>
          <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Transparente Preise für jede Leistung</h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg leading-relaxed">
            Websites, Branding, Social Media Design und Drucksorten sind einzeln buchbar oder als Komplettpaket erhältlich – transparent und ohne versteckte Kosten.
          </p>
          <Link
            href="/preise"
            className="reveal inline-block mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
          >
            Zu den Preisen
          </Link>
        </div>
      </section>

      {/* Flexible Zahlungsmodelle */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Zahlungsmodelle</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Ein professioneller Markenauftritt sollte nicht am Budget scheitern.</h2>
            <p className="reveal reveal-delay mt-4 text-muted-foreground leading-relaxed">
              Gerade der Start in die Selbstständigkeit bringt viele Investitionen mit sich. Damit ein professioneller Webauftritt für jedes Beauty-Unternehmen leistbar bleibt, bietet JAVERA Studio zinsfreie Ratenzahlungen an.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {zahlungsplaene.map((z, i) => (
              <div key={z.title} className={`reveal reveal-stagger-${i + 1} rounded-2xl border border-border/60 bg-background p-8 flex flex-col items-center text-center`}>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-peach-soft text-mauve">
                  <CreditCard className="w-5 h-5" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="font-serif text-xl text-ink mt-5">{z.title}</h3>
                <p className="text-2xl font-bold text-ink mt-3">{z.price}</p>
                <ul className="mt-5 space-y-2">
                  {z.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground">{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-center text-sm text-muted-foreground uppercase tracking-[0.15em]">
            Transparent. Fair. Keine versteckten Kosten.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">FAQ</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight text-center">Häufige Fragen zu meinen Leistungen</h2>
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Lass uns gemeinsam deinen professionellen Markenauftritt gestalten.</h2>
        </div>
      </section>

      <ContactForm />
      <SiteFooter />
    </main>
  );
}
