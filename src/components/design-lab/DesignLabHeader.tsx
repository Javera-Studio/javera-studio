import Link from "next/link";

export function DesignLabHeader({ crumb }: { crumb?: string }) {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Link href="/design-lab" className="text-ink font-medium hover:opacity-70 transition">
            Design Lab
          </Link>
          {crumb && (
            <>
              <span aria-hidden>/</span>
              <span className="text-ink">{crumb}</span>
            </>
          )}
        </div>
        <Link href="/" className="text-muted-foreground hover:text-ink transition">
          ← Zur Website
        </Link>
      </div>
    </header>
  );
}
