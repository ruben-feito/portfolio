// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rubenfeito.dev",
  integrations: [
    icon(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
        },
      },
      serialize(item) {
        // Higher priority for homepage and projects
        if (item.url === 'https://rubenfeito.dev/' || item.url === 'https://rubenfeito.dev') {
          item.priority = 1.0;
        } else if (item.url === 'https://rubenfeito.dev/projects/' || item.url === 'https://rubenfeito.dev/projects') {
          item.priority = 0.9;
        } else if (item.url === 'https://rubenfeito.dev/about/' || 
                   item.url === 'https://rubenfeito.dev/about' ||
                   item.url === 'https://rubenfeito.dev/marketplaces/' ||
                   item.url === 'https://rubenfeito.dev/marketplaces') {
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

  // Image optimization
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  // SEO and performance
  output: "static",
  adapter: undefined, // Static generation for better SEO
});