import { useState, useEffect, lazy, Suspense } from 'react';
import { Heart } from 'lucide-react';
import { Reveal } from './Reveal';
import type { CarouselImage } from './PortfolioSwiper';

// Swiper is client-only: lazy-loaded so it never runs during prerender/SSR.
const PortfolioSwiper = lazy(() => import('./PortfolioSwiper'));

const latestImages: CarouselImage[] = [
  { id: 1, src: '/work-images/portfolio-0.webp', alt: 'DFW landscape design project by JP Landscapes' },
  { id: 2, src: '/work-images/portfolio-1.webp', alt: 'North Texas garden transformation with professional planting' },
  { id: 3, src: '/work-images/portfolio-3.webp', alt: 'Custom outdoor living space and hardscaping in Dallas-Fort Worth' },
  { id: 4, src: '/work-images/portfolio-4.webp', alt: 'Professional lawn care and landscape maintenance results in DFW' },
  { id: 5, src: '/work-images/portfolio-5.webp', alt: 'Elegant landscape design for a North Texas property' },
  { id: 6, src: '/work-images/portfolio-6.webp', alt: 'Family-friendly backyard renovation in Dallas-Fort Worth' },
  { id: 7, src: '/work-images/portfolio-7.webp', alt: 'Sustainable landscaping solution for a DFW outdoor space' },
];

/**
 * Static image grid shown during prerender/SSR, before hydration, and to
 * no-JS visitors. The interactive Swiper carousel replaces it after mount.
 */
function StaticGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {latestImages.slice(0, 4).map((image) => (
        <div key={image.id} className="group overflow-hidden rounded-2xl bg-cream-200">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ImageCarousel() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-20 sm:py-28 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14 sm:mb-16">
            <Heart className="w-7 h-7 text-terra-300 mx-auto mb-5" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-bark-700 leading-tight mb-5">
              Creating Beautiful Spaces
              <span className="block italic text-forest-700 mt-1">for Families</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-bark-400 max-w-2xl mx-auto leading-relaxed">
              As a family-owned business, we understand your outdoor space is where
              memories are made. We craft landscapes that grow with your family.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          {mounted ? (
            <Suspense fallback={<StaticGallery />}>
              <PortfolioSwiper images={latestImages} />
            </Suspense>
          ) : (
            <StaticGallery />
          )}
        </Reveal>

        <Reveal delay={250}>
          <p className="mt-10 text-center font-body text-bark-400 text-sm sm:text-base">
            Three generations of expertise, one commitment —{' '}
            <span className="text-forest-700 font-medium">turning your house into a home</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
