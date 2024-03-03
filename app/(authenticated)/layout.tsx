import { redirect } from 'next/navigation';
import Main from '../../components/layouts/main';
import Navbar from '../../components/layouts/navbar';
import Sidebar from '../../components/layouts/sidebar';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/next-auth/auth';
import UserDataProvider from '@/providers/user-data-provider';

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(PAGE_ROUTES.Signin);
  }

  return (
    <UserDataProvider>
      <div className='flex h-screen bg-[#F7F7FB] overflow-hidden'>
        <Sidebar />
        <div className='flex-1 overflow-y-auto'>
          <Navbar />
          <Main>{children}</Main>
        </div>
      </div>
    </UserDataProvider>
  );
}
