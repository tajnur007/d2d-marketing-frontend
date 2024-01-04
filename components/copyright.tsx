import React from 'react';

const Copyright = () => {
  const year: number = new Date().getFullYear();
  return <p className='text-xs font-light'>&copy; {year} ALL RIGHTS RESERVED</p>;
};

export default Copyright;
