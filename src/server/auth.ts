import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
// import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { env } from "~/env.mjs";
import { db } from "~/server/db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,      
      user: {
        ...session.user,
        id: user.id,        
      },
    }),
    redirect: async ({ url, baseUrl }) => {
      console.log('Redirect URL:', url);
      console.log('Base URL:', baseUrl);
    
      if (url.startsWith(baseUrl)) {
        console.log('Redirecting to:', url);
        return url;
      } else {
        console.log('Redirecting to dashboard');
        return baseUrl + '/dashboard';
      }
    }
    
  },
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET
    }),

  ],
};


export const getServerAuthSession = () => getServerSession(authOptions);
