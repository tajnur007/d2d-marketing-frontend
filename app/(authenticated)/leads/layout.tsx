'use client';
import { useState, useRef } from 'react';
import { LeadsContext } from '@/context/leads-context';
import { AssignToUsers } from '@/models/global-types';

export default function LeedsLayout({ children }: { children: React.ReactNode }) {
  const [executivesOption, setExecutivesOption] = useState<AssignToUsers[]>([]);
  const leadDetailsRef = useRef(null);

  return (
    <LeadsContext.Provider
      value={{ executivesOption, setExecutivesOption, leadDetailsRef }}>
      {children}
    </LeadsContext.Provider>
  );
}
