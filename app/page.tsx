'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();

  useEffect( () => {
    router.push('/dashboard');
  },[router]);

  return (
     <p>Redirecting...</p>
  );
};

export default HomePage;
