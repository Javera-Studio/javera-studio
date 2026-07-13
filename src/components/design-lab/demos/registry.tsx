import type { CategorySlug } from "@/lib/design-lab/types";
import { HeroDemo } from "./hero";
import { TextDemo } from "./text";
import { ImagesDemo } from "./images";
import { CardsDemo } from "./cards";
import { ScrollDemo } from "./scroll";
import { LuxuryDemo } from "./luxury";
import { MicroDemo } from "./micro";
import { CursorDemo } from "./cursor";
import { LoadingDemo } from "./loading";
import { TransitionsDemo } from "./transitions";
import { GalleriesDemo } from "./galleries";
import { TestimonialsDemo } from "./testimonials";

export const demoRegistry: Record<CategorySlug, React.ComponentType<{ variant: string }>> = {
  hero: HeroDemo,
  text: TextDemo,
  images: ImagesDemo,
  cards: CardsDemo,
  scroll: ScrollDemo,
  luxury: LuxuryDemo,
  micro: MicroDemo,
  cursor: CursorDemo,
  loading: LoadingDemo,
  transitions: TransitionsDemo,
  galleries: GalleriesDemo,
  testimonials: TestimonialsDemo,
};
