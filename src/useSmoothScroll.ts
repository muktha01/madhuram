import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Inertia scrolling, the effect gsap.com gets from ScrollSmoother.
 *
 * Lenis intercepts wheel and touch input and eases the scroll position on a
 * rAF loop, so momentum carries and settles instead of snapping. It does not
 * restructure the DOM, which matters here: the page has a sticky nav, a fixed
 * entry overlay and a fixed audio button, all of which a wrapper-based
 * smoother would have to be told about individually.
 */

/* iPadOS reports as "MacIntel" with no "iPad" in the UA string, so a plain
   /iPhone|iPad/ test misses it; the touch-point check catches that case. */
function isIOS() {
  if (typeof navigator === 'undefined') return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
}

export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    // Never hijack scrolling for someone who has asked for less motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const touch = window.matchMedia('(pointer: coarse)').matches;

    /* syncTouch is what let a phone's touch drag itself be re-timed by Lenis
       rather than just proxying the OS. Lenis's own docs and changelog flag
       it as "can be unstable on iOS<16" / "touch events may behave
       unexpectedly" there, and Apple's UA string does not expose a safe way
       to tell iOS 16 from 15 at runtime, so the reliable fix is to leave it
       off for iOS altogether. iOS's native momentum scroll is excellent on
       its own; the smoothing that actually needs Lenis on that platform is
       the wheel case, which does not apply to touch anyway. Android keeps
       syncTouch, where it is stable. */
    const useSyncTouch = touch && !isIOS();

    const lenis = new Lenis({
      duration: 1.15,
      // gentle exponential ease-out: quick to respond, long to settle
      easing: (t: number) => 1 - Math.pow(1 - t, 3.4),
      wheelMultiplier: 0.95,

      /* The lerp is loosened from the 0.075 default because a finger is a
         direct manipulation: too much easing feels like lag under the thumb,
         where the same value feels luxurious on a wheel. Only applies when
         syncTouch is actually on. */
      syncTouch: useSyncTouch,
      syncTouchLerp: 0.1,
      touchInertiaExponent: 1.9, // default 1.7; carries the flick a little further
      touchMultiplier: 1.4,

      // Lenis handles in-page anchor links itself, easing instead of jumping.
      anchors: { offset: -20 },
    });

    /* `scroll-behavior: smooth` in the stylesheet fights Lenis for control of
       the same property, which produces a stutter on anchor jumps. */
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      root.style.scrollBehavior = previousBehavior;
    };
  }, [enabled]);
}
