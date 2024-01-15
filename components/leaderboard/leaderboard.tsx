import { leaderBoard } from './database';
import Profiles from '@/components/leaderboard/profiles';

leaderBoard.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
});

const Leaderboard = () => {
  return (
    <div className='bg-white rounded-2xl p-5 w-full mt-5 lg:mt-0 lg:w-[27%] h-[88vh]'>
      <h2 className='font-bold text-[#2b3674] text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap mb-5'>
        Leaderboard
      </h2>
      <Profiles data={leaderBoard}></Profiles>
    </div>
  );
};
export default Leaderboard;
