import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

/**
 * Client-only Swiper carousel. Loaded lazily by ImageCarousel so that Swiper
 * (and its window/DOM access) never runs during server-side prerendering.
 */
export default function PortfolioSwiper({ images }: { images: CarouselImage[] }) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
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
        autoplay={
          prefersReducedMotion
            ? false
            : { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }
        }
        loop={true}
        navigation={{
          prevEl: '.carousel-prev',
          nextEl: '.carousel-next',
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="pb-14"
      >
        {images.map((image) => (
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
  );
}
