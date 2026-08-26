import { cn } from "@/lib/utils";

type OptionCardProps = {
  label: string;
  description?: string;
  selected?: boolean;
  onSelect: () => void;
  /** Zeigt ein Checkbox-Icon statt reiner Rahmen-Hervorhebung, damit mehrere gleichzeitig ausgewählte Optionen eindeutig erkennbar sind. */
  multiple?: boolean;
};

export function OptionCard({ label, description, selected, onSelect, multiple }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "w-full text-left rounded-2xl border px-5 py-4 sm:px-6 sm:py-5 transition-colors motion-reduce:transition-none flex items-start gap-3",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        selected
          ? "border-primary bg-peach-soft"
          : "border-border/70 bg-background hover:border-mauve/50 hover:bg-cream"
      )}
    >
      {multiple && (
        <span
          aria-hidden
          className={cn(
            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors",
            selected ? "border-primary bg-primary text-primary-foreground" : "border-border/70 bg-background"
          )}
        >
          {selected && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
              <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      )}
      <span className="flex-1">
        <span className="block text-sm sm:text-base font-medium text-ink">{label}</span>
        {description && <span className="mt-1 block text-xs sm:text-sm text-muted-foreground">{description}</span>}
      </span>
    </button>
  );
}
