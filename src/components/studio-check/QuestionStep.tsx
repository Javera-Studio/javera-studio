import { OptionCard } from "@/components/studio-check/OptionCard";
import { ProgressBar } from "@/components/studio-check/ProgressBar";

type QuestionOption = {
  id: string;
  label: string;
  description?: string;
};

type BaseProps = {
  question: string;
  /** Dezenter Hinweistext direkt unter der Frage, z. B. "Mehrfachauswahl möglich". */
  hint?: string;
  options: QuestionOption[];
  onBack: () => void;
  progressCurrent: number;
  progressTotal: number;
};

type SingleSelectProps = BaseProps & {
  multiple?: false;
  selectedId?: string;
  onSelect: (id: string) => void;
};

type MultiSelectProps = BaseProps & {
  multiple: true;
  selectedIds: string[];
  onToggle: (id: string) => void;
  onContinue: () => void;
  continueLabel?: string;
};

type QuestionStepProps = SingleSelectProps | MultiSelectProps;

export function QuestionStep(props: QuestionStepProps) {
  const { question, hint, options, onBack, progressCurrent, progressTotal } = props;

  return (
    <div className="max-w-xl mx-auto w-full">
      <ProgressBar current={progressCurrent} total={progressTotal} />
      <h2 className="mt-8 font-serif text-2xl sm:text-3xl text-ink text-center">{question}</h2>
      {hint && <p className="mt-2 text-center text-xs text-muted-foreground">{hint}</p>}
      <div className="mt-8 flex flex-col gap-3">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            description={option.description}
            multiple={props.multiple}
            selected={props.multiple ? props.selectedIds.includes(option.id) : props.selectedId === option.id}
            onSelect={() => (props.multiple ? props.onToggle(option.id) : props.onSelect(option.id))}
          />
        ))}
      </div>

      {props.multiple && (
        <button
          type="button"
          onClick={props.onContinue}
          disabled={props.selectedIds.length === 0}
          className="mt-8 w-full px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
        >
          {props.continueLabel ?? "Weiter"}
        </button>
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
