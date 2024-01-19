'use client';

import { InfinitySpin } from 'react-loader-spinner';

function LoadingPage() {
  return (
    <div className='flex items-center justify-center w-full h-[calc(100vh-100px)]'>
      <InfinitySpin width='200' color='#4f46e5' />
    </div>
  );
}

export default LoadingPage;
