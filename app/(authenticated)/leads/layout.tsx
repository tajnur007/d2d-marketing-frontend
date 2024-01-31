'use client';
import { useState, useRef } from 'react';
import { ExecutiveContext } from '@/context/executives-context';
import { AssignToUsers } from '@/models/global-types';

export default function LeedsLayout({ children }: { children: React.ReactNode }) {
  const [executivesOption, setExecutivesOption] = useState<AssignToUsers[]>([]);
  const leadRef = useRef(null);

  return (
    <ExecutiveContext.Provider value={{ executivesOption, setExecutivesOption, leadRef }}>
      {children}
    </ExecutiveContext.Provider>
  );
}
