import type { Metadata } from "next";
import Image from "next/image";
import { DesignLabHeader } from "@/components/design-lab/DesignLabHeader";
import { CategoryCard } from "@/components/design-lab/CategoryCard";
import { SiteFooter } from "@/components/SiteFooter";
import { categories } from "@/lib/design-lab/categories";

export const metadata: Metadata = {
  title: "Design Lab | JAVERA Studio",
  description: "Interne UI- & Animationsbibliothek von JAVERA Studio – Vorschaukarten je Kategorie, Live-Demos auf eigenen Unterseiten.",
  robots: { index: false, follow: false },
};

export default function DesignLabPage() {
  return (
    <main>
      <DesignLabHeader />

      <section className="relative pt-16 pb-14 md:pt-24 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/design-lab-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-25"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Intern &middot; Persönliche Bibliothek</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight">Design Lab</h1>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Meine wiederverwendbare Luxury-UI-Bibliothek für Beauty-Websites: Animationen und Komponenten
            sammeln, verstehen und für zukünftige Kundenprojekte gezielt einsetzen.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
