'use client';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { DrumIcon } from 'lucide-react';
import { Icons } from '@/components/icons';
import { RainbowButton } from '@/components/ui/rainbow-button';

export default function GoogleSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  return (
    <RainbowButton
      onClick={() => signIn('google', { callbackUrl: callbackUrl ?? '/app' })}
    >
      <Icons.google className="mr-2 size-4" />
      Sign-in with Google
    </RainbowButton>
  );
}
