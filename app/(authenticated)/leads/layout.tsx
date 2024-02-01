'use client';
import { useState } from 'react';
import { ExecutiveContext, createdByContext } from '@/context/executives-context';
import { AssignToUsers, LeadsDataType } from '@/models/global-types';

export default function LeedsLayout({ children }: { children: React.ReactNode }) {
  const [executivesOption, setExecutivesOption] = useState<AssignToUsers[]>([]);
  const [createdByOptions, setCreatedByOptions] = useState<LeadsDataType[]>([]);

  return (
    <>
      <ExecutiveContext.Provider value={{ executivesOption, setExecutivesOption }}>
        {children}
      </ExecutiveContext.Provider>
      <createdByContext.Provider value={{ createdByOptions, setCreatedByOptions }}>
        {children}
      </createdByContext.Provider>
    </>
  );
}
