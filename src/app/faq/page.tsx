import type { Metadata } from "next";
import Link from "next/link";
import { Monitor, Wallet, Palette, TrendingUp, Handshake, Sparkles, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { faqCategories, getAllFaqItems, type FaqItem, type FaqLink } from "@/lib/data/faq";

function renderParagraphText(text: string, links: FaqLink[] | undefined): React.ReactNode {
  if (!links || links.length === 0) return text;

  const matches = links
    .map((link) => {
      const start = text.indexOf(link.label);
      return start === -1 ? null : { start, end: start + link.label.length, link };
    })
    .filter((m): m is { start: number; end: number; link: FaqLink } => m !== null)
    .sort((a, b) => a.start - b.start);

  if (matches.length === 0) return text;

  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  matches.forEach((m, i) => {
    if (m.start < cursor) return;
    nodes.push(text.slice(cursor, m.start));
    nodes.push(
      <Link key={i} href={m.link.href} className="underline hover:text-ink transition-colors">
        {m.link.label}
      </Link>
    );
    cursor = m.end;
  });
  nodes.push(text.slice(cursor));
  return nodes;
}

function renderAnswer(item: FaqItem) {
  const paragraphs = item.answer.split("\n\n");
  return paragraphs.map((paragraph, i) => (
    <p key={i} className={i === 0 ? "mt-4 text-muted-foreground leading-relaxed" : "mt-3 text-muted-foreground leading-relaxed"}>
      {renderParagraphText(paragraph, item.relatedLinks)}
    </p>
  ));
}

const categoryIcons: Record<string, LucideIcon> = {
  Monitor,
  Wallet,
  Palette,
  TrendingUp,
  Handshake,
  Sparkles,
};

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQ) | Websites, Branding & Webdesign für Beauty-Studios | JAVERA Studio",
  description: "Antworten auf die häufigsten Fragen rund um Websites, Branding, Preise, SEO und den professionellen Online-Auftritt für Beauty-Studios.",
  alternates: { canonical: "https://www.javera-studio.at/faq" },
  openGraph: {
    title: "Häufige Fragen (FAQ) | Websites, Branding & Webdesign für Beauty-Studios | JAVERA Studio",
    description: "Antworten auf die häufigsten Fragen rund um Websites, Branding, Preise, SEO und den professionellen Online-Auftritt für Beauty-Studios.",
    url: "https://www.javera-studio.at/faq",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Häufige Fragen (FAQ) | Websites, Branding & Webdesign für Beauty-Studios | JAVERA Studio",
    description: "Antworten auf die häufigsten Fragen rund um Websites, Branding, Preise, SEO und den professionellen Online-Auftritt für Beauty-Studios.",
    images: ["/og-image.jpg"],
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getAllFaqItems().map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="bg-background text-ink min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <section className="pt-32 pb-4 md:pt-40 md:pb-6 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
          style={{ backgroundColor: "var(--peach-soft)" }}
        />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="w-8 h-px bg-muted-foreground/50" />
            FAQ
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
            Häufige Fragen
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Alles, was Beauty-Studios über Websites, Branding und ihren professionellen Online-Auftritt wissen möchten.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Hier findest du Antworten auf die häufigsten Fragen rund um Websites, Branding, Google-Sichtbarkeit und die Zusammenarbeit mit JAVERA Studio. Falls deine Frage nicht dabei ist, kannst du mich jederzeit unverbindlich kontaktieren.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          {faqCategories.map((category) => {
            const Icon = categoryIcons[category.icon];
            return (
            <div key={category.id} className="mb-14 last:mb-0">
              <h2 className="font-serif text-2xl md:text-3xl text-ink mb-6 flex items-center gap-3">
                {Icon && <Icon aria-hidden className="w-6 h-6 text-mauve" strokeWidth={1.5} />}
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <details
                    key={item.id}
                    id={item.id}
                    className="group scroll-mt-28 rounded-2xl bg-background border border-border/60 p-6 open:shadow-sm transition"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                      <span className="font-serif text-lg md:text-xl text-ink">{item.question}</span>
                      <span aria-hidden className="shrink-0 w-7 h-7 rounded-full border border-ink/20 flex items-center justify-center text-ink transition-transform group-open:rotate-45">+</span>
                    </summary>
                    {renderAnswer(item)}
                  </details>
                ))}
              </div>
            </div>
            );
          })}

          <div className="mt-14 text-center">
            <a
              href="/#schreib-mir"
              className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
            >
              Deine Frage war nicht dabei? Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
