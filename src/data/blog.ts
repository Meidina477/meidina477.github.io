import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function getPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

const plain = (md: string) =>
  md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#*_>`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export function excerpt(post: Post, max = 155) {
  if (post.data.description) return post.data.description;
  const text = plain(post.body ?? '');
  return text.length <= max ? text : text.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

export function readingTime(post: Post) {
  const words = plain(post.body ?? '').split(' ').length;
  return Math.max(1, Math.round(words / 230));
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
