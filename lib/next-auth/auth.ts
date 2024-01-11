import { AuthService } from '@/services/auth-service';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { createAuthData } from '../actions';
import axios from 'axios';
import {
  NEXTAUTH_SECRET,
  PAGE_ROUTES,
  SERVER_BASE_URL,
} from '@/utils/constants/common-constants';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: NEXTAUTH_SECRET,
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

          const response = await axios.post(`${SERVER_BASE_URL}/auth/login`, loginData);

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

// const apiService = new AuthService('http://157.245.204.196:8021/v1/auth/login');

// const response = await apiService.login(loginData);
// console.log(response);
// createAuthData(response);
