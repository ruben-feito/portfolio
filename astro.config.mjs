// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ruben-feito.vercel.app",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-ES",
        },
      },
      serialize(item) {
        // Higher priority for homepage and projects
        if (
          item.url === "https://ruben-feito.vercel.app/" ||
          item.url === "https://ruben-feito.vercel.app"
        ) {
          item.priority = 1.0;
        } else if (
          item.url === "https://ruben-feito.vercel.app/projects/" ||
          item.url === "https://ruben-feito.vercel.app/projects"
        ) {
          item.priority = 0.9;
        } else if (
          item.url === "https://ruben-feito.vercel.app/about/" ||
          item.url === "https://ruben-feito.vercel.app/about" ||
          item.url === "https://ruben-feito.vercel.app/marketplaces/" ||
          item.url === "https://ruben-feito.vercel.app/marketplaces"
        ) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],

  // Performance optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },

  // SEO and performance - static generation for better SEO
  output: "static",
});
