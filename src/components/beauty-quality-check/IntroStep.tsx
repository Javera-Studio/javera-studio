import Image from "next/image";

export function IntroStep({ onStart }: { onStart: () => void }) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid gap-10 text-center md:grid-cols-2 md:grid-rows-[auto_auto_auto_auto] md:items-center md:gap-16 md:text-left">
        <div className="md:col-start-1 md:row-start-1">
          <p className="text-xs uppercase tracking-widest text-mauve mb-4">Beauty-Qualitätscheck</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink">
            Passt dein Online-Auftritt noch zu dem Studio, das du heute führst?
          </h1>
        </div>

        <div className="md:col-start-1 md:row-start-2">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Dein Business entwickelt sich weiter. Neue Leistungen, mehr Erfahrung, höhere Qualität – aber dein
            Online-Auftritt entwickelt sich nicht immer automatisch mit.
          </p>
          <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Mit diesem kurzen Check schaue ich mir an, wie gut dein heutiger Auftritt das widerspiegelt, was dein
            Studio tatsächlich ausmacht.
          </p>
        </div>

        <div className="relative mx-auto w-[85%] md:col-start-2 md:row-start-1 md:row-span-4 md:mx-0 md:w-full md:justify-self-end">
          <div
            aria-hidden
            className="absolute -top-5 -right-5 w-full h-full rounded-[2rem] hidden md:block"
            style={{ backgroundColor: "var(--rose-gold-soft)" }}
          />
          <div className="relative mockup-fade-in aspect-[9/16] w-full md:w-[300px] lg:w-[340px] md:ml-auto rounded-[2rem] overflow-hidden shadow-xl">
            <Image
              src="/faceandmoremockup.png"
              alt="Beispiel eines hochwertigen Online-Auftritts für ein Beauty-Studio"
              width={1080}
              height={1920}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <ul className="md:col-start-1 md:row-start-3 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li>✓ Dauer: ca. 3–4 Minuten</li>
          <li>✓ Persönliche Einschätzung</li>
          <li>✓ Keine automatische Bewertung</li>
        </ul>

        <div className="md:col-start-1 md:row-start-4">
          <button
            type="button"
            onClick={onStart}
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition-all hover:scale-[1.02] hover:shadow-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Qualitätscheck starten
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Keine automatische Bewertung. Ich sehe mir deine Angaben und deinen Online-Auftritt persönlich an.
          </p>
        </div>
      </div>
    </div>
  );
}
