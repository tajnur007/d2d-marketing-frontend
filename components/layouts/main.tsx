import { ChildrenType } from '@/models/global-types';

const Main = ({ children }: ChildrenType) => {
  return <main className='px-5 pb-5'>{children}</main>;
};

export default Main;
