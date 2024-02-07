'use client';

import { Logo, LogoutIcon } from '@/assets/icons';
import { SIDEBAR_ITEMS } from '@/utils/constants/common-constants';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import profileImage from '@/assets/images/profile.png';
import { Tooltip } from 'react-tooltip';
import { signOut, useSession } from 'next-auth/react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { UserService } from '@/services/user-services';

const Sidebar = () => {
  const router = useRouter();
  const currentPage = usePathname();
  const currPosition = SIDEBAR_ITEMS.find((item) => currentPage === item?.path);
  const [selected, setSelected] = useState(currPosition?.position);
  const [userType, setUserType] = useState('');

  const { data } = useSession();

  const handleClick = (position: number, path: string) => {
    if (userType === 'executive' && path === '/settings') {
      setSelected(position - 50);
    } else {
      setSelected(position);
    }
    router.push(path);
  };

  useEffect(() => {
    const position = currPosition?.position;
    if (userType === 'executive' && currentPage === '/settings' && position) {
      setSelected(position - 50);
    } else {
      setSelected(position);
    }
  }, [currPosition, currentPage, userType]);

  useEffect(() => {
    const getUserInfo = async () => {
      //@ts-ignore
      const token = data?.user?.access_token;

      if (token) {
        const Service = new UserService();
        const resp = await Service.getUserInfo(token);
        setUserType(resp?.data?.Data?.user_type);
      }
    };
    getUserInfo();
  }, [data]);

  return (
    <div className='w-[88px] bg-white relative z-50'>
      <div
        className='absolute w-full flex justify-center top-5 cursor-pointer'
        onClick={() => handleClick(SIDEBAR_ITEMS[0].position, SIDEBAR_ITEMS[0].path)}>
        <Logo />
      </div>

      <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col h-[147px] justify-between items-center w-full'>
        {SIDEBAR_ITEMS.map(
          ({ id, position, path, icon: Icon, iconName }) =>
            userType && (
              <div
                key={id}
                onClick={() => handleClick(position, path)}
                data-tooltip-id='my-tooltip'
                data-tooltip-content={iconName}
                data-tooltip-place='right'
                className={`flex items-center cursor-pointer transition-all duration-500 ${
                  selected === position ? 'text-[#5630FF]' : 'text-[#69708C]'
                } ${
                  userType === 'executive' && path === '/employee-list'
                    ? 'hidden'
                    : 'block'
                }`}>
                {
                  <div className='flex items-center px-8 py-3 hover:bg-purple-200 hover:duration-300 group'>
                    <Icon />
                  </div>
                }
              </div>
            )
        )}
        {userType && (
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
        )}
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
