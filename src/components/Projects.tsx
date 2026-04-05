import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal, Leaf, Instagram } from 'lucide-react';

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

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPercent = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return 50;
    const rect = el.getBoundingClientRect();
    return Math.max(3, Math.min(97, ((clientX - rect.left) / rect.width) * 100));
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if ((e.target as HTMLElement).closest('[data-slider-handle]')) return;
      setPosition(getPercent(e.clientX));
    },
    [getPercent]
  );

  const handleDragStart = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLElement;
      target.setPointerCapture(e.pointerId);

      const onMove = (ev: PointerEvent) => setPosition(getPercent(ev.clientX));
      const onUp = () => {
        target.removeEventListener('pointermove', onMove);
        target.removeEventListener('pointerup', onUp);
        target.removeEventListener('pointercancel', onUp);
      };

      target.addEventListener('pointermove', onMove);
      target.addEventListener('pointerup', onUp);
      target.addEventListener('pointercancel', onUp);
    },
    [getPercent]
  );

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-xl aspect-[4/3] bg-green-800"
      onClick={handleClick}
    >
      {/* After image — bottom layer, visible on right */}
      <img
        src={after}
        alt="After transformation"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image — top layer, clipped to left */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={before}
          alt="Before transformation"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Draggable handle */}
      <div
        data-slider-handle
        className="absolute top-0 bottom-0 z-20 cursor-col-resize"
        style={{
          left: `${position}%`,
          transform: 'translateX(-50%)',
          width: '44px',
          touchAction: 'none',
        }}
        onPointerDown={handleDragStart}
        role="slider"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Drag to compare before and after"
        tabIndex={0}
      >
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center">
          <MoveHorizontal className="w-5 h-5 text-green-700" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 z-10 bg-green-950/70 backdrop-blur-sm text-green-100 text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 z-10 bg-green-500/80 backdrop-blur-sm text-white text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded pointer-events-none">
        After
      </span>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────────────── */

export default function Projects() {
  const [activePairIndex, setActivePairIndex] = useState(0);
  const activePair = whitestonePairs[activePairIndex];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-green-900 to-green-950">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <Leaf className="h-8 w-8 text-green-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
          <p className="text-lg text-green-200/70 max-w-2xl mx-auto">
            Drag the slider to see the transformation — real results from our completed work
          </p>
        </div>

        {/* ── Featured: White Stone Heights ── */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-white">White Stone Heights</h3>
            <span className="text-sm text-green-300 bg-green-800/80 px-3 py-1 rounded-full">
              Community Entrance &amp; Common Areas
            </span>
          </div>
          <p className="text-green-200/60 max-w-3xl">
            Complete landscape renovation of subdivision entrance signs, roundabout planters,
            and median islands — transforming bare mulch beds into vibrant, professionally
            designed plantings.
          </p>
        </div>

        <BeforeAfterSlider
          key={activePair.id}
          before={activePair.before}
          after={activePair.after}
        />

        <p className="text-sm text-green-400/60 mt-3 mb-4 text-center">
          {activePair.label}
        </p>

        {/* Thumbnail strip */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {whitestonePairs.map((pair, i) => (
            <button
              key={pair.id}
              onClick={() => setActivePairIndex(i)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                i === activePairIndex
                  ? 'ring-2 ring-green-400 ring-offset-2 ring-offset-green-950'
                  : 'opacity-50 hover:opacity-80'
              }`}
            >
              <img
                src={pair.after}
                alt={pair.label}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-1.5 pb-1.5 pt-4">
                <span className="text-[10px] text-white/90 font-medium leading-tight block">
                  {pair.label}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* ── Residential Transformations ── */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-green-300 mb-8 text-center">
            More Transformations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {residentialItems.map((item) => (
              <div key={item.id}>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {item.name}
                </h4>
                <BeforeAfterSlider before={item.before} after={item.after} />
                <p className="text-sm text-green-200/50 mt-3 line-clamp-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram callout */}
        <div className="mt-14 text-center">
          <a
            href="https://www.instagram.com/jp_landscapesllc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-green-300/80 hover:text-green-200 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>
              Follow{' '}
              <span className="font-medium">@jp_landscapesllc</span> for more
              inspiration
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
