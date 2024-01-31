'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const ForgetPassword: React.FC = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return; // Ensure searchParams is initialized

    const token = searchParams.get('token');
    const company_id = searchParams.get('company_id');

    if (token && company_id) {
      const redirectUrl = `/auth/reset-password?token=${token}&company_id=${company_id}`;
      window.location.href = redirectUrl; // Redirect using JavaScript
    }
  }, [searchParams]);

  return null;
};

export default ForgetPassword;
