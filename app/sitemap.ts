import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    {
      path: "/shutter-repair",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/plantation-shutter-repair",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/blind-and-shade-repair",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/motorized-shade-repair",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { path: "/get-a-quote", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "yearly", priority: 0.5 },
    { path: "/reviews", changeFrequency: "monthly", priority: 0.5 },
    { path: "/gallery", changeFrequency: "monthly", priority: 0.5 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
    {
      path: "/faq/plantation-shutter-repair-cost-los-angeles",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/faq/somfy-motorized-shade-repair",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...cities.map((city) => ({
      url: absoluteUrl(city.slug),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
