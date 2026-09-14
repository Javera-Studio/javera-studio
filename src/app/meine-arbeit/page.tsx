import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { SiteFooter } from "@/components/SiteFooter";
import { FaceAndMoreSocial } from "@/components/portfolio/face-and-more-social";
import { AnitaBrowsAndLashes } from "@/components/portfolio/anita-brows-lashes";
import { DemoProjects, FeaturedBranding } from "@/components/home/demo-showcase";

export const metadata: Metadata = {
  title: "Meine Arbeit – Portfolio & Designkonzepte für Beauty Studios | JAVERA Studio",
  description: "Website-Projekte, Demo-Websites und visuelle Markenkonzepte für Beauty Studios: Anita Brows & Lashes, Face and More, Website-Demos für unterschiedliche Branchen und das Luxe-Nails-Branding-Showcase.",
  alternates: { canonical: "https://www.javera-studio.at/meine-arbeit" },
  openGraph: {
    title: "Meine Arbeit – Portfolio & Designkonzepte für Beauty Studios | JAVERA Studio",
    description: "Website-Projekte, Demo-Websites und visuelle Markenkonzepte für Beauty Studios.",
    url: "https://www.javera-studio.at/meine-arbeit",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Meine Arbeit – Portfolio & Designkonzepte | JAVERA Studio",
    description: "Website-Projekte, Demo-Websites und visuelle Markenkonzepte für Beauty Studios.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.javera-studio.at/" },
    { "@type": "ListItem", position: 2, name: "Meine Arbeit", item: "https://www.javera-studio.at/meine-arbeit" },
  ],
};

function AbschlussCTA() {
  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="reveal font-serif text-3xl md:text-4xl text-ink leading-tight">Neugierig, wie das für dein Studio aussehen könnte?</h2>
        <div className="reveal mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/webseiten-vorschau" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
            Kostenlose Webseiten-Vorschau
          </Link>
          <Link href="/#schreib-mir" className="px-7 py-3.5 rounded-full border border-border text-ink hover:bg-background transition-all hover:scale-[1.02] font-medium">
            Unverbindlich anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function MeineArbeitPage() {
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
            <span className="text-ink">Meine Arbeit</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="w-8 h-px bg-muted-foreground/50" />
            Portfolio &amp; Designkonzepte
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
            Weitere Arbeiten und Designkonzepte
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Nicht jedes Studio braucht dieselbe Lösung. Hier findest du weitere Website-Konzepte und ergänzende
            Designarbeiten – entwickelt für unterschiedliche Branchen, Positionierungen und Markenwelten.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Hier findest du ausgewählte Kundenprojekte, Website-Relaunches und Designkonzepte – von kompakten One-Pagern bis zu umfangreicheren Online-Auftritten. Weitere Kundenprojekte siehst du auch auf der{" "}
            <Link href="/#kundenprojekte" className="text-ink underline underline-offset-4 hover:text-mauve transition-colors">
              Startseite
            </Link>.
          </p>
        </div>
      </section>

      <AnitaBrowsAndLashes />
      <FaceAndMoreSocial />
      <DemoProjects />
      <FeaturedBranding />
      <AbschlussCTA />

      <SiteFooter />
    </main>
  );
}
