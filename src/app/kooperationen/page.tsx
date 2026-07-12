import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { SiteFooter } from "@/components/SiteFooter";
import { QuoteSection } from "@/components/QuoteSection";
import { brandQuotes } from "@/lib/brand-quotes";
import {
  GraduationCap,
  Sparkles,
  Hand,
  PenTool,
  Eye,
  Camera,
  Users,
  Printer,
  Store,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kooperationen für Beauty-Unternehmen | JAVERA Studio",
  description:
    "JAVERA Studio entwickelt individuelle Kooperationen mit Beauty Academies, Kosmetikstudios, Nagelstudios, PMU- und Lash-/Brow-Studios sowie weiteren Branchenpartnern – für langfristige Partnerschaften statt starrer Provisionsprogramme.",
  alternates: { canonical: "https://www.javera-studio.at/kooperationen" },
  openGraph: {
    title: "Kooperationen für Beauty-Unternehmen | JAVERA Studio",
    description:
      "Individuelle Kooperationen mit Beauty Academies, Kosmetikstudios und weiteren Branchenpartnern – langfristige Partnerschaften statt starrer Provisionsprogramme.",
    url: "https://www.javera-studio.at/kooperationen",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Kooperationen für Beauty-Unternehmen | JAVERA Studio",
    description:
      "Individuelle Kooperationen mit Beauty Academies, Kosmetikstudios und weiteren Branchenpartnern – langfristige Partnerschaften statt starrer Provisionsprogramme.",
    images: ["/og-image.jpg"],
  },
};

type PartnerCard = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const partner: PartnerCard[] = [
  { icon: GraduationCap, title: "Beauty Academies", desc: "Für Schulen, die ihren Absolvent:innen den Start in die Selbstständigkeit erleichtern möchten." },
  { icon: Sparkles, title: "Kosmetikstudios", desc: "Für Studios, die ihren Markenauftritt professionalisieren und Kund:innen weiterempfehlen möchten." },
  { icon: Hand, title: "Nagelstudios", desc: "Für Nagelstudios, die von einem stimmigen Online-Auftritt und gegenseitigen Empfehlungen profitieren." },
  { icon: PenTool, title: "PMU Artists", desc: "Für Permanent Make-up Artists, die einen professionellen Auftritt und neue Kundenkontakte suchen." },
  { icon: Eye, title: "Lash & Brow Studios", desc: "Für Wimpern- und Brow-Studios, die ihre Sichtbarkeit gemeinsam mit einem Partnerstudio erhöhen möchten." },
  { icon: Camera, title: "Fotograf:innen", desc: "Für Beauty- und Business-Fotograf:innen, die Studios mit hochwertigem Bildmaterial ergänzen." },
  { icon: Users, title: "Beauty Coworking Spaces", desc: "Für Coworking Spaces, die ihren Mieterinnen zusätzliche Services rund um Website & Branding bieten möchten." },
  { icon: Printer, title: "Druckereien", desc: "Für Druckereien, mit denen gemeinsam Drucksorten für Beauty-Unternehmen entstehen können." },
  { icon: Store, title: "Weitere Beauty-Dienstleister", desc: "Für alle weiteren Unternehmen aus der Beauty-Branche mit Interesse an einer langfristigen Partnerschaft." },
];

const zusammenarbeit = [
  { title: "Gegenseitige Empfehlungen", desc: "Wir empfehlen uns dort weiter, wo es für unsere Kund:innen echten Sinn ergibt." },
  { title: "Exklusive Vorteile für Kund:innen", desc: "Gemeinsame Vorteile, die deinen Kund:innen und meinen Kund:innen zugutekommen." },
  { title: "Academy-Partnerprogramm für Absolvent:innen", desc: "Ein individuelles Angebot für frischgebackene Beauty-Unternehmerinnen deiner Academy." },
  { title: "Gemeinsame Aktionen", desc: "Ob saisonale Aktionen oder gemeinsame Angebote – abgestimmt auf beide Unternehmen." },
  { title: "Social Media Kooperationen", desc: "Gemeinsame Beiträge, Verlosungen oder Vorstellungen, die beide Seiten sichtbarer machen." },
  { title: "Flyer & Werbematerial auslegen", desc: "Drucksorten, die in deinem Studio oder meinem Netzwerk sichtbar werden." },
  { title: "Individuelle Partnerpakete", desc: "Ein Leistungspaket, das genau auf dein Unternehmen und deine Ziele zugeschnitten ist." },
  { title: "Langfristige Zusammenarbeit", desc: "Keine einmalige Aktion, sondern eine Partnerschaft, die mit der Zeit wächst." },
];

