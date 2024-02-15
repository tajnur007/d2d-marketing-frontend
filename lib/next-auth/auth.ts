import { AuthService } from '@/services/auth-service';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createAuthData } from '../actions';

import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { UserService } from '@/services/user-services';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  pages: {
    signIn: PAGE_ROUTES?.Signin,
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };

          if (!email || !password) {
            return null;
          }
          const loginData = { email, password };

          const AuthServices = new AuthService();
          const response = await AuthServices.login(loginData);
          const token = response?.access_token;
          if (token) {
            const Service = new UserService();
            const resp = await Service.getUserInfo(token);
            response.user_type = resp?.data?.Data?.user_type;
            createAuthData(response);
          }

          return response;
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
