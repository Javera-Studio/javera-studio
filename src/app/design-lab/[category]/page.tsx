import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DesignLabHeader } from "@/components/design-lab/DesignLabHeader";
import { DemoCard } from "@/components/design-lab/DemoCard";
import { SiteFooter } from "@/components/SiteFooter";
import { categorySlugs, getCategory } from "@/lib/design-lab/categories";
import { demosByCategory } from "@/lib/design-lab/demos";
import { demoRegistry } from "@/components/design-lab/demos/registry";
import type { CategorySlug } from "@/lib/design-lab/types";

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categorySlugs.map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} | Design Lab | JAVERA Studio`,
    description: category.description,
    robots: { index: false, follow: false },
  };
}

export default async function DesignLabCategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const demos = demosByCategory[category.slug as CategorySlug];
  const Demo = demoRegistry[category.slug as CategorySlug];

  return (
    <main>
      <DesignLabHeader crumb={category.title} />

      <section className="pt-12 pb-6 md:pt-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{category.badge}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight">{category.title}</h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{category.description}</p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          {demos.map((meta) => (
            <DemoCard key={meta.slug} meta={meta}>
              <Demo variant={meta.variant} />
            </DemoCard>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
