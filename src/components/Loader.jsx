import { useEffect, useState } from 'react';

/**
 * "The Descent" — loader.
 *
 * A single vertical line of Salt Crystal light on Tunnel Black elongates
 * downward (scaleY 0 -> 1) over ~1.2s, easing cubic-bezier(0.25,0.1,0.25,1).
 * "Sztolnia" fades in beneath it, then the italic accent line
 * "schodzimy / we descend" fades in below that. The line briefly brightens
 * using the ignition easing curve, then the whole screen dissolves.
 *
 * Capped at 1.8s desktop / 1.2s mobile via reduced total timeline, with
 * tap/key/scroll-to-skip after 600ms. Fully replaced by a 200ms fade under
 * prefers-reduced-motion. sessionStorage-gated by the parent (App.jsx).
 */
export default function Loader({ onDone }) {
  const [stage, setStage] = useState(0); // 0: start, 1: line growing, 2: text, 3: ignite, 4: exit
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function finish(exitDelay = 500) {
      setStage(4);
      setHidden(true);
      setTimeout(onDone, exitDelay);
    }

    if (prefersReduced) {
      setStage(3);
      const t = setTimeout(() => finish(150), 150);
      return () => clearTimeout(t);
    }

    const t1 = setTimeout(() => setStage(1), 80);
    const t2 = setTimeout(() => setStage(2), 1000);
    const t3 = setTimeout(() => setStage(3), 1500);
    const t4 = setTimeout(() => finish(550), 1800);

    const skip = () => finish(300);
    const skipTimer = setTimeout(() => {
      window.addEventListener('click', skip, { once: true });
      window.addEventListener('keydown', skip, { once: true });
      window.addEventListener('touchstart', skip, { once: true });
      window.addEventListener('wheel', skip, { once: true });
    }, 600);

    return () => {
      [t1, t2, t3, t4, skipTimer].forEach(clearTimeout);
      window.removeEventListener('click', skip);
      window.removeEventListener('keydown', skip);
      window.removeEventListener('touchstart', skip);
      window.removeEventListener('wheel', skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-tunnel flex flex-col items-center justify-center transition-opacity duration-500 ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)' }}
    >
      <div className="sr-only" role="status">Sztolnia — wczytywanie</div>

      {/* The lowered line of light */}
      <div
        aria-hidden="true"
        className="relative w-px h-32 sm:h-44 origin-top transition-all"
        style={{
          background: stage >= 3
            ? 'linear-gradient(to bottom, var(--salt) 0%, var(--copper) 100%)'
            : 'var(--salt)',
          transform: stage >= 1 ? 'scaleY(1)' : 'scaleY(0)',
          opacity: stage >= 3 ? 1 : 0.85,
          boxShadow: stage >= 3 ? '0 0 24px rgba(201,116,58,0.55)' : '0 0 10px rgba(237,231,221,0.25)',
          transitionDuration: stage >= 3 ? '500ms' : '1200ms',
          transitionTimingFunction: stage >= 3
            ? 'cubic-bezier(0.34,1.56,0.64,1)'
            : 'cubic-bezier(0.25,0.1,0.25,1)',
        }}
      />

      <div className="mt-7 text-center px-6">
        <div
          className="font-display text-2xl sm:text-3xl tracking-[0.04em] text-salt transition-all duration-700"
          style={{
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? 'translateY(0)' : 'translateY(6px)',
            transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)',
          }}
        >
          Sztolnia
        </div>
        <div
          className="accent-line mt-2 text-sm sm:text-base text-stone transition-all duration-700"
          style={{
            opacity: stage >= 2 ? 1 : 0,
            transform: stage >= 2 ? 'translateY(0)' : 'translateY(6px)',
            transitionDelay: '200ms',
            transitionTimingFunction: 'cubic-bezier(0.25,0.1,0.25,1)',
          }}
        >
          schodzimy / we descend
        </div>
      </div>
    </div>
  );
}
