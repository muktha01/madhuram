import type { Metadata, Viewport } from 'next';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Shubh · Digital wedding invitations',
    template: '%s · Shubh',
  },
  description:
    'A complete invitation website for your wedding, designed around your own tradition. Every function, your photographs and a live countdown, on one link you send by WhatsApp.',
  openGraph: { type: 'website', siteName: 'Shubh' },
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
