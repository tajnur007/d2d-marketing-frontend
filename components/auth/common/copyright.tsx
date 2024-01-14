import React from 'react';

const Copyright = () => {
  const year: number = new Date().getFullYear();
  return (
    <p className='text-[#959CB5] text-[12px] tracking-[0.12px] leading-[12px] text-center font-medium'>
      &copy; {year} ALL RIGHTS RESERVED
    </p>
  );
};

export default Copyright;
