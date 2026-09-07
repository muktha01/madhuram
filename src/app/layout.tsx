import type { Metadata, Viewport } from 'next';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aahvanam.in'),
  title: {
    default: 'Aahvanam · Premium Digital Invitations',
    template: '%s · Aahvanam',
  },
  description:
    'A complete digital invitation platform for all your auspicious occasions. From weddings to birthdays, create elegant and traditional invites with live countdowns, photos, and event details on one beautiful link.',
  keywords: [
    'aahvanam',
    'premium digital invitations',
    'birthday invitation websites',
    'anniversary celebration invites',
    'surprise party digital cards',
    'luxury wedding websites',
    'indian event ecards',
    'traditional digital invites',
    'south indian wedding cards',
    'shubhakaryam invitations',
    'online event invitations',
    'custom event websites',
    'save the date ecards',
    'digital rsvp tracking',
    'event countdown website',
    'aahvanam digital invites',
    'bespoke event websites',
    'paperless indian invitations',
    'housewarming digital cards',
    'cradle ceremony invites',
    'elegant ecards',
  ],
  openGraph: {
    title: 'Aahvanam · Premium Digital Invitations',
    description: 'A complete digital invitation platform for all your auspicious occasions. Create elegant and traditional invites on one beautiful link.',
    url: 'https://www.aahvanam.in',
    siteName: 'Aahvanam',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aahvanam · Premium Digital Invitations',
    description: 'A complete digital invitation platform for all your auspicious occasions.',
  },
};

/* themeColor belongs in viewport, not metadata, since Next 14 */
export const viewport: Viewport = {
  themeColor: '#faf9f7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
