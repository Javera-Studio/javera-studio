import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.javera-studio.at";

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    { url: `${base}`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/preise`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/leistungen`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...blogEntries,
    { url: `${base}/demo-anfrage`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
