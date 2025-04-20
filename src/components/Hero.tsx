import React from 'react';
import { Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center mb-8">
          <Leaf className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Need Professional Expert Landscaping?
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your outdoor space into a stunning sanctuary with JP Landscapes. 
          Expert design, meticulous care, and sustainable solutions.
        </p>
        <a
          href="#contact"
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
        >
          Get a Estimate Today
        </a>
      </div>
    </div>
  );
}