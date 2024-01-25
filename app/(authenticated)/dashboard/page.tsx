import Leaderboard from '@/components/leaderboard/leaderboard';
import GraphList from '@/components/graph-list';
import LatestLeadsList from '@/components/latest-leads-list';

const DashboardPage = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between gap-6'>
      <div className='w-full lg:w-[73%]'>
        <GraphList />
        <LatestLeadsList />
      </div>
      <Leaderboard />
    </div>
  );
};

export default DashboardPage;
