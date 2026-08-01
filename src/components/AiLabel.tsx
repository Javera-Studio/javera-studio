export function AiLabel({ className = "bottom-6 left-6" }: { className?: string }) {
  return (
    <span
      className={`absolute z-10 ${className}`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.13)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "7px",
        padding: "4px 8px",
        fontSize: "10px",
        fontWeight: 400,
        lineHeight: 1,
        color: "rgba(255, 255, 255, 0.78)",
      }}
    >
      KI-Visualisierung
    </span>
  );
}
