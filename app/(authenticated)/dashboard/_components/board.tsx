import Profiles from './profiles';
import { Leaderboard } from './database';

export default function Board() {

  return (
    <div className="bg-[#f7f6fa] flex flex-row justify-center w-full">
      <div className="bg-[#f7f6fa] w-[1440px] h-[915px]">
        <div className="absolute w-[345px] h-[797px] top-[82px] right-[5%] bg-white rounded-[16px]">
          <div className="absolute w-[101px] h-[11px] top-[25px] left-[25px]">
            <div className="absolute top-0 left-0 [font-family:'Metropolis-Bold',Helvetica] font-bold text-[#2b3674] text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap">
              Leaderboard
            </div>
          </div>
          {/* condition for scroll */}
            <div className={`absolute h-[89%] w-[100%] ${Leaderboard.length > 12 ? 'overflow-y-scroll' : 'overflow-hidden'} top-[9%]`}>
            <Profiles Leaderboard={between(Leaderboard)}></Profiles>
            </div>
        </div>
       </div>
     </div>
  )
}

function between(Leaderboard: any[]){

  const sortedLeaderboard = [...Leaderboard].sort((a, b) => b.totalLeads - a.totalLeads);
    // sort with decending order
    // const top12Leaderboard = sortedLeaderboard.slice(0, 12);
    return sortedLeaderboard

}