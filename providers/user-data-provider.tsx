'use client';

import { useSession } from 'next-auth/react';
import { ReactNode, createContext, useEffect, useState } from 'react';

export const UserContext = createContext({ userData: null });

const UserDataProvider = ({ children }: { children?: ReactNode }) => {
  const session = useSession();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (session?.data?.user) {
      setUserData({ ...session?.data?.user });
    }
  }, [session]);

  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export default UserDataProvider;
