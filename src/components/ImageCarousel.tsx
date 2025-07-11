import React from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const latestImages = [
  { id: 1, src: '/work-images/portfolio-0.jpeg', alt: 'Recent landscape project showcase' },
  { id: 2, src: '/work-images/portfolio-1.jpeg', alt: 'Beautiful garden transformation' },
  { id: 3, src: '/work-images/portfolio-3.jpeg', alt: 'Custom outdoor living space' },
  { id: 4, src: '/work-images/portfolio-4.jpeg', alt: 'Professional lawn care results' },
  { id: 5, src: '/work-images/portfolio-5.jpeg', alt: 'Elegant landscape design' },
  { id: 6, src: '/work-images/portfolio-6.jpeg', alt: 'Family-friendly backyard renovation' },
  { id: 7, src: '/work-images/portfolio-7.jpeg', alt: 'Sustainable landscaping solution' }
];

export default function ImageCarousel() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-10 w-10 text-green-600 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Creating Beautiful Spaces for Families
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            As a family-owned business, we understand that your outdoor space is more than just a yard—it's where memories are made. 
            From children's first steps on soft grass to gathering with loved ones under the stars, we craft landscapes that grow with your family.
          </p>
          <p className="text-md text-gray-600 mt-4 max-w-2xl mx-auto">
            Three generations of expertise, one commitment: turning your house into a home, one landscape at a time.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              prevEl: '.carousel-button-prev',
              nextEl: '.carousel-button-next',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            className="pb-12"
          >
            {latestImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">View Details</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="carousel-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all hidden md:block">
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button className="carousel-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all hidden md:block">
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 font-medium mb-2">
            Your Dream Landscape Awaits
          </p>
          <p className="text-gray-600">
            Let our family help yours create the perfect outdoor sanctuary
          </p>
        </div>
      </div>
    </section>
  );
}