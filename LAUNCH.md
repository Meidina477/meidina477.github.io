# Moving shabnamlee.com to the new site

Work through the parts in order. Tick each box as you go.

---

## Part 1: Publish the latest changes (2 minutes)

- [ ] Open **GitHub Desktop**. Make sure the current repository is **shabnamlee**.
- [ ] Click **Push origin**.
- [ ] On github.com, open the repository and go to the **Actions** tab. Wait for the green tick, which takes about 2 minutes.

## Part 2: Turn on the editor (10 minutes, one time only)

The editor uses the same sign-in service as thetherapyintensive.com, so there's nothing new to create.

- [ ] Go to **dash.cloudflare.com**, then **Compute → Workers & Pages → tti-auth → Settings → Variables and Secrets**.
- [ ] Edit **ALLOWED_DOMAINS** to add the new site. The full value should be:
  ```
  thetherapyintensive.com,*.thetherapyintensive.com,*.pages.dev,shabnamlee.com,*.shabnamlee.com,meidina477.github.io
  ```
  Then click **Deploy**.
- [ ] *(Optional)* Go to **github.com/settings/developers → OAuth Apps → "The Therapy Intensive editor"** and rename it to something like "Shabnam Lee site editor". This is the name Shabnam sees when she signs in.
- [ ] Give Shabnam access: in the **shabnamlee** repository, go to **Settings → Collaborators → Add people**, enter her GitHub username and choose **Write**. She needs a free GitHub account for this.
- [ ] Test it: open **https://meidina477.github.io/admin/**, click **Sign in with GitHub**, then change one word in a testimonial and click **Save**. The site updates in about a minute. Change it back afterwards.

**What she can edit at /admin/:**
- **Blog posts**: write, edit and add photos.
- **Prices and packages**: these update every page that shows prices, including the booking form's minimum.
- **Client testimonials**
- **Google search listings**: the title and description for each page.
- **Contact details and links**: email, WhatsApp, Instagram, LinkedIn, address, international pricing link.

Other page wording and the layout still go through the code.

## Part 3: Before switching

- [ ] Shabnam has approved the preview at **https://meidina477.github.io**.
- [ ] **Activate the contact form:** send one test enquiry from the preview's *Free Consultation* page. FormSubmit emails **admin@shabnamlee.com** an activation link. Click it, then send a second test and check that it arrives.
- [ ] **Back up WordPress:** in Hostinger, go to **hPanel → Websites → shabnamlee.com → Files → Backups** and download a full backup. Keep it for at least a month.
- [ ] **Screenshot the current DNS records** in Hostinger (**Domains → shabnamlee.com → DNS / Nameservers**). This is your undo button.

## Part 4: Switch day (choose a quiet time, such as an evening or a weekend)

1. [ ] In the repository on GitHub, go to **Settings → Secrets and variables → Actions → Variables tab → New repository variable**.
   - Name: `PREVIEW`
   - Value: `false`

   ⚠️ This step is essential for SEO. Without it, Google is told not to index the site.
2. [ ] Go to **Settings → Pages → Custom domain**, type `shabnamlee.com` and click **Save**.
3. [ ] In **Hostinger → Domains → shabnamlee.com → DNS records**:
   - **Delete** the existing **A** record(s) whose name is `@`.
   - **Add four A records**, each with name `@`:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
   - **Delete** any existing `www` record. Then **add a CNAME record**: name `www`, pointing to `meidina477.github.io`.
   - ❌ **Do not touch** the MX, TXT, SPF/DKIM or `mail`/`autodiscover` records. These keep admin@shabnamlee.com working.
4. [ ] In GitHub, go to **Actions → Deploy to GitHub Pages → Run workflow**.
5. [ ] **Wait 1–4 hours**, occasionally up to 24. During this time some visitors see the old site and some the new one. That's normal.
6. [ ] Go back to **Settings → Pages**. When it says the DNS check succeeded, tick **Enforce HTTPS**. The box may take up to an hour to become clickable.

## Part 5: After it's live

- [ ] Open **https://shabnamlee.com**, click through a few pages and send a test enquiry.
- [ ] View the page source (right-click → View Page Source) and search for `noindex`. **It must not be there.**
- [ ] Try an old address, for example https://shabnamlee.com/ifs/ and https://shabnamlee.com/35661-2/ (the second one should forward).
- [ ] Open **https://shabnamlee.com/admin/** and sign in, to check that the editor works on the real domain.
- [ ] Go to **Google Search Console → Sitemaps** and submit `https://shabnamlee.com/sitemap-index.xml`.
- [ ] For the next 2–4 weeks, check Search Console's **Pages** report for errors and the **Performance** report for clicks.
- [ ] **A few weeks later:** cancel the WordPress **hosting** if you no longer need it. **Keep the domain and the email.** Check what the email is attached to before cancelling anything.

## If something goes wrong

Put the DNS records back the way they are in your screenshot from Part 3. The old WordPress site comes back within a few hours, and nothing is lost.
