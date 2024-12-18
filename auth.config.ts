import { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    })
  ],
  pages: {
    signIn: '/' //sigin page
  }
} satisfies NextAuthConfig;

export default authConfig;
