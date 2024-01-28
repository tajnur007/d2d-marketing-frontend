'use client';
import { useState } from 'react';
import { ExecutiveContext } from '@/components/Context/executives-context';
import { AssignToUsers } from '@/models/global-types';

export default async function LeedsLayout({ children }: { children: React.ReactNode }) {
  const [executivesOption, setExecutivesOption] = useState<AssignToUsers[]>([]);

  return (
    <ExecutiveContext.Provider value={{ executivesOption, setExecutivesOption }}>
      {children}
    </ExecutiveContext.Provider>
  );
}
