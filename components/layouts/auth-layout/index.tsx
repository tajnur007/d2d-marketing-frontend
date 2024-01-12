import { AuthLayoutProps } from '@/models/global-types';
import LeftSide from './left-side';

const AuthLayout = ({ text, image, children }: AuthLayoutProps) => {
  return (
    <div className='flex w-full h-screen p-0 m-0'>
      <LeftSide pageImage={image} text={text} />

      <div className='w-3/5 flex flex-col items-center overflow-y-auto'>{children}</div>
    </div>
  );
};

export default AuthLayout;
