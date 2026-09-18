# Your Name — Portfolio

A minimal, static portfolio site. No build step, no framework — just
`index.html`, `style.css`, and `script.js`. Deploys straight to Vercel.

## File map

```
index.html     page structure and copy (hero, about, contact)
style.css      all styling / design tokens (colors, type, spacing at the top)
script.js      the PROJECTS array — this is your project data — plus small UI logic
vercel.json    minor Vercel config (clean URLs)
```

## 1. Edit your content

**Projects** — open `script.js` and edit the `PROJECTS` array at the top.
Each project needs:

```js
{
  title: "Project Name",
  desc: "One honest sentence about what it does.",
  tags: ["React", "Vercel"],
  url: "https://your-deployed-site.vercel.app",   // the LIVE site
  image: ""  // leave blank for an auto initial, or "images/shot.png"
}
```

Add or remove entries freely — the page re-renders the whole list from
this array, so you don't need to touch the HTML.

**Screenshots (optional)** — create an `images/` folder next to
`index.html`, drop screenshots in (e.g. `project1.png`), and set
`image: "images/project1.png"` on that project. Until then, projects
show a clean two-letter initial instead — no broken image icons.

**Hero, about, contact copy** — edit directly in `index.html`. Look for
the `<!-- HERO -->`, `<!-- ABOUT -->`, and `<!-- CONTACT -->` sections.
Update the email address in the `mailto:` link and the social links.

**Colors / fonts** — the top of `style.css` under `:root { ... }` holds
every color and font as a named variable. Change values there and it
updates the whole site.

## 2. Preview locally

You can just double-click `index.html` to open it in a browser — it
works with no server. For live-reload while editing, any static server
works, e.g.:

```bash
npx serve .
```

## 3. Deploy to Vercel

**Option A — Vercel CLI (fastest)**
```bash
npm install -g vercel
cd portfolio-site
vercel        # first deploy, follow the prompts
vercel --prod # promote to your production URL
```

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Other** (it's static — no build command needed).
4. Deploy. Vercel gives you a URL like `your-portfolio.vercel.app`.

## 4. Link your showcased projects

Once each project you're showcasing is *also* deployed on Vercel (or
anywhere public), copy its live URL into the matching `url` field in
`script.js`. Clicking a project on your portfolio opens that live site
in a new tab — so visitors click around the real thing, not just a
screenshot.

## Notes

- Accessible focus states, reduced-motion support, and mobile layout
  are already handled.
- No dependencies to install — plain HTML/CSS/JS only.
