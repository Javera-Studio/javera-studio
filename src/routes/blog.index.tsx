import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";

const posts = [
  {
    slug: "warum-nagelstudio-wien-website",
    tag: "Sichtbarkeit & SEO",
    title: "Website für Nagelstudio Wien: Warum du ohne Google unsichtbar bist",
    excerpt:
      "Du hast ein Nagelstudio in Wien? Ohne eigene Website verlierst du täglich neue Kundinnen. Erfahre, was eine professionelle Nagelstudio-Website bringt und was sie kostet.",
    date: "Mai 2026",
    readTime: "4 min Lesezeit",
  },
  {
    slug: "beauty-trends-2026",
    tag: "Beauty Trends 2026",
    title: "Die größten Beauty-Trends 2026 – was Kund:innen jetzt wirklich wollen",
    excerpt:
      "Skin First, Natural Brows, Scalp Health und Neuro-Beauty: Erfahre, welche Beauty-Trends 2026 deine Kund:innen bewegen – und wie du dein Studio optimal positionierst.",
    date: "2. Mai 2026",
    readTime: "4 min Lesezeit",
  },
  {
    slug: "instagram-oder-website",
    tag: "Sichtbarkeit & Branding",
    title: "Instagram oder Website? Warum viele erfolgreiche Studios beides kombinieren",
    excerpt:
      "Instagram ist für viele Beauty Studios einer der wichtigsten Kanäle, um sichtbar zu werden und Vertrauen aufzubauen. Doch immer mehr erfolgreiche Studios ergänzen ihren Auftritt durch eine eigene Website. Warum die Kombination aus Instagram, Website und einem einheitlichen Branding oft besonders professionell wirkt.",
    date: "15. Juni 2026",
    readTime: "4 min Lesezeit",
  },
];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Javera Studio | Webdesign für Beauty Studios in Wien" },
      {
        name: "description",
        content:
          "Editorial Insights rund um Webdesign, Sichtbarkeit, Beauty-Trends und Online-Buchung für Nagelstudios und Beauty Studios in Wien.",
      },
      { property: "og:title", content: "Blog — Javera Studio" },
      {
        property: "og:description",
        content:
          "Editorial Insights rund um Webdesign, Beauty-Trends und Online-Buchung für Beauty Studios in Wien.",
      },
      { property: "og:image", content: "https://www.javera-studio.at/og-image.jpg" },
      { property: "og:url", content: "https://www.javera-studio.at/blog/" },
      { name: "twitter:title", content: "Blog — Javera Studio" },
      { name: "twitter:description", content: "Editorial Insights rund um Webdesign, Beauty-Trends und Online-Buchung für Beauty Studios in Wien." },
      { name: "twitter:image", content: "https://www.javera-studio.at/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://www.javera-studio.at/blog/" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-6 pt-20 pb-10 text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-rose-gold font-editorial-sans mb-5">
            <span className="editorial-rule mr-3" />
            Journal
            <span className="editorial-rule ml-3" />
          </p>
          <h1 className="font-editorial text-5xl md:text-6xl text-ink mb-5 italic font-medium">
            Insights für dein Beauty Studio
          </h1>
          <p className="font-editorial-sans text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Editorial Notes zu Webdesign, Sichtbarkeit bei Google, Beauty-Trends
            und Online-Buchung — speziell für Studios in Wien.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-24">
          <ul className="flex flex-col gap-8">
            {posts.map((post, i) => (
              <li key={post.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="block group bg-background border border-border rounded-2xl p-7 md:p-9 hover:border-rose-gold transition-colors relative overflow-hidden"
                >
                  <span className="absolute top-6 right-7 font-editorial italic text-rose-gold/40 text-3xl select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-rose-gold font-editorial-sans font-medium">
                      {post.tag}
                    </span>
                    <span className="h-px w-6 bg-rose-gold/40" />
                    <span className="text-[11px] text-muted-foreground font-editorial-sans">
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-editorial text-2xl md:text-3xl text-ink mb-3 leading-tight group-hover:text-rose-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-editorial-sans text-muted-foreground text-sm md:text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-5 text-xs font-editorial-sans uppercase tracking-[0.2em] text-rose-gold">
                    Artikel lesen →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
