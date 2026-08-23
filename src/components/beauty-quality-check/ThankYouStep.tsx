import Link from "next/link";

export function ThankYouStep() {
  return (
    <div className="max-w-xl mx-auto w-full text-center">
      <div className="w-14 h-14 mx-auto rounded-full grid place-content-center mb-6 bg-peach-soft">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-ink">
          <path d="m5 12 5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h2 className="font-serif text-2xl md:text-3xl text-ink">Danke – ich schaue mir deinen Auftritt persönlich an.</h2>

      <p className="mt-4 text-muted-foreground leading-relaxed">
        Dein Studio lässt sich nicht sinnvoll mit ein paar automatischen Punkten bewerten. Deshalb nehme ich mir Zeit,
        deine Angaben und deinen aktuellen Online-Auftritt persönlich anzusehen.
      </p>

      <p className="mt-4 text-muted-foreground leading-relaxed">
        Innerhalb der nächsten 24 Stunden bekommst du von mir eine kurze individuelle Einschätzung dazu, was bereits
        hochwertig wirkt, wo deine tatsächliche Qualität online noch nicht vollständig sichtbar wird und welche
        Veränderungen aus meiner Sicht den größten Unterschied machen würden.
      </p>

      <div className="mt-8 text-left rounded-3xl border border-border/70 bg-background px-6 py-6">
        <p className="text-sm font-medium text-ink mb-3">Du bekommst von mir:</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Was bereits stark und professionell wirkt</li>
          <li>• Wo dein Online-Auftritt hinter deinem heutigen Studio zurückbleibt</li>
          <li>• Welche 2–3 Veränderungen ich zuerst angehen würde</li>
        </ul>
      </div>

      <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
        Wenn ich sehe, dass ein Relaunch für dein Studio wirklich sinnvoll sein könnte, zeige ich dir auf Wunsch auch,
        wie eine mögliche neue Richtung aussehen könnte.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
        <Link href="/leistungen" className="text-muted-foreground hover:text-ink transition-colors">
          Leistungen ansehen
        </Link>
        <Link href="/preise" className="text-muted-foreground hover:text-ink transition-colors">
          Preise ansehen
        </Link>
        <Link href="/faq" className="text-muted-foreground hover:text-ink transition-colors">
          Häufige Fragen
        </Link>
      </div>
    </div>
  );
}
