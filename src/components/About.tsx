import React from 'react';
import { Award, Users, Calendar } from 'lucide-react';
import { Reveal } from './Reveal';
import { SeedAnimation } from './SeedAnimation';

const stats = [
  { label: 'Years Experience', value: '10+', icon: Calendar },
  { label: 'Projects Completed', value: '500+', icon: Award },
  { label: 'Team Members', value: '10+', icon: Users },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-sage-50">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14 sm:mb-20">
            <span className="inline-block text-xs font-body font-medium tracking-[0.2em] uppercase text-terra-400 mb-4">
              Who We Are
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-bark-700 leading-tight">
              About JP Landscapes
            </h2>
            <div className="mt-5 mx-auto w-12 h-px bg-terra-300" />
          </div>
        </Reveal>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-14 sm:mb-20">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="text-center p-4 sm:p-8 bg-white rounded-2xl border border-sage-100 h-full">
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-sage-500 mx-auto mb-3" />
                <div className="font-display text-2xl sm:text-4xl font-bold text-bark-700 mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-xs sm:text-sm text-bark-300">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Story */}
        <Reveal delay={200}>
          <div className="bg-white rounded-2xl border border-sage-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <SeedAnimation />
              </div>
              <div className="p-8 sm:p-10 md:p-12 md:w-1/2 flex flex-col justify-center">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-bark-700 mb-5">
                  Our Story
                </h3>
                <p className="font-body text-bark-300 leading-relaxed mb-4">
                  JP Landscapes began with a simple mission: to create exceptional outdoor spaces
                  that bring joy to families across the Dallas-Fort Worth area. Since 2016, we've grown
                  from a small family operation into a full-service landscaping company serving residential
                  and commercial clients throughout the DFW metroplex.
                </p>
                <p className="font-body text-bark-300 leading-relaxed">
                  Our team of certified professionals combines creativity with technical expertise
                  to deliver outstanding results. From HOA community renovations to backyard
                  transformations, we pride ourselves on sustainable practices and deep knowledge
                  of North Texas soil, climate, and native plant species.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
