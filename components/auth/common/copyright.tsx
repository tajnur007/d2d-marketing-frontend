import React from 'react';

const Copyright = () => {
  const year: number = new Date().getFullYear();
  return (
    <p className='text-[#959CB6] text-[12px] text-center font-light'>
      &copy; {year} ALL RIGHTS RESERVED
    </p>
  );
};

export default Copyright;
