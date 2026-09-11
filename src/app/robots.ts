import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site-config";

export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.isProductionReady || !siteConfig.siteUrl) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
