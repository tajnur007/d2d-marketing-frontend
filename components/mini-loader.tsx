import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const MiniLoader = ({ size = '100', color = '#ffffff' }) => {
  return (
    <div className='h-full w-full flex justify-center items-center ml-[-20px]'>
      <InfinitySpin width={size} color={color} />
    </div>
  );
};

export default MiniLoader;
