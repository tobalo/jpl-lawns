# DFW Landscaping SEO Competitive Analysis
## JP Landscapes (jp-lawns.com) -- April 2026

> Implementation update, May 29, 2026: the site now includes Dallas-Fort Worth and North Texas title/meta targeting, LocalBusiness/WebSite/WebPage/Breadcrumb/ImageGallery/FAQ structured data, click-to-call phone and updated email, visible DFW service-area content, city-specific on-page text, image alt text improvements, `robots.txt`, `sitemap.xml`, and `llms.txt`.

---

## EXECUTIVE SUMMARY

### Key Findings

1. **JP Landscapes has virtually zero local SEO infrastructure.** The site has no schema markup, no geographic targeting, no service area pages, no blog, no NAP (name, address, phone) data, and a generic meta description that does not mention Dallas, Fort Worth, or any DFW city. This means search engines have almost no signals to rank the site for local queries.

2. **Top DFW competitors dominate through city-specific landing pages and rich schema markup.** Empire Landscaping targets 18+ DFW cities with dedicated pages. Gecko Green lists 23+ cities organized by county. LawnStarter has 60+ city-specific URLs. JP Landscapes mentions zero cities.

3. **Review signals are a critical gap.** Gecko Green displays 5,295 reviews with a 4.8 rating embedded in schema. Empire Landscaping includes named testimonials with city attribution. JP Landscapes has no review display and no review schema.

4. **Content marketing is standard practice among top competitors.** Empire, Gecko Green, and Timberline all maintain active blogs with location-specific, seasonal, and educational content. JP Landscapes has no blog content whatsoever.

5. **The current JP Landscapes site is essentially invisible to local search.** As a single-page React application with no server-side rendering, no structured data, no geographic keywords, and no indexable content depth, the site will not rank for any meaningful DFW landscaping queries.

---

## SECTION 1: JP LANDSCAPES CURRENT STATE AUDIT

### What the site currently has:
- Clean, modern single-page React/Vite application
- Title: "JP Landscapes | Professional Expert Landscaping Services"
- Meta description: "JP Landscapes - Professional landscaping services including design, maintenance, planting, hardscaping, irrigation systems, and lighting design."
- Contact form via Netlify
- Instagram link (@jp_landscapesllc)
- Email: jonparker@jp-lawns.com
- Before/after project gallery (White Stone Heights, residential projects)
- Service listings: Landscape Design, Garden Maintenance, Planting, Hardscaping, Irrigation, Lighting

### Critical SEO deficiencies:

| Element | Status | Impact |
|---------|--------|--------|
| Schema/structured data (JSON-LD) | MISSING | Google cannot parse business type, location, services |
| Geographic keywords in title/meta | MISSING | Will not rank for "landscaping [city]" queries |
| Physical address (NAP) | MISSING | Cannot validate for local pack/map results |
| Phone number on site | MISSING | Major trust signal gap, no click-to-call |
| Service area mentions | MISSING | Zero DFW cities mentioned anywhere |
| City-specific landing pages | MISSING | Cannot rank for individual city queries |
| Blog/content section | MISSING | No fresh content, no keyword targeting |
| Google Business Profile link/data | MISSING | No connection to GBP signals |
| Review display/schema | MISSING | No social proof for search engines |
| Open Graph / social meta tags | MISSING | Poor social sharing appearance |
| Sitemap.xml | MISSING | Search engines cannot discover pages |
| robots.txt | MISSING | No crawl guidance |
| H1 tag content | Generic | "Need Professional Expert Landscaping?" -- no location |
| Alt text on images | Generic | "Recent landscape project showcase" -- no location/service specificity |
| Internal linking | MINIMAL | Single-page app, no link equity distribution |
| Page speed (SPA) | CONCERN | Client-side rendered React app; content not available to crawlers without JS execution |

---

## SECTION 2: COMPETITOR ANALYSIS

### Competitor 1: Empire Landscaping (empire-landscaping.com)
**Ranking strength: HIGH**

