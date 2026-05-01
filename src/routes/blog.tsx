import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";

const posts = [
  {
    slug: "warum-nagelstudio-wien-website",
    title: "Website für Nagelstudio Wien: Warum du ohne Google unsichtbar bist",
    excerpt:
      "Du hast ein Nagelstudio in Wien? Ohne eigene Website verlierst du täglich neue Kundinnen. Erfahre, was eine professionelle Nagelstudio-Website bringt und was sie kostet.",
    date: "Mai 2026",
    readTime: "4 Minuten",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Javera Studio | Webdesign für Beauty Studios in Wien" },
      {
        name: "description",
        content:
          "Tipps und Insights rund um Webdesign, Sichtbarkeit und Online-Buchung für Nagelstudios und Beauty Studios in Wien.",
      },
      { property: "og:title", content: "Blog — Javera Studio" },
      {
        property: "og:description",
        content:
          "Tipps und Insights rund um Webdesign, Sichtbarkeit und Online-Buchung für Beauty Studios in Wien.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-6 pt-20 pb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-4">
            Insights für dein Beauty Studio
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Praxisnahe Tipps zu Webdesign, Sichtbarkeit bei Google und Online-Buchung —
            speziell für Nagelstudios und Beauty Studios in Wien.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-24">
          <ul className="flex flex-col gap-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="block group bg-background border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="text-xs text-muted-foreground mb-2">
                    {post.date} · Lesedauer: {post.readTime}
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-ink mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-sm font-medium text-primary">
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
