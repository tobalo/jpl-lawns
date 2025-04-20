import React from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const portfolioItems = [
  {
    id: 1,
    beforeImage: '/images/before-1.jpg',
    afterImage: '/images/after-1.jpg',
    description: 'Custom patio extension with ambient string lighting, featuring a spacious concrete pad perfect for outdoor dining and entertaining. Complemented by strategic landscaping and mulched borders.'
  },
  {
    id: 2,
    beforeImage: '/images/before-2.jpg',
    afterImage: '/images/after-2.jpg',
    description: 'Complete backyard transformation featuring new sod installation, cypress trees along the fence line, custom stone edging, and mulched garden beds. Enhanced with professional landscape lighting.'
  },
  {
    id: 3,
    beforeImage: '/images/misc2.jpg',
    afterImage: '/images/misc4.jpg',
    description: 'Comprehensive landscape design including new patio installation, professional lighting, and custom hardscaping elements for a cohesive outdoor living space.'
  }
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Latest Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow us on Instagram <a 
              href="https://www.instagram.com/jp_landscapesllc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700"
            >
              @jp_landscapesllc
            </a> for more inspiration
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{ clickable: true }}
            className="relative"
          >
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-4 p-6">
                    <div className="space-y-4">
                      <div className="relative aspect-[4/3]">
                        <img
                          src={item.beforeImage}
                          alt={`Before transformation - Project ${item.id}`}
                          className="rounded-lg object-cover w-full h-full"
                        />
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">
                          Before
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="relative aspect-[4/3]">
                        <img
                          src={item.afterImage}
                          alt={`After transformation - Project ${item.id}`}
                          className="rounded-lg object-cover w-full h-full"
                        />
                        <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg">
                          After
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gray-50">
                    <p className="text-gray-700 text-center">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-75 p-2 rounded-full shadow-lg hover:bg-opacity-100 transition-all">
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-75 p-2 rounded-full shadow-lg hover:bg-opacity-100 transition-all">
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
}