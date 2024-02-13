import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Loader = ({ size = '150', color = '#4f46e5' }) => {
  return (
    <div className='h-[80%] flex justify-center items-center'>
      <Triangle width={size} color={color} />
    </div>
  );
};

export default Loader;