const vorteile = [
  { title: "Mehrwert für beide Seiten", desc: "Eine Kooperation lohnt sich nur, wenn sie für beide Unternehmen einen echten Nutzen bringt." },
  { title: "Höhere Kundenzufriedenheit", desc: "Kund:innen profitieren von aufeinander abgestimmten, professionellen Partnern." },
  { title: "Langfristige Partnerschaften statt einmaliger Empfehlungen", desc: "Es geht um Vertrauen und Kontinuität, nicht um eine einzelne Aktion." },
  { title: "Individuell auf jedes Unternehmen abgestimmt", desc: "Keine starre Vorlage – jede Kooperation wird gemeinsam entwickelt." },
];

const academyLeistungen = [
  "Website",
  "Branding",
  "Logo",
  "Google Business Profil",
  "Drucksorten",
  "Social Media Grundlagen",
];

const ablauf = [
  { n: "01", title: "Erstes Kennenlernen", desc: "Wir lernen uns und unsere Unternehmen in einem unverbindlichen Gespräch kennen." },
  { n: "02", title: "Gemeinsame Ideen entwickeln", desc: "Wir überlegen gemeinsam, wie eine Zusammenarbeit für beide Seiten Sinn ergibt." },
  { n: "03", title: "Individuelles Kooperationsmodell festlegen", desc: "Wir legen fest, wie unsere Partnerschaft konkret aussieht – individuell und transparent." },
  { n: "04", title: "Langfristige Zusammenarbeit", desc: "Aus der ersten Idee wird eine Partnerschaft, die kontinuierlich weiterwächst." },
];

const faqs = [
  { q: "Gibt es feste Partnerprogramme?", a: "Nein. JAVERA Studio setzt bewusst nicht auf starre Provisionsprogramme, sondern auf individuelle Kooperationen, die zu beiden Unternehmen passen." },
  { q: "Ist jede Kooperation individuell?", a: "Ja. Jede Partnerschaft wird gemeinsam entwickelt und auf die jeweiligen Unternehmen, Ziele und Möglichkeiten abgestimmt." },
  { q: "Fallen Kosten an?", a: "Das hängt von der jeweiligen Kooperation ab. Manche Partnerschaften basieren auf gegenseitigen Empfehlungen ohne Kosten, andere beinhalten konkrete Leistungen wie Website oder Branding. Das besprechen wir individuell." },
  { q: "Können auch bestehende Unternehmen Partner werden?", a: "Ja, selbstverständlich. Kooperationen sind nicht nur für Beauty Academies gedacht, sondern für alle Beauty-Unternehmen und Branchenpartner, die an einer langfristigen Zusammenarbeit interessiert sind." },
  { q: "Ist eine Zusammenarbeit auch außerhalb Wiens möglich?", a: "Ja. Auch wenn der Fokus von JAVERA Studio auf Wien und Österreich liegt, sind Kooperationen – insbesondere im digitalen Bereich – auch überregional möglich." },
];

