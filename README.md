# JP Landscapes — Website

Marketing site for **Jon Peter Landscapes, LLC** (JP Landscapes), a family-owned
landscaping company serving the Dallas–Fort Worth metroplex and North Texas.

A single-page React application built with Vite, TypeScript, and Tailwind CSS,
deployed on **Netlify** with native Netlify Forms for the contact form.

🌐 Production: <https://jp-lawns.com/>

## Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | React 18 + TypeScript                   |
| Build tool     | Vite 5                                  |
| Styling        | Tailwind CSS 3 (custom earthy palette)  |
| Icons          | lucide-react                            |
| Carousel       | Swiper 11                               |
| Hosting        | Netlify (static publish of `dist/`)     |
| Forms          | Netlify Forms (no backend)              |

## Getting started

```bash
npm install        # install dependencies
npm run dev        # Vite dev server  -> http://localhost:5173
npm run build      # type-check (tsc) + production build into dist/
npm run preview    # preview the production build locally
npm run lint       # ESLint
```

To exercise the full Netlify environment locally (redirects, headers, and form
handling) use the Netlify CLI:

```bash
npx netlify dev    # Netlify proxy -> http://localhost:8888
```

`npm run build` runs **typecheck → client build → SSR build → prerender**
(`tsc -b && vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node prerender.js`),
so **type errors fail the build** (and the Netlify deploy). Keep the type-check green.

## Rendering (prerendered SSG)

The app is **prerendered to static HTML at build time** — `dist/index.html` ships
the real, fully-styled markup, then the client hydrates it. This means: no flash
of unstyled content, full content for crawlers, and the page works even with
JavaScript disabled.

- `src/entry-server.tsx` renders `<App/>` with `renderToString`; `prerender.js`
  inlines the result into the `<!--app-html-->` placeholder in `index.html`.
- `src/main.tsx` hydrates the prerendered markup in production, and uses
  `createRoot` in dev (where `#root` holds only a comment).
- **SSR-safety:** nothing touches `window`/DOM during render. Swiper lives in
  `PortfolioSwiper.tsx` and is `lazy()`-loaded only after mount (a static gallery
  shows until then), and `Reveal` is visible by default — its scroll animation is
  gated behind `html.js` so no-JS visitors always see content.

> When editing, never read `window`/`document` during render (only inside effects),
> or the prerender step will crash. Keep server and client first render identical
> to avoid hydration mismatches.

## Project structure

```
website/
├── index.html                 # App shell (#root + <!--app-html-->), SEO meta, JSON-LD
├── prerender.js               # Inlines rendered HTML into dist/index.html at build
├── netlify.toml               # Build settings (command, publish dir, Node version)
├── public/
│   ├── __forms.html           # Static skeleton for Netlify Forms detection
│   ├── _redirects             # SPA fallback (/* -> /index.html 200)
│   ├── _headers               # Security + cache headers
│   ├── robots.txt             # Crawler rules (incl. AI crawlers)
│   ├── sitemap.xml            # Sitemap
│   ├── llms.txt               # LLM-facing business summary
│   ├── social-card.jpg        # 1200x630 Open Graph / Twitter share image
│   ├── images/                # Residential before/after + misc photos
│   └── work-images/           # Portfolio + White Stone Heights project photos
└── src/
    ├── main.tsx               # Client entry (hydrate in prod / createRoot in dev)
    ├── entry-server.tsx       # Server entry (renderToString) for prerender.js
    ├── App.tsx                # Section composition
    ├── index.css              # Tailwind layers + animations + reveal/.js gate
    └── components/
        ├── Hero.tsx           # Landing hero + CTA
        ├── Services.tsx       # Six service cards
        ├── ServiceAreas.tsx   # DFW service regions + FAQ
        ├── Projects.tsx       # Before/after sliders (keyboard-accessible)
        ├── ImageCarousel.tsx  # Static gallery + lazy client-only Swiper
        ├── PortfolioSwiper.tsx # Swiper carousel (lazy, client-only)
        ├── About.tsx          # Story + stats + SeedAnimation
        ├── Contact.tsx        # Contact info panel + form
        ├── ContactForm.tsx    # Netlify-wired contact form
        ├── Reveal.tsx         # Scroll-reveal wrapper (visible without JS)
        └── SeedAnimation.tsx  # Animated seed→tree SVG
```

## Netlify Forms

The contact form uses Netlify Forms with **no backend**. Because the form is
rendered by React, Netlify's build-time parser cannot see it in the SPA bundle,
so detection relies on a dedicated static skeleton:

- `public/__forms.html` contains a hidden `<form name="contact">` listing every
  field. Netlify scans this file at build time and registers the `contact` form.
- `src/components/ContactForm.tsx` submits via `fetch` to **`/__forms.html`**
  (an `x-www-form-urlencoded` POST including `form-name=contact`).

Posting to `/__forms.html` — a real static file — means the SPA catch-all
redirect in `_redirects` never shadows the POST, so Netlify's form handler
always receives the submission.

**If you change form fields**, update all three in lockstep:

1. The visible inputs in `ContactForm.tsx`
2. The hidden skeleton in `public/__forms.html`
3. (If validated) the validation logic in `ContactForm.tsx`

Field names must match exactly, or Netlify rejects unknown fields.

Submissions appear in the Netlify dashboard under **Forms**. Configure email/Slack
notifications there. Form detection must be enabled for the site in the Netlify UI.

## Deployment

Connected to Netlify via Git — every push to `main` triggers a build.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** pinned to `22` in `netlify.toml`

Routing (`_redirects`), headers (`_headers`), and form detection (`__forms.html`)
are all part of `public/` and ship automatically.

## Notes

- Single-page app — no router, no state-management library, no backend.
- `.DS_Store` and `.netlify/` are git-ignored and never deployed.
- Managed by [Eden Advisory](https://eden.yeetum.com).
