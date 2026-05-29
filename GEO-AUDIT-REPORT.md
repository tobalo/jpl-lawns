# GEO Audit Report: JP Landscapes LLC

**Audit Date:** April 5, 2026
**URL:** https://jp-lawns.com
**Business Type:** Local Service Business (Landscaping)
**Pages Analyzed:** 1 (single-page application)
**Target Market:** Dallas-Fort Worth, Texas

> Implementation update, May 29, 2026: the site now includes DFW and North Texas on-page geography, phone/email contact details, LocalBusiness/WebSite/WebPage/Breadcrumb/ImageGallery/FAQ JSON-LD, a crawlable HTML fallback for non-JavaScript crawlers, `robots.txt`, `sitemap.xml`, `llms.txt`, and Netlify security/static-file headers.

---

## Executive Summary

**Overall GEO Score: 13/100 (Critical)**

JP Landscapes has a visually appealing website with strong before/after project photography, but it is **effectively invisible to AI systems and severely impaired for search engines**. Three foundational problems suppress every metric simultaneously:

1. **100% client-side rendered SPA** — AI crawlers see an empty `<div id="root"></div>` with zero content
2. **Zero geographic signals** — "Dallas," "Fort Worth," "DFW," and "Texas" appear nowhere on the site
3. **No structured data, no robots.txt, no sitemap** — search engines and AI have no machine-readable signals

The site currently functions as a digital business card that can only be found by people who already know the URL. It will not appear in any AI-generated responses for DFW landscaping queries, and is unlikely to rank in Google search results for any local landscaping terms.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 5/100 | 25% | 1.25 |
| Brand Authority | 15/100 | 20% | 3.00 |
| Content E-E-A-T | 19/100 | 20% | 3.80 |
| Technical GEO | 22/100 | 15% | 3.30 |
| Schema & Structured Data | 0/100 | 10% | 0.00 |
| Platform Optimization | 12/100 | 10% | 1.20 |
| **Overall GEO Score** | | | **12.55 → 13/100** |

### AI Platform Readiness

| Platform | Score | Status |
|---|---|---|
| Google AI Overviews | 11/100 | Critical |
| ChatGPT Web Search | 9/100 | Critical |
| Perplexity AI | 8/100 | Critical |
| Google Gemini | 10/100 | Critical |
| Bing Copilot | 14/100 | Critical |

---

## Critical Issues (Fix Immediately)

### 1. SPA Renders Empty Page for All AI Crawlers
**Severity:** CRITICAL — Blocks all GEO and most SEO
**Files:** `index.html`, `src/main.tsx`, `vite.config.ts`

The production HTML body contains only `<div id="root"></div>`. GPTBot, ClaudeBot, PerplexityBot, and most crawlers do not execute JavaScript. They see **zero content**. Even Google's JS rendering is delayed by days/weeks.

**Fix:** Migrate to a framework with static site generation (Astro recommended, or Next.js with `output: 'export'`), OR add `vite-plugin-ssr`/`vite-ssg` for pre-rendering at build time. The goal: the production HTML must contain the full text content.

### 2. Zero Geographic/Location Signals
**Severity:** CRITICAL — Cannot rank for any local query
**Files:** All components

A comprehensive search confirms that "Dallas," "Fort Worth," "DFW," "Texas," "TX," and every DFW suburb name appear **nowhere** in the entire codebase. For a local service business, this is disqualifying. No AI system or search engine can associate this site with the DFW market.

**Fix:** Add "Dallas-Fort Worth" to: title tag, meta description, H1, About section, services, footer. Add specific city names where the business operates.

### 3. No Phone Number on Website
**Severity:** CRITICAL — Breaks trust for local service business
**Files:** `src/components/Contact.tsx`

Only an email and Instagram are displayed. No click-to-call capability. For a landscaping company, customers expect to call. This is a major trust deficit and prevents NAP (Name, Address, Phone) consistency.

**Fix:** Add phone number prominently in header/nav, contact section, and footer.

### 4. No Physical Address or Service Area
**Severity:** CRITICAL — Cannot qualify for local map pack
**Files:** `src/components/Contact.tsx`, `src/components/Footer.tsx`

No street address, city, state, or service area defined anywhere. The site gives no indication where this business operates.

**Fix:** Add at minimum "Serving the Dallas-Fort Worth Metroplex" with specific cities/neighborhoods listed.

### 5. No Structured Data / JSON-LD Schema
**Severity:** CRITICAL — Invisible to structured data consumers
**Files:** `index.html`

