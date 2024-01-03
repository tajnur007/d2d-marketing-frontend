import React from 'react';

const Copyright = () => {
  const d: number = new Date().getFullYear();
  return (
    <>
      <p className='text-xs font-light'>&copy; {d} ALL RIGHTS RESERVED</p>;
    </>
  );
};

export default Copyright;
