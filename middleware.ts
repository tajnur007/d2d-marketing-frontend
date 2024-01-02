export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/dashboard', '/profile', '/posts', '/scheduled', '/settings'],
};
