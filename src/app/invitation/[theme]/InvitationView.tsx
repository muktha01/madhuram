'use client';

import dynamic from 'next/dynamic';

/* Rendered client-only, deliberately.
   The templates are built on Lenis, IntersectionObserver, matchMedia and
   parallax, and each reads its own theme from the URL at module scope. SSR
   would buy nothing for a private link that guests open once, while the link
   preview that actually matters is generated server-side in generateMetadata.
   `ssr: false` also removes any chance of module state leaking between
   requests on the server. */
const EmeraldLayout = dynamic(() => import('../../../themes/EmeraldLayout'), {
  ssr: false,
});
const ClassicLayout = dynamic(() => import('../../../themes/ClassicLayout'), {
  ssr: false,
});

export default function InvitationView({ theme }: { theme: string }) {
  return theme === 'emerald-temple' ? <EmeraldLayout /> : <ClassicLayout />;
}
