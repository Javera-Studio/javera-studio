export function StarRatingPlaceholder() {
  return (
    <div className="flex items-center gap-1 text-border" aria-label="Eigene Bewertung, noch nicht gesetzt">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}
