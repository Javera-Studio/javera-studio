import { Link } from "@tanstack/react-router";
import logo from "@/assets/logotransparent.png";

export function SiteFooter() {
  return (
    <footer className="py-8 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">

          {/* Col 1: Logo + tagline */}
          <div>
            <img src={logo} alt="Javera Studio" className="h-[84px] w-auto opacity-90" />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Webdesign &amp; Branding für Beauty Businesses.
            </p>
          </div>

          {/* Col 2: Kontakt + Folge uns */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Kontakt</p>
              <a
                href="mailto:hallo@javera-studio.at"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                hallo@javera-studio.at
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Folge uns</p>
              <a
                href="https://www.instagram.com/javerastudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                @javerastudio
              </a>
            </div>
          </div>

          {/* Col 3: Impressum + Datenschutz */}
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Rechtliches</p>
            <Link
              to="/impressum"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Datenschutzerklärung
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-white/10 text-xs text-white/30 text-center">
          © {new Date().getFullYear()} Javera Studio
        </div>
      </div>
    </footer>
  );
}
