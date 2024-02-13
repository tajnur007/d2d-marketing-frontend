import React from 'react';
import { Oval } from 'react-loader-spinner';

const MiniLoader = ({ size = '30', color = '#ffffff' }) => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Oval width={size} color={color} />
    </div>
  );
};

export default MiniLoader;
