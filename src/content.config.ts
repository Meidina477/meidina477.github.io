import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Optional shorter title for Google; the page heading still uses `title`.
      seoTitle: z.string().optional(),
      description: z.string().optional(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(''),
      categories: z.array(z.string()).default([]),
      // Old URLs that now redirect here (used when two or more posts were merged).
      mergedFrom: z.array(z.string()).default([]),
      // Optional questions shown under the post (and given to Google as FAQ data).
      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    }),
});

export const collections = { blog };
