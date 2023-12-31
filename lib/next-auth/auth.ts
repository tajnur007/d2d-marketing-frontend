import { AuthService } from '@/services/auth-service';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createAuthData } from '../actions';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/singin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'safwan@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }
        try {
          const loginData = {
            username: credentials?.username,
            password: credentials?.password,
          };
          const apiService = new AuthService();
          const response = await apiService.login(loginData);
          createAuthData(response);
          return response.data;
        } catch (error: any) {
          let callbackUrl: any;
          throw `/auth/login?callbackUrl=${encodeURIComponent(
            callbackUrl
          )}&error=CredentialsSignin`;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // token = await refreshAccessToken(token.refreshToken);
      return { ...token, ...user, ...account };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
};

async function refreshAccessToken(refreshToken: any) {
  try {
    // Get a new set of tokens with a refreshToken
    const refreshData: any = { refreshToken: refreshToken };
    const apiService = new AuthService();

    return {
      accessToken: '',
      refreshToken: '',
    };
  } catch (error) {
    return {
      ...refreshToken,
      error: error,
    };
  }
}
