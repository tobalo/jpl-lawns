import React, { useState, useRef, useCallback, useEffect } from 'react';
import { MoveHorizontal, Instagram } from 'lucide-react';
import { Reveal } from './Reveal';

interface BeforeAfterPair {
  id: string;
  before: string;
  after: string;
  label: string;
}

interface ResidentialItem {
  id: string;
  name: string;
  before: string;
  after: string;
  description: string;
}

/* ── Data ─────────────────────────────────────────────────────────── */

const whitestonePairs: BeforeAfterPair[] = [
  { id: 'sign-left', before: '/work-images/projects/whitestone/ws-before-sign-left.webp', after: '/work-images/projects/whitestone/ws-after-sign-left.webp', label: 'Entrance Sign' },
  { id: 'sign-right', before: '/work-images/projects/whitestone/ws-before-sign-right.webp', after: '/work-images/projects/whitestone/ws-after-sign-right.webp', label: 'Entrance Sign' },
  { id: 'pole', before: '/work-images/projects/whitestone/ws-before-pole.webp', after: '/work-images/projects/whitestone/ws-after-pole.webp', label: 'Roundabout Planter' },
  { id: 'narrow', before: '/work-images/projects/whitestone/ws-before-narrow.webp', after: '/work-images/projects/whitestone/ws-after-narrow.webp', label: 'Median Island' },
  { id: 'narrow-1', before: '/work-images/projects/whitestone/ws-before-narrow-1.webp', after: '/work-images/projects/whitestone/ws-after-narrow-1.webp', label: 'Median Island' },
  { id: 'narrow-2', before: '/work-images/projects/whitestone/ws-before-narrow-2.webp', after: '/work-images/projects/whitestone/ws-after-narrow-2.webp', label: 'Median Island' },
];

const residentialItems: ResidentialItem[] = [
  {
    id: 'patio',
    name: 'Patio Extension',
    before: '/images/before-1.webp',
    after: '/images/after-1.webp',
    description: 'Custom patio extension with ambient string lighting, spacious concrete pad, and mulched borders.',
  },
  {
    id: 'backyard',
    name: 'Backyard Renovation',
    before: '/images/before-2.webp',
    after: '/images/after-2.webp',
    description: 'New sod installation, cypress trees, custom stone edging, mulched garden beds, and landscape lighting.',
  },
  {
    id: 'outdoor',
    name: 'Outdoor Living Space',
    before: '/images/misc2.webp',
    after: '/images/misc4.webp',
    description: 'New patio installation, professional lighting, and custom hardscaping for a cohesive outdoor space.',
  },
];

/* ── Before / After Slider ────────────────────────────────────────── */
/* Bypasses React state during drag — updates clip-path + handle       */
/* position directly on the DOM for zero-overhead 120fps smoothness.   */

function BeforeAfterSlider({
  before,
  after,
  label = 'DFW landscaping project',
  lazy = false,
}: {
  before: string;
  after: string;
  label?: string;
  lazy?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const getPercent = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return 50;
    const rect = el.getBoundingClientRect();
    return Math.max(3, Math.min(97, ((clientX - rect.left) / rect.width) * 100));
  }, []);

  const updateSlider = useCallback((percent: number) => {
    if (clipRef.current) {
      clipRef.current.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    }
    if (handleRef.current) {
      handleRef.current.style.left = `${percent}%`;
    }
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest('[data-slider-handle]')) return;
      updateSlider(getPercent(e.clientX));
    },
    [getPercent, updateSlider]
  );

  const handleDragStart = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      target.setPointerCapture(e.pointerId);

      const onMove = (ev: PointerEvent) => updateSlider(getPercent(ev.clientX));
      const onUp = () => {
        target.removeEventListener('pointermove', onMove);
        target.removeEventListener('pointerup', onUp);
        target.removeEventListener('pointercancel', onUp);
      };

      target.addEventListener('pointermove', onMove);
      target.addEventListener('pointerup', onUp);
      target.addEventListener('pointercancel', onUp);
    },
    [getPercent, updateSlider]
  );

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-2xl aspect-[4/3] bg-forest-800"
      onClick={handleClick}
    >
      {/* After image — bottom layer, visible on right */}
      <img
        src={after}
        alt={`${label} after landscaping transformation by JP Landscapes in Dallas-Fort Worth`}
        className="absolute inset-0 w-full h-full object-cover"
        loading={lazy ? 'lazy' : undefined}
        decoding="async"
        draggable={false}
      />

      {/* Before image — top layer, clipped to left */}
      <div
        ref={clipRef}
        className="absolute inset-0 will-change-[clip-path]"
        style={{ clipPath: 'inset(0 50% 0 0)' }}
      >
        <img
          src={before}
          alt={`${label} before landscaping transformation by JP Landscapes in Dallas-Fort Worth`}
          className="w-full h-full object-cover"
          loading={lazy ? 'lazy' : undefined}
          decoding="async"
          draggable={false}
        />
      </div>

      {/* Draggable handle — direct DOM positioning, no React state */}
      <div
        ref={handleRef}
        data-slider-handle
        className="absolute top-0 bottom-0 z-20 cursor-col-resize"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          width: '44px',
          touchAction: 'none',
        }}
        onPointerDown={handleDragStart}
        role="slider"
        aria-label="Drag to compare before and after"
        tabIndex={0}
      >
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center">
          <MoveHorizontal className="w-5 h-5 text-forest-700" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 z-10 bg-forest-950/70 backdrop-blur-sm text-cream-100 text-[11px] font-body font-semibold tracking-widest uppercase px-2.5 py-1 rounded pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 z-10 bg-sage-400/80 backdrop-blur-sm text-white text-[11px] font-body font-semibold tracking-widest uppercase px-2.5 py-1 rounded pointer-events-none">
        After
      </span>
    </div>
  );
}

