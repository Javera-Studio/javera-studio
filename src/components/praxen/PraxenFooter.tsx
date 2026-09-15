import Link from "next/link";

/**
 * Reduzierter Footer für die Praxen-Landingpage – bewusst kein Import des bestehenden
 * `SiteFooter` (Social-Media-Links des Beauty-Bereichs, andere Bildmarke/Ton). Kontaktweg
 * (E-Mail) und Rechtliches-Links sind dieselben wie im restlichen Projekt, keine neuen
 * Kontaktdaten erfunden.
 */
export function PraxenFooter() {
  return (
    <footer className="border-t border-[#ece7e2] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="text-sm font-medium text-[#3a3532]">Javera Studio</p>
            <p className="mt-2 text-sm text-[#6b655f] leading-relaxed">Individuelles Webdesign für Praxen.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[#6b655f] mb-3">Kontakt</p>
            <a href="mailto:hallo@javera-studio.at" className="text-sm text-[#5c5751] hover:text-[#3a3532] transition-colors">
              hallo@javera-studio.at
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[#6b655f] mb-3">Rechtliches</p>
            <div className="flex flex-col gap-2">
              <Link href="/impressum" className="text-sm text-[#5c5751] hover:text-[#3a3532] transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="text-sm text-[#5c5751] hover:text-[#3a3532] transition-colors">Datenschutzerklärung</Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[#6b655f] mb-3">Mehr von Javera Studio</p>
            <Link href="/" className="text-sm text-[#5c5751] hover:text-[#3a3532] transition-colors">
              Zur Hauptseite (Beauty Studios)
            </Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[#ece7e2] text-xs text-[#6b655f] text-center">
          © {new Date().getFullYear()} Javera Studio
        </div>
      </div>
    </footer>
  );
}
