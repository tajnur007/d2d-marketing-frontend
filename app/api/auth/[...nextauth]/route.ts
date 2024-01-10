import { authOptions } from '@/lib/next-auth/auth';
import NextAuth from 'next-auth';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// import CredentialsProvider from 'next-auth/providers/credentials';
// import { NextAuthOptions } from 'next-auth';
// import NextAuth from 'next-auth/next';

// const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {},
//       async authorize(credentials) {
//         console.log(credentials);
//         return credentials;
//       },
//     }),
//   ],
//   session: {
//     strategy: 'jwt',
//   },
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: '/dashboard',
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
