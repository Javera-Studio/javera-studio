import Link from "next/link";
import { cn } from "@/lib/utils";
import { ctaConfig } from "@/lib/data/studio-check";
import { getScoreBand } from "@/lib/studio-check-scoring";
import type { StudioCheckResult } from "@/types/studio-check";

type ResultViewProps = {
  result: StudioCheckResult;
  onRestart: () => void;
  onOpenLeadForm: () => void;
};

export function ResultView({ result, onRestart, onOpenLeadForm }: ResultViewProps) {
  const { segment, score, categories, strongest, weakest, recommendations, intro } = result;
  const isFounding = segment === "founding";
  const cta = ctaConfig[segment];
  const bandText = getScoreBand(segment, score);
  const hasWeakArea = weakest.percent < 100;

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="text-center">
        <p className="text-xs uppercase tracking-widest text-mauve mb-3">Dein Ergebnis</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-ink">
          {isFounding ? "Deine Startbereitschaft" : "Dein Beauty Studio Score"}
        </h2>
        <p className="mt-4 text-5xl sm:text-6xl font-serif text-ink">
          {score}
          <span className="text-2xl text-muted-foreground">/100</span>
        </p>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{bandText}</p>
      </div>

      <div className={cn("mt-8 grid gap-3", hasWeakArea && "sm:grid-cols-2")}>
        <div className="rounded-2xl border border-border/70 bg-background px-5 py-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">Besonders stark</p>
          <p className="mt-1 text-sm font-medium text-ink">{strongest.label}</p>
        </div>
        {hasWeakArea && (
          <div className="rounded-2xl border border-border/70 bg-background px-5 py-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Größtes Potenzial</p>
            <p className="mt-1 text-sm font-medium text-ink">{weakest.label}</p>
          </div>
        )}
      </div>

      <p className="mt-6 text-center text-sm sm:text-base text-ink leading-relaxed">
        {hasWeakArea
          ? intro
          : "Du bist in allen Bereichen bereits sehr gut aufgestellt – weiter so!"}
      </p>

      {recommendations.length > 0 && (
        <div className="mt-8">
          <h3 className="font-serif text-xl text-ink text-center">Deine nächsten Schritte</h3>
          <ol className="mt-4 flex flex-col gap-3">
            {recommendations.map((rec, i) => (
              <li key={rec.text} className="flex gap-3 rounded-2xl border border-border/70 bg-background px-5 py-4">
                <span className="shrink-0 text-sm font-semibold text-mauve">{i + 1}</span>
                <span className="text-sm text-ink leading-relaxed">{rec.text}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="mt-10 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <caption className="sr-only">Ergebnis je Kategorie in Prozent</caption>
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
              <th className="pb-2 pr-4 font-medium">Kategorie</th>
              <th className="pb-2 font-medium">Ergebnis</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.category} className="border-t border-border/60">
                <td className="py-2.5 pr-4 text-ink">{c.label}</td>
                <td className="py-2.5 text-muted-foreground">{c.percent}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 rounded-3xl bg-peach-soft px-6 py-8 text-center">
        <h3 className="font-serif text-xl sm:text-2xl text-ink">
          Möchtest du eine persönliche Einschätzung zu deinem Online-Auftritt?
        </h3>
        <p className="mt-3 text-base sm:text-lg text-ink leading-relaxed">
          Ich schaue mir deine Website bzw. deinen Online-Auftritt persönlich an und zeige dir, welche
          Verbesserungen für dein Studio den größten Unterschied machen können.
        </p>
        <button
          type="button"
          onClick={onOpenLeadForm}
          className="mt-5 inline-flex px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
        >
          {cta.buttonLabel}
        </button>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        <Link href="/leistungen" className="text-muted-foreground hover:text-ink transition-colors">
          Leistungen ansehen
        </Link>
        <Link href="/preise" className="text-muted-foreground hover:text-ink transition-colors">
          Preise ansehen
        </Link>
        <Link href="/faq" className="text-muted-foreground hover:text-ink transition-colors">
          Häufige Fragen
        </Link>
      </div>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={onRestart}
          className="text-sm text-muted-foreground hover:text-ink transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
        >
          Check erneut starten
        </button>
      </div>
    </div>
  );
}
