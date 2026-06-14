import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered reveal wrapper.
 *
 * "Descent" sections (cool, dark, near-monochrome) use a barely perceptible
 * 4-8px drift + opacity over ~900ms — stillness, not theatrics.
 *
 * "Arrival" sections (warm, Ember Copper/Distillery Amber) use a slightly
 * more energetic 16-24px drift over ~700ms.
 *
 * One-time trigger at ~85% viewport. Respects prefers-reduced-motion via CSS
 * (transition disabled, opacity:1 fallback).
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div', tone = 'descent' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const drift = tone === 'arrival' ? 20 : 6;
  const duration = tone === 'arrival' ? 700 : 950;

  return (
    <Tag
      ref={ref}
      className={`${className} ${visible ? 'opacity-100' : 'opacity-0'} motion-safe:transition-all`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        transitionDelay: `${delay}ms`,
        transform: visible ? 'translateY(0)' : `translateY(${drift}px)`,
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}
