# shabnamlee.com

The rebuilt shabnamlee.com is a static site built with [Astro](https://astro.build). It replaces the WordPress/Divi site.
There's no database and no plugins. It builds to plain HTML, CSS and images, and is published with **GitHub Pages** (built automatically on every push).

## Working on it

```bash
npm install        # once
npm run dev        # local preview at http://localhost:4321
npm run build      # builds the finished site into dist/
```

## Where things live

| What | Where |
|---|---|
| Pages | `src/pages/*.astro`, one file per page and named after its URL |
| Blog posts | `src/content/blog/*.md`. To add a post, copy an existing file, change the top section, and write in Markdown |
| Prices and programmes | `src/data/programmes.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Menu, phone, email, social links, Google tag ID | `src/data/site.ts` |
| Google titles and descriptions | `src/data/seo.ts` |
| Colours and fonts | `src/styles/global.css` |
| Images | `src/assets/img/`. These are automatically resized and converted to WebP at build time |
| Consultation form | `src/pages/book-free-consultation.astro`, sent by email through [FormSubmit](https://formsubmit.co) to admin@shabnamlee.com (same as thetherapyintensive.com) |
| Publishing | `.github/workflows/deploy.yml` (GitHub Pages) |
| Redirects from old URLs | `src/data/redirects.ts` (`public/.htaccess` has the same rules for Hostinger) |

## Publishing (GitHub Pages)

Every push to the `main` branch builds the site and publishes it automatically (`.github/workflows/deploy.yml`).
You can watch progress under the repository's **Actions** tab.

### Preview: preview.shabnamlee.com

1. In the GitHub repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Same page, **Custom domain**: `preview.shabnamlee.com` → Save. Tick **Enforce HTTPS** once it becomes available.
3. In Hostinger hPanel → **DNS / Nameservers** for shabnamlee.com, add a record:
   **Type** `CNAME`, **Name** `preview`, **Points to** `<your-github-username>.github.io`, TTL default.
   (This doesn't touch the live shabnamlee.com.)
4. While in preview mode every page carries `noindex`, so Google won't list it, and Google Analytics doesn't run.

### The consultation form (FormSubmit): one-time activation

The first time the form is submitted from a new website, FormSubmit sends an activation email to
admin@shabnamlee.com. Open it and click **Activate**. After that, enquiries arrive normally.
Test it: submit the form on the preview, check the inbox (and spam folder).

### Going live on shabnamlee.com (after Shabnam approves the preview)

1. **Back up the current WordPress site** (hPanel → Backups). Keep it for at least a month.
2. Repository **Settings → Secrets and variables → Actions → Variables**: add `PREVIEW` = `false`. This removes `noindex` and switches on analytics.
3. **Settings → Pages → Custom domain**: change to `shabnamlee.com`.
4. In Hostinger DNS for shabnamlee.com, point the domain to GitHub Pages:
   - four `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (remove the old `A` records)
   - a `CNAME` for `www` → `<your-github-username>.github.io`
5. Re-run the workflow (Actions → Deploy to GitHub Pages → Run workflow), then tick **Enforce HTTPS**.
6. Submit `https://shabnamlee.com/sitemap-index.xml` in Google Search Console.

Old WordPress addresses (merged blog posts, category/tag pages, old testimonial pages) still work:
GitHub Pages can't redirect on the server, so the build creates a small forwarding page at each old
address. The list lives in `src/data/redirects.ts`.

## Analytics and cookies

Google Analytics (`GT-M39SJZFZ`) only loads **after** a visitor clicks Accept on the cookie banner.
Visitors can change their choice via "Cookie settings" in the footer. See `src/components/CookieConsent.astro`.
