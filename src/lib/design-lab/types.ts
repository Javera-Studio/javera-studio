export type CategorySlug =
  | "hero"
  | "text"
  | "images"
  | "cards"
  | "scroll"
  | "luxury"
  | "micro"
  | "cursor"
  | "loading"
  | "transitions"
  | "galleries"
  | "testimonials";

export interface Category {
  slug: CategorySlug;
  title: string;
  description: string;
  badge: string;
}

export interface DemoMeta {
  slug: string;
  variant: string;
  name: string;
  description: string;
  whenToUse: string;
  whenNotToUse: string;
  beautySuited: "Ja" | "Bedingt" | "Eher nicht";
  claudePrompt: string;
}
