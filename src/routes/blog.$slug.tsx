import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactElement } from "react";
import { SiteFooter } from "@/components/SiteFooter";

type Section = {
  title: string;
  body: ReactElement;
  tags?: string[];
};

type Post = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  intro: string;
  sections: Section[];
  closingQuote: string;
  transition?: {
    heading: string;
    body: string;
  };
  highlight?: string;
  ctaLabel: string;
  ctaTo: string;
  ctaHash?: string;
  keywords?: string;
};

const posts: Record<string, Post> = {
  "warum-nagelstudio-wien-website": {
    slug: "warum-nagelstudio-wien-website",
    tag: "Sichtbarkeit & SEO",
    title: "Website für Nagelstudio Wien: Warum du ohne Google unsichtbar bist",
    description:
      "Du hast ein Nagelstudio in Wien? Ohne eigene Website verlierst du täglich neue Kundinnen. Erfahre, was eine professionelle Nagelstudio-Website bringt und was sie kostet.",
    date: "Mai 2026",
    readTime: "4 min Lesezeit",
    intro:
      "Viele Nagelstudios in Wien sind gut gebucht — zumindest am Anfang. Aber irgendwann stagniert es. Neue Kundinnen bleiben aus. Und der Grund ist meistens derselbe: Das Studio ist bei Google unsichtbar.",
    sections: [
      {
        title: "Wie Kundinnen in Wien heute ein Nagelstudio suchen",
        body: (
          <>
            <p>
              Stell dir vor, jemand zieht neu nach Wien-Favoriten. Sie kennt
              niemanden, hat keine Empfehlung. Was macht sie? Sie öffnet Google
              und tippt: „Nagelstudio Wien Favoriten" oder „Nageldesign in
              meiner Nähe".
            </p>
            <p>
              Was erscheint? Nagelstudios mit einer eigenen Website. Studios
              mit Google-Bewertungen. Studios die professionell wirken — und
              die man direkt buchen kann. Wer nur auf Instagram ist, erscheint
              dort nicht. Gar nicht.
            </p>
          </>
        ),
        tags: ["Google Sichtbarkeit", "Local SEO", "Neukundinnen"],
      },
      {
        title: "Das Problem mit Instagram allein",
        body: (
          <>
            <p>
              Instagram ist wunderbar, um bestehende Kundinnen zu halten und
              deine Arbeit zu zeigen. Aber Instagram ist kein Ersatz für
              Google. Niemand tippt „Nagelstudio Wien" in Google und landet
              auf einem Instagram-Profil.
            </p>
            <p>
              Dazu kommt: Instagram gehört dir nicht. Der Algorithmus ändert
              sich, die Reichweite bricht ein, im schlimmsten Fall wird das
              Konto gesperrt. Eine eigene Website gehört dir — dauerhaft und
              unabhängig.
            </p>
          </>
        ),
        tags: ["Instagram", "Reichweite", "Eigentum"],
      },
      {
        title: "Was eine Website konkret bringt",
        body: (
          <>
            <p>
              Eine gute Website macht dich bei Google auffindbar — genau dann,
              wenn jemand aktiv nach einem Nagelstudio sucht. Sie baut
              Vertrauen auf, bevor die Kundin überhaupt anruft. Und sie nimmt
              dir Arbeit ab: weniger WhatsApp, weniger Telefonate, mehr Zeit
              für deine Kundinnen.
            </p>
          </>
        ),
        tags: ["Vertrauen", "Online-Buchung", "Effizienz"],
      },
      {
        title: "Was kostet eine Website für ein Nagelstudio in Wien?",
        body: (
          <>
            <p>
              Eine professionelle Nagelstudio-Website in Wien kostet einmalig
              ab 500 € (Starter) bis ab 900 € (Premium) — je nach Umfang. Dazu
              kommen ca. 10–20 € pro Jahr für die Domain und ca. 5–15 € pro
              Monat für Hosting. Verglichen mit dem Umsatz einer einzigen
              Neukunde pro Monat rechnet sich das sehr schnell.
            </p>
          </>
        ),
        tags: ["Investition", "Preise", "ROI"],
      },
    ],
    closingQuote:
      "Instagram ist Marketing. Eine Website ist Infrastruktur. Beides zusammen funktioniert am besten — aber wenn du nur eines haben kannst, dann die Website.",
    transition: {
      heading: "Bereit, dein Studio online sichtbar zu machen?",
      body: "Eine professionelle Website ist der einfachste Weg, planbar neue Kundinnen zu gewinnen. Du musst dabei nichts riskieren — ich erstelle dir vorab kostenlos eine Demo, ganz auf dein Studio zugeschnitten.",
    },
    highlight:
      "✦ Du bekommst vorab eine kostenlose Analyse & Demo deines Studios – damit du siehst, wie dein Auftritt online wirken könnte. Unverbindlich und individuell gestaltet.",
    ctaLabel: "Kostenlose Analyse & Demo",
    ctaTo: "/demo-anfrage",
  },
  "beauty-trends-2026": {
    slug: "beauty-trends-2026",
    tag: "Beauty Trends 2026",
    title:
      "Die größten Beauty-Trends 2026 – was Kund:innen jetzt wirklich wollen",
    description:
      "Skin First, Natural Brows, Scalp Health und Neuro-Beauty: Erfahre, welche Beauty-Trends 2026 deine Kund:innen bewegen – und wie du dein Studio optimal positionierst.",
    keywords:
      "Beauty Trends 2026, Skin First Behandlung, Natural Brows, Scalp Health Studio, Neuro-Beauty, Personalisierung Beauty Studio, Clean Beauty 2026",
    date: "2. Mai 2026",
    readTime: "4 min Lesezeit",
    intro:
      "Die Beauty-Welt 2026 dreht sich nicht mehr um Transformation – sondern um Verfeinerung. Wer als Studio jetzt weiß, was gefragt ist, hat einen klaren Vorteil.",
    sections: [
      {
        title: "Skin First – Gesunde Haut als neues Luxusgut",
        body: (
          <p>
            Das Ziel ist nicht mehr perfekte Abdeckung, sondern sichtbar
            gepflegte, strahlende Haut. Kundinnen buchen 2026 gezielt
            Behandlungen für Barrier-Repair und Mikrobiompflege – weniger
            Säure-Peelings, mehr Aufbau und Langzeitpflege. Makeup folgt der
            Haut, nicht umgekehrt: leichte Texturen, feuchtigkeitsreiche
            Glossfinishes, kaum Foundation.
          </p>
        ),
        tags: ["Facial Treatments", "Clean Beauty", "Skin Longevity"],
      },
      {
        title: "Natural Brows 2.0 – Weniger Lamination, mehr Präzision",
        body: (
          <p>
            Die überdramatische Laminated-Brow-Ära neigt sich dem Ende zu.
            2026 sind Brauen definiert, aber natürlich geformt – angepasst
            ans individuelle Muster, mit Fokus auf Dichte und Balance. Für
            Studios bedeutet das: Consultation vor der Behandlung wird
            wichtiger denn je.
          </p>
        ),
        tags: ["Brow Styling", "Henna Brows", "Brow Mapping"],
      },
      {
        title: "Scalp Health – Das Haar beginnt an der Wurzel",
        body: (
          <p>
            Kopfhautpflege ist 2026 kein Nischenthema mehr. Kund:innen fragen
            aktiv nach Kopfhaut-Analysen, pflegenden Treatments und
            Low-Maintenance-Schnittformen. Warme, dimensionale Haarfarben –
            weiche Kupfertöne, reiche Brünetten, sanfte Goldblondtöne –
            ersetzen harte High-Contrast-Looks.
          </p>
        ),
        tags: ["Scalp Treatments", "Balayage", "Soft Layering"],
      },
      {
        title: "Wellness trifft Beauty – Neuro-Beauty im Kommen",
        body: (
          <p>
            Der Zusammenhang zwischen mentaler Gesundheit und Hautbild rückt
            ins Zentrum. Studios, die Behandlungen als ganzheitliches
            Erlebnis gestalten – ruhige Atmosphäre, Aromatherapie, achtsame
            Rituale – treffen genau den Nerv der Zeit. Kund:innen wollen
            keine schnelle Behandlung, sondern eine echte Auszeit.
          </p>
        ),
        tags: ["Wellness", "Neuro-Beauty", "Erlebnis"],
      },
      {
        title: "Personalisierung & Beratung als Servicekern",
        body: (
          <p>
            2026 kommen Kund:innen informiert – sie kennen Inhaltsstoffe,
            vergleichen Ergebnisse und erwarten individuelle Empfehlungen
            statt Standardprogramme. Studios, die mit fundierter Beratung
            punkten und Ergebnisse erklären können, bauen langfristige
            Vertrauensverhältnisse auf. Das ist der echte
            Wettbewerbsvorteil.
          </p>
        ),
        tags: ["Consultation", "Personalisierung", "Kundenbindung"],
      },
    ],
    closingQuote:
      "Die Botschaft ist klar: 2026 gewinnen Studios, die Gesundheit, Echtheit und echte Expertise in den Mittelpunkt stellen. Weniger Drama, mehr Wirkung – das ist der Spirit dieser Saison.",
    transition: {
      heading: "Und wie finden Kund:innen dein Studio überhaupt?",
      body: "Trends zu kennen ist das eine – aber wenn dein Studio online nicht sichtbar ist, bucht jemand anderes den Termin. Eine professionelle Website ist 2026 kein Nice-to-have mehr: Sie ist deine digitale Visitenkarte, dein erster Eindruck und oft der einzige Grund, warum jemand anruft – oder eben nicht. Google, Instagram, Weiterempfehlungen: Alles führt zuerst auf deine Website. Und die entscheidet in Sekunden, ob jemand bleibt oder weiterschaut.",
    },
    highlight:
      "✦ Du bekommst vorab eine kostenlose Analyse & Demo deines Studios – damit du siehst, wie dein Auftritt online wirken könnte. Unverbindlich und individuell gestaltet.",
    ctaLabel: "Kostenlose Analyse & Demo",
    ctaTo: "/",
    ctaHash: "contact",
  },
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const meta: Array<{ name?: string; property?: string; content: string; title?: string }> = [
      { title: `${post.title} — Javera Studio` } as { title: string; content: string },
      { name: "description", content: post.description },
      { property: "og:title", content: post.title },
      { property: "og:description", content: post.description },
      { property: "og:type", content: "article" },
    ];
    if (post.keywords) meta.push({ name: "keywords", content: post.keywords });
    return { meta };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-3xl font-editorial italic text-ink mb-3">
          Artikel nicht gefunden
        </h1>
        <Link to="/blog" className="text-rose-gold hover:underline font-editorial-sans">
          ← Zurück zum Journal
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <article className="max-w-2xl mx-auto px-6 pt-14 pb-20">
          <Link
            to="/blog"
            className="text-xs font-editorial-sans uppercase tracking-[0.2em] text-muted-foreground hover:text-rose-gold transition-colors"
          >
            ← Zurück zum Journal
          </Link>

          <header className="mt-10 text-center">
            <p className="text-[11px] uppercase tracking-[0.32em] text-rose-gold font-editorial-sans mb-5">
              <span className="editorial-rule mr-3" />
              {post.tag}
              <span className="editorial-rule ml-3" />
            </p>
            <h1 className="font-editorial italic font-medium text-4xl md:text-5xl text-ink leading-[1.1] mb-6">
              {post.title}
            </h1>
            <div className="text-xs font-editorial-sans uppercase tracking-[0.2em] text-muted-foreground">
              {post.date} · {post.readTime}
            </div>
          </header>

          {/* Intro */}
          <div className="mt-12 border-l-2 border-rose-gold pl-5 md:pl-6">
            <p className="font-editorial italic text-xl md:text-2xl text-ink/85 leading-snug">
              {post.intro}
            </p>
          </div>

          {/* Sections */}
          <div className="mt-14 flex flex-col gap-7">
            {post.sections.map((section: Section, i: number) => (
              <section
                key={section.title}
                className="bg-background border border-border rounded-2xl p-6 md:p-8 relative overflow-hidden hover:border-rose-gold/60 transition-colors"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-editorial italic text-rose-gold text-3xl md:text-4xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-rose-gold/30" />
                </div>
                <h2 className="font-editorial text-2xl md:text-3xl text-ink leading-tight mb-4">
                  {section.title}
                </h2>
                <div className="font-editorial-sans text-foreground/85 leading-relaxed text-[15px] md:text-base space-y-4">
                  {section.body}
                </div>
                {section.tags && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {section.tags.map((t: string) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-[0.18em] font-editorial-sans text-rose-gold border border-rose-gold/40 rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Closing quote */}
          <div className="mt-14 bg-rose-gold-soft rounded-2xl p-8 md:p-10 text-center">
            <p className="font-editorial italic text-xl md:text-2xl text-ink leading-snug">
              „{post.closingQuote}"
            </p>
          </div>

          {/* Transition */}
          {post.transition && (
            <div className="mt-16 text-center">
              <span className="editorial-rule" />
              <h3 className="mt-6 font-editorial italic text-2xl md:text-3xl text-ink mb-4">
                {post.transition.heading}
              </h3>
              <p className="font-editorial-sans text-muted-foreground leading-relaxed max-w-xl mx-auto">
                {post.transition.body}
              </p>
            </div>
          )}

          {/* Highlight callout */}
          {post.highlight && (
            <div className="mt-10 bg-rose-gold-soft border border-rose-gold/40 rounded-2xl p-7 md:p-9 text-center">
              <p className="font-editorial italic text-lg md:text-xl text-ink leading-relaxed">
                {post.highlight}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href={post.ctaHash ? `${post.ctaTo}#${post.ctaHash}` : post.ctaTo}
              className="inline-block py-3.5 px-8 bg-primary text-primary-foreground font-editorial-sans font-medium text-sm tracking-wide rounded-full hover:bg-primary/90 transition"
            >
              {post.ctaLabel}
            </a>
          </div>

          <p className="text-center text-[11px] uppercase tracking-[0.24em] font-editorial-sans text-muted-foreground mt-14">
            Javera Studio — Webdesign für Beauty Studios in Wien
          </p>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
