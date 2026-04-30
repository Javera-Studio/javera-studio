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
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1 text-xs">
            <a
              href="mailto:javera.studio@gmail.com"
              className="hover:text-ink transition-colors py-1"
            >
              javera.studio@gmail.com
            </a>
            <span aria-hidden className="opacity-40">·</span>
            <a
              href="https://www.instagram.com/javerastudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors py-1"
            >
              Instagram
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
