import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { themes } from '../../../theme/config';
import InvitationView from './InvitationView';

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
  return <InvitationView theme={theme} />;
}
