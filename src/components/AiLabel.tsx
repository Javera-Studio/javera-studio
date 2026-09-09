export function AiLabel({ className = "bottom-2 left-2" }: { className?: string }) {
  return (
    <span
      tabIndex={0}
      aria-label="KI-generierte Bilddarstellung"
      style={{ opacity: 0.81 }}
      className={`group/ai absolute z-10 inline-flex cursor-default items-center gap-1 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${className}`}
    >
      <span
        aria-hidden
        className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full backdrop-blur-sm text-[6.4px] font-semibold tracking-tight text-white"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)", opacity: 0.6 }}
      >
        AI
      </span>
      <span
        aria-hidden
        className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover/ai:max-w-[200px] group-hover/ai:opacity-100 group-focus/ai:max-w-[200px] group-focus/ai:opacity-100"
      >
        <span
          className="inline-block rounded px-1.5 py-0.5 text-[8px] font-normal leading-none"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.13)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "rgba(255, 255, 255, 0.78)",
          }}
        >
          KI-generierte Bilddarstellung
        </span>
      </span>
    </span>
  );
}
