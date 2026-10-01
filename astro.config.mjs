// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { REDIRECTS } from './src/data/redirects.ts';

export default defineConfig({
  site: 'https://shabnamlee.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !['/thank-you/', '/terms/', '/disclaimer/'].some((p) => page.includes(p)) })],
  image: { responsiveStyles: true },
  // Old WordPress URLs → new pages (see src/data/redirects.ts).
  redirects: REDIRECTS,
  // Load the next page when a visitor hovers over (or taps) a link, so navigation feels instant.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
