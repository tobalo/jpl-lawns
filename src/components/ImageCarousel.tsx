import React from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Reveal } from './Reveal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const latestImages = [
  { id: 1, src: '/work-images/portfolio-0.webp', alt: 'DFW landscape design project by JP Landscapes' },
  { id: 2, src: '/work-images/portfolio-1.webp', alt: 'North Texas garden transformation with professional planting' },
  { id: 3, src: '/work-images/portfolio-3.webp', alt: 'Custom outdoor living space and hardscaping in Dallas-Fort Worth' },
  { id: 4, src: '/work-images/portfolio-4.webp', alt: 'Professional lawn care and landscape maintenance results in DFW' },
  { id: 5, src: '/work-images/portfolio-5.webp', alt: 'Elegant landscape design for a North Texas property' },
  { id: 6, src: '/work-images/portfolio-6.webp', alt: 'Family-friendly backyard renovation in Dallas-Fort Worth' },
  { id: 7, src: '/work-images/portfolio-7.webp', alt: 'Sustainable landscaping solution for a DFW outdoor space' },
];

export default function ImageCarousel() {
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
            <p className="font-body text-base sm:text-lg text-bark-300 max-w-2xl mx-auto leading-relaxed">
              As a family-owned business, we understand your outdoor space is where
              memories are made. We craft landscapes that grow with your family.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 16 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              navigation={{
                prevEl: '.carousel-prev',
                nextEl: '.carousel-next',
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="pb-14"
            >
              {latestImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="group overflow-hidden rounded-2xl bg-cream-200">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="carousel-prev absolute left-0 top-[calc(50%-28px)] -translate-x-1/2 z-10 w-11 h-11 bg-white border border-cream-300 rounded-full shadow-md items-center justify-center hover:bg-cream-50 transition-colors hidden md:flex"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-bark-500" />
            </button>
            <button
              className="carousel-next absolute right-0 top-[calc(50%-28px)] translate-x-1/2 z-10 w-11 h-11 bg-white border border-cream-300 rounded-full shadow-md items-center justify-center hover:bg-cream-50 transition-colors hidden md:flex"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-bark-500" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="mt-10 text-center font-body text-bark-300 text-sm sm:text-base">
            Three generations of expertise, one commitment —{' '}
            <span className="text-forest-700 font-medium">turning your house into a home</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
