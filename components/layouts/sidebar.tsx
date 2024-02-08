'use client';

import { Logo, LogoutIcon } from '@/assets/icons';
import { SIDEBAR_ITEMS } from '@/utils/constants/common-constants';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import profileImage from '@/assets/images/profile.png';
import { Tooltip } from 'react-tooltip';
import { signOut } from 'next-auth/react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Sidebar = ({ userRole }: { userRole: string | undefined }) => {
  const router = useRouter();
  const currentPage = usePathname();

  let sidebarItems = [...SIDEBAR_ITEMS];
  if (userRole === 'executive') {
    sidebarItems = sidebarItems.filter((item) => item.iconName !== 'Employee List');
    sidebarItems[2].position = 100;
  }

  const currPosition = sidebarItems.find((item) => currentPage === item?.path);
  const [selected, setSelected] = useState(currPosition?.position);

  const handleClick = (position: number, path: string) => {
    setSelected(position);
    router.push(path);
  };

  useEffect(() => {
    let position = currPosition?.position;
    setSelected(position);
  }, [currPosition, currentPage, userRole]);

  return (
    <div className='w-[88px] bg-white relative z-50'>
      <div
        className='absolute w-full flex justify-center top-5 cursor-pointer'
        onClick={() => handleClick(sidebarItems[0].position, sidebarItems[0].path)}>
        <Logo />
      </div>

      <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col h-[147px] justify-between items-center w-full'>
        {sidebarItems.map(({ id, position, path, icon: Icon, iconName }) => (
          <div
            key={id}
            onClick={() => handleClick(position, path)}
            data-tooltip-id='my-tooltip'
            data-tooltip-content={iconName}
            data-tooltip-place='right'
            className={`flex items-center cursor-pointer transition-all duration-500 ${
              selected === position ? 'text-[#5630FF]' : 'text-[#69708C]'
            }`}>
            {
              <div className='flex items-center px-8 py-3 hover:bg-purple-200 hover:duration-300 group'>
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
          <div
            className='flex items-center gap-1 font-semibold text-[14px] cursor-pointer transition-colors hover:text-[#d93f21]'
            onClick={() => signOut()}>
            <LogoutIcon /> <p>Log out</p>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Sidebar;
