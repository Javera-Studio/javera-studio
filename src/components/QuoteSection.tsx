import { FlourishDivider } from "@/components/FlourishDivider";

export function QuoteSection({ quote }: { quote: string }) {
  return (
    <section aria-label="Markenphilosophie" className="py-12 md:py-16">
      <div className="reveal max-w-xl mx-auto px-6 text-center">
        <p className="font-serif italic text-2xl md:text-3xl text-ink leading-[1.7]">{quote}</p>
        <FlourishDivider />
      </div>
    </section>
  );
}
