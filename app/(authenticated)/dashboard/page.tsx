import Leaderboard from '@/components/leaderboard/leaderboard';
import GraphList from '@/components/GraphList/GraphList';
import LatestLeadsList from '@/components/LatestLeadsList/LatestLeadsList';

const DashboardPage = () => {
  return (
    <div className='grid lg:grid-cols-5 sm:grid-cols-1'>
      <div className='col-span-4'>
        <GraphList />
        <div className=''>
          <LatestLeadsList />
        </div>
      </div>
      <div className=''>
        <Leaderboard />
      </div>
    </div>
  );
};

export default DashboardPage;
