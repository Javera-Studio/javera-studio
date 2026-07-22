import { cn } from "@/lib/utils";

type OptionCardProps = {
  label: string;
  description?: string;
  selected?: boolean;
  onSelect: () => void;
};

export function OptionCard({ label, description, selected, onSelect }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "w-full text-left rounded-2xl border px-5 py-4 sm:px-6 sm:py-5 transition-colors motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        selected
          ? "border-primary bg-peach-soft"
          : "border-border/70 bg-background hover:border-mauve/50 hover:bg-cream"
      )}
    >
      <span className="block text-sm sm:text-base font-medium text-ink">{label}</span>
      {description && <span className="mt-1 block text-xs sm:text-sm text-muted-foreground">{description}</span>}
    </button>
  );
}
