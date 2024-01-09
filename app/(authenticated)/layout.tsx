'use client';
import { useRouter } from 'next/navigation';
import Main from '../../components/layouts/main';
import Navbar from '../../components/layouts/navbar';
import Sidebar from '../../components/layouts/sidebar';
import ServerAuthManager from '../../components/providers/server-auth-manager';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  let isAuthenticated = false;
  if (!isAuthenticated) {
    router.push(PAGE_ROUTES.Signin);
  }

  return (
    <ServerAuthManager>
      <div className='flex min-h-screen bg-[#F7F7FB]'>
        <Sidebar />
        <div className='flex-1'>
          <Navbar />
          <Main>{children}</Main>
        </div>
      </div>
    </ServerAuthManager>
  );
}
