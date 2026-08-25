export function AiLabel({ className = "bottom-3 left-3" }: { className?: string }) {
  return (
    <span
      tabIndex={0}
      aria-label="KI-generierte Bilddarstellung"
      className={`group absolute z-10 inline-flex cursor-default items-center gap-1.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${className}`}
    >
      <span
        aria-hidden
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full backdrop-blur-sm text-[8px] font-semibold tracking-tight text-white"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255, 255, 255, 0.25)", opacity: 0.75 }}
      >
        AI
      </span>
      <span
        aria-hidden
        className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:max-w-[200px] group-hover:opacity-100 group-focus:max-w-[200px] group-focus:opacity-100"
      >
        <span
          className="inline-block rounded-md px-2 py-1 text-[10px] font-normal leading-none"
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
