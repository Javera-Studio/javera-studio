import { useId } from "react";

/**
 * Dezenter Akzent unter den Markenphilosophie-Zitaten: keine symmetrische
 * Wellenlinie, sondern ein einzelner, asymmetrischer Lichtstreif, wie er auf
 * der gewölbten Ecke des Spiegel-/Fenster-Icons (.mirror-frame, rounded-2xl)
 * auftreten würde. Ein zweiter, kleinerer Glanzpunkt daneben deutet einen
 * sekundären Reflex an. Der Verlauf läuft transparent → Akzentfarbe →
 * transparent, mit asymmetrisch verschobenem Höhepunkt statt mittiger Spitze.
 */
export function FlourishDivider() {
  const id = useId();

  return (
    <svg
      width="128"
      height="26"
      viewBox="0 0 128 26"
      fill="none"
      aria-hidden
      className="mx-auto mt-12 opacity-70"
    >
      <defs>
        <linearGradient id={`${id}-main`} x1="4" y1="0" x2="122" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--rose-gold)" stopOpacity="0" />
          <stop offset="32%" stopColor="var(--rose-gold)" stopOpacity="0.75" />
          <stop offset="58%" stopColor="var(--rose-gold)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--rose-gold)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-glint`} x1="96" y1="0" x2="124" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--rose-gold)" stopOpacity="0" />
          <stop offset="55%" stopColor="var(--rose-gold)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--rose-gold)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Primärer Reflex: einzelner asymmetrischer Bogen, Spitze links vom Zentrum */}
      <path
        d="M4 19 C 30 3, 58 1, 122 12"
        stroke={`url(#${id}-main)`}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {/* Sekundärer Glanzpunkt: kleiner, tiefer angesetzter Gegenbogen */}
      <path
        d="M98 8 C 106 5, 114 6.5, 123 11"
        stroke={`url(#${id}-glint)`}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
