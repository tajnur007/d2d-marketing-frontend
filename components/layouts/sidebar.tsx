'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Cog6ToothIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [selected, setSelected] = useState('-15px');

  return (
    <div className='w-[88px] bg-white relative'>
      <div className='absolute w-full flex justify-center top-5'>
        <Image src='/navbar/logo.png' alt='' height={20} width={37} />
      </div>

      <div className='relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col h-[147px] justify-between items-center w-full'>
        <p onClick={() => setSelected('-15px')}>
          <Image src='/navbar/home.svg' alt='' height={19} width={20} />
        </p>
        <p onClick={() => setSelected('50px')}>
          <Image src='/navbar/book.svg' alt='' height={19} width={20} />
        </p>
        <p onClick={() => setSelected('110px')}>
          <Image src='/navbar/setting.svg' alt='' height={19} width={20} />
        </p>
        <div
          className={`absolute left-0 transition-all duration-500 top-[${selected}]  h-[50px] w-1 bg-[#5630FF] rounded-tr rounded-br `}></div>
      </div>
      <div className='absolute w-full flex justify-center bottom-5'>
        <Image src='/navbar/Avatar.png' alt='' height={46} width={46} />
      </div>
    </div>
  );
};

export default Sidebar;
// A38EFF;
