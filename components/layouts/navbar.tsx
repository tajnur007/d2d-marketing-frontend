'use client';

import { UserIcon } from '@/assets/icons';
import { usePathname } from 'next/navigation';
import profileImage from '@/assets/images/profile.png';
import Popup from 'reactjs-popup';
import Image from 'next/image';
import Link from 'next/link';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { LogoutIcon } from '@/assets/icons';
import { signOut } from 'next-auth/react';
import { greetingMessage } from '@/utils/helpers/common-helpers';
import { UserContext } from '@/providers/user-data-provider';
import { useContext } from 'react';

const Navbar = () => {
  const currentPage = usePathname();
  const userData = useContext(UserContext);

  const capitalizeEachWord = (str: string): string => {
    return str
      .split('/')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('/');
  };

  const formattedPage = capitalizeEachWord(
    currentPage.replace('/', '').replace('-', ' ')
  );

  return (
    <div className='flex items-center justify-between px-5 py-4'>
      <h2 className='text-[#b9a9ff] text-2xl'>{formattedPage}</h2>

      <div className='flex justify-center items-center'>
        <span className='text-[#00156A] font-semibold mr-3'>
          {greetingMessage(userData)}
        </span>
        <Popup
          trigger={<Image src={profileImage} alt='' height={30} width={30} />}
          position='bottom right'
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
            className='flex items-center gap-2 hover:font-semibold text-[12px] 2xl:text-[14px] text-[#545454] hover:text-[#51515c] transition-colors mb-4'>
            <UserIcon /> Profile
          </Link>

          <div
            className='flex items-center gap-2 hover:font-semibold text-[12px] 2xl:text-[14px] text-[#FF8B7B] hover:text-[#d93f21] transition-colors cursor-pointer'
            onClick={() => signOut()}>
            <LogoutIcon /> Logout
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Navbar;
