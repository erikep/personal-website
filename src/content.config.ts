import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const experience = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    current: z.boolean().default(false),
    summary: z.string().optional(),
    bullets: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
    links: z
      .object({
        github: z.string().url().optional(),
        live: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .default({}),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { experience, projects, writing };
