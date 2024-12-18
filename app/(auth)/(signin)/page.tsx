import { Metadata } from 'next';
import GoogleSignInButton from '../_components/google-auth-button';

export const metadata: Metadata = {
  title: 'Sign-in',
  description: 'Sign-in with Google'
};

export default function SignInViewPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center">
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <GoogleSignInButton />
        </div>
      </div>
    </div>
  );
}
