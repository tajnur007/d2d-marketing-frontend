'use client';

import { Logo, LogoutIcon, SettingIcon } from '@/assets/icons';
import { SIDEBAR_ITEMS, PAGE_ROUTES } from '@/utils/constants/common-constants';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import profileImage from '@/assets/images/profile.png';
import { Tooltip } from 'react-tooltip';
import { signOut } from 'next-auth/react';
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
            className={`w-full flex justify-center items-center cursor-pointer transition-all duration-500 ${
              selected === position ? 'text-[#5630FF]' : 'text-[#69708C]'
            }`}>
            {
              <div className='flex justify-center  items-center w-full py-3 hover:bg-purple-200 hover:duration-300 group'>
                <Icon />
              </div>
            }
          </div>
        ))}

        <div
          className={`absolute left-0 transition-all duration-500 ${
            selected === 0
              ? 'top-[0px]'
              : selected === 50
              ? 'top-[50px]'
              : selected === 100
              ? 'top-[100px]'
              : 'top-[150px]'
          }  h-[50px] w-1 bg-[#5630FF] rounded-tr rounded-br `}></div>
      </div>
      <Tooltip id='my-tooltip' />

      <div className='absolute w-full flex justify-center bottom-5'>
        <Popup
          trigger={<Image src={profileImage} alt='' height={46} width={46} />}
          position='top left'
          on='hover'
          closeOnDocumentClick
          mouseLeaveDelay={100}
          mouseEnterDelay={10}
          contentStyle={{
            padding: '8px',
            width: '110px',
          }}>
          <Link
            href={PAGE_ROUTES.Settings}
            className='flex items-center gap-2 font-semibold text-[14px] outline-none hover:text-[#d93f21] mb-4'>
            <SettingIcon /> <p>Settings</p>
          </Link>

          <div
            className='flex items-center gap-2 font-semibold text-[14px] cursor-pointer transition-colors hover:text-[#d93f21]'
            onClick={() => signOut()}>
            <LogoutIcon /> <p>Log out</p>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Sidebar;
