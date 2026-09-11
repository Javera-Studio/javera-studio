import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Kostenlose Webseiten-Vorschau anfragen | JAVERA Studio",
  description: "Du denkst über eine neue Website oder ein Redesign für dein Beauty Studio nach? Fordere eine kostenlose, unverbindliche Webseiten-Vorschau an – abgestimmt auf dein Studio.",
  alternates: { canonical: "https://www.javera-studio.at/webseiten-vorschau" },
  openGraph: {
    title: "Kostenlose Webseiten-Vorschau anfragen | JAVERA Studio",
    description: "Kostenlose, unverbindliche Webseiten-Vorschau für Beauty Studios in Wien – abgestimmt auf dein Studio.",
    url: "https://www.javera-studio.at/webseiten-vorschau",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Kostenlose Webseiten-Vorschau anfragen | JAVERA Studio",
    description: "Kostenlose, unverbindliche Webseiten-Vorschau für Beauty Studios in Wien.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.javera-studio.at/" },
    { "@type": "ListItem", position: 2, name: "Kostenlose Webseiten-Vorschau", item: "https://www.javera-studio.at/webseiten-vorschau" },
  ],
};

const ablauf = [
  { n: "01", title: "Kurze Anfrage", desc: "Du schickst mir ein paar Stichpunkte zu deinem Studio und deinen Zielen." },
  { n: "02", title: "Erste Vorschau", desc: "Du bekommst eine erste, individuelle Design-Vorschau für dein Studio." },
  { n: "03", title: "Gemeinsam entscheiden", desc: "Du siehst, wie dein Auftritt wirken könnte – und entscheidest in Ruhe, ob du weitermachen möchtest." },
];

export default function WebseitenVorschauPage() {
  return (
    <main className="bg-background text-ink min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <ScrollRevealInit />
      <Navbar />

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
            <span className="text-ink">Kostenlose Webseiten-Vorschau</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="w-8 h-px bg-muted-foreground/50" />
            Kostenlos &amp; unverbindlich
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
            Kostenlose Webseiten-Vorschau anfragen
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Dieser Weg ist für dich, wenn du konkret über eine neue Website oder ein Redesign für dein Beauty
            Studio nachdenkst. Du bekommst eine erste, auf dein Studio abgestimmte Vorschau – ohne Kosten und
            ohne Verpflichtung.
          </p>
        </div>
      </section>

      <section aria-label="So läuft die Vorschau ab" className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {ablauf.map((s, i) => (
              <div key={s.n} className={`reveal-card reveal-stagger-${i + 1} p-6 md:p-8 rounded-3xl border border-border/60 bg-background`}>
                <span className="font-serif text-4xl text-muted-foreground/80">{s.n}</span>
                <h2 className="font-serif text-xl text-ink mt-4">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Nur eine allgemeine Frage oder ein anderer Beratungswunsch?{" "}
            <Link href="/#schreib-mir" className="text-ink underline underline-offset-4 hover:text-mauve transition-colors">
              Hier unverbindlich anfragen
            </Link>
          </p>
        </div>
      </section>

      <ContactForm
        id="vorschau-formular"
        eyebrow="Kostenlose Webseiten-Vorschau"
        title="Vorschau anfragen"
        intro="Erzähl mir kurz von deinem Studio und was du dir vorstellst – ich melde mich persönlich mit den nächsten Schritten."
        defaultSubject="Kostenlose Webseiten-Vorschau"
        inquirySource="Kostenlose Webseiten-Vorschau"
      />

      <SiteFooter />
    </main>
  );
}
