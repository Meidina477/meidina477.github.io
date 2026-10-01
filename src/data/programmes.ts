// Prices and programme structures, kept in one place so they stay consistent across pages.
// Source: Shabnam Lee Price List 2026.

export const CONSULT_SESSION = { length: '1.5-hour', price: 'IDR 4,000,000' };
export const NOT_SURE_NOTE = `<strong>Prefer not to commit to a package yet?</strong> Start with a single ${CONSULT_SESSION.length} session (${CONSULT_SESSION.price}) with Shabnam instead. You can decide on a package later, if and when it feels right.`;

export const INDIVIDUAL_PROGRAMMES = [
  {
    name: 'Therapy Intensive',
    duration: '6 hours',
    text: 'Designed for those wanting focused, accelerated progress through deep-dive work condensed into a short, structured timeframe.',
    steps: [
      { label: 'Pre therapy', detail: 'Client workbook assessment', time: '1 hour' },
      { label: 'Day 1', detail: 'Data gathering session', time: '1.5 hours' },
      { label: 'Day 2', detail: 'Individual therapy intensive', time: '2.5 hours' },
      { label: 'Follow up', detail: 'Post-intensive aftercare session', time: '50 minutes' },
    ],
    price: 'IDR 11,000,000',
    where: 'Jakarta or online',
  },
  {
    name: 'Therapy Intensive',
    duration: '8.5 hours',
    text: 'The same focused, deep-dive format with an additional intensive day.',
    steps: [
      { label: 'Pre therapy', detail: 'Client workbook assessment', time: '1 hour' },
      { label: 'Day 1', detail: 'Data gathering session', time: '1.5 hours' },
      { label: 'Day 2', detail: 'Individual therapy intensive', time: '2.5 hours' },
      { label: 'Day 3', detail: 'Individual therapy intensive', time: '2.5 hours' },
      { label: 'Follow up', detail: 'Post-intensive aftercare session', time: '50 minutes' },
    ],
    price: 'IDR 16,500,000',
    where: 'Jakarta or online',
  },
  {
    name: 'Weekly Therapy',
    duration: '7 hours across 4–6 weeks',
    text: 'Best for clients seeking consistent, ongoing support and gradual change over time.',
    steps: [
      { label: 'Pre therapy', detail: 'Client workbook assessment', time: '1 hour' },
      { label: 'Therapy sessions', detail: '4 × 75-minute sessions' },
    ],
    price: 'IDR 12,000,000',
    where: 'Jakarta or online',
  },
  {
    name: 'Bali Retreat Intensive',
    duration: 'Fully customisable',
    price: 'Pricing upon consultation',
  },
];

export const INTENSIVE_VS_WEEKLY = {
  left: {
    title: 'Therapy Intensive',
    points: [
      '6 or 8.5 hours across 2 to 3 focused days',
      'Uninterrupted work, no weekly reset',
      'Rapid momentum and clarity',
      'Ideal for transitions, stuck patterns, burnout',
      'Retreat-style: Jakarta, Bali or online',
    ],
  },
  right: {
    title: 'Weekly Therapy',
    points: [
      '1 session per week, 75 minutes',
      'Time to re-orient at each session',
      'Gradual progress over weeks or months',
      'Ideal for ongoing IFS support over time',
      'Fits around everyday life',
    ],
  },
};

export const COUPLE_PROGRAMMES = [
  {
    name: 'Exploration',
    duration: '7 hours',
    text: 'Designed for those wanting a starting point to understand what is keeping them stuck in their challenges.',
    steps: [
      { label: 'Pre therapy · 1 week before', detail: 'Couple workbook assessment', time: '2 hours' },
      { label: 'Day 1', detail: 'Couple data gathering session', time: '2.5 hours' },
      { label: 'Day 2', detail: 'Couple therapy intensive workshop', time: '2.5 hours' },
    ],
    price: 'IDR 14,500,000',
    where: 'Jakarta or online',
  },
  {
    name: 'Deepening',
    duration: '13 hours',
    text: 'Best for clients seeking a sustained process for deeper repair and long-term transformation.',
    steps: [
      { label: 'Pre therapy · 1 week before', detail: 'Couple workbook assessment', time: '2 hours' },
      { label: 'Day 1', detail: 'Couple data gathering session', time: '2 hours' },
      { label: 'Day 1', detail: 'Individual therapy for partner #1', time: '50 minutes' },
      { label: 'Day 1', detail: 'Individual therapy for partner #2', time: '50 minutes' },
      { label: 'Day 2', detail: 'Couple therapy intensive workshop', time: '5 hours' },
      { label: 'Follow up · 1 week after', detail: 'Couple therapy check-in', time: '1.5 hours' },
    ],
    price: 'IDR 29,500,000',
    where: 'Jakarta or online',
  },
];
