import Link from "next/link";
import type { Category } from "@/lib/design-lab/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/design-lab/${category.slug}`}
      className="group rounded-2xl border border-border/60 bg-background p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div>
        <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{category.badge}</span>
        <h3 className="mt-2 font-serif text-2xl text-ink">{category.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{category.description}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink font-medium">
        Öffnen
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 transition-transform group-hover:translate-x-1">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
