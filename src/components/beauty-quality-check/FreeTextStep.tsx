import { ProgressBar } from "@/components/studio-check/ProgressBar";
import type { FreeTextQuestion } from "@/types/beauty-quality-check";

type FreeTextStepProps = {
  question: FreeTextQuestion;
  value: string;
  onChange: (value: string) => void;
  onContinue: () => void;
  onBack: () => void;
  progressCurrent: number;
  progressTotal: number;
};

export function FreeTextStep({
  question,
  value,
  onChange,
  onContinue,
  onBack,
  progressCurrent,
  progressTotal,
}: FreeTextStepProps) {
  return (
    <div className="max-w-xl mx-auto w-full">
      <ProgressBar current={progressCurrent} total={progressTotal} />
      <h2 id={`${question.id}-label`} className="mt-8 font-serif text-2xl sm:text-3xl text-ink text-center">
        {question.question}
        {question.optional && <span className="block mt-2 text-sm font-sans text-muted-foreground">Optional</span>}
      </h2>

      <textarea
        aria-labelledby={`${question.id}-label`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={question.placeholder}
        rows={4}
        maxLength={1000}
        className="mt-8 w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
      />

      <button
        type="button"
        onClick={onContinue}
        disabled={!question.optional && value.trim().length === 0}
        className="mt-6 w-full px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
      >
        Weiter
      </button>

      <button
        type="button"
        onClick={onBack}
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
      >
        ← Zurück
      </button>
    </div>
  );
}
