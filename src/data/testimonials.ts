// Collected from the testimonials shown on the old site's pages.
// The quotes live in testimonials.json, which the editor at /admin/ changes.
import data from './testimonials.json';

export type Testimonial = { id: string; name: string; quote: string };

// Quotes added in the editor may have no id: one is made from the name.
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const TESTIMONIALS: Record<string, Testimonial> = Object.fromEntries(
  (data.items as Partial<Testimonial>[]).map((t) => {
    const id = t.id || slug(t.name ?? '');
    return [id, { id, name: t.name ?? '', quote: t.quote ?? '' }];
  }),
);

export const pick = (...ids: string[]) => ids.map((id) => TESTIMONIALS[id]).filter(Boolean);
