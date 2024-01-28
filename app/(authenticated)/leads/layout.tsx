'use client';
import { useState } from 'react';
import { ExecutiveContext } from '@/context/executives-context';
import { AssignToUsers } from '@/models/global-types';

export default function LeedsLayout({ children }: { children: React.ReactNode }) {
  const [executivesOption, setExecutivesOption] = useState<AssignToUsers[]>([]);

  return (
    <ExecutiveContext.Provider value={{ executivesOption, setExecutivesOption }}>
      {children}
    </ExecutiveContext.Provider>
  );
}
