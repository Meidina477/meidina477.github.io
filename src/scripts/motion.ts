// Site-wide scroll motion: one consistent, gentle system for every page.
// - Section content fades up as it enters the viewport.
// - Items inside card grids and lists follow one after another (staggered).
// - Full-bleed photo heroes drift slightly slower than the page (parallax).
// Nothing runs when the visitor prefers reduced motion (the `motion` class is never added).

const root = document.documentElement;

if (root.classList.contains('motion')) {
  // Containers whose children should appear one by one.
  const GROUPS = [
    '.cards', '.issues', '.progs', '.signs', '.symptoms', '.features', '.pathways', '.steps',
    '.quotes', '.posts', '.books', '.pods', '.for-you', '.os-grid', '.session-steps', '.research',
    '.client-photos', '.creds', '.services', '.reasons', '.quals', '.shifts dl', '.cs', '.pills',
    '.certs ul', '.clients', '.res-list .wrap', '.plain', '.signs', '.faq', '.self', '.include ul',
  ].join(',');

  const targets: HTMLElement[] = [];
  const add = (el: Element | null, delay = 0) => {
    if (!(el instanceof HTMLElement) || el.dataset.rv !== undefined || el.closest('[data-no-reveal]')) return;
    el.dataset.rv = '';
    el.style.setProperty('--rv-delay', `${delay}ms`);
    targets.push(el);
  };

  document.querySelectorAll('main section:not(.photo-hero), main article > header, main article > div').forEach((section) => {
    const wrap = section.querySelector(':scope > .wrap, :scope > .wrap-narrow, :scope > .wrap-mid, :scope > figure') ?? section;
    Array.from(wrap.children).forEach((child) => {
      if (child.matches(GROUPS)) {
        Array.from(child.children).forEach((item, i) => add(item, Math.min(i, 8) * 90));
      } else if (child.querySelector(GROUPS) && !child.matches('.section-head')) {
        // e.g. a grid-2 row holding a heading and a card list: reveal the parts separately.
        Array.from(child.children).forEach((part) => {
          if (part.matches(GROUPS)) Array.from(part.children).forEach((item, i) => add(item, Math.min(i, 8) * 90));
          else add(part);
        });
      } else {
        add(child);
      }
    });
  });

  // Reveal anything that is on screen or already scrolled past. Checking on every scroll frame
  // (rather than only with an IntersectionObserver) means fast flings and anchor jumps never
  // leave an element stuck invisible.
  let pending = targets.slice();
  const reveal = (el: HTMLElement) => {
    el.classList.add('rv-in');
    // Once it has arrived, hand the element back to its normal styles (hover effects etc.).
    const delay = parseFloat(el.style.getPropertyValue('--rv-delay')) || 0;
    setTimeout(() => { delete el.dataset.rv; el.classList.remove('rv-in'); el.style.removeProperty('--rv-delay'); }, delay + 1000);
  };
  let queued = false;
  const check = () => {
    queued = false;
    const line = innerHeight * 0.92;
    pending = pending.filter((el) => {
      if (el.getBoundingClientRect().top < line) { reveal(el); return false; }
      return true;
    });
  };
  // A short timer rather than requestAnimationFrame: it keeps working in background tabs and preview tools.
  const onScroll = () => { if (!queued) { queued = true; setTimeout(check, 16); } };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  // Images and embeds finishing late can move things into view without a scroll event.
  addEventListener('load', onScroll);
  new ResizeObserver(onScroll).observe(document.body);
  check();

  // Parallax on the full-bleed photo heroes.
  const heroImg = document.querySelector<HTMLElement>('.photo-hero .bg');
  if (heroImg) {
    let ticking = false;
    const update = () => {
      const y = Math.min(scrollY, innerHeight);
      heroImg.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(1.06)`;
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  }
}
