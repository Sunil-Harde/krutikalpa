export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";
import { portfolioProjects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://krutikalpa.com";
  const currentDate = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic Service Slugs
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