| Element | Implementation | Quality |
|---------|---------------|---------|
| Title tag | "Empire Landscaping: Enhance Your Property Value" | Good -- clear brand + value prop |
| Meta description | Targets "Plano landscaping services" specifically | Strong local targeting |
| Schema markup | LocalBusiness, WebPage, Organization, BreadcrumbList | Excellent -- multiple schema types |
| City targeting | 18 cities: Allen, Carrollton, Dallas, Fairview, Frisco, Lucas, McKinney, Murphy, Parker, Plano, Prosper, Richardson, Sachse, The Colony, Wylie | Best-in-class for north DFW |
| Service area pages | Dedicated pages per city | Creates multiple ranking opportunities |
| Blog | Active with location-specific posts ("Cottonwood Crossing Entrance Landscaping Allen TX") | Strong content + location signals |
| NAP | Complete: (214) 228-0904, Plano, TX | Consistent across site and schema |
| Reviews | Named testimonials with city attribution (Allen, Parker, Plano) | Adds local relevance to reviews |
| Navigation | Services, Gallery, Blog, Contact -- clear hierarchy | SEO-friendly structure |

**Key takeaway for JP Landscapes:** Empire's model of city-specific pages + blog posts mentioning actual project locations is directly replicable. Their service area (north DFW suburbs) overlaps with likely JP Landscapes territory.

---

### Competitor 2: Gecko Green (geckogreen.com)
**Ranking strength: VERY HIGH**

| Element | Implementation | Quality |
|---------|---------------|---------|
| Title tag | "Professional Lawn Care Services in Dallas / Gecko Green" | Strong keyword + location |
| Schema markup | LocalBusiness with full NAP, AggregateRating, Organization, service area coverage | Industry-leading implementation |
| City targeting | 23+ cities organized by 4 counties (Tarrant, Dallas, Denton, Collin) | Comprehensive DFW coverage |
| City pages | Dedicated URLs: /lawn-care-dallas-tx, /lawn-care-frisco-tx, etc. | Maximum local ranking surface |
| Blog | Active (March-April 2026 posts), educational lawn care content | Fresh, relevant content |
| NAP | 6015 Commerce Dr #400, Irving, TX 75063 / 972-846-4683 | Consistent (minor phone discrepancy noted) |
| Reviews | 5,295 reviews, 4.8/5 stars displayed prominently + embedded in schema | Massive trust signal |
| AggregateRating schema | "4.8 average with 1335 reviews" in JSON-LD | Rich snippet eligible |
| Service structure | Organized by service type AND by county/city | Double indexing opportunity |

**Key takeaway for JP Landscapes:** Gecko Green's county-based organization of service areas is a smart approach for DFW. Their review volume (5,000+) in schema creates powerful rich snippets in search results. JP Landscapes needs to start collecting and displaying reviews immediately.

---

### Competitor 3: Timberline Lawn & Landscape (timberlinelawnandlandscape.com)
**Ranking strength: MODERATE-HIGH**

| Element | Implementation | Quality |
|---------|---------------|---------|
| Title tag | "Landscaping Company / Dallas, TX / Timberline Lawn & Landscape" | Good format: service + city + brand |
| Meta description | "...professional services to the Dallas, TX area. Contact us today for an estimate!" | Clear CTA with location |
| Schema markup | WebPage, Organization, BreadcrumbList | Good but missing LocalBusiness |
| City targeting | Dallas only -- no suburban city targeting | Significant gap |
| Blog | 3 posts (sparse): "Best Flowers to Plant in Dallas", "Average Lawn Care Cost in Dallas" | Relevant but thin |
| NAP | 8780 Park Ln, Dallas, TX 75231 / (214) 557-6975 | Consistent |
| Reviews | Trust badges (BBB, "Three Best Rated") | Third-party validation |
| Service pages | 11 service categories with dedicated pages | Strong service indexing |
| Headings | "Landscaping Company in Dallas, TX", "Dallas' Top-Rated Landscaping Service" | Well-optimized with geo modifiers |

**Key takeaway for JP Landscapes:** Timberline shows that even focusing on just one city (Dallas) with good on-page optimization creates ranking power. Their 11 service subpages is a model JP Landscapes could follow. However, their lack of suburban targeting is a gap JP Landscapes could exploit.

