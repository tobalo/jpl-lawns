import React from 'react';
import { 
  Trees, 
  Sprout, 
  Flower2, 
  Construction, 
  Droplets, 
  SunDim 
} from 'lucide-react';

const services = [
  {
    title: 'Landscape Design',
    description: 'Custom design solutions tailored to your space and style',
    icon: Trees,
  },
  {
    title: 'Garden Maintenance',
    description: 'Regular care to keep your garden looking its best year-round',
    icon: Sprout,
  },
  {
    title: 'Planting Services',
    description: 'Expert plant selection and installation',
    icon: Flower2,
  },
  {
    title: 'Hardscaping',
    description: 'Beautiful patios, walkways, and retaining walls',
    icon: Construction,
  },
  {
    title: 'Irrigation Systems',
    description: 'Efficient watering solutions for your landscape',
    icon: Droplets,
  },
  {
    title: 'Lighting Design',
    description: 'Enhance your outdoor space with strategic lighting',
    icon: SunDim,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive landscaping solutions to create and maintain your perfect outdoor space
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                <service.icon className="h-10 w-10 text-green-600 group-hover:text-green-500 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}