import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllBlogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog – Webdesign, Sichtbarkeit & Tipps für Beauty-Studios | JAVERA Studio",
  description: "Praxisnahe Artikel zu Webdesign, Preisen, SEO und Online-Sichtbarkeit für Nagelstudios, Kosmetikstudios, Wimpernstudios, PMU-Studios und Waxing-Studios.",
  alternates: { canonical: "https://www.javera-studio.at/blog" },
  openGraph: {
    title: "Blog – Webdesign, Sichtbarkeit & Tipps für Beauty-Studios | JAVERA Studio",
    description: "Praxisnahe Artikel zu Webdesign, Preisen, SEO und Online-Sichtbarkeit für Beauty-Studios in Wien.",
    url: "https://www.javera-studio.at/blog",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Blog – Webdesign, Sichtbarkeit & Tipps für Beauty-Studios | JAVERA Studio",
    description: "Praxisnahe Artikel zu Webdesign, Preisen, SEO und Online-Sichtbarkeit für Beauty-Studios in Wien.",
    images: ["/og-image.jpg"],
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="bg-background text-ink min-h-screen">
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
            Blog
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
            Insights für dein Beauty-Studio
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Praxisnahe Artikel zu Webdesign, Preisen, Sichtbarkeit bei Google und Online-Auftritt – speziell für Beauty-Studios in Wien.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="max-w-md mx-auto text-center bg-background border border-border/60 rounded-2xl p-10">
              <p className="text-lg text-ink font-serif">Bald verfügbar</p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Die ersten Artikel folgen in Kürze. Schau bald wieder vorbei.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-background border border-border/60 rounded-2xl overflow-hidden hover:shadow-sm transition"
                >
                  {post.image && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    {post.category && (
                      <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2">
                        {post.category}
                      </span>
                    )}
                    <h2 className="font-serif text-xl text-ink leading-tight group-hover:text-mauve transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt ?? post.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <time dateTime={post.date} className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("de-AT", { day: "2-digit", month: "long", year: "numeric" })}
                      </time>
                      <span className="text-xs font-medium text-primary group-hover:text-mauve transition-colors">
                        Weiterlesen →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
