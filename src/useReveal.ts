import { useLayoutEffect } from 'react';

/**
 * Rise-and-fade entrance for anything marked [data-reveal].
 *
 * The hero fades its content OUT as you scroll past, which suits a first
 * screen you leave behind. Mid-page that would dim a section while it is
 * still being read, so the same motion is played on entry instead.
 *
 * Children of a marked container are staggered by CSS, so one attribute per
 * section is enough and the markup stays clean.
 */
export function useReveal() {
  /* Layout effect, not effect: the hidden state is added before the browser
     paints, so there is no flash of laid-out content being hidden again. */
  useLayoutEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-self]"));
    if (items.length === 0) return;

    /* Gate the hidden state on JS having run. Without this, a script failure
       would leave every section permanently invisible. */
    document.documentElement.classList.add('reveal-ready');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      items.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target); // reveal once, never re-hide
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