---

### Competitor 4: LawnStarter (lawnstarter.com/dallas-tx-lawn-care)
**Ranking strength: DOMINANT (national platform)**

| Element | Implementation | Quality |
|---------|---------------|---------|
| Title tag | "Dallas, TX Lawn Care Service / Lawn Mowing from $19 / Best of 2026" | Price + location + recency |
| Schema markup | LocalBusiness with hours, AggregateRating (4.86/5, 900 reviews), 20+ Review entries | Extremely comprehensive |
| City targeting | 50+ surrounding cities linked from footer | Massive coverage |
| City pages | 60+ dedicated URLs (/addison-tx-lawn-care, /frisco-tx-lawn-care) | Hub-and-spoke architecture |
| Content depth | 3,000+ words per city page, FAQs, seasonal guides, grass type recommendations | Content-rich landing pages |
| Reviews | 3,177,490+ total platform reviews displayed | Overwhelming social proof |
| Internal linking | Blog resources, service categories, related city pages | Dense internal link network |

**Key takeaway for JP Landscapes:** LawnStarter is a national aggregator -- JP Landscapes cannot compete head-to-head. However, their hub-and-spoke city page model and long-form content approach (3,000+ words with FAQs) is the gold standard that JP Landscapes should emulate at a local scale. Note that LawnStarter's strength is also JP's opportunity: as a local business with actual on-the-ground presence, JP Landscapes can outrank aggregators in the local map pack with proper GBP optimization.

---

### Competitor 5: Southern Botanical (southernbotanical.com)
**Ranking strength: HIGH (established brand)**

| Element | Implementation | Quality |
|---------|---------------|---------|
| Title tag | "Landscape Design Dallas: Landscaping Dallas & Ft. Worth / ... Southern Botanical" | Multi-city in title |
| Geographic targeting | Dallas and Ft. Worth in title | Targets both major cities |
| Brand authority | "Serving Dallas and surrounding areas for over 25 years", notable clients (Klyde Warren Park) | Strong credibility signals |
| Services | Lawn maintenance, irrigation, tree care, outdoor kitchens, emergency weather services | Broad service range |

**Key takeaway:** Including both "Dallas" and "Fort Worth" in the title is a smart dual-city approach that JP Landscapes should consider.

---

### Competitor 6: Complete Landsculpture (completelandsculpture.com)
**Ranking strength: MODERATE**

| Element | Implementation | Quality |
|---------|---------------|---------|
| Title tag | "Luxury Landscaping & Outdoor Living in Dallas / Complete Landsculpture" | Premium positioning |
| City targeting | Dallas only in title | Limited geographic scope |
| Schema markup | Not detected | Gap |
| Reviews | Facebook Pixel present but no review schema | Missed opportunity |

**Key takeaway:** Even established companies have schema gaps. JP Landscapes can leapfrog competitors by implementing comprehensive schema from day one.

---

### Competitor 7: J Bell Services (jbellservices.com)
**Ranking strength: MODERATE**

| Element | Implementation | Quality |
|---------|---------------|---------|
| Title tag | "J Bell Services - Sprinkler Repair & Installation Dallas TX" | Service-specific + location |
| Schema markup | Organization schema with business details | Basic implementation |
| City targeting | Dallas and Fort Worth mentioned; specific office addresses | Dual-location strategy |
| Blog | Present in footer | Content exists but sparse |
| NAP | 12900 Valley Branch Ln #408, Farmers Branch, TX 75234 / 214-960-5692 | Complete and consistent |
| Reviews | Customer testimonials with names, dates, ratings | Good trust signals |

---

## SECTION 3: KEYWORD STRATEGY RECOMMENDATIONS

### Primary Target Keywords (Highest Intent, Highest Value)

These are the keywords that generate direct leads:

