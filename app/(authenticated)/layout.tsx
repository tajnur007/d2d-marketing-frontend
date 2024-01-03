import Main from '../../components/layouts/main';
import Navbar from '../../components/layouts/navbar';
import Sidebar from '../../components/layouts/sidebar';
import ServerAuthManager from '../../components/providers/server-auth-manager';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
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
