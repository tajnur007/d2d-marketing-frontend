import { ChildrenType } from '@/models/global-types';

const Main = ({ children }: ChildrenType) => {
  return <main className='px-6'>{children}</main>;
};

export default Main;
