import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <InfinitySpin width='200' color='#4f46e5' />
    </div>
  );
};

export default Loader;