export default function KooperationenPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="bg-background text-ink min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="w-8 h-px bg-muted-foreground/50" />
            Kooperationen
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
            Gemeinsam mehr erreichen.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Ich glaube an langfristige Partnerschaften, von denen beide Seiten profitieren. Deshalb entwickle ich individuelle Kooperationen mit Beauty-Unternehmen, Beauty Academies und weiteren Branchenpartnern.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="#schreib-mir" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
              Kooperation anfragen
            </a>
          </div>
        </div>
      </section>

      {/* Für wen sind Kooperationen gedacht */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Zielgruppe</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Für wen sind Kooperationen gedacht?</h2>
            <p className="reveal reveal-delay mt-4 text-muted-foreground leading-relaxed">
              Eine Kooperation mit JAVERA Studio richtet sich an alle, die langfristig mit einem verlässlichen Partner im Beauty-Bereich zusammenarbeiten möchten.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partner.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={`reveal reveal-stagger-${(i % 6) + 1} rounded-2xl bg-background border border-border/60 p-6`}>
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-peach-soft text-mauve">
                    <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <p className="font-serif text-lg text-ink mt-4">{p.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* So könnte eine Zusammenarbeit aussehen */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Möglichkeiten</div>
            <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">So könnte eine Zusammenarbeit aussehen</h2>
            <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg">Kein festes Programm, sondern Bausteine, aus denen wir gemeinsam die passende Kooperation entwickeln.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {zusammenarbeit.map((z, i) => (
              <div
                key={z.title}
                className={`reveal reveal-stagger-${(i % 6) + 1} rounded-2xl border border-border/60 bg-background p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-mauve/30`}
              >
                <div className="flex items-start gap-3">
                  <span aria-hidden className="text-sm mt-1" style={{ color: "#0F6E56" }}>✓</span>
                  <h3 className="font-serif text-xl text-ink">{z.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Kooperationen */}
      <section className="py-12 md:py-16 bg-peach-soft">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-10 mx-auto text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Warum Kooperationen?</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Warum Kooperationen?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vorteile.map((v, i) => (
              <div key={v.title} className={`reveal reveal-stagger-${(i % 6) + 1} rounded-2xl bg-background border border-border/60 p-6 text-center`}>
                <p className="font-serif text-lg text-ink">{v.title}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection quote={brandQuotes.vorDemBetreten} />

      {/* Beauty Academies */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl border border-border/60 bg-cream p-8 md:p-12">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Für Beauty Academies</div>
            <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Ein Mehrwert für deine Academy und deine Absolvent:innen</h2>
            <p className="reveal reveal-delay mt-4 text-muted-foreground leading-relaxed">
              Viele Absolventinnen stehen nach ihrer Ausbildung vor derselben Frage: Wie präsentiere ich mein neues Beauty-Unternehmen professionell? Als Kooperationspartnerin unterstütze ich deine Academy dabei, genau hier anzusetzen – mit einem konkreten Angebot für den Start in die Selbstständigkeit.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {academyLeistungen.map((l) => (
                <div key={l} className="flex items-center gap-2 rounded-xl bg-background border border-border/60 px-4 py-3 text-sm text-ink">
                  <span aria-hidden className="text-sm" style={{ color: "#0F6E56" }}>✓</span>
                  {l}
                </div>
              ))}
            </div>
            <p className="reveal mt-8 text-muted-foreground leading-relaxed">
              So kann deine Academy ihren Schülerinnen einen echten Zusatznutzen bieten – über die fachliche Ausbildung hinaus, mit einem verlässlichen Partner für den professionellen Markenauftritt.
            </p>
          </div>
        </div>
      </section>

      {/* Unser Ablauf */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Ablauf</div>
            <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight">Unser Ablauf</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ablauf.map((s, i) => (
              <div key={s.n} className={`reveal-card reveal-stagger-${(i % 6) + 1} p-8 rounded-3xl border border-border/60 bg-background hover:bg-peach-soft transition`}>
                <span className="font-serif text-5xl text-muted-foreground/60">{s.n}</span>
                <h3 className="font-serif text-xl text-ink mt-6">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">FAQ</div>
          <h2 className="reveal font-serif text-4xl md:text-5xl text-ink leading-tight text-center">Häufige Fragen zu Kooperationen</h2>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <details key={f.q} className={`reveal reveal-stagger-${(i % 6) + 1} group scroll-mt-28 rounded-2xl bg-cream border border-border/60 p-6 open:shadow-sm transition`}>
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

      {/* Kontakt Einladung */}
      <section className="py-12 md:py-16 bg-peach-soft">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">
            Du hast eine Idee für eine Zusammenarbeit oder möchtest gemeinsam Mehrwert für deine Kund:innen schaffen?
          </h2>
          <p className="reveal reveal-delay mt-4 text-muted-foreground text-lg leading-relaxed">
            Ich freue mich darauf, dich kennenzulernen.
          </p>
          <a href="#schreib-mir" className="reveal inline-block mt-8 px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kooperation anfragen
          </a>
        </div>
      </section>

      <ContactForm />
      <SiteFooter />
    </main>
  );
}
