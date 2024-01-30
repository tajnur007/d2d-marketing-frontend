import { ChildrenType } from '@/models/global-types';

const Main = ({ children }: ChildrenType) => {
  return <main className='p-6 pt-0'>{children}</main>;
};

export default Main;
