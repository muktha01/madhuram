import { redirect } from 'next/navigation';
import { themes } from '../theme/config';
import MainSite from '../site/MainSite';

/* Server component: the marketing page is the one part of the product that
   wants indexing, so it renders on the server. */
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ theme?: string }>;
}) {
  const { theme } = await searchParams;
  /* Links shared before the route change used /?theme=<id>. Forward them
     rather than breaking invitations already sent to guests. */
  if (theme && theme in themes) redirect(`/invitation/${theme}`);
  return <MainSite />;
}
