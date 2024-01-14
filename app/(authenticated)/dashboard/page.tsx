import Leaderboard from '@/components/leaderboard/leaderboard';
import LatestLeadsList from '@/components/LatestLeadsList/LatestLeadsList';
import GraphList from '@/components/GraphList/GraphList';

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
