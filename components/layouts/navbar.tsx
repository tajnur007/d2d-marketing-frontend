'use client';
import { MoonSolidIcon, NotificationIcon } from '@/assets/icons';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const capitalizeEachWord = (str: string): string => {
    return str
      .split('/')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('/');
  };

  const currentPage = usePathname();
  const formattedPage = capitalizeEachWord(
    currentPage.replace('/', '').replace('-', ' ')
  );

  return (
    <div className='flex items-center justify-between px-5 py-4'>
      <h2 className='text-[#b9a9ff] text-2xl'>{formattedPage}</h2>
      <div className='bg-white h-[46px] w-[75px] rounded-xl flex items-center justify-center gap-4 text-[#a3aedd]'>
        <NotificationIcon />
        <MoonSolidIcon />
      </div>
    </div>
  );
};

export default Navbar;
