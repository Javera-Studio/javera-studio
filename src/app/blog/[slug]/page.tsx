import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/data/blog";
import type { BlogBlock } from "@/lib/data/blog";

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const url = `https://www.javera-studio.at/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image ?? "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: [post.image ?? "/og-image.jpg"],
    },
  };
}

function ContentBlock({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 className="font-serif text-2xl md:text-3xl text-ink mt-10 mb-4">{block.text}</h2>;
    case "list":
      return (
        <ul className="list-none space-y-2 my-4 pl-0">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-mauve flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-2 border-mauve pl-5 md:pl-6 font-serif italic text-xl text-ink/85 leading-snug">
          {block.text}
        </blockquote>
      );
    case "callout":
      return (
        <div className="my-8 bg-peach-soft border border-mauve/20 rounded-2xl px-6 py-5 text-ink leading-relaxed">
          {block.text}
        </div>
      );
    case "paragraph":
    default:
      return <p className="text-muted-foreground leading-relaxed my-4">{block.text}</p>;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const url = `https://www.javera-studio.at/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    image: post.image ? `https://www.javera-studio.at${post.image}` : "https://www.javera-studio.at/og-image.jpg",
    author: { "@type": "Organization", name: "Javera Studio" },
    publisher: { "@type": "Organization", name: "Javera Studio" },
    mainEntityOfPage: url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.javera-studio.at/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.javera-studio.at/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqSchema = post.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  return (
    <main className="bg-background text-ink min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <Navbar />

      <article className="pt-32 pb-4 md:pt-40 md:pb-6">
        <div className="max-w-2xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-8">
            <Link href="/" className="hover:text-ink transition">Startseite</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-ink transition">Blog</Link>
          </nav>

          <header className="text-center">
            {post.category && (
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                <span className="w-8 h-px bg-muted-foreground/50" />
                {post.category}
              </div>
            )}
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.1] text-ink">{post.title}</h1>
            <div className="mt-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("de-AT", { day: "2-digit", month: "long", year: "numeric" })}
              </time>
              {post.readTime && <> · {post.readTime}</>}
            </div>
          </header>

          {post.image && (
            <div className="relative mt-10 rounded-3xl overflow-hidden aspect-[16/9]">
              <Image src={post.image} alt={post.title} loading="lazy" width={1200} height={675} className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </article>

      <section className="pb-12 md:pb-16 bg-cream">
        <div className="max-w-2xl mx-auto px-6 pt-10">
          <div className="text-[17px]">
            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </div>

          {post.faq && post.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif text-2xl md:text-3xl text-ink mb-6">Häufige Fragen</h2>
              <div className="space-y-3">
                {post.faq.map((f) => (
                  <details key={f.question} className="group rounded-2xl bg-background border border-border/60 p-6 open:shadow-sm transition">
                    <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                      <span className="font-serif text-lg text-ink">{f.question}</span>
                      <span aria-hidden className="shrink-0 w-7 h-7 rounded-full border border-ink/20 flex items-center justify-center text-ink transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <div className="mt-12 bg-background border border-border/60 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Weiterlesen</p>
              <ul className="space-y-2">
                {post.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-ink hover:text-mauve transition underline underline-offset-4">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/#schreib-mir"
              className="inline-block px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
            >
              Kostenlose Demo anfragen
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-ink transition">
              ← Zurück zum Blog
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
