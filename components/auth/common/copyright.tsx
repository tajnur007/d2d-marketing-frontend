import React from 'react';

const Copyright = () => {
  const year: number = new Date().getFullYear();
  return (
    <p className='text-[#959CB5] lg:text-[12px] md:text-[10px] text-[10px] tracking-[0.12px] leading-[12px] text-center font-medium'>
      &copy; {year} ALL RIGHTS RESERVED
    </p>
  );
};

export default Copyright;
