import type { Metadata } from "next";
import "./design-lab.css";

export const metadata: Metadata = {
  title: "Design Lab | JAVERA Studio",
  description: "Interne UI- & Animationsbibliothek von JAVERA Studio.",
  robots: { index: false, follow: false },
};

export default function DesignLabLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
