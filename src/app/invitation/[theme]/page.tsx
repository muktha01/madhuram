import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactDOM from 'react-dom';
import { themes } from '../../../theme/config';
import InvitationView from './InvitationView';

/* The single asset a guest's connection actually races on: the largest thing
   painted before anything below the fold matters. Everything else on the
   page is `loading="lazy"`, so this is deliberately the only preload per
   theme rather than a list, which would just make the race worse. */
const HERO_PRELOAD: Record<string, string> = {
  'emerald-temple': '/assets/emerald-temple/temple-hero.png',
  'kalyana-mandapam': '/assets/kalyana-mandapam/entry-card.jpg',
  'royal-rajput': '/assets/royal-rajput/entry-card.jpg',
};

type Props = { params: Promise<{ theme: string }> };

/* Pre-render one route per configured theme at build time */
export function generateStaticParams() {
  return Object.keys(themes).map((theme) => ({ theme }));
}

/* Metadata still comes from the server even though the invitation body is
   client-only. That is what WhatsApp and iMessage read for link previews,
   which matters far more here than indexing the page itself. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { theme } = await params;
  if (!(theme in themes)) return {};
  const title = 'Rashmika & Vijay';
  return {
    title,
    description: 'We are getting married. Join us for the celebrations.',
    openGraph: { title, type: 'website' },
  };
}

export default async function InvitationPage({ params }: Props) {
  const { theme } = await params;
  if (!(theme in themes)) notFound();

  /* ReactDOM.preload emits a real <link rel="preload"> in <head> during the
     server render, so the browser starts this fetch immediately rather than
     waiting for the client bundle to mount and discover the <img> tag. On a
     slow connection that head start is what decides whether the hero is
     already painted by the time a guest's attention would otherwise wander. */
  const heroImage = HERO_PRELOAD[theme];
  if (heroImage) ReactDOM.preload(heroImage, { as: 'image', fetchPriority: 'high' });

  return <InvitationView theme={theme} />;
}
