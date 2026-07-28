import { OptionCard } from "@/components/studio-check/OptionCard";
import { ProgressBar } from "@/components/studio-check/ProgressBar";

type QuestionOption = {
  id: string;
  label: string;
  description?: string;
};

type QuestionStepProps = {
  question: string;
  options: QuestionOption[];
  selectedId?: string;
  onSelect: (id: string) => void;
  onBack: () => void;
  progressCurrent: number;
  progressTotal: number;
};

export function QuestionStep({
  question,
  options,
  selectedId,
  onSelect,
  onBack,
  progressCurrent,
  progressTotal,
}: QuestionStepProps) {
  return (
    <div className="max-w-xl mx-auto w-full">
      <ProgressBar current={progressCurrent} total={progressTotal} />
      <h2 className="mt-8 font-serif text-2xl sm:text-3xl text-ink text-center">{question}</h2>
      <div className="mt-8 flex flex-col gap-3">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            description={option.description}
            selected={selectedId === option.id}
            onSelect={() => onSelect(option.id)}
          />
        ))}
      </div>
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