| Keyword Pattern | Example | Priority |
|----------------|---------|----------|
| landscaping + [city] | "landscaping Frisco TX" | CRITICAL |
| landscaper near me + [city] | "landscaper near me Fort Worth" | CRITICAL |
| landscape design + [city] | "landscape design Plano" | HIGH |
| lawn care + [city] | "lawn care McKinney TX" | HIGH |
| hardscaping + [city] | "hardscaping Arlington TX" | HIGH |
| irrigation installation + [city] | "irrigation installation Dallas" | HIGH |
| landscape lighting + [city] | "landscape lighting Frisco" | MEDIUM |
| sod installation + [city] | "sod installation Allen TX" | MEDIUM |

### DFW Cities to Target (Prioritized by Market Size and Competition)

**Tier 1 -- Must target (largest populations, highest search volume):**
- Dallas
- Fort Worth
- Arlington
- Plano
- Frisco

**Tier 2 -- High value (affluent suburbs, strong homeowner base):**
- McKinney
- Allen
- Prosper
- Southlake
- Flower Mound
- Keller
- Colleyville

**Tier 3 -- Medium value (growing communities):**
- The Colony
- Little Elm
- Celina
- Wylie
- Murphy
- Sachse
- Richardson
- Carrollton

### Long-Tail Keywords (Blog Content Targets)

| Keyword | Content Type |
|---------|-------------|
| "best time to plant grass in Dallas" | Seasonal guide |
| "how much does landscaping cost in DFW" | Pricing guide |
| "drought tolerant plants for North Texas" | Plant guide |
| "landscape design ideas for Texas heat" | Inspiration gallery |
| "HOA landscaping requirements [city]" | Community-specific guide |
| "before and after landscaping [city] TX" | Project showcase |
| "best landscaping company in [city]" | Service area page |

---

## SECTION 4: SCHEMA MARKUP RECOMMENDATIONS

### Required JSON-LD Implementation

JP Landscapes should implement the following schema types in index.html:

**1. LocalBusiness / LandscapingBusiness Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  "name": "JP Landscapes LLC",
  "url": "https://jp-lawns.com",
  "telephone": "[PHONE NUMBER]",
  "email": "jonparker@jp-lawns.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[STREET ADDRESS]",
    "addressLocality": "[CITY]",
    "addressRegion": "TX",
    "postalCode": "[ZIP]",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[LAT]",
    "longitude": "[LNG]"
  },
  "areaServed": [
    {"@type": "City", "name": "Dallas", "sameAs": "https://en.wikipedia.org/wiki/Dallas"},
    {"@type": "City", "name": "Fort Worth"},
    {"@type": "City", "name": "Frisco"},
    {"@type": "City", "name": "Plano"},
    {"@type": "City", "name": "McKinney"},
    {"@type": "City", "name": "Arlington"},
    {"@type": "City", "name": "Allen"},
    {"@type": "City", "name": "Prosper"}
  ],
  "openingHours": "Mo-Sa 07:00-18:00",
  "priceRange": "$$",
  "image": "https://jp-lawns.com/images/logo.jpg",
  "sameAs": [
    "https://www.instagram.com/jp_landscapesllc/"
  ],
  "foundingDate": "2016",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10
  },
  "description": "Professional landscaping services in the Dallas-Fort Worth metroplex including landscape design, hardscaping, irrigation, planting, and landscape lighting.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Landscaping Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Landscape Design"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Garden Maintenance"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hardscaping"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Irrigation Systems"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Landscape Lighting"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Planting Services"}}
    ]
  }
}
```

**2. AggregateRating Schema (once reviews are collected):**
```json
{
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "XX",
    "bestRating": "5"
  }
}
```

**3. WebPage + BreadcrumbList Schema (for multi-page site):**
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Landscaping Services in Frisco TX | JP Landscapes",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://jp-lawns.com"},
      {"@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://jp-lawns.com/service-areas"},
      {"@type": "ListItem", "position": 3, "name": "Frisco TX", "item": "https://jp-lawns.com/service-areas/frisco-tx"}
    ]
  }
}
```

---

## SECTION 5: CONTENT STRATEGY RECOMMENDATIONS

### Phase 1: Foundation (Immediate -- Weeks 1-2)

1. **Add NAP data to the site.** Physical address (or at minimum service area cities), phone number with click-to-call, and business hours. This is non-negotiable for local SEO.

