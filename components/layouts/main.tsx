import { ChildrenType } from '@/models/global-types';

const Main = ({ children }: ChildrenType) => {
  return <main className='px-6 pb-9'>{children}</main>;
};

export default Main;
