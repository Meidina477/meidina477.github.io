// Contact details live in site.json, which the editor at /admin/ changes.
import contact from './site.json';

export const SITE = {
  ...contact,
  name: 'Shabnam Lee',
  tagline: 'Mental Health Therapy & Consulting',
  title: 'Shabnam Lee Mental Health Therapy & Consulting',
  url: 'https://shabnamlee.com',
  googleTagId: 'GT-M39SJZFZ',
  company: 'PT Integrative Healing and Wellness',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Shabnam+Lee+Mental+Health+Therapy+%26+Consulting',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2137695873807!2d106.78298921037653!3d-6.23552876103613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f17aa8aa6cc1%3A0x15d69ea49ff00b12!2sShabnam%20Lee%20Mental%20Health%20Therapy%20%26%20Consulting!5e0!3m2!1sen!2sid!4v1786112177188!5m2!1sen!2sid',
  book: '/book-free-consultation/',
};

type NavItem = { label: string; href?: string; children?: { label: string; href: string }[] };

// Items without an href render as non-clickable labels that only open their dropdown.
export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  {
    label: 'Work With Me',
    href: '/work-with-me/',
    children: [
      { label: 'Individual Therapy', href: '/individual-therapy/' },
      { label: 'Couple Therapy', href: '/couple-therapy/' },
      { label: 'High Achieving Mothers', href: '/high-achieving-mothers/' },
      { label: 'Retreats', href: '/retreats/' },
      { label: 'Corporate Wellness', href: '/corporate-wellness/' },
    ],
  },
  {
    label: 'How I Work',
    href: '/how-i-work/',
    children: [
      { label: 'IFS', href: '/ifs/' },
      { label: 'RLT', href: '/rlt/' },
      { label: 'ACT Therapy', href: '/act-therapy/' },
      { label: 'Gottman', href: '/gottman/' },
      { label: 'Perinatal Mental Health', href: '/perinatal-health/' },
      { label: 'Brainspotting', href: '/brainspotting/' },
    ],
  },
  {
    label: 'Specialty',
    children: [
      { label: 'Burnout', href: '/burnout/' },
      { label: 'IFS Therapy Intensive', href: '/ifs-therapy-intensive/' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'The Space Between', href: '/the-space-between/' },
      { label: 'Resources', href: '/resource/' },
      { label: 'Blog', href: '/blog/' },
    ],
  },
];
