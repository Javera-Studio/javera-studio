import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="py-8 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">

          <div className="flex flex-col items-center text-center">
            <Image src="/logotransparent.png" alt="Javera Studio" width={120} height={84} className="h-[84px] w-auto opacity-90" />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Webdesign &amp; Branding für Beauty Businesses.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:translate-x-[30%]">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Folge uns</p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://www.instagram.com/javerastudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  @javerastudio
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61590694472402&locale=de_DE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                    <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.25c0-.87.24-1.46 1.49-1.46H16.5V4.1C16.24 4.07 15.36 4 14.33 4c-2.15 0-3.63 1.31-3.63 3.72V10.5H8v3h2.7V21h2.8Z" />
                  </svg>
                  Javera Studio
                </a>
                <a
                  href="https://www.tiktok.com/@javerastudio?lang=de-DE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                    <path d="M16.6 5.82c-.9-.62-1.5-1.6-1.63-2.72h-2.68v13.2c0 1.35-1.1 2.45-2.45 2.45a2.45 2.45 0 0 1-2.45-2.45 2.45 2.45 0 0 1 2.45-2.45c.24 0 .48.03.7.1V10.9a5.15 5.15 0 0 0-.7-.05A5.25 5.25 0 0 0 4.6 16.1a5.25 5.25 0 0 0 5.24 5.25 5.25 5.25 0 0 0 5.25-5.25V9.03a7.9 7.9 0 0 0 4.6 1.47V7.83a4.8 4.8 0 0 1-2.1-.5 4.85 4.85 0 0 1-1-.6Z" />
                  </svg>
                  @javerastudio
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Kontakt</p>
              <a href="mailto:hallo@javera-studio.at" className="text-sm text-white/80 hover:text-white transition-colors">
                hallo@javera-studio.at
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Rechtliches</p>
              <Link href="/impressum" className="text-sm text-white/70 hover:text-white transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="text-sm text-white/70 hover:text-white transition-colors">Datenschutzerklärung</Link>
            </div>
          </div>

        </div>
        <div className="mt-8 pt-5 border-t border-white/10 text-xs text-white/30 text-center">
          © {new Date().getFullYear()} Javera Studio
        </div>
      </div>
    </footer>
  );
}
