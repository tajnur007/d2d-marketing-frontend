'use client';

import Main from '../../components/layouts/main';
import Navbar from '../../components/layouts/navbar';
import Sidebar from '../../components/layouts/sidebar';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen bg-[#F7F7FB]'>
      <Sidebar />
      <div className='flex-1'>
        <Navbar />
        <Main>{children}</Main>
      </div>
    </div>
  );
}
