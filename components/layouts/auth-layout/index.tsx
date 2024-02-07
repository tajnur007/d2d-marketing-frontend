import { AuthLayoutProps } from '@/models/global-types';
import LeftSide from './left-side';
import { twMerge } from 'tailwind-merge';

const AuthLayout = ({ text, image, children, className }: AuthLayoutProps) => {
  return (
    <div className={twMerge('flex w-full h-screen p-0 m-0', className)}>
      <LeftSide pageImage={image} text={text} />

      <div className='w-3/5 flex flex-col items-center overflow-y-auto'>{children}</div>
    </div>
  );
};

export default AuthLayout;
