import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <p>
          © {currentYear} JP Landscapes, LLC - All Rights Reserved
        </p>
        <p className="mt-1">
          Managed by{' '}
          <a 
            href="https://eden.yeetum.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 transition-colors"
          >
            Eden Advisory
          </a>
        </p>
      </div>
    </footer>
  );
}