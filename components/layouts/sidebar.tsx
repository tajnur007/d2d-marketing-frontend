'use client';

import { BookIcon, HomeIcon, SettingIcon } from '@/assets/icons';
import { Logo } from '@/assets/svg-images';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const sidebarItem = [
  {
    id: 1,
    iconName: 'Home',
    path: '/dashboard',
    icon: <HomeIcon />,
    position: -15,
  },
  {
    id: 2,
    iconName: 'Book',
    path: '/leads',
    icon: <BookIcon />,
    position: 50,
  },
  {
    id: 3,
    iconName: 'Setting',
    path: '/settings',
    icon: <SettingIcon />,
    position: 110,
  },
];

const Sidebar = () => {
  const [selected, setSelected] = useState(-15);
  const router = useRouter();

  const handleClick = (position: number, path: string) => {
    setSelected(position);
    router.push(path);
  };

  return (
    <div className='w-[88px] bg-white relative'>
      <div className='absolute w-full flex justify-center top-5'>
        <Logo />
      </div>

      <div className='relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col h-[147px] justify-between items-center w-full'>
        {sidebarItem.map((item) => {
          return (
            <p
              key={item?.id}
              onClick={() => handleClick(item?.position, item?.path)}
              className={`cursor-pointer transition-all duration-500 ${
                selected === item?.position ? 'text-[#5630FF]' : 'text-[#69708C]'
              }`}>
              {item?.icon}
            </p>
          );
        })}
        <div
          className={`absolute left-0 transition-all duration-500 ${
            selected === 110
              ? 'top-[110px]'
              : selected === 50
              ? 'top-[50px]'
              : 'top-[-15px]'
          }  h-[50px] w-1 bg-[#5630FF] rounded-tr rounded-br `}></div>
      </div>
      <div className='absolute w-full flex justify-center bottom-5'>
        <Image src='/navbar/Avatar.png' alt='' height={46} width={46} />
      </div>
    </div>
  );
};

export default Sidebar;
