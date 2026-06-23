"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-24 md:h-28 flex items-center justify-between">
        <a href="#top" className="flex items-center group" aria-label="Javera Studio – zur Startseite" onClick={close}>
          <Image
            src="/javera-logo.png"
            alt="Javera Studio"
            width={120}
            height={80}
            className="h-16 md:h-20 w-auto transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-80 group-hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            priority
          />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-xs text-muted-foreground">
          <a href="#kundenprojekte" className="hover:text-ink transition">Meine Arbeit</a>
          <a href="#warum" className="hover:text-ink transition">Warum</a>
          <a href="#ablauf" className="hover:text-ink transition">Ablauf</a>
          <Link href="/preise" className="hover:text-ink transition">Preise</Link>
          <a href="#about" className="hover:text-ink transition">Über mich</a>
          <a href="#faq" className="hover:text-ink transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#schreib-mir"
            className="hidden sm:inline-flex text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition"
          >
            Kostenlose Analyse & Demo
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border/70 text-ink hover:bg-cream transition"
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
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4 gap-1 text-sm text-muted-foreground">
            <a href="#kundenprojekte" onClick={close} className="py-2.5 hover:text-ink transition">Meine Arbeit</a>
            <a href="#warum" onClick={close} className="py-2.5 hover:text-ink transition">Warum</a>
            <a href="#ablauf" onClick={close} className="py-2.5 hover:text-ink transition">Ablauf</a>
            <Link href="/preise" onClick={close} className="py-2.5 hover:text-ink transition">Preise</Link>
            <a href="#about" onClick={close} className="py-2.5 hover:text-ink transition">Über mich</a>
            <a href="#faq" onClick={close} className="py-2.5 hover:text-ink transition">FAQ</a>
            <a
              href="#schreib-mir"
              onClick={close}
              className="mt-3 inline-flex justify-center text-sm px-4 py-3 rounded-full bg-primary text-primary-foreground hover:bg-mauve transition"
            >
              Kostenlose Analyse & Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
