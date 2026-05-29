import React from 'react';
import ContactForm from './ContactForm';
import { Mail, Instagram, Phone, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14 sm:mb-16">
            <span className="inline-block text-xs font-body font-medium tracking-[0.2em] uppercase text-terra-400 mb-4">
              Get Started
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-bark-700 leading-tight">
              Contact Us
            </h2>
            <div className="mt-5 mx-auto w-12 h-px bg-terra-300" />
            <p className="font-body text-base sm:text-lg text-bark-300 max-w-xl mx-auto mt-5">
              Ready to transform your outdoor space? Get in touch for a free consultation.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info panel */}
          <Reveal className="lg:col-span-2" delay={100}>
            <div className="bg-forest-700 rounded-2xl p-8 sm:p-10 text-white h-full">
              <h3 className="font-display text-2xl font-semibold mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-sage-200" />
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-white/90 mb-0.5">
                      Call Us
                    </h4>
                    <a
                      href="tel:+18177336154"
                      className="font-body text-sm text-white/60 hover:text-white transition-colors"
                    >
                      (817) 733-6154
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-sage-200" />
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-white/90 mb-0.5">
                      Email Us
                    </h4>
                    <p className="font-body text-sm text-white/60">
                      jonparker@jp-lawns.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sage-200" />
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-white/90 mb-0.5">
                      Service Area
                    </h4>
                    <p className="font-body text-sm text-white/60">
                      Dallas-Fort Worth Metroplex, TX
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-sage-200" />
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-white/90 mb-0.5">
                      Follow Us
                    </h4>
                    <a
                      href="https://www.instagram.com/jp_landscapesllc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-white/60 hover:text-white transition-colors"
                    >
                      @jp_landscapesllc
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative quote */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="font-display text-lg italic text-white/40 leading-relaxed">
                  "Creating beautiful, sustainable landscapes since 2016."
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={200}>
            <div className="bg-white rounded-2xl border border-cream-300/60 p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
