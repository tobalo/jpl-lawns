import React from 'react';
import { Leaf, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream-100 grain">
      {/* ── Decorative organic blobs ── */}
      <svg
        className="absolute -top-32 -right-32 w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] lg:w-[700px] lg:h-[700px] text-sage-100 opacity-70 animate-gentle-float"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M300 60C420 60 540 150 550 300C560 450 440 550 300 550C160 550 50 430 60 300C70 170 180 60 300 60Z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="absolute -bottom-24 -left-24 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] text-terra-50 opacity-60"
        viewBox="0 0 450 450"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M225 35C340 45 420 140 400 260C380 380 280 430 180 410C80 390 15 290 40 180C65 70 110 25 225 35Z"
          fill="currentColor"
        />
      </svg>

      {/* Subtle accent lines (desktop) */}
      <div className="absolute top-1/4 left-8 w-px h-24 bg-gradient-to-b from-transparent via-sage-300/40 to-transparent hidden lg:block" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-12 w-px h-32 bg-gradient-to-b from-transparent via-terra-200/40 to-transparent hidden lg:block" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="relative z-10 px-6 text-center max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-sage-200/50 text-forest-700 text-sm font-body font-medium mb-8 animate-fade-in">
          <Leaf className="w-4 h-4 text-sage-500" />
          <span>JP Landscapes LLC</span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-bark-700 leading-[1.08] tracking-tight mb-6 animate-fade-in-up anim-delay-100">
          Professional Landscaping
          <span className="block text-forest-700 italic mt-1">in Dallas–Fort Worth</span>
        </h1>

        {/* Subtext */}
        <p className="font-body text-base sm:text-lg text-bark-300 leading-relaxed max-w-lg mx-auto mb-10 animate-fade-in-up anim-delay-300">
          Transform your outdoor space into a stunning sanctuary with
          expert design, meticulous care, and sustainable solutions for DFW homes and businesses.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-terra-400 hover:bg-terra-500 active:bg-terra-600 text-white font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-terra-300/30 active:scale-[0.98] animate-fade-in-up anim-delay-400"
        >
          Get a Free Estimate
        </a>
      </div>

      {/* ── Scroll indicator ── */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-bark-300/60 hover:text-bark-400 transition-colors animate-fade-in anim-delay-600"
        aria-label="Scroll to services"
      >
        <span className="text-[10px] font-body tracking-[0.25em] uppercase">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
