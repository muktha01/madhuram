export interface ThemeConfig {
  id: string;
  assetPath: string;
  /* Optional sections. Present only when the theme actually ships the art:
     royal-rajput has no video-wall.jpg, so rendering that section for it
     produced a broken image. Absence here is the switch. */
  videoWall?: string;
  heroMedia: {
    type: 'video' | 'image';
    src: string;
  };
}

export const themes: Record<string, ThemeConfig> = {
  'kalyana-mandapam': {
    id: 'kalyana-mandapam',
    assetPath: '/assets/kalyana-mandapam',
    videoWall: 'video-wall.jpg',
    heroMedia: {
      type: 'video',
      src: '/assets/kalyana-mandapam/hero-procession-bg-v2.mp4',
    }
  },
  'royal-rajput': {
    id: 'royal-rajput',
    assetPath: '/assets/royal-rajput',
    heroMedia: {
      type: 'image',
      src: '/assets/royal-rajput/temple-scenery.png',
    }
  },
  'emerald-temple': {
    id: 'emerald-temple',
    assetPath: '/assets/emerald-temple',
    heroMedia: {
      type: 'image',
      src: '/assets/emerald-temple/temple-hero.png',
    }
  }
};

export type ThemeId = keyof typeof themes;
