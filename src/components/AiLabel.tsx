export function AiLabel({ className = "bottom-3 left-3" }: { className?: string }) {
  return (
    <span
      tabIndex={0}
      aria-label="KI-generierte Bilddarstellung"
      className={`group absolute z-10 inline-flex cursor-default items-center gap-1.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${className}`}
    >
      <span
        aria-hidden
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full backdrop-blur-sm"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", border: "1px solid rgba(255, 255, 255, 0.25)" }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" style={{ opacity: 0.65 }}>
          <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z" fill="white" />
          <path d="M19 14.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z" fill="white" opacity="0.7" />
        </svg>
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
