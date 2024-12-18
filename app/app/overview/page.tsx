import PageContainer from '@/components/layout/page-container';

import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import AuthInfo from '@/components/layout/auth-info';

export default async function OverViewPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/signin');
  }

  return (
    <div className="relative h-screen flex-col items-center justify-center">
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <AuthInfo />
        </div>
      </div>
    </div>
  );
}
