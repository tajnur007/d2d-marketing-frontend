import { authOptions } from '@/lib/next-auth/auth';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(PAGE_ROUTES.Signin);
  } else {
    redirect(PAGE_ROUTES.Dashboard);
  }
};

export default HomePage;
