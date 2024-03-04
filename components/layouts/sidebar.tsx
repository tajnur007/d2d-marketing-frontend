'use client';

import { Logo, LogoutIcon, SettingIcon } from '@/assets/icons';
import { SIDEBAR_ITEMS, PAGE_ROUTES } from '@/utils/constants/common-constants';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import profileImage from '@/assets/images/profile.png';
import { Tooltip } from 'react-tooltip';
import { signOut, useSession } from 'next-auth/react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Link from 'next/link';

const Sidebar = () => {
  const router = useRouter();
  const currentPage = usePathname().split('/')[1];

  const currPosition = SIDEBAR_ITEMS.find((item) => '/' + currentPage === item?.path);
  const [selected, setSelected] = useState(currPosition?.position);

  const handleClick = (position: number, path: string) => {
    setSelected(position);
    router.push(path);
  };

  useEffect(() => {
    let position = currPosition?.position || 0;
    setSelected(position);
  }, [currPosition]);

  return (
    <div className='w-[70px] 2xl:w-[88px] bg-white relative z-50'>
      <div
        className='absolute w-full flex justify-center top-5 cursor-pointer'
        onClick={() => handleClick(SIDEBAR_ITEMS[0].position, SIDEBAR_ITEMS[0].path)}>
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
            className={`my-3 w-full flex justify-center items-center cursor-pointer transition-all duration-500 ${
              selected === position ? 'text-[#5630FF]' : 'text-[#69708C]'
            }`}>
            <div className='flex justify-center  items-center w-full py-3 hover:bg-purple-200 hover:duration-300 group'>
              <Icon />
            </div>
          </div>
        ))}

        <div
          className={`absolute left-0 transition-all duration-500 ${
            selected === 12
              ? 'top-[12px]'
              : selected === 86
              ? 'top-[86px]'
              : selected === 160
              ? 'top-[160px]'
              : 'top-[12px]'
          } h-[50px] w-1 bg-[#5630FF] rounded-tr rounded-br`}
        />
      </div>
      <Tooltip id='my-tooltip' />
    </div>
  );
};

export default Sidebar;
