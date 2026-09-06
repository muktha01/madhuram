import { useEffect, useRef } from 'react';

/**
 * Publishes the section's own scroll progress onto the element as CSS vars:
 *   --py  scrolled distance in px (0 -> section height)
 *   --pr  the same as a 0..1 ratio
 * Layers inside then pick their own speed with calc(var(--py) * n).
 */
export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      if (rect.height === 0) return;
      const offset = Math.min(Math.max(-rect.top, 0), rect.height);
      el.style.setProperty('--py', `${offset}px`);
      el.style.setProperty('--pr', `${offset / rect.height}`);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
