'use client';

import { Logo } from '@/assets/icons';
import { SIDEBAR_ITEMS } from '@/utils/constants/common-constants';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import profileImage from '@/assets/images/profile.png';
import { Tooltip } from 'react-tooltip';

const Sidebar = () => {
  const router = useRouter();
  const currentPage = usePathname().split('/')[1];
  const currPosition = SIDEBAR_ITEMS.find((item) => '/' + currentPage === item.path);
  const [selected, setSelected] = useState(currPosition?.position);

  const handleClick = (position: number, path: string) => {
    setSelected(position);
    router.push(path);
  };

  return (
    <div className='w-[88px] h-screen bg-white relative'>
      <div className='absolute w-full flex justify-center top-5'>
        <Logo />
      </div>

      <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col h-[147px] justify-between items-center w-full'>
        {SIDEBAR_ITEMS.map(({ id, position, path, icon: Icon, iconName }) => (
          <div
            key={id}
            onClick={() => handleClick(position, path)}
            data-tooltip-id='my-tooltip'
            data-tooltip-content={iconName}
            data-tooltip-place='right'
            className={`flex items-center p-5 cursor-pointer transition-all duration-500 hover:bg-purple-200 hover:duration-300 group${
              selected === position ? 'text-[#5630FF]' : 'text-[#69708C]'
            }`}>
            {<Icon />}
          </div>
        ))}
        <div
          className={`absolute left-0 transition-all duration-500 ${
            selected === -15
              ? 'top-[10px]'
              : selected === 50
              ? 'top-[70px]'
              : 'top-[135px]'
          }  h-[50px] w-1 bg-[#5630FF] rounded-tr rounded-br `}></div>
      </div>
      <Tooltip id='my-tooltip' />

      <div className='absolute w-full flex justify-center bottom-5'>
        <Image src={profileImage} alt='' height={46} width={46} />
      </div>
    </div>
  );
};

export default Sidebar;
