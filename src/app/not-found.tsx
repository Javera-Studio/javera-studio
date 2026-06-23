import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-editorial text-7xl text-primary mb-4">404</p>
        <h1 className="font-serif text-2xl mb-2">Seite nicht gefunden</h1>
        <p className="text-muted-foreground mb-8">
          Diese Seite existiert nicht oder wurde verschoben.
        </p>
        <Link href="/" className="underline text-primary hover:text-primary/80 transition-colors">
          Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
