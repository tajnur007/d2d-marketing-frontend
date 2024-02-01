'use client';
import { useState, useRef } from 'react';
import { LeadsContext } from '@/context/leads-context';
import { AssignToUsers, LeadsDataType } from '@/models/global-types';

export default function LeedsLayout({ children }: { children: React.ReactNode }) {
  const [executivesOption, setExecutivesOption] = useState<AssignToUsers[]>([]);
  const [createdByOptions, setCreatedByOptions] = useState<LeadsDataType[]>([]);
   const leadDetailsRef = useRef(null);

  return (
    <LeadsContext.Provider
      value={{
        executivesOption,
        setExecutivesOption,
        leadDetailsRef,
        createdByOptions,
        setCreatedByOptions,
      }}>
      {children}
    </LeadsContext.Provider>
  );
}
