import { useRef, useState, useEffect, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Scroll-reveal wrapper (progressive enhancement).
 *
 * Renders its children visible by default so server-prerendered HTML, no-JS
 * visitors, and crawlers always see the content. The hidden→fade-in behavior
 * is gated behind the `html.js` class (set by an inline script in index.html)
 * and styled in index.css (`.js .reveal`), then triggered on scroll via an
 * IntersectionObserver that adds `is-visible`.
 */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver support → show content immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);

    // Safety net: never leave content hidden behind the animation. If the
    // observer hasn't fired within a few seconds (rare layout/observer edge
    // cases), reveal anyway. Real scroll-triggered reveals fire well before
    // this, so the entrance animation is preserved in normal use.
    const safety = window.setTimeout(() => {
      setVisible(true);
      obs.disconnect();
    }, 2500);

    return () => {
      window.clearTimeout(safety);
      obs.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
