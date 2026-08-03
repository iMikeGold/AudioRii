import type { MetadataRoute } from "next";
import { products, secondarySections } from "@/content/site-content";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const secondaryRoutes = Object.keys(secondarySections).map(
    (route) => `/${route}`,
  );

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/products`,
      lastModified: new Date(),
    },
    ...products.map((product) => ({
      url: `${siteConfig.url}/products/${product.slug}`,
      lastModified: new Date(),
    })),
    ...secondaryRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
  ];
}