Zero schema markup of any kind. No LocalBusiness, no Organization, no Service, no FAQ, no sameAs. AI models cannot identify this as a landscaping business entity.

**Fix:** Add `LandscapingBusiness` JSON-LD schema to `index.html` `<head>` with complete business data, services, and sameAs links.

---

## High Priority Issues

### 6. No robots.txt
**Files:** `public/` (file does not exist)

No crawl directives for any bot. Missing opportunity to explicitly allow AI crawlers and link to sitemap.

**Fix:** Create `public/robots.txt` with explicit permissions for GPTBot, ClaudeBot, PerplexityBot, and a `Sitemap:` reference.

### 7. No sitemap.xml
**Files:** `public/` (file does not exist)

Search engines have no sitemap to discover pages or assess freshness.

**Fix:** Create `public/sitemap.xml` with the homepage URL and `lastmod` date.

### 8. No llms.txt
**Files:** `public/` (file does not exist)

AI systems like Perplexity check for this file as a machine-readable business summary.

**Fix:** Create `public/llms.txt` with structured business information.

### 9. No Open Graph or Twitter Card Meta Tags
**Files:** `index.html`

When shared on social media, the link preview shows no image, no description. This loses social sharing value and AI systems that use OG tags for context.

**Fix:** Add complete OG and Twitter Card meta tags to `index.html`.

### 10. No Canonical URL
**Files:** `index.html`

Combined with the SPA catch-all redirect (`/* /index.html 200`), every possible URL returns identical content with no canonical. This creates massive duplicate content signals.

**Fix:** Add `<link rel="canonical" href="https://jp-lawns.com/" />` to `index.html`.

