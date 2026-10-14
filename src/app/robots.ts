export const dynamic = "force-static";

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://krutikalpa.com/sitemap.xml",
    host: "https://krutikalpa.com",
  };
}
