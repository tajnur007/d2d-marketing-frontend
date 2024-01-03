'use client';

import Image from 'next/image';
import { useState } from 'react';
import HomeIcon from '../../public/navbar/home';
import BookIcon from '../../public/navbar/book';
import SettingIcon from '../../public/navbar/setting';

const sidebarItem = [
  {
    id: 1,
    iconName: 'Home',
    icon: <HomeIcon />,
    position: -15,
  },
  {
    id: 2,
    iconName: 'Book',
    icon: <BookIcon />,
    position: 50,
  },
  {
    id: 3,
    iconName: 'Setting',
    icon: <SettingIcon />,
    position: 110,
  },
];

const Sidebar = () => {
  const [selected, setSelected] = useState(-15);

  return (
    <div className='w-[88px] bg-white relative'>
      <div className='absolute w-full flex justify-center top-5'>
        <Image src='/navbar/logo.png' alt='' height={20} width={37} />
      </div>

      <div className='relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col h-[147px] justify-between items-center w-full'>
        {sidebarItem.map((item) => {
          return (
            <p
              key={item?.id}
              onClick={() => setSelected(item?.position)}
              className={`cursor-pointer transition-all duration-500 ${
                selected === item?.position ? 'text-[#A38EFF]' : 'text-[#69708C]'
              }`}>
              {item?.icon}
            </p>
          );
        })}
        <div
          className={`absolute left-0 transition-all duration-500 top-[${selected}px]  h-[50px] w-1 bg-[#5630FF] rounded-tr rounded-br `}></div>
      </div>
      <div className='absolute w-full flex justify-center bottom-5'>
        <Image src='/navbar/Avatar.png' alt='' height={46} width={46} />
      </div>
    </div>
  );
};

export default Sidebar;
// A38EFF;
