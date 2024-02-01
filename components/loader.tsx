import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='h-[80%] flex justify-center items-center'>
      <InfinitySpin width='200' color='#4f46e5' />
    </div>
  );
};

export default Loader;
