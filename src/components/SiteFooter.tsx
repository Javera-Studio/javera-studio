import { Link } from "@tanstack/react-router";
import logo from "@/assets/javera-logo.png";

export function SiteFooter() {
  return (
    <footer className="py-12 border-t border-border/60 bg-cream">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-muted-foreground">
        <img src={logo} alt="Javera Studio" className="h-40 md:h-48 w-auto" />
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
            <Link to="/impressum" className="hover:text-ink transition-colors py-2">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-ink transition-colors py-2">
              Datenschutzerklärung
            </Link>
          </nav>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-3 gap-y-1 text-xs">
            <a
              href="mailto:hallo@javera-studio.at"
              className="hover:text-ink transition-colors py-1"
            >
              hallo@javera-studio.at
            </a>
            <span aria-hidden className="opacity-40">·</span>
            <a
              href="https://www.instagram.com/javerastudio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Javera Studio auf Instagram"
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors py-1"
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
          <div className="text-xs">
            <div>© {new Date().getFullYear()} Javera Studio</div>
            <div>Made in Vienna</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
