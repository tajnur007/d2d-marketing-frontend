export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/leads/:path*',
    '/settings/:path*',
    '/employee-list/:path*',
  ],
};