2. **Update title tag** to: "JP Landscapes | Landscaping Services in Dallas-Fort Worth TX"

3. **Update meta description** to: "JP Landscapes LLC provides professional landscaping, hardscaping, irrigation, and landscape lighting services across the Dallas-Fort Worth metroplex. Serving Frisco, Plano, McKinney, Arlington and surrounding DFW cities. Free estimates."

4. **Add JSON-LD schema** (LandscapingBusiness type) to index.html.

5. **Add Open Graph meta tags** for social sharing.

6. **Create and submit sitemap.xml** and **robots.txt**.

7. **Update H1 tag** to include location: "Professional Landscaping Services in Dallas-Fort Worth"

8. **Add a "Service Areas" section** to the single-page site listing all cities served.

9. **Add a phone number** prominently in the header and footer.

### Phase 2: Content Expansion (Weeks 3-6)

10. **Transition from single-page to multi-page architecture** using React Router (or migrate to a framework with SSR like Next.js or Astro for better SEO). This is a critical architectural decision -- client-side rendered React apps are inherently weaker for SEO than server-rendered pages.

11. **Create individual service pages:**
    - /services/landscape-design
    - /services/hardscaping
    - /services/irrigation-systems
    - /services/landscape-lighting
    - /services/garden-maintenance
    - /services/planting-services

12. **Create city-specific service area pages** (start with Tier 1 cities):
    - /service-areas/dallas-tx
    - /service-areas/fort-worth-tx
    - /service-areas/frisco-tx
    - /service-areas/plano-tx
    - /service-areas/arlington-tx
    - /service-areas/mckinney-tx

    Each page should include: 800-1,500 words of unique content, city-specific project photos if available, mention of nearby neighborhoods/subdivisions, the city name in H1/H2/title/meta, internal links to relevant service pages, and a CTA to the contact form.

13. **Start a blog** with location-targeted content:
    - "Best Plants for [City] TX Landscapes"
    - "How Much Does Landscaping Cost in [City]?"
    - "Top 5 Landscaping Trends in DFW for 2026"
    - "[City] HOA Landscaping Requirements: What You Need to Know"
    - Project spotlight posts (e.g., "White Stone Heights Community Landscape Renovation -- [City], TX")

### Phase 3: Authority Building (Months 2-6)

14. **Google Business Profile:** Create/optimize a GBP listing with consistent NAP, service categories, photos, and active review management. This is the single most impactful action for local pack visibility.

15. **Review generation strategy:** Implement a systematic process to request Google reviews after every completed project. Aim for 50+ reviews within 6 months. Display reviews on the website with schema markup.

