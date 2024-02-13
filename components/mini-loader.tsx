import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const MiniLoader = () => {
  return (
    <div className='h-full w-full flex justify-center items-center ml-[-20px]'>
      <InfinitySpin width='90' color='#ffffff' />
    </div>
  );
};

export default MiniLoader;
