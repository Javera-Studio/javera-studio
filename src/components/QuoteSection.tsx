export function QuoteSection({ quote }: { quote: string }) {
  return (
    <section aria-label="Markenphilosophie" className="py-14 md:py-20">
      <div className="reveal max-w-3xl mx-auto px-6 text-center">
        <p className="font-script text-mauve-dark text-3xl md:text-4xl whitespace-pre-line">{quote}</p>
      </div>
    </section>
  );
}
