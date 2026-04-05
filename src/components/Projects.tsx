import React, { useState, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterPair {
  id: string;
  before: string;
  after: string;
  label: string;
}

interface Project {
  id: string;
  name: string;
  location: string;
  description: string;
  pairs: BeforeAfterPair[];
}

const projects: Project[] = [
  {
    id: 'whitestone',
    name: 'White Stone Heights',
    location: 'Community Entrance & Common Areas',
    description:
      'Complete landscape renovation of subdivision entrance signs, roundabout planters, and median islands — transforming bare mulch beds into vibrant, professionally designed plantings.',
    pairs: [
      {
        id: 'sign-left',
        before: '/work-images/projects/whitestone/ws-before-sign-left.webp',
        after: '/work-images/projects/whitestone/ws-after-sign-left.webp',
        label: 'Entrance Sign',
      },
      {
        id: 'sign-right',
        before: '/work-images/projects/whitestone/ws-before-sign-right.webp',
        after: '/work-images/projects/whitestone/ws-after-sign-right.webp',
        label: 'Entrance Sign',
      },
      {
        id: 'pole',
        before: '/work-images/projects/whitestone/ws-before-pole.webp',
        after: '/work-images/projects/whitestone/ws-after-pole.webp',
        label: 'Roundabout Planter',
      },
      {
        id: 'narrow',
        before: '/work-images/projects/whitestone/ws-before-narrow.webp',
        after: '/work-images/projects/whitestone/ws-after-narrow.webp',
        label: 'Median Island',
      },
      {
        id: 'narrow-1',
        before: '/work-images/projects/whitestone/ws-before-narrow-1.webp',
        after: '/work-images/projects/whitestone/ws-after-narrow-1.webp',
        label: 'Median Island',
      },
      {
        id: 'narrow-2',
        before: '/work-images/projects/whitestone/ws-before-narrow-2.webp',
        after: '/work-images/projects/whitestone/ws-after-narrow-2.webp',
        label: 'Median Island',
      },
    ],
  },
];

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
      className="relative select-none overflow-hidden rounded-xl aspect-[4/3] bg-neutral-800"
      onClick={handleClick}
    >
      {/* After image — bottom layer, visible on the right */}
      <img
        src={after}
        alt="After transformation"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image — top layer, clipped to the left */}
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
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)]" />
        {/* Grip circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center">
          <MoveHorizontal className="w-5 h-5 text-neutral-600" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 z-10 bg-black/50 backdrop-blur-sm text-white text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 z-10 bg-green-600/80 backdrop-blur-sm text-white text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded pointer-events-none">
        After
      </span>
    </div>
  );
}

function ProjectGallery({ project }: { project: Project }) {
  const [activePairIndex, setActivePairIndex] = useState(0);
  const activePair = project.pairs[activePairIndex];

  return (
    <div>
      {/* Project header */}
      <div className="mb-6 md:mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
          <span className="text-sm text-neutral-400 bg-neutral-800 px-3 py-1 rounded-full">
            {project.location}
          </span>
        </div>
        <p className="text-neutral-400 max-w-3xl">{project.description}</p>
      </div>

      {/* Active slider */}
      <BeforeAfterSlider
        key={activePair.id}
        before={activePair.before}
        after={activePair.after}
      />

      {/* Active pair label */}
      <p className="text-sm text-neutral-500 mt-3 mb-4 text-center">
        {activePair.label}
      </p>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {project.pairs.map((pair, i) => (
          <button
            key={pair.id}
            onClick={() => setActivePairIndex(i)}
            className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
              i === activePairIndex
                ? 'ring-2 ring-green-500 ring-offset-2 ring-offset-neutral-900'
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
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Drag the slider to compare before and after on our completed work
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <ProjectGallery key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
