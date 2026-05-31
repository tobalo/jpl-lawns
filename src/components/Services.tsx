import {
  Trees,
  Sprout,
  Flower2,
  Construction,
  Droplets,
  SunDim,
} from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  {
    title: 'Landscape Design',
    description: 'Custom design solutions for DFW homes and businesses, tailored to the North Texas climate and your personal style',
    icon: Trees,
  },
  {
    title: 'Garden Maintenance',
    description: 'Year-round lawn care including mowing, edging, pruning, fertilization, and seasonal cleanup across the Dallas-Fort Worth area',
    icon: Sprout,
  },
  {
    title: 'Planting Services',
    description: 'Expert selection and installation of native and adaptive plants suited to the North Texas growing zone',
    icon: Flower2,
  },
  {
    title: 'Hardscaping',
    description: 'Custom patios, walkways, retaining walls, and outdoor living features built to withstand Texas weather',
    icon: Construction,
  },
  {
    title: 'Irrigation Systems',
    description: 'Smart watering solutions including sprinkler systems, drip irrigation, and controllers for water-efficient DFW landscapes',
    icon: Droplets,
  },
  {
    title: 'Lighting Design',
    description: 'Professional outdoor pathway, accent, and ambient lighting to enhance your space after dark',
    icon: SunDim,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14 sm:mb-20">
            <span className="inline-block text-xs font-body font-medium tracking-[0.2em] uppercase text-terra-400 mb-4">
              What We Do
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-bark-700 leading-tight">
              Our Services
            </h2>
            <div className="mt-5 mx-auto w-12 h-px bg-terra-300" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group relative p-6 sm:p-8 bg-white rounded-2xl border border-cream-300/60 hover:border-sage-200 transition-all duration-300 hover:shadow-lg hover:shadow-sage-100/50 h-full">
                <div className="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center mb-5 group-hover:bg-sage-100 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-forest-600" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-bark-600 mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-bark-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
