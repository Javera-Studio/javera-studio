export function AiLabel({ className = "bottom-2 left-2" }: { className?: string }) {
  return (
    <span className={`absolute z-10 rounded bg-black/40 px-1.5 py-0.5 text-[11px] leading-none text-white/70 ${className}`}>
      KI-Visualisierung
    </span>
  );
}