16. **Local citations:** Register on key directories with consistent NAP:
    - Google Business Profile
    - Yelp
    - Thumbtack (Torres Landscaping has 256 reviews here -- JP Landscapes needs presence)
    - Angi (formerly Angie's List)
    - HomeAdvisor
    - BBB
    - Houzz
    - Expertise.com
    - Facebook Business Page

17. **Local link building:** Seek backlinks from:
    - HOA community websites (White Stone Heights is a perfect starting point)
    - Local business associations / chambers of commerce
    - Supplier/partner websites
    - Local news/media for project features

---

## SECTION 6: TECHNICAL SEO PRIORITIES

### Critical Technical Issues

1. **Client-Side Rendering (CSR) Problem:**
   The site is a React SPA rendered entirely in the browser. While Google can execute JavaScript, it is a second-pass rendering that is slower and less reliable than server-side rendered content. For a local business competing against server-rendered WordPress sites (which most competitors use), this is a disadvantage.

   **Recommended solutions (in order of preference):**
   - Migrate to Astro (maintains component approach, outputs static HTML, supports React islands)
   - Migrate to Next.js with Static Site Generation (SSG)
   - Add prerendering via vite-plugin-prerender or similar
   - At minimum: use react-snap or prerender.io to generate static HTML snapshots

2. **No sitemap.xml or robots.txt:**
   Add both immediately. The sitemap should list all pages once the site becomes multi-page.

3. **No canonical tags:**
   Add `<link rel="canonical">` to prevent duplicate content issues.

4. **No hreflang or language tags:**
   Consider adding if serving Spanish-speaking clients in DFW.

5. **Image optimization:**
   Current images use .webp (good). Alt text needs to include location keywords (e.g., "Landscape renovation project in Frisco TX" instead of "Recent landscape project showcase").

---

## SECTION 7: COMPETITIVE ADVANTAGES JP LANDSCAPES CAN EXPLOIT

1. **Before/After Gallery:** The existing before/after slider for White Stone Heights is excellent content that most competitors lack. Expand this with city-specific project pages.

2. **Community Project Experience:** The White Stone Heights HOA project is a differentiator. Many landscaping companies focus solely on residential. Commercial/HOA work builds authority and can generate community-level backlinks.

3. **Family-Owned Positioning:** The "three generations" messaging is a trust signal that national aggregators like LawnStarter cannot match.

4. **Underserved Suburban Cities:** Empire focuses on Plano/Allen/McKinney north. Gecko Green is in Irving. If JP Landscapes is based in a DFW suburb not already dominated, that is a geographic gap to own.

5. **Schema Leapfrogging:** Many established DFW competitors (Complete Landsculpture, Timberline) have incomplete or missing schema. Implementing comprehensive schema immediately gives JP Landscapes a technical edge.

---

## SECTION 8: PRIORITIZED ACTION PLAN

### Immediate (This Week)
- [ ] Add phone number to the website (header + footer + schema)
- [ ] Add physical address or service area cities
- [ ] Update title tag with "Dallas-Fort Worth" or primary service city
- [ ] Update meta description with geographic keywords
- [ ] Add JSON-LD LandscapingBusiness schema to index.html
- [ ] Add Open Graph meta tags
- [ ] Create sitemap.xml and robots.txt
- [ ] Update H1 to include location

### Short-Term (Next 30 Days)
- [ ] Set up / optimize Google Business Profile
- [ ] Register on Yelp, Thumbtack, Angi, BBB, Houzz
- [ ] Add service area section listing all DFW cities served
- [ ] Update all image alt text with location + service keywords
- [ ] Begin collecting Google reviews from past clients
- [ ] Add a "Service Areas" footer section with city names

### Medium-Term (60-90 Days)
- [ ] Evaluate migration from CSR React to SSG/SSR (Astro or Next.js)
- [ ] Create 5-6 city-specific service area pages (Tier 1 cities)
- [ ] Create individual service pages with unique content
- [ ] Launch blog with first 4-6 location-targeted articles
- [ ] Implement AggregateRating schema once reviews reach 10+
- [ ] Build initial local backlinks (HOA sites, suppliers)

### Long-Term (6+ Months)
- [ ] Expand to Tier 2 and Tier 3 city pages
- [ ] Publish 2-4 blog posts per month
- [ ] Reach 50+ Google reviews
- [ ] Build relationships with local home/garden media
- [ ] Consider Google Ads for high-intent keywords while organic rankings build
- [ ] Track rankings for target keywords monthly

---

## BIBLIOGRAPHY / SOURCES

- Empire Landscaping website (empire-landscaping.com) -- accessed April 2026
- Gecko Green Lawn Care website (geckogreen.com) -- accessed April 2026
- Timberline Lawn & Landscape website (timberlinelawnandlandscape.com) -- accessed April 2026
- LawnStarter Dallas page (lawnstarter.com/dallas-tx-lawn-care) -- accessed April 2026
- Complete Landsculpture website (completelandsculpture.com) -- accessed April 2026
- J Bell Services website (jbellservices.com) -- accessed April 2026
- Thumbtack Dallas landscaping listings (thumbtack.com) -- accessed April 2026
- Expertise.com Dallas landscaping rankings (expertise.com/tx/dallas/landscaping) -- accessed April 2026
- Google Search Central: Local Business structured data documentation (developers.google.com)
- Schema.org: LocalBusiness type specification (schema.org/LocalBusiness)
- Whitespark: 2026 Local Search Ranking Factors Report (whitespark.ca)

---

*Report prepared April 2026. Competitor data reflects website state at time of analysis and may change.*
