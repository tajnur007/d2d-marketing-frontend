import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const MiniLoader = () => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <InfinitySpin width='120' color='#ffffff' />
    </div>
  );
};

export default MiniLoader;
