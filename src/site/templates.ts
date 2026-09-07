export type TemplateCard = {
  id: string;
  name: string;
  tradition: string;
  blurb: string;
  /** Swatches shown on the card, in the order they read in the design. */
  palette: string[];
  /** Cover art, taken from the template's own entry card. */
  cover: string;
  visible?: boolean;
};

/* Only themes that actually render are listed. `south-indian` has a single
   asset and no layout, so it is deliberately absent rather than shown as a
   dead link. */
export const TEMPLATES: TemplateCard[] = [
  {
    id: 'emerald-temple',
    name: 'Emerald Temple',
    tradition: 'South Indian',
    blurb:
      'Deep emerald and temple gold, with carved arches, a lotus pond and a footprint trail that walks guests from function to function.',
    palette: ['#063020', '#c5a059', '#e9bc8a'],
    cover: '/assets/emerald-temple/entry-card.jpg',
    visible: true,
  },
  {
    id: 'kalyana-mandapam',
    name: 'Kalyana Mandapam',
    tradition: 'Tamil',
    blurb:
      'Warm parchment and maroon framed in a kolam border, built around a full-width procession film and a hand-drawn event trail.',
    palette: ['#fbeeb8', '#9a1b41', '#c9932f'],
    cover: '/assets/kalyana-mandapam/entry-card.jpg',
    visible: true,
  },
  {
    id: 'royal-rajput',
    name: 'Royal Rajput',
    tradition: 'North Indian',
    blurb:
      'Regal mandala work and peacock arches on a saffron ground, for a celebration with a palace at its centre.',
    palette: ['#7a1f2e', '#d9a441', '#f3e19c'],
    cover: '/assets/royal-rajput/entry-card.jpg',
    visible: false,
  },
];
