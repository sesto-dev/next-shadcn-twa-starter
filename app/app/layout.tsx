import type { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Next-Shadcn-TWA',
  description:
    'Trusted Web Activities Template built with Next.js, TailwindCSS and Shad-CN'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Persisting the sidebar state in the cookie.
  const cookieStore = cookies();
  const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true';
  return <>{children}</>;
}
