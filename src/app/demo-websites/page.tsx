import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { SiteFooter } from "@/components/SiteFooter";
import { DemoProjects, FeaturedBranding } from "@/components/home/demo-showcase";

export const metadata: Metadata = {
  title: "Demo-Websites für Beauty Studios | Beispiel-Websites & Branding | JAVERA Studio",
  description: "Beispiel-Websites und ein komplettes Branding-Showcase für Beauty Studios – Kosmetikstudios, Nagelstudios, Bridal, Beauty Kliniken und Friseursalons. So unterschiedlich kann ein Webauftritt wirken.",
  alternates: { canonical: "https://www.javera-studio.at/demo-websites" },
  openGraph: {
    title: "Demo-Websites für Beauty Studios | Beispiel-Websites & Branding | JAVERA Studio",
    description: "Beispiel-Websites und ein komplettes Branding-Showcase für Beauty Studios – so unterschiedlich kann ein Webauftritt wirken.",
    url: "https://www.javera-studio.at/demo-websites",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Demo-Websites für Beauty Studios | JAVERA Studio",
    description: "Beispiel-Websites und ein komplettes Branding-Showcase für Beauty Studios.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.javera-studio.at/" },
    { "@type": "ListItem", position: 2, name: "Demo-Websites", item: "https://www.javera-studio.at/demo-websites" },
  ],
};

export default function DemoWebsitesPage() {
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
            <span className="text-ink">Demo-Websites</span>
          </nav>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="w-8 h-px bg-muted-foreground/50" />
            Demo-Websites
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
            Beispiel-Websites für Beauty Studios
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Diese Demo-Projekte zeigen, wie unterschiedlich ein Webauftritt für ein Beauty Business wirken kann –
            von ruhig und minimal bis auffällig und markant. Sie geben dir ein Gefühl dafür, welche Richtung zu
            deinem Studio passt.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Die echten Kundenprojekte findest du auf der{" "}
            <Link href="/#kundenprojekte" className="text-ink underline underline-offset-4 hover:text-mauve transition-colors">
              Startseite
            </Link>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/webseiten-vorschau" className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium">
              Kostenlose Webseiten-Vorschau anfragen
            </Link>
            <Link href="/#schreib-mir" className="px-7 py-3.5 rounded-full border border-border text-ink hover:bg-cream transition-all hover:scale-[1.02] font-medium">
              Unverbindlich anfragen
            </Link>
          </div>
        </div>
      </section>

      <DemoProjects />
      <FeaturedBranding />

      <SiteFooter />
    </main>
  );
}
