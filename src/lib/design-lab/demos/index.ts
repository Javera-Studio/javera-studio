import type { CategorySlug, DemoMeta } from "../types";
import { heroDemos } from "./hero";
import { textDemos } from "./text";
import { imagesDemos } from "./images";
import { cardsDemos } from "./cards";
import { scrollDemos } from "./scroll";
import { luxuryDemos } from "./luxury";
import { microDemos } from "./micro";
import { cursorDemos } from "./cursor";
import { loadingDemos } from "./loading";
import { transitionsDemos } from "./transitions";
import { galleriesDemos } from "./galleries";
import { testimonialsDemos } from "./testimonials";

export const demosByCategory: Record<CategorySlug, DemoMeta[]> = {
  hero: heroDemos,
  text: textDemos,
  images: imagesDemos,
  cards: cardsDemos,
  scroll: scrollDemos,
  luxury: luxuryDemos,
  micro: microDemos,
  cursor: cursorDemos,
  loading: loadingDemos,
  transitions: transitionsDemos,
  galleries: galleriesDemos,
  testimonials: testimonialsDemos,
};