/* ── Image preloader ──────────────────────────────────────────────── */

function usePreloadImages(srcs: string[]) {
  useEffect(() => {
    srcs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [srcs]);
}

/* ── Section ──────────────────────────────────────────────────────── */

export default function Projects() {
  const [activePairIndex, setActivePairIndex] = useState(0);
  const activePair = whitestonePairs[activePairIndex];

  // Preload the next pair so thumbnail clicks feel instant
  const nextIndex = (activePairIndex + 1) % whitestonePairs.length;
  const nextPair = whitestonePairs[nextIndex];
  usePreloadImages([nextPair.before, nextPair.after]);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-gradient-to-b from-forest-900 to-forest-950">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <Reveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-body font-medium tracking-[0.2em] uppercase text-terra-300 mb-4">
              Our Work
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Our Projects
            </h2>
            <div className="mx-auto w-12 h-px bg-terra-400 mb-5" />
            <p className="font-body text-base sm:text-lg text-cream-300/60 max-w-2xl mx-auto">
              Drag the slider to see the transformation — real results from our completed work
            </p>
          </div>
        </Reveal>

        {/* ── Featured: White Stone Heights ── */}
        <Reveal delay={100}>
          <div className="mb-6 md:mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="font-display text-2xl font-semibold text-white">
                White Stone Heights
              </h3>
              <span className="text-sm font-body text-sage-200 bg-forest-800/80 px-3 py-1 rounded-full">
                Community Entrance &amp; Common Areas
              </span>
            </div>
            <p className="font-body text-cream-300/50 max-w-3xl">
              Complete landscape renovation of subdivision entrance signs, roundabout planters,
              and median islands — transforming bare mulch beds into vibrant, professionally
              designed plantings.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <BeforeAfterSlider
            key={activePair.id}
            before={activePair.before}
            after={activePair.after}
            label={activePair.label}
          />

          <p className="font-body text-sm text-sage-400/60 mt-3 mb-4 text-center">
            {activePair.label}
          </p>

          {/* Thumbnail strip */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {whitestonePairs.map((pair, i) => (
              <button
                key={pair.id}
                onClick={() => setActivePairIndex(i)}
                className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-200 ${
                  i === activePairIndex
                    ? 'ring-2 ring-sage-300 ring-offset-2 ring-offset-forest-950'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={pair.after}
                  alt={`${pair.label} after landscape renovation in Dallas-Fort Worth`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-1.5 pb-1.5 pt-4">
                  <span className="font-body text-[10px] text-white/90 font-medium leading-tight block">
                    {pair.label}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* ── Residential Transformations ── */}
        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-sage-200 mb-8 text-center">
              More Transformations
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {residentialItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 100}>
                <div>
                  <h4 className="font-display text-lg font-semibold text-white mb-3">
                    {item.name}
                  </h4>
                  <BeforeAfterSlider before={item.before} after={item.after} label={item.name} lazy />
                  <p className="font-body text-sm text-cream-300/40 mt-3 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Instagram callout */}
        <Reveal delay={200}>
          <div className="mt-14 text-center">
            <a
              href="https://www.instagram.com/jp_landscapesllc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sage-300/80 hover:text-cream-200 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>
                Follow{' '}
                <span className="font-medium">@jp_landscapesllc</span> for more
                inspiration
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
