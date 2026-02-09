// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://tu-dominio.com",
  integrations: [icon()],

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