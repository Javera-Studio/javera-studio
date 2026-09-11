export function AiLabel({ className = "bottom-2 left-2" }: { className?: string }) {
  return (
    <span
      tabIndex={0}
      aria-label="KI-generierte Bilddarstellung"
      className={`group/ai absolute z-10 inline-flex cursor-default items-center gap-1 rounded-full opacity-[0.81] outline-none transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-white/60 ${className}`}
    >
      <span
        aria-hidden
        className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.12] text-[6.4px] font-semibold tracking-tight text-white opacity-60 backdrop-blur-sm transition-opacity duration-300 group-hover/ai:opacity-100 group-focus/ai:opacity-100"
      >
        AI
      </span>
      <span
        aria-hidden
        className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover/ai:max-w-[200px] group-hover/ai:opacity-100 group-focus/ai:max-w-[200px] group-focus/ai:opacity-100"
      >
        {/* Hintergrund/Text auf Hover/Fokus deutlich weniger transparent (Transparenz ca. halbiert), damit der Hinweistext gut lesbar bleibt. */}
        <span className="inline-block rounded border border-white/20 bg-white/[0.13] px-1.5 py-0.5 text-[8px] font-normal leading-none text-white/[0.78] transition-colors duration-300 group-hover/ai:border-white/40 group-hover/ai:bg-white/50 group-hover/ai:text-white group-focus/ai:border-white/40 group-focus/ai:bg-white/50 group-focus/ai:text-white">
          KI-generierte Bilddarstellung
        </span>
      </span>
    </span>
  );
}
