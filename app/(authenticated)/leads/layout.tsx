'use client';
import { useState, useRef } from 'react';
import { LeadsContext } from '@/context/leads-context';
import { AssignToUsers, LeadsDataType, LeadListType } from '@/models/global-types';

export default function LeedsLayout({ children }: { children: React.ReactNode }) {
  const [executivesOption, setExecutivesOption] = useState<AssignToUsers[]>([]);
  const [createdByOptions, setCreatedByOptions] = useState<LeadsDataType[]>([]);
  const [leadsData, setLeadsData] = useState<LeadListType[]>([]);
  const leadDetailsRef = useRef(null);

  return (
    <LeadsContext.Provider
      value={{
        executivesOption,
        setExecutivesOption,
        leadDetailsRef,
        createdByOptions,
        setCreatedByOptions,
        leadsData,
        setLeadsData,
      }}>
      {children}
    </LeadsContext.Provider>
  );
}
