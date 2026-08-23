import { cn } from "@/lib/utils";

type MultiOptionCardProps = {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onToggle: () => void;
};

/**
 * Optische Variante von studio-check/OptionCard für Mehrfachauswahl: eigenes
 * Checkbox-Symbol statt reiner Rahmenfarbe, damit Einzel- und Mehrfachauswahl
 * auf einen Blick unterscheidbar sind (siehe Vorgabe im Fragenkatalog).
 */
export function MultiOptionCard({ label, selected, disabled, onToggle }: MultiOptionCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      aria-pressed={selected}
      className={cn(
        "w-full flex items-center gap-3 text-left rounded-2xl border px-5 py-4 sm:px-6 sm:py-5 transition-colors motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        selected
          ? "border-primary bg-peach-soft"
          : "border-border/70 bg-background hover:border-mauve/50 hover:bg-cream",
        disabled && !selected && "opacity-40 cursor-not-allowed hover:border-border/70 hover:bg-background"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "shrink-0 grid place-content-center h-5 w-5 rounded-md border transition-colors",
          selected ? "border-primary bg-primary text-primary-foreground" : "border-border/80 bg-background"
        )}
      >
        {selected && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
            <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="text-sm sm:text-base font-medium text-ink">{label}</span>
    </button>
  );
}
