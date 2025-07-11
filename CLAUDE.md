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
│   ├── images/          # Static images (before/after, misc photos)
│   └── _redirects       # Netlify routing configuration
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── InstagramFeed.tsx
│   │   └── Services.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles and Tailwind imports
│   └── vite-env.d.ts    # TypeScript declarations for Vite
├── Configuration Files
│   ├── vite.config.ts   # Vite configuration
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── tsconfig.json    # TypeScript configuration
│   ├── eslint.config.js # ESLint configuration
│   └── postcss.config.js # PostCSS configuration for Tailwind
└── index.html           # HTML entry point with Netlify form setup
```

### Component Architecture

The application follows a simple component-based architecture:

1. **App.tsx**: Root component that orchestrates the single-page layout
2. **Page Sections**: Each major section is a separate component
   - Hero: Landing section with call-to-action
   - Services: Service offerings display
   - InstagramFeed: Social media integration
   - About: Company information
   - Contact: Contact form with Netlify integration
   - Footer: Site footer

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

### Deployment

- **Platform**: Netlify
- **Forms**: Native Netlify form handling (configured in index.html)
- **Routing**: SPA routing handled via _redirects file
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## Development Guidelines

1. **Component Creation**: Place new components in `src/components/`
2. **Styling**: Use Tailwind CSS utility classes for styling
3. **Type Safety**: Always define TypeScript interfaces for props
4. **Images**: Store static images in `public/images/`
5. **Form Changes**: Update both the React component and hidden HTML form for Netlify

## Common Tasks

### Adding a New Section
1. Create component in `src/components/`
2. Import and add to `App.tsx`
3. Style with Tailwind classes

### Modifying Contact Form
1. Update `ContactForm.tsx` component
2. Update hidden form in `index.html` to match field names
3. Test form submission on Netlify

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