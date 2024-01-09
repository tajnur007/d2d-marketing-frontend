import { Person } from '@/models/global-types';
import { leaderBoard } from './database';
import Profiles from './profiles';

const Leaderboard = () => {
  return (
    <div className='bg-[#f7f6fa] flex flex-row justify-center w-full'>
      <div className='bg-[#f7f6fa] py-5'>
        <div className=' w-[345px] h-full bg-white rounded-[16px]'>
          <div className='w-[101px] h-[11px]'>
            <div className="[font-family:'Metropolis-Bold',Helvetica] font-bold text-[#2b3674] text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap px-5 h-5 pt-3 z-50">
              Leaderboard
            </div>
          </div>
          {/* condition for scroll */}
          <div
            className={`h-full w-[100%] ${
              leaderBoard.length > 12 ? 'overflow-y-scroll' : 'overflow-hidden'
            } my-5`}>
            <Profiles data={between(leaderBoard)}></Profiles>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Leaderboard;

const between = (leaderBoard: Person[]) => {

  const sortedLeaderboard = [...leaderBoard].sort((a, b) => b.totalLeads - a.totalLeads);
  // sort with decending order
  // const top12Leaderboard = sortedLeaderboard.slice(0, 12);
  return sortedLeaderboard;
};
