import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

// ─── Projects ────────────────────────────────────────────────────────────────
const projects = defineCollection({
  loader: file("./src/content/data/projects.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    gradient: z.string(),
    image: z.string().optional(),
    url: z.string().url().optional(),
    tags: z.array(
      z.object({
        label: z.string(),
        color: z.string(),
      })
    ),
  }),
});

// ─── Marketplaces ─────────────────────────────────────────────────────────────
const marketplaces = defineCollection({
  loader: file("./src/content/data/marketplaces.json"),
  schema: z.object({
    name: z.string(),
  }),
});

// ─── Education ────────────────────────────────────────────────────────────────
const education = defineCollection({
  loader: file("./src/content/data/education.json"),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    period: z.string(),
    description: z.string(),
    badge: z
      .object({
        image: z.string(),
        alt: z.string(),
        link: z.string().url(),
      })
      .optional(),
  }),
});

// ─── Experiences ──────────────────────────────────────────────────────────────
const experiences = defineCollection({
  loader: file("./src/content/data/experiences.json"),
  schema: z.object({
    year: z.string(),
    title: z.string(),
    company: z.string(),
    period: z.string(),
    description: z.string(),
    skills: z
      .array(
        z.object({
          title: z.string(),
          items: z.array(z.string()),
        })
      )
      .optional(),
    colorClass: z.string().optional(),
  }),
});

// ─── Featured Skills ─────────────────────────────────────────────────────────
const skills = defineCollection({
  loader: file("./src/content/data/skills.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.enum(["upload", "desktop", "network", "check", "database", "layers"]),
  }),
});

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = defineCollection({
  loader: file("./src/content/data/stats.json"),
  schema: z.object({
    value: z.string(),
    label: z.string(),
  }),
});

export const collections = { projects, marketplaces, education, experiences, skills, stats };
