import { ProgressBar } from "@/components/studio-check/ProgressBar";
import { MultiOptionCard } from "@/components/beauty-quality-check/MultiOptionCard";
import type { MultiChoiceQuestion } from "@/types/beauty-quality-check";

type MultiChoiceStepProps = {
  question: MultiChoiceQuestion;
  selectedIds: string[];
  onToggle: (id: string) => void;
  followUpValue?: string;
  onFollowUpChange?: (value: string) => void;
  onContinue: () => void;
  onBack: () => void;
  progressCurrent: number;
  progressTotal: number;
};

export function MultiChoiceStep({
  question,
  selectedIds,
  onToggle,
  followUpValue,
  onFollowUpChange,
  onContinue,
  onBack,
  progressCurrent,
  progressTotal,
}: MultiChoiceStepProps) {
  const maxReached = Boolean(question.maxSelections) && selectedIds.length >= (question.maxSelections ?? Infinity);
  const showFollowUp = Boolean(question.followUpText) && selectedIds.includes(question.followUpText!.whenOptionId);

  return (
    <div className="max-w-xl mx-auto w-full">
      <ProgressBar current={progressCurrent} total={progressTotal} />
      <h2 className="mt-8 font-serif text-2xl sm:text-3xl text-ink text-center">{question.question}</h2>
      {question.maxSelections && (
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Wähle bis zu {question.maxSelections} Optionen aus.
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3">
        {question.options.map((option) => {
          const selected = selectedIds.includes(option.id);
          return (
            <MultiOptionCard
              key={option.id}
              label={option.label}
              selected={selected}
              disabled={!selected && maxReached}
              onToggle={() => onToggle(option.id)}
            />
          );
        })}
      </div>

      {showFollowUp && question.followUpText && (
        <div className="mt-6">
          <label htmlFor={`${question.id}-followup`} className="block text-sm text-ink mb-2">
            {question.followUpText.label}
          </label>
          <input
            id={`${question.id}-followup`}
            type="text"
            value={followUpValue ?? ""}
            onChange={(e) => onFollowUpChange?.(e.target.value)}
            placeholder={question.followUpText.placeholder}
            maxLength={200}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      )}

      <button
        type="button"
        onClick={onContinue}
        disabled={selectedIds.length === 0}
        className="mt-8 w-full px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
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
