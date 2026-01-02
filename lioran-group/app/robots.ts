import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
        ],
      },
    ],
    sitemap: "https://lioran.group/sitemap.xml",
    host: "https://lioran.group",
  };
}
