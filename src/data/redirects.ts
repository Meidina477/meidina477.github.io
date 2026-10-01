// Old WordPress addresses → new pages. GitHub Pages can't redirect on the server, so Astro
// generates a tiny page at each old address that forwards visitors (and Google) to the new one.
// (public/.htaccess has the same rules for Hostinger, if the site is ever hosted there again.)

const blogTopic: Record<string, string> = {
  ifs: 'IFS', rlt: 'RLT', act: 'ACT', brainspotting: 'Brainspotting', couple: 'Couples',
  'high-achievement-mothers': 'Mothers', 'high-achieving-mothers': 'Mothers',
  individuals: 'Individuals', individual: 'Individuals',
};
const categories = ['act', 'brainspotting', 'couple', 'gottman', 'high-achievement-mothers', 'ifs', 'individuals', 'rlt', 'uncategorized'];
const tags = ['act', 'all', 'brainspotting', 'burnout', 'couple', 'high-achieving-mothers', 'home', 'ifs', 'individual', 'rlt'];
const oldTestimonials = [
  'andrea-gunawan', 'angeline-sutanto', 'aprilia-nugrahani', 'binh-vu',
  'client-facing-behavioral-change-and-mindfulness-development', 'client-facing-breakup-career-stress-and-emotional-regulation',
  'client-facing-relationship-healing-and-trauma-recovery', 'client-facing-therapy-hesitation-and-emotional-awareness',
  'client-facing-trauma-and-emotional-recognition', 'client-focused-on-building-healthy-habits', 'client-focused-on-building-resilience',
  'client-focused-on-developing-self-understanding', 'client-focused-on-growth-mindset-core-values', 'client-focused-on-overcoming-anxiety',
  'client-focused-on-overcoming-relationship-trauma', 'client-focused-on-overcoming-work-burnout-anxiety',
  'client-focused-on-resolving-personal-issues', 'client-focused-on-self-improvement', 'client-focused-on-work-burnout',
  'client-focused-on-work-life-challenges', 'isabelle-lau', 'joe-halim', 'ken-khalid', 'lygia', 'meidina-sofyan',
  'mikael-jasin-2024-world-barista-champion',
];

const topic = (slug: string) => (blogTopic[slug] ? `/blog/?topic=${blogTopic[slug]}` : '/blog/');

export const REDIRECTS: Record<string, string> = {
  // Merged blog posts
  '/understanding-your-inner-world-how-internal-family-systems-ifs-therapy-creates-lasting-change/': '/internal-family-systems-therapy-understanding-your-inner-world/',
  '/understanding-internal-family-systems-therapy-a-path-to-inner-harmony/': '/internal-family-systems-therapy-understanding-your-inner-world/',
  '/why-talk-therapy-alone-isnt-always-enough-how-brainspotting-reaches-what-words-cant/': '/when-talk-therapy-isnt-enough-how-brainspotting-reaches-trauma-your-mind-cant-access/',
  '/relational-life-therapy-transforming-connections-through-direct-experiential-change/': '/relational-life-therapy-building-deeper-connections-through-mind-body-and-nervous-system/',
  // Renamed post
  '/35661-2/': '/5-things-you-do-in-a-fight-that-make-everything-worse/',
  // Archives
  '/author/shabnamlee/': '/about/',
  '/feed/': '/feed.xml',
  '/comments/feed/': '/feed.xml',
  ...Object.fromEntries(categories.map((c) => [`/category/${c}/`, topic(c)])),
  ...Object.fromEntries(tags.map((t) => [`/tag/${t}/`, topic(t)])),
  ...Object.fromEntries(oldTestimonials.map((t) => [`/testimonials/${t}/`, '/testimonials/'])),
};
