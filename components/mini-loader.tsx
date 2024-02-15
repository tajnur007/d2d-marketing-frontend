import React from 'react';
import { Oval } from 'react-loader-spinner';

const MiniLoader = ({ size = '30', color = '#ffffff' }) => {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div>
        <Oval width={size} height={size} color={color} />
      </div>
    </div>
  );
};

export default MiniLoader;
