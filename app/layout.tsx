import { auth } from '@/auth';
import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

import type { Metadata, Viewport } from 'next';

const APP_NAME = 'Next-Shadcn-TWA';
const APP_DEFAULT_TITLE = 'Next-Shadcn-TWA';
const APP_TITLE_TEMPLATE = '%s - Next-Shadcn-TWA';
const APP_DESCRIPTION = 'Next-Shadcn-TWA';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  }
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html suppressHydrationWarning={true}>
      <body className={'overflow-hidden'}>
        <NextTopLoader showSpinner={false} />
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
