'use client';

import { useEffect } from 'react';
import '../nprogress.css';
// @ts-ignore
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

function LoadingPage() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return null;
}

export default LoadingPage;
