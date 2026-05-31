import { Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <Leaf className="w-6 h-6 text-sage-400/40" />
          <p className="font-body text-sm text-white/70 text-center">
            Serving the Dallas-Fort Worth Metroplex, Texas
          </p>
          <p className="font-body text-sm text-white/70 text-center">
            <a href="tel:+18177336154" className="hover:text-white/90 transition-colors">(817) 733-6154</a>
            {' '}&middot;{' '}
            jonparker@jp-lawns.com
          </p>
          <p className="font-body text-sm text-white/70 text-center">
            &copy; {currentYear} JP Landscapes, LLC &mdash; All Rights Reserved
          </p>
          <p className="font-body text-xs text-white/60 text-center">
            Managed by{' '}
            <a
              href="https://eden.yeetum.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-300 hover:text-sage-200 transition-colors"
            >
              Eden Advisory
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
