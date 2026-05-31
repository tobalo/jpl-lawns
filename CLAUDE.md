# JP Landscapes Website - Development Guide

## Project Overview

This is a modern, single-page website for Jon Peter Landscapes LLC, built with React, TypeScript, and Vite. The site showcases landscaping services with a clean, professional design.

## Tech Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Image Carousel**: Swiper 11
- **Linting**: ESLint 9 with TypeScript support
- **Deployment**: Netlify (configured with form handling)

## Common Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## Project Architecture

### Directory Structure

```
website/
├── public/
│   ├── images/          # Residential before/after + misc photos
│   ├── work-images/     # Portfolio + White Stone Heights project photos
│   ├── __forms.html     # Static skeleton for Netlify Forms detection
│   ├── _redirects       # SPA fallback routing (/* -> /index.html 200)
│   ├── _headers         # Security + cache headers
│   ├── robots.txt       # Crawler rules (incl. AI crawlers)
│   ├── sitemap.xml      # Sitemap
│   └── llms.txt         # LLM-facing business summary
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx          # Story + stats + SeedAnimation
│   │   ├── Contact.tsx        # Contact info panel + form
│   │   ├── ContactForm.tsx    # Netlify-wired contact form
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ImageCarousel.tsx  # Static gallery + lazy client-only Swiper
│   │   ├── PortfolioSwiper.tsx # Swiper carousel (lazy, client-only)
│   │   ├── Projects.tsx       # Before/after sliders (keyboard-accessible)
│   │   ├── Reveal.tsx         # Scroll-reveal wrapper (no-JS safe)
│   │   ├── SeedAnimation.tsx  # Animated seed→tree SVG
│   │   ├── ServiceAreas.tsx   # Service regions + FAQ
│   │   └── Services.tsx
│   ├── App.tsx          # Section composition
│   ├── main.tsx         # Client entry (hydrate prerendered HTML / createRoot in dev)
│   ├── entry-server.tsx # Server entry (renderToString) used by prerender.js
│   ├── index.css        # Global styles and Tailwind imports
│   └── vite-env.d.ts    # TypeScript declarations for Vite
├── Configuration Files
│   ├── vite.config.ts   # Vite configuration
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── tsconfig.json    # TypeScript configuration
│   ├── eslint.config.js # ESLint configuration
│   └── postcss.config.js # PostCSS configuration for Tailwind
├── prerender.js         # Inlines rendered HTML into dist/index.html at build
└── index.html           # App shell (#root + <!--app-html-->), SEO meta, JSON-LD
```

### Component Architecture

The application follows a simple component-based architecture:

1. **App.tsx**: Root component that orchestrates the single-page layout
2. **Page Sections** (composed in `App.tsx`, in order): Each major section is a separate component
   - Hero: Landing section with call-to-action
   - Services: Six service offering cards
   - ServiceAreas: DFW service regions + FAQ
   - Projects: Before/after comparison sliders (White Stone Heights + residential)
   - ImageCarousel: Swiper portfolio carousel
   - About: Company story, stats, and animated seed→tree SVG
   - Contact: Contact info panel + Netlify-integrated form
   - Footer: Site footer
3. **Shared helpers**: `Reveal` (IntersectionObserver scroll-reveal) and `SeedAnimation`

### Key Features

1. **Responsive Design**: Mobile-first approach using Tailwind CSS
2. **Form Handling**: Netlify Forms integration for contact submissions
3. **Image Gallery**: Swiper carousel for before/after showcases
4. **Type Safety**: Full TypeScript support with strict typing
5. **Performance**: Vite's fast HMR and optimized production builds

### Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **Component-scoped**: Styles are applied directly in JSX using Tailwind classes
- **Responsive**: Uses Tailwind's responsive prefixes (sm:, md:, lg:, etc.)
- **Color Scheme**: Green-focused palette matching landscaping theme

### Build Configuration

- **Vite**: Fast development server with HMR
- **React Plugin**: Configured for JSX transformation and Fast Refresh
- **TypeScript**: Multiple tsconfig files for app and node environments
- **PostCSS**: Processes Tailwind CSS with autoprefixer

### Rendering & Prerendering (SSG)

The app is prerendered to static HTML at build time so `dist/index.html` ships
the real, fully-styled markup (no flash of unstyled content; works for crawlers
and no-JS visitors). The client then hydrates it.

- **`build` pipeline**: `tsc -b && vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node prerender.js`
- **`prerender.js`** renders `<App/>` via `entry-server.tsx`'s `renderToString` and
  inlines the result into the `<!--app-html-->` placeholder in `index.html`.
- **`main.tsx`** hydrates when `#root` has prerendered children (prod) and uses
  `createRoot` when it only holds the comment placeholder (dev).
- **SSR-safety rules** (keep the server render crash-free and hydration-stable):
  - No `window`/`document`/DOM access during render. Swiper is isolated in
    `PortfolioSwiper.tsx` and loaded with `lazy()` only after mount, so it never
    runs server-side; `ImageCarousel` renders a static `<StaticGallery>` until then.
  - `Reveal` renders **visible by default**; the hidden→fade-in animation is gated
    behind `html.js` (set by an inline script in `index.html`) + IntersectionObserver,
    with a timeout safety net so content is never stuck hidden. So no-JS visitors and
    the prerendered HTML always show content.
- **`dist-ssr/`** is a throwaway SSR bundle (git-ignored). `*.tsbuildinfo` and
  `dist-ssr` are ignored; only `dist/` is published.

### Deployment

- **Platform**: Netlify
- **Forms**: Native Netlify form handling (detected via `public/__forms.html`)
- **Routing**: SPA routing handled via `public/_redirects`
- **Headers**: Security + cache headers via `public/_headers`
- **Build Command**: `npm run build` (typecheck + client build + SSR build + prerender; type errors fail the deploy)
- **Publish Directory**: `dist`
- **Node Version**: pinned to `22` in `netlify.toml`

## Development Guidelines

1. **Component Creation**: Place new components in `src/components/`
2. **Styling**: Use Tailwind CSS utility classes for styling
3. **Type Safety**: Always define TypeScript interfaces for props
4. **Images**: Store static images in `public/images/`
5. **Form Changes**: Keep `ContactForm.tsx` and the `public/__forms.html` skeleton in sync (matching field names)

## Common Tasks

### Adding a New Section
1. Create component in `src/components/`
2. Import and add to `App.tsx`
3. Style with Tailwind classes

### Modifying Contact Form
1. Update `ContactForm.tsx` component (visible inputs + validation)
2. Update the hidden skeleton in `public/__forms.html` to match field names exactly
3. The form posts via AJAX to `/__forms.html` (a real static file), so Netlify's
   form handler always intercepts it — never change this to `/`
4. Test submission on a Netlify deploy; submissions appear under the Forms tab

### Updating Images
1. Add images to `public/images/`
2. Reference using absolute paths from root (e.g., `/images/filename.jpg`)

### Performance Optimization
- Images should be optimized before adding
- Use lazy loading for below-fold content
- Leverage Vite's code splitting for large dependencies

## Notes

- No test suite currently configured
- No state management library (using React's built-in state)
- No routing library (single-page application)
- ESLint configured with React hooks and refresh plugins