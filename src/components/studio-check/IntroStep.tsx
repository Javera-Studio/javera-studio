export function IntroStep({ onStart }: { onStart: () => void }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-xs uppercase tracking-widest text-mauve mb-4">Javera Studio Check</p>
      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink">
        Wie überzeugend wirkt dein Beauty-Studio online?
      </h1>
      <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
        Erhalte eine ehrliche Einschätzung deines Online-Auftritts und konkrete Hinweise, wie du professioneller wirken kannst.
      </p>
      <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <li>✓ Kostenlos</li>
        <li>✓ Keine E-Mail erforderlich</li>
        <li>✓ Sofortiges Ergebnis</li>
      </ul>
      <button
        type="button"
        onClick={onStart}
        className="mt-9 inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Jetzt Studio-Check starten
      </button>
    </div>
  );
}
