import React from 'react';

const LeadsOptions = () => {
  return (
    <div className='relative'>
      <div
        className='absolute right-6 -bottom-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        aria-orientation='vertical'
        aria-labelledby='menu-button'>
        <div className='py-1'>
          <p className='text-gray-700 block px-4 py-2 text-sm'>Account settings</p>
          <p className='text-gray-700 block px-4 py-2 text-sm'>Support</p>
          <p className='text-gray-700 block px-4 py-2 text-sm'>License</p>
        </div>
      </div>
    </div>
  );
};

export default LeadsOptions;
