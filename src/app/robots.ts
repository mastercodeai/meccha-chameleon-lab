import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/logo.svg", "/og-image.jpg"],
      },
    ],
    sitemap: "https://mecchachameleonlab.com/sitemap.xml",
  };
}
