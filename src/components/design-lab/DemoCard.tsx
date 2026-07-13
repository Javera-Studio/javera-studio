import type { DemoMeta } from "@/lib/design-lab/types";
import { StarRatingPlaceholder } from "./StarRatingPlaceholder";
import { DemoPreviewLauncher } from "./DemoPreviewLauncher";

export function DemoCard({ meta, children }: { meta: DemoMeta; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-border/60 bg-background p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <DemoPreviewLauncher name={meta.name}>{children}</DemoPreviewLauncher>

        <div>
          <h3 className="font-serif text-2xl text-ink">{meta.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{meta.description}</p>

          <dl className="mt-4 space-y-2 text-sm leading-relaxed">
            <div>
              <dt className="font-medium text-ink inline">Wann einsetzen: </dt>
              <dd className="inline text-muted-foreground">{meta.whenToUse}</dd>
            </div>
            <div>
              <dt className="font-medium text-ink inline">Wann lieber nicht: </dt>
              <dd className="inline text-muted-foreground">{meta.whenNotToUse}</dd>
            </div>
            <div>
              <dt className="font-medium text-ink inline">Beauty/Luxury geeignet: </dt>
              <dd className="inline text-muted-foreground">{meta.beautySuited}</dd>
            </div>
          </dl>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1.5">Sternebewertung</p>
            <StarRatingPlaceholder />
          </div>

          <div className="mt-5">
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1.5">Claude-Prompt</p>
            <pre className="text-xs bg-muted/40 border border-border/60 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap font-sans text-muted-foreground">{meta.claudePrompt}</pre>
          </div>

          <div className="mt-5">
            <label htmlFor={`notes-${meta.slug}`} className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1.5 block">
              Eigene Notizen
            </label>
            <textarea
              id={`notes-${meta.slug}`}
              placeholder="Platzhalter für eigene Notizen …"
              className="w-full text-sm rounded-lg border border-border/60 bg-background p-3 min-h-[70px] focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
