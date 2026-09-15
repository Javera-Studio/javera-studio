/**
 * Rein CSS-basierte Browser-Vorschau für die drei Praxen-Demo-Konzepte. Bewusst kein
 * echtes Bild/Screenshot: Für keine der drei Demos existiert aktuell eine reale,
 * öffentliche Screenshot-Datei im Projekt (siehe TODOs in `src/lib/data/praxen.ts`).
 * Statt eines erfundenen Bildpfads oder eines kaputten `<img>` zeigt diese Komponente einen
 * hochwertigen, klar als Vorschau erkennbaren Platzhalter, dessen Komposition je nach
 * `variante` deutlich unterschiedlich aufgebaut ist (Typografie, Bildsprache, Struktur) –
 * so wirken die drei Demo-Karten nicht wie dieselbe Seite mit anderen Farben.
 */
type DemoMockupProps = {
  variante: "minimal" | "warm" | "bold";
  status: "live" | "in-vorbereitung";
};

export function DemoMockup({ variante, status }: DemoMockupProps) {
  return (
    <div className="rounded-2xl border border-[#e7e2dd] bg-white overflow-hidden shadow-sm">
      {/* Browser-Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e7e2dd] bg-[#faf8f6]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#e2d9d5]" aria-hidden />
        <span className="w-2.5 h-2.5 rounded-full bg-[#e2d9d5]" aria-hidden />
        <span className="w-2.5 h-2.5 rounded-full bg-[#e2d9d5]" aria-hidden />
        <span className="ml-3 flex-1 text-center text-[11px] text-[#6b655f] truncate">
          www.ihre-praxis.at
        </span>
      </div>

      {/* Inhalt der Vorschau – je nach Variante deutlich unterschiedlich komponiert */}
      <div className="relative aspect-[16/10] p-5 sm:p-7">
        {variante === "minimal" && <MinimalPreview />}
        {variante === "warm" && <WarmPreview />}
        {variante === "bold" && <BoldPreview />}

        {status === "in-vorbereitung" && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70">
            <span className="px-4 py-2 rounded-full bg-white border border-[#e7e2dd] text-xs font-medium tracking-wide text-[#3a3532] shadow-sm">
              Demo in Vorbereitung
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/** Praxis Start: sehr schlicht, zentriert, viel Weißraum – Onepager-Charakter. */
function MinimalPreview() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center gap-3">
      <div className="w-9 h-9 rounded-full border border-[#d8d2cc]" aria-hidden />
      <div className="h-2 w-28 rounded-full bg-[#e7e2dd]" aria-hidden />
      <div className="h-1.5 w-40 rounded-full bg-[#efece8]" aria-hidden />
      <div className="mt-2 h-6 w-32 rounded-full border border-[#8b4b5a]/40" aria-hidden />
    </div>
  );
}

/** Praxis Professional (Lindenbogen): warmes, asymmetrisches Zwei-Spalten-Layout. */
function WarmPreview() {
  return (
    <div className="h-full grid grid-cols-5 gap-4 items-center">
      <div className="col-span-2 h-full rounded-xl bg-[#efe4e1]" aria-hidden />
      <div className="col-span-3 flex flex-col gap-2.5">
        <div className="h-2 w-16 rounded-full bg-[#8b4b5a]/50" aria-hidden />
        <div className="h-2.5 w-full rounded-full bg-[#e7e2dd]" aria-hidden />
        <div className="h-2.5 w-4/5 rounded-full bg-[#e7e2dd]" aria-hidden />
        <div className="h-1.5 w-full rounded-full bg-[#efece8]" aria-hidden />
        <div className="h-1.5 w-3/5 rounded-full bg-[#efece8]" aria-hidden />
        <div className="mt-1 h-5 w-24 rounded-full bg-[#8b4b5a]/80" aria-hidden />
      </div>
    </div>
  );
}

/** Praxis Premium: dunkler, selbstbewusster Kopfbereich + Karten-Raster für Behandlungsseiten. */
function BoldPreview() {
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="flex-[1.3] rounded-xl bg-[#2b2826] px-4 py-3 flex flex-col justify-center gap-2">
        <div className="h-2.5 w-2/3 rounded-full bg-white/70" aria-hidden />
        <div className="h-2.5 w-1/2 rounded-full bg-white/40" aria-hidden />
        <div className="mt-1 h-5 w-20 rounded-full bg-[#c98a97]" aria-hidden />
      </div>
      <div className="flex-1 grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-[#efece8]" aria-hidden />
        <div className="rounded-lg bg-[#efece8]" aria-hidden />
        <div className="rounded-lg bg-[#efece8]" aria-hidden />
      </div>
    </div>
  );
}
