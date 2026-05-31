import { useRef, useState, useEffect } from 'react';

/* ── Palette (matches tailwind.config) ─────────────────────────── */
const SAGE_4 = '#8B9E7E';
const SAGE_5 = '#6E8462';
const FOREST_6 = '#3D6B5A';
const BARK_5 = '#5C4333';
const BARK_4 = '#7A5E48';
const BARK_3 = '#A08068';
const BARK_2 = '#C4A88E';
const FOREST_7 = '#2C4A3B';

/* ── Single realistic leaf (positioned via outer <g>) ──────────── */

interface LeafProps {
  x: number;
  y: number;
  size?: number;
  rotation?: number;
  fill: string;
  opacity?: number;
  cls: string;
}

function Leaf({ x, y, size = 1, rotation = 0, fill, opacity = 0.75, cls }: LeafProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotation}) scale(${size})`}>
      <g className={`sa-leaf ${cls}`}>
        {/* Leaf body */}
        <path
          d="M 0 -11 C 3 -10 7 -7 8 -2 C 9 3 7 7.5 4 10 C 2 11.5 0 12 0 12 C 0 12 -2 11.5 -4 10 C -7 7.5 -9 3 -8 -2 C -7 -7 -3 -10 0 -11 Z"
          fill={fill}
          opacity={opacity}
        />
        {/* Center vein */}
        <path
          d="M 0 -9 Q 0.15 0 0 10.5"
          fill="none"
          stroke={fill}
          strokeWidth="0.5"
          opacity={0.3}
        />
        {/* Side veins */}
        <path d="M 0 -4 Q 3 -3.5 5 -2" fill="none" stroke={fill} strokeWidth="0.3" opacity={0.2} />
        <path d="M 0 -4 Q -3 -3.5 -5 -2" fill="none" stroke={fill} strokeWidth="0.3" opacity={0.2} />
        <path d="M 0 1 Q 3.5 2 5.5 4" fill="none" stroke={fill} strokeWidth="0.3" opacity={0.18} />
        <path d="M 0 1 Q -3.5 2 -5.5 4" fill="none" stroke={fill} strokeWidth="0.3" opacity={0.18} />
        <path d="M 0 5 Q 2.5 6.5 3.5 8" fill="none" stroke={fill} strokeWidth="0.25" opacity={0.15} />
        <path d="M 0 5 Q -2.5 6.5 -3.5 8" fill="none" stroke={fill} strokeWidth="0.25" opacity={0.15} />
      </g>
    </g>
  );
}

/* ── Main component ────────────────────────────────────────────── */

export function SeedAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPlaying(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-full min-h-[280px] sm:min-h-[340px] flex items-center justify-center bg-sage-50"
    >
      <svg
        viewBox="0 0 400 520"
        className="w-full h-full max-w-[280px] sm:max-w-[320px] py-6"
        aria-hidden="true"
      >
        <defs>
          <style>{`
            /* ── Hidden state ── */
            .sa-seed     { opacity: 0; }
            .sa-sprout   { opacity: 0; transform-origin: 200px 400px; }
            .sa-root     { stroke-dasharray: 55; stroke-dashoffset: 55; }
            .sa-trunk    { opacity: 0; }
            .sa-branch   { stroke-dasharray: 85; stroke-dashoffset: 85; }
            .sa-twig     { stroke-dasharray: 35; stroke-dashoffset: 35; }
            .sa-leaf     { transform: scale(0); opacity: 0; }
            .sa-shadow   { opacity: 0; }
            .sa-grass    { stroke-dasharray: 25; stroke-dashoffset: 25; }
            .sa-particle { opacity: 0; }

            /* ── 1. Seed drops ── */
            .seed-playing .sa-seed {
              animation: saDropSeed 1.4s ease-out 0.3s both;
            }
            @keyframes saDropSeed {
              0%   { opacity: 0; transform: translateY(-35px); }
              35%  { opacity: 1; transform: translateY(0); }
              70%  { opacity: 1; }
              100% { opacity: 0; }
            }

            /* ── 2. Sprout emerges, then fades ── */
            .seed-playing .sa-sprout {
              animation: saSprout 2.2s ease-out 1.3s both;
            }
            @keyframes saSprout {
              0%   { opacity: 0; transform: scaleY(0); }
              20%  { opacity: 1; transform: scaleY(0.4); }
              50%  { opacity: 1; transform: scaleY(1); }
              78%  { opacity: 1; transform: scaleY(1); }
              100% { opacity: 0; transform: scaleY(1); }
            }

            /* ── 3. Roots grow ── */
            .seed-playing .sa-root { animation: saDraw 1.2s ease-out both; }
            .seed-playing .sa-r1 { animation-delay: 2.0s; }
            .seed-playing .sa-r2 { animation-delay: 2.3s; }
            .seed-playing .sa-r3 { animation-delay: 2.6s; }
            .seed-playing .sa-r4 { animation-delay: 2.8s; }
            @keyframes saDraw { to { stroke-dashoffset: 0; } }

            /* ── 4. Trunk reveals bottom→top ── */
            .seed-playing .sa-trunk {
              animation: saGrowTrunk 2.6s ease-out 2.2s both;
            }
            @keyframes saGrowTrunk {
              0%   { opacity: 0; clip-path: inset(100% 0 0 0); }
              4%   { opacity: 1; }
              100% { opacity: 1; clip-path: inset(0% 0 0 0); }
            }

            /* ── 5. Branches extend ── */
            .seed-playing .sa-branch { animation: saDraw 1.2s ease-out both; }
            .seed-playing .sa-b1 { animation-delay: 3.6s; }
            .seed-playing .sa-b2 { animation-delay: 3.9s; }
            .seed-playing .sa-b3 { animation-delay: 3.4s; }
            .seed-playing .sa-b4 { animation-delay: 4.2s; }
            .seed-playing .sa-b5 { animation-delay: 4.0s; }
            .seed-playing .sa-b6 { animation-delay: 3.7s; }

            /* ── 6. Twigs ── */
            .seed-playing .sa-twig { animation: saDraw 0.9s ease-out both; }
            .seed-playing .sa-tw1 { animation-delay: 4.5s; }
            .seed-playing .sa-tw2 { animation-delay: 4.7s; }
            .seed-playing .sa-tw3 { animation-delay: 4.6s; }
            .seed-playing .sa-tw4 { animation-delay: 4.9s; }
            .seed-playing .sa-tw5 { animation-delay: 4.8s; }

            /* ── 7. Leaves bloom ── */
            .seed-playing .sa-leaf {
              animation: saBloom 0.8s cubic-bezier(0.22, 1.3, 0.64, 1) both;
            }
            @keyframes saBloom {
              0%   { transform: scale(0) rotate(-8deg); opacity: 0; }
              100% { transform: scale(1) rotate(0deg);  opacity: 1; }
            }
            .seed-playing .sa-l1  { animation-delay: 5.0s; }
            .seed-playing .sa-l2  { animation-delay: 5.12s; }
            .seed-playing .sa-l3  { animation-delay: 5.24s; }
            .seed-playing .sa-l4  { animation-delay: 5.08s; }
            .seed-playing .sa-l5  { animation-delay: 5.36s; }
            .seed-playing .sa-l6  { animation-delay: 5.2s; }
            .seed-playing .sa-l7  { animation-delay: 5.48s; }
            .seed-playing .sa-l8  { animation-delay: 5.32s; }
            .seed-playing .sa-l9  { animation-delay: 5.4s; }
            .seed-playing .sa-l10 { animation-delay: 5.56s; }
            .seed-playing .sa-l11 { animation-delay: 5.52s; }
            .seed-playing .sa-l12 { animation-delay: 5.64s; }
            .seed-playing .sa-l13 { animation-delay: 5.16s; }
            .seed-playing .sa-l14 { animation-delay: 5.28s; }
            .seed-playing .sa-l15 { animation-delay: 5.44s; }
            .seed-playing .sa-l16 { animation-delay: 5.6s; }
            .seed-playing .sa-l17 { animation-delay: 5.68s; }
            .seed-playing .sa-l18 { animation-delay: 5.76s; }
            .seed-playing .sa-l19 { animation-delay: 5.72s; }
            .seed-playing .sa-l20 { animation-delay: 5.8s; }

            /* ── 8. Shadow fades in ── */
            .seed-playing .sa-shadow {
              animation: saFade 1.5s ease-out 5.4s both;
            }
            @keyframes saFade { from { opacity: 0; } to { opacity: 1; } }

            /* ── 9. Grass draws ── */
            .seed-playing .sa-grass { animation: saDraw 0.8s ease-out both; }
            .seed-playing .sa-g1 { animation-delay: 2.8s; }
            .seed-playing .sa-g2 { animation-delay: 3.1s; }
            .seed-playing .sa-g3 { animation-delay: 3.3s; }
            .seed-playing .sa-g4 { animation-delay: 3.0s; }
            .seed-playing .sa-g5 { animation-delay: 3.5s; }

            /* ── 10. Sway forever ── */
            .seed-playing .sa-tree {
              transform-origin: 200px 402px;
              animation: saSway 7s ease-in-out 6.2s infinite;
            }
            @keyframes saSway {
              0%, 100% { transform: rotate(0deg); }
              30%      { transform: rotate(0.7deg); }
              70%      { transform: rotate(-0.7deg); }
            }

            /* ── Ambient particles ── */
            .seed-playing .sa-particle {
              animation: saFloat 4.5s ease-in-out infinite both;
            }
            @keyframes saFloat {
              0%, 100% { opacity: 0.08; transform: translateY(0); }
              50%      { opacity: 0.22; transform: translateY(-12px); }
            }
          `}</style>
        </defs>

        <g className={playing ? 'seed-playing' : ''}>

          {/* ── Ambient floating particles ── */}
          <circle cx="72"  cy="155" r="2.5" fill={SAGE_4} className="sa-particle" style={{ animationDelay: '0s' }} />
          <circle cx="330" cy="195" r="2"   fill={SAGE_4} className="sa-particle" style={{ animationDelay: '1.4s' }} />
          <circle cx="90"  cy="350" r="1.8" fill={SAGE_4} className="sa-particle" style={{ animationDelay: '2.8s' }} />
          <circle cx="315" cy="105" r="2.2" fill={SAGE_4} className="sa-particle" style={{ animationDelay: '0.7s' }} />
          <circle cx="348" cy="365" r="1.5" fill={SAGE_4} className="sa-particle" style={{ animationDelay: '2.1s' }} />
          <circle cx="55"  cy="255" r="2"   fill={SAGE_4} className="sa-particle" style={{ animationDelay: '3.5s' }} />

          {/* ── Ground ── */}
          <path d="M 45 408 Q 120 414 200 416 Q 280 414 355 408"
            fill="none" stroke={BARK_2} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          <path d="M 75 413 Q 200 420 325 413"
            fill="none" stroke={BARK_2} strokeWidth="0.8" opacity="0.14" />
          {/* Small mound at base */}
          <path d="M 178 406 Q 200 400 222 406"
            fill="none" stroke={BARK_2} strokeWidth="1" strokeLinecap="round" opacity="0.22" />

          {/* ── Canopy shadow on ground ── */}
          <ellipse cx="200" cy="414" rx="72" ry="7" fill={FOREST_7} opacity="0.05" className="sa-shadow" />

          {/* ── Seed ── */}
          <g className="sa-seed">
            <ellipse cx="200" cy="399" rx="7" ry="4.5" fill={BARK_4} />
            <ellipse cx="200" cy="398" rx="4" ry="2" fill={BARK_3} opacity="0.3" />
          </g>

          {/* ── Sprout (brief seedling stage) ── */}
          <g className="sa-sprout">
            <line x1="200" y1="400" x2="200" y2="376" stroke={SAGE_5} strokeWidth="1.5" strokeLinecap="round" />
            {/* Cotyledon leaves */}
            <path d="M 200 378 Q 190 374 188 370 Q 190 367 194 370 Q 197 374 200 378 Z"
              fill={SAGE_4} opacity="0.85" />
            <path d="M 200 378 Q 210 374 212 370 Q 210 367 206 370 Q 203 374 200 378 Z"
              fill={SAGE_4} opacity="0.85" />
          </g>

          {/* ── Tree group (sways after bloom) ── */}
          <g className="sa-tree">

            {/* Roots */}
            <path d="M 197 404 Q 180 420 168 444"
              fill="none" stroke={BARK_3} strokeWidth="1.6" strokeLinecap="round" className="sa-root sa-r1" />
            <path d="M 203 404 Q 222 422 234 446"
              fill="none" stroke={BARK_3} strokeWidth="1.6" strokeLinecap="round" className="sa-root sa-r2" />
            <path d="M 200 406 Q 196 428 194 450"
              fill="none" stroke={BARK_3} strokeWidth="1.1" strokeLinecap="round" className="sa-root sa-r3" />
            <path d="M 200 406 Q 210 430 216 448"
              fill="none" stroke={BARK_3} strokeWidth="0.9" strokeLinecap="round" className="sa-root sa-r4" />

            {/* Grass blades near base */}
            <path d="M 170 406 Q 167 393 164 382"
              fill="none" stroke={SAGE_4} strokeWidth="1" strokeLinecap="round" opacity="0.45" className="sa-grass sa-g1" />
            <path d="M 230 405 Q 234 394 237 383"
              fill="none" stroke={SAGE_5} strokeWidth="1" strokeLinecap="round" opacity="0.4" className="sa-grass sa-g2" />
            <path d="M 155 409 Q 151 398 148 389"
              fill="none" stroke={SAGE_4} strokeWidth="0.8" strokeLinecap="round" opacity="0.32" className="sa-grass sa-g3" />
            <path d="M 243 407 Q 248 397 252 388"
              fill="none" stroke={SAGE_5} strokeWidth="0.8" strokeLinecap="round" opacity="0.32" className="sa-grass sa-g4" />
            <path d="M 183 407 Q 180 396 178 387"
              fill="none" stroke={SAGE_4} strokeWidth="0.7" strokeLinecap="round" opacity="0.28" className="sa-grass sa-g5" />

            {/* ── Trunk (tapered filled shape) ── */}
            <g className="sa-trunk">
              <path
                d="M 195 403 C 195 375 194 342 195 300 C 196 258 196 224 198 180 L 202 178 C 203 222 204 256 204 298 C 205 340 205 375 205 403 Z"
                fill={BARK_5}
              />
              {/* Bark highlight */}
              <path
                d="M 198 400 C 198 365 197 330 198 290 C 199 250 198 218 199 182"
                fill="none" stroke={BARK_4} strokeWidth="0.7" opacity="0.35"
              />
              {/* Dark side */}
              <path
                d="M 203 400 C 203 365 204 332 203 295 C 203 258 203 225 202 182"
                fill="none" stroke={FOREST_7} strokeWidth="0.5" opacity="0.15"
              />
            </g>

            {/* ── Main branches ── */}
            <path d="M 197 322 Q 172 304 148 288"
              fill="none" stroke={BARK_5} strokeWidth="2.3" strokeLinecap="round" className="sa-branch sa-b1" />
            <path d="M 203 284 Q 232 266 262 248"
              fill="none" stroke={BARK_5} strokeWidth="2.3" strokeLinecap="round" className="sa-branch sa-b2" />
            <path d="M 198 252 Q 164 234 136 218"
              fill="none" stroke={BARK_5} strokeWidth="2" strokeLinecap="round" className="sa-branch sa-b3" />
            <path d="M 202 220 Q 238 202 268 188"
              fill="none" stroke={BARK_5} strokeWidth="2" strokeLinecap="round" className="sa-branch sa-b4" />
            <path d="M 199 196 Q 174 178 155 164"
              fill="none" stroke={BARK_5} strokeWidth="1.8" strokeLinecap="round" className="sa-branch sa-b5" />
            <path d="M 201 202 Q 224 186 245 174"
              fill="none" stroke={BARK_5} strokeWidth="1.6" strokeLinecap="round" className="sa-branch sa-b6" />

            {/* ── Sub-branches / twigs ── */}
            <path d="M 160 300 Q 147 289 138 275"
              fill="none" stroke={BARK_4} strokeWidth="1.2" strokeLinecap="round" className="sa-twig sa-tw1" />
            <path d="M 250 255 Q 261 246 270 234"
              fill="none" stroke={BARK_4} strokeWidth="1.2" strokeLinecap="round" className="sa-twig sa-tw2" />
            <path d="M 148 226 Q 137 217 126 206"
              fill="none" stroke={BARK_4} strokeWidth="1" strokeLinecap="round" className="sa-twig sa-tw3" />
            <path d="M 255 195 Q 264 188 275 178"
              fill="none" stroke={BARK_4} strokeWidth="1" strokeLinecap="round" className="sa-twig sa-tw4" />
            <path d="M 165 172 Q 155 164 146 154"
              fill="none" stroke={BARK_4} strokeWidth="0.8" strokeLinecap="round" className="sa-twig sa-tw5" />

            {/* ── Canopy: 20 realistic leaves ── */}

            {/* Lower canopy */}
            <Leaf x={145} y={285} size={1.1}  rotation={-24} fill={SAGE_4}   opacity={0.78} cls="sa-l1" />
            <Leaf x={260} y={250} size={1.2}  rotation={18}  fill={SAGE_5}   opacity={0.72} cls="sa-l2" />
            <Leaf x={168} y={272} size={0.9}  rotation={-12} fill={SAGE_5}   opacity={0.68} cls="sa-l13" />
            <Leaf x={244} y={268} size={1.0}  rotation={14}  fill={SAGE_4}   opacity={0.72} cls="sa-l14" />

            {/* Mid canopy */}
            <Leaf x={133} y={215} size={1.25} rotation={-30} fill={FOREST_6} opacity={0.68} cls="sa-l3" />
            <Leaf x={268} y={192} size={1.1}  rotation={24}  fill={SAGE_4}   opacity={0.72} cls="sa-l4" />
            <Leaf x={232} y={208} size={0.95} rotation={10}  fill={SAGE_5}   opacity={0.66} cls="sa-l7" />
            <Leaf x={162} y={202} size={1.05} rotation={-16} fill={SAGE_4}   opacity={0.72} cls="sa-l8" />
            <Leaf x={196} y={215} size={0.85} rotation={-4}  fill={FOREST_6} opacity={0.58} cls="sa-l15" />
            <Leaf x={248} y={228} size={1.0}  rotation={16}  fill={SAGE_5}   opacity={0.66} cls="sa-l16" />

            {/* Upper canopy */}
            <Leaf x={152} y={166} size={1.15} rotation={-26} fill={SAGE_5}   opacity={0.76} cls="sa-l5" />
            <Leaf x={245} y={176} size={1.05} rotation={20}  fill={FOREST_6} opacity={0.7}  cls="sa-l6" />
            <Leaf x={200} y={172} size={1.3}  rotation={2}   fill={FOREST_6} opacity={0.56} cls="sa-l9" />
            <Leaf x={178} y={182} size={0.92} rotation={-10} fill={SAGE_4}   opacity={0.68} cls="sa-l10" />
            <Leaf x={224} y={162} size={1.1}  rotation={14}  fill={SAGE_5}   opacity={0.72} cls="sa-l17" />

            {/* Crown */}
            <Leaf x={188} y={148} size={1.0}  rotation={-14} fill={FOREST_6} opacity={0.74} cls="sa-l11" />
            <Leaf x={215} y={146} size={1.05} rotation={10}  fill={SAGE_5}   opacity={0.76} cls="sa-l12" />
            <Leaf x={200} y={136} size={1.0}  rotation={0}   fill={FOREST_6} opacity={0.8}  cls="sa-l18" />
            <Leaf x={172} y={156} size={0.88} rotation={-20} fill={SAGE_4}   opacity={0.66} cls="sa-l19" />
            <Leaf x={234} y={155} size={0.92} rotation={16}  fill={SAGE_5}   opacity={0.7}  cls="sa-l20" />

          </g>
        </g>
      </svg>
    </div>
  );
}
