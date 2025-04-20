import React from 'react';
import ContactForm from './ContactForm';
import { Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your outdoor space? Get in touch with us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">info@jp-lawns.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Instagram className="h-6 w-6 text-green-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Follow Us</h4>
                    <a 
                      href="https://www.instagram.com/jp_landscapesllc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      @jp_landscapesllc
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}