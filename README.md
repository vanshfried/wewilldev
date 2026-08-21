# WeWillDev — website

Static site built with plain HTML, CSS and vanilla JS. No build step required.

## Structure

```
/index.html                              Homepage
/services/index.html                     Services overview
/services/web-development/index.html
/services/mobile-app-development/index.html
/services/ai-automation/index.html
/services/seo/index.html
/work/index.html
/process/index.html
/about/index.html
/contact/index.html
/404.html

/assets/css/base.css                     Design tokens, reset, typography
/assets/css/layout.css                   Containers, grid, section rhythm
/assets/css/components.css               Header, footer, buttons, cards, forms

/assets/js/components.js                 Injects shared header + footer into every page
/assets/js/main.js                       Reveal-on-scroll + contact form handling

/assets/images/*.svg                     Placeholder art (see below)

robots.txt, sitemap.xml, .htaccess, netlify.toml, vercel.json
```

## Clean URLs (no `.html` in the address bar)

Every page lives at `folder/index.html` (e.g. `/services/web-development/index.html`), which
every static host (Netlify, Vercel, GitHub Pages, Apache, Nginx) serves automatically at the
clean path `/services/web-development/` — no rewrite rules required. `.htaccess`,
`netlify.toml` and `vercel.json` are included as a safety net for Apache/Netlify/Vercel deploys.

## Design system

- **Color** — warm cream background (`#F3F2ED`), near-black ink (`#171715`), muted olive accent (`#91A83D`).
- **Type** — Space Grotesk (display/headlines), DM Sans (body), JetBrains Mono (labels, tags, index numbers).
- **Signature element** — the "build tag" chip and mono index lines (`Services / 01–05`) that run through every page, echoing a spec-sheet/blueprint feel appropriate for a dev studio, instead of generic numbered cards.
- All tokens live in `assets/css/base.css` — change color/type once, it updates everywhere.

## Placeholder images

The brief calls for real photography/product shots (`hero.webp`, `web-development.webp`, etc.)
generated separately. Since none exist yet, this build ships **art-directed SVG placeholders**
in the same palette and a matching "blueprint" style (`/assets/images/*.svg`), so the layout,
spacing and image-to-text relationships are already correct.

To swap in real photography later: generate/export the final images as `.webp`, drop them into
`/assets/images/` with the same names used in each page's `<img src="...">`, and update the
extension from `.svg` to `.webp` in each `src` attribute (a simple find-and-replace per file).

## Local preview

Because pages use root-relative paths (`/assets/...`), open with a local server rather than
double-clicking the file:

```
cd wewilldev
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
