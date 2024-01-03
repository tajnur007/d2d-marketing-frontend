import { ChildrenType } from '@/models/global-types';

const Main = ({ children }: ChildrenType) => {
  return <main className='mx-5'>{children}</main>;
};

export default Main;
