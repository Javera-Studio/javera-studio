"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Eigener, reduzierter Header für die Praxen-Landingpage – bewusst kein Import der
 * bestehenden Beauty-`Navbar` (andere Sprunglinks, ein CTA statt zwei, sachlicherer Ton).
 * Das Logo verlinkt zurück auf die normale JAVERA-Startseite, `/praxen` bleibt vorerst
 * bewusst außerhalb der Hauptnavigation des Beauty-Bereichs.
 */
const jumpLinks = [
  { href: "#demos", label: "Beispiele" },
  { href: "#pakete", label: "Pakete" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#kontakt", label: "Kontakt" },
];

export function PraxenHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#ece7e2]">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Javera Studio – zur Startseite">
          <Image
            src="/Javera.logo.rund.png"
            alt="Javera Studio"
            width={44}
            height={44}
            className="h-10 w-10 md:h-11 md:w-11 transition-opacity group-hover:opacity-80"
            priority
          />
          <span className="hidden sm:block text-sm leading-tight text-[#3a3532]">
            Javera Studio
            <span className="block text-[11px] uppercase tracking-[0.14em] text-[#6b655f]">Webdesign für Praxen</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[#5c5751]">
          {jumpLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#3a3532] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden sm:inline-flex text-sm px-5 py-2.5 rounded-full bg-[#8b4b5a] text-white hover:bg-[#733e4b] transition-colors"
          >
            Projekt besprechen
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#e2dcd6] text-[#3a3532] hover:bg-[#f5f2ed] transition-colors"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
          >
            <span className="relative block w-5 h-3.5">
              <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-1.5 h-px w-5 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 top-3 h-px w-5 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#ece7e2] bg-white">
          <nav className="flex flex-col px-6 py-4 gap-1 text-sm text-[#5c5751]">
            {jumpLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={close} className="py-2.5 hover:text-[#3a3532] transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={close}
              className="mt-3 inline-flex justify-center text-sm px-5 py-3 rounded-full bg-[#8b4b5a] text-white hover:bg-[#733e4b] transition-colors"
            >
              Projekt besprechen
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
