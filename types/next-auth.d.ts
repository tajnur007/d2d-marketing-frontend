// next-auth.d.ts

import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user?: {
      user_type?: string | undefined;
    };
  }
}
