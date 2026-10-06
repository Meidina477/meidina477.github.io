// Titles and descriptions based on the old site's Yoast SEO settings, kept to protect search rankings.
// They live in seo.json, which the editor at /admin/ changes ("Google search listings").
import data from './seo.json';

export const SEO: Record<string, { title: string; description: string }> = Object.fromEntries(
  data.pages.map(({ page, title, description }) => [page, { title, description }]),
);
