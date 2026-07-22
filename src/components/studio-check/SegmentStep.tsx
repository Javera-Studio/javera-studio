import { segmentOptions } from "@/lib/data/studio-check";
import type { Segment } from "@/types/studio-check";
import { OptionCard } from "@/components/studio-check/OptionCard";
import { ProgressBar } from "@/components/studio-check/ProgressBar";

type SegmentStepProps = {
  selected: Segment | null;
  onSelect: (segment: Segment) => void;
  progressCurrent: number;
  progressTotal: number;
};

export function SegmentStep({ selected, onSelect, progressCurrent, progressTotal }: SegmentStepProps) {
  return (
    <div className="max-w-xl mx-auto w-full">
      <ProgressBar current={progressCurrent} total={progressTotal} />
      <h2 className="mt-8 font-serif text-2xl sm:text-3xl text-ink text-center">
        Welche Situation beschreibt dein Studio aktuell am besten?
      </h2>
      <div className="mt-8 flex flex-col gap-3">
        {segmentOptions.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            description={option.description}
            selected={selected === option.id}
            onSelect={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  );
}
