import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, excerpt } from '../data/blog';
import { SITE } from '../data/site';

// Served at /feed.xml; .htaccess also maps the old WordPress /feed/ URL here.
export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'Shabnam Lee Blog',
    description: 'Writing on IFS, Relational Life Therapy, Brainspotting, burnout, relationships and motherhood.',
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: excerpt(p),
      link: `/${p.id}/`,
      categories: p.data.categories,
    })),
  });
}
