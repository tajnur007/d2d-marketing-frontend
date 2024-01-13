import Leaderboard from '@/components/leaderboard/leaderboard';
import GraphList from '@/components/graphlist/graphlist';
import LatestLeadsList from '@/components/latest-leads-list/latest-leads-list';

const DashboardPage = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between gap-5 '>
      <div className='w-full lg:w-[70%]'>
        <GraphList />
        <LatestLeadsList />
      </div>
      <Leaderboard />
    </div>
  );
};

export default DashboardPage;
