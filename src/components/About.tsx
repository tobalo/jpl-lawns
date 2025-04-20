import React from 'react';
import { Award, Users, Calendar } from 'lucide-react';

const stats = [
  {
    label: 'Years Experience',
    value: '7+',
    icon: Calendar,
  },
  {
    label: 'Projects Completed',
    value: '500+',
    icon: Award,
  },
  {
    label: 'Team Members',
    value: '10+',
    icon: Users,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About JP Landscapes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creating beautiful, sustainable landscapes since 2016. Our passion for excellence and 
            attention to detail sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80"
                alt="Team at work"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                JP Landscapes began with a simple mission: to create exceptional outdoor spaces 
                that bring joy to our clients. Over the years, we've grown into a full-service 
                landscaping company, but our commitment to quality and customer satisfaction 
                remains unchanged.
              </p>
              <p className="text-gray-600">
                Our team of certified professionals combines creativity with technical expertise 
                to deliver outstanding results. We pride ourselves on sustainable practices and 
                using the latest innovations in landscape design and maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}