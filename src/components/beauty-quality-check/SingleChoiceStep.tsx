import { OptionCard } from "@/components/studio-check/OptionCard";
import { ProgressBar } from "@/components/studio-check/ProgressBar";
import type { ChoiceOption, SingleChoiceQuestion } from "@/types/beauty-quality-check";
import { cn } from "@/lib/utils";

type FollowUpProps = {
  value: string;
  onChange: (value: string) => void;
  onContinue: () => void;
};

type SingleChoiceStepProps = {
  question: SingleChoiceQuestion;
  options: ChoiceOption[];
  selectedId?: string;
  onSelect: (id: string) => void;
  followUp?: FollowUpProps;
  onBack: () => void;
  progressCurrent: number;
  progressTotal: number;
};

export function SingleChoiceStep({
  question,
  options,
  selectedId,
  onSelect,
  followUp,
  onBack,
  progressCurrent,
  progressTotal,
}: SingleChoiceStepProps) {
  const showFollowUp = Boolean(followUp) && selectedId === question.followUpText?.whenOptionId;

  return (
    <div className="max-w-xl mx-auto w-full">
      <ProgressBar current={progressCurrent} total={progressTotal} />
      <h2
        className={cn(
          "mt-8 font-serif text-ink text-center",
          question.emphasized ? "text-2xl sm:text-3xl md:text-4xl" : "text-2xl sm:text-3xl"
        )}
      >
        {question.question}
      </h2>
      <div className="mt-8 flex flex-col gap-3">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            selected={selectedId === option.id}
            onSelect={() => onSelect(option.id)}
          />
        ))}
      </div>

      {showFollowUp && followUp && question.followUpText && (
        <div className="mt-6">
          <label htmlFor={`${question.id}-followup`} className="block text-sm text-ink mb-2">
            {question.followUpText.label}
          </label>
          <input
            id={`${question.id}-followup`}
            type="text"
            value={followUp.value}
            onChange={(e) => followUp.onChange(e.target.value)}
            placeholder={question.followUpText.placeholder}
            maxLength={200}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-ink focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="button"
            onClick={followUp.onContinue}
            className="mt-4 w-full px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium"
          >
            Weiter
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={onBack}
        className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
      >
        ← Zurück
      </button>
    </div>
  );
}