### 11. No Customer Reviews or Testimonials
**Files:** None (feature doesn't exist)

Zero social proof. Competitors like Gecko Green display 5,295 reviews with a 4.8 rating in schema markup. JP Landscapes has none.

**Fix:** Collect client testimonials with names, project types, and locations. Display on site and add review schema.

### 12. No Team/Owner Identity
**Files:** `src/components/About.tsx`

No person is named anywhere on the site. No founder bio, no credentials, no headshots. The About section uses a generic Unsplash stock photo. AI systems strongly prefer content with identifiable human experts.

**Fix:** Add owner name, bio, certifications, and actual team photos.

### 13. No Security Headers
**Files:** No `_headers` file or `netlify.toml` exists

No HSTS, CSP, X-Frame-Options, or other security headers configured. Only HTTPS (Netlify default).

**Fix:** Create `public/_headers` with security headers.

---

## Medium Priority Issues

### 14. Grammar Error in Primary CTA
**File:** `src/components/Hero.tsx:27`
"Get **a** Estimate Today" → "Get **an** Estimate Today"

### 15. Factual Inconsistency: Years in Business
**File:** `src/components/About.tsx:7-8`
Claims "7+ years experience" but also "since 2016" — by 2026 that's ~10 years. Stats need updating.

### 16. Thin Service Descriptions
**File:** `src/components/Services.tsx`
Each service has only one generic sentence (8-12 words). No technical depth, no regional specifics, no process details.

### 17. Generic/AI-Sounding Content
All body text uses generic marketing phrases ("Transform your outdoor space into a stunning sanctuary," "passion for excellence"). No unique voice, no specifics, no authorial perspective.

### 18. External Image Hotlinking
**Files:** `src/components/Hero.tsx:8`, `src/components/About.tsx:53`
Two Unsplash images hotlinked. Creates third-party dependency and potential ToS issues. Self-host these images.

### 19. No Image Dimensions
No `<img>` tag in the codebase has `width`/`height` attributes, creating CLS (Cumulative Layout Shift) risk.

### 20. Poor LCP Pattern
Hero background image loaded via CSS `background-image` in a JS-rendered component — worst-case LCP chain.

### 21. SPA Catch-All Returns 200 for All URLs
**File:** `public/_redirects`
`/* /index.html 200` means `/literally-anything` returns 200 OK. No 404 handling.

---

## Low Priority Issues

### 22. No Privacy Policy (contact form collects PII)
### 23. No favicon file (inline SVG data URI only)
### 24. No `srcset`/`sizes` on images (mobile downloads full-res)
### 25. Domain `jp-lawns.com` doesn't match business name "JP Landscapes"
### 26. No code splitting in Vite config (single 273KB JS bundle)

---

## Category Deep Dives

### AI Citability (5/100)

AI systems select sources to cite based on content depth, specificity, and extractable facts. This site provides almost nothing an AI would quote:

- **Extractable facts:** Only "since 2016" and "500+ projects" — both unverified
- **Unique insights:** None. Every statement is generic enough to apply to any landscaper
- **Quotable content:** Zero expert quotes, methodology explanations, or unique perspectives
- **Content depth:** No topic has more than 2 sentences
- **Question-answering content:** No FAQ, no how-to, no educational content

An AI asked "What landscaping services are available in Dallas?" has zero reason to cite jp-lawns.com.

### Brand Authority (15/100)

**Known online presence:**
- Instagram: @jp_landscapesllc (active)
- Yelp: JP Landscaping, Mansfield (listing likely exists but unverifiable — may belong to competitor)
- Nextdoor: "J.P Landscape", Fort Worth — **2-star rating, 2 reviews**, inconsistent name
- Facebook: JP lawn service, Fort Worth (unverifiable)
- Phone found on Nextdoor only: (817) 733-6154

**Missing/Weak:**
- No confirmed Google Business Profile (highest priority gap)
- No BBB listing (searched, confirmed absent)
- No LinkedIn company page
- No YouTube channel
- No Thumbtack profile (searched, confirmed absent)
- No Angi/HomeAdvisor profiles (unverifiable)
- No Wikipedia/Wikidata entity
- **Brand name confusion:** jplandscaping350.com ("JP LAND$CAPING") operates in Mansfield, TX with a nearly identical name, same market — HIGH confusion risk
- **NAP inconsistency:** Business name varies across platforms ("JP Landscapes, LLC" on website vs "J.P Landscape" on Nextdoor vs "JP Landscaping" on Yelp). No phone or address on website makes cross-referencing impossible

### Content E-E-A-T (19/100)

| Dimension | Score | Key Issues |
|---|---|---|
| Experience | 8/25 | Before/after photos are strong but no project narratives, timelines, or client outcomes |
| Expertise | 4/25 | No named individuals, no credentials, one-sentence service descriptions |
| Authoritativeness | 4/25 | No external citations, no awards, no industry memberships, stock photo in About |
| Trustworthiness | 6/25 | No phone, no address, no reviews, no privacy policy, grammar error in CTA |

**Total word count:** ~380 words of body text across the entire site. Competitors average 3,000+ words per city page.

### Technical GEO (22/100)

| Category | Score | Status |
|---|---|---|
| Server-Side Rendering | 5/100 | CRITICAL — empty HTML body |
| Meta Tags & Indexability | 20/100 | Title + description present; canonical, OG, Twitter missing |
| Crawlability | 10/100 | No robots.txt, no sitemap, SPA catch-all |
| Security Headers | 30/100 | HTTPS only (Netlify default) |
| Core Web Vitals Risk | 40/100 | High LCP/CLS risk |
| Mobile Optimization | 60/100 | Responsive Tailwind, but no srcset |
| URL Structure | 55/100 | Clean domain but single-page architecture |

### Schema & Structured Data (0/100)

**Zero schema markup exists.** No JSON-LD, no Microdata, no RDFa. The complete ready-to-implement schema package is provided in the Schema Audit appendix.

### Platform Optimization (12/100)

**Average across all 5 AI platforms: 12/100.** The three foundational problems (CSR, no geo, no schema) suppress every platform score simultaneously.

---

## Competitive Landscape Summary

JP Landscapes is competing in a market where top players have sophisticated SEO:

| Competitor | Schema Types | City Pages | Reviews | Blog |
|---|---|---|---|---|
| **Empire Landscaping** | 4 types (LocalBusiness, WebPage, Org, Breadcrumb) | 18 cities | Named testimonials with city attribution | Active, location-tagged |
| **Gecko Green** | Full LocalBusiness + AggregateRating | 23+ cities (by county) | 5,295 reviews, 4.8 stars | Active, seasonal content |
| **LawnStarter** | LocalBusiness + 20 Review entries | 60+ city pages | 3M+ platform reviews | Dense, 3,000+ words/page |
| **Timberline** | WebPage, Org, Breadcrumb | Dallas only | BBB, "Three Best Rated" | 3 posts (sparse) |
| **JP Landscapes** | **None** | **None** | **None** | **None** |

**Competitive opportunity:** JP Landscapes has genuine differentiators (HOA/community work like White Stone Heights, family-owned heritage, real project photography) that competitors cannot replicate. The problem is purely infrastructure — these strengths are invisible to search engines and AI.

---

## Quick Wins (Implement This Week)

1. **Fix grammar:** "Get a Estimate" → "Get an Estimate" in `Hero.tsx:27`
2. **Add geographic keywords** to title, meta description, and H1 (5 minutes of edits)
3. **Create `public/robots.txt`** allowing all crawlers with sitemap reference
4. **Create `public/sitemap.xml`** with homepage URL
5. **Add JSON-LD schema** to `index.html` `<head>` — LandscapingBusiness with services and sameAs
6. **Add Open Graph + Twitter Card meta tags** to `index.html`
7. **Add canonical URL** `<link rel="canonical" href="https://jp-lawns.com/" />`
8. **Create `public/llms.txt`** with business summary
9. **Create `public/_headers`** with security headers
10. **Update "7+ years"** to reflect actual years since 2016 (~10 years)

---

## 30-Day Action Plan

### Week 1: Foundation (Crawlability + Structured Data)
- [ ] Add all meta tags, OG tags, canonical to `index.html`
- [ ] Add LandscapingBusiness + Service JSON-LD schema to `index.html`
- [ ] Create `robots.txt`, `sitemap.xml`, `llms.txt`
- [ ] Create `_headers` file with security headers
- [ ] Fix grammar error and years inconsistency
- [ ] Add "Dallas-Fort Worth, TX" to title, description, H1, About, Footer
- [ ] Add phone number to Contact section and Footer
- [ ] Add "Serving the DFW Metroplex" service area text
- [ ] Self-host the two Unsplash images

### Week 2: Content Depth
- [ ] Expand each service description from 1 sentence to 3-5 paragraphs with DFW-specific details
- [ ] Add owner/founder name, bio, credentials, and real photo to About section
- [ ] Replace Unsplash stock photo with actual team photo
- [ ] Add 5-10 customer testimonials with names, project types, and city locations
- [ ] Add a visible FAQ section with 8-10 questions matching common search queries
- [ ] Add FAQPage schema matching the visible FAQ content
- [ ] Expand White Stone Heights into a proper case study with process details

### Week 3: Platform Presence
- [ ] Create/claim Google Business Profile with complete info + portfolio photos
- [ ] Claim and populate Yelp business listing with consistent NAP
- [ ] Create LinkedIn company page
- [ ] Standardize business name across all platforms ("JP Landscapes LLC")
- [ ] Add all profile URLs to schema `sameAs` array
- [ ] Request reviews from recent clients on Google and Yelp

### Week 4: Architecture Migration (Start)
- [ ] Evaluate migration path: Astro (recommended), Next.js, or Vite SSG
- [ ] Set up new project with SSR/SSG producing pre-rendered HTML
- [ ] Port existing React components to new framework
- [ ] Verify production HTML contains full text content (not empty div)
- [ ] Add individual route pages: `/services`, `/projects`, `/about`, `/contact`
- [ ] Create first 3 city-specific service area pages (e.g., `/landscaping-dallas-tx`)

---

## Appendix: Recommended File Additions

### public/robots.txt
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://jp-lawns.com/sitemap.xml
```

### public/sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/2000/01/sitemap/09">
  <url>
    <loc>https://jp-lawns.com/</loc>
    <lastmod>2026-04-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### public/llms.txt
```
# JP Landscapes LLC

## About
JP Landscapes LLC is a family-owned professional landscaping company serving the Dallas-Fort Worth metroplex in Texas since 2016. Three generations of expertise with over 500 projects completed and a team of 10+ certified professionals.

## Services
- Landscape Design: Custom design solutions for residential and commercial properties
- Garden Maintenance: Year-round lawn care, mowing, edging, pruning, fertilization
- Planting Services: Expert plant selection suited to North Texas climate
- Hardscaping: Patios, walkways, retaining walls, outdoor kitchens
- Irrigation Systems: Design, installation, and repair of sprinkler and drip systems
- Lighting Design: Outdoor pathway, accent, security, and ambient lighting

## Service Area
Dallas-Fort Worth Metroplex, Texas — including Dallas, Fort Worth, Arlington, Plano, Frisco, McKinney, Allen, Prosper, Southlake, Flower Mound, Keller, and surrounding communities.

## Contact
- Website: https://jp-lawns.com
- Email: jonparker@jp-lawns.com
- Instagram: https://www.instagram.com/jp_landscapesllc/

## Notable Projects
- White Stone Heights: Complete landscape renovation of subdivision entrance signs, roundabout planters, and median islands
- Residential transformations including patio extensions, backyard renovations, and outdoor living spaces
```

### public/_headers
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| https://jp-lawns.com/ | JP Landscapes \| Professional Expert Landscaping Services | 26 issues (5 critical, 8 high, 8 medium, 5 low) |

---

*Report generated by GEO Audit System — April 5, 2026*
*Detailed sub-reports: SEO-COMPETITIVE-ANALYSIS.md (competitive landscape)*
