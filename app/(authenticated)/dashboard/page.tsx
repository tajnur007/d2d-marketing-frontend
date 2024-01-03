import Graph from '@/components/ui/Graph/Graph';
import React from 'react';

const DashboardPage: React.FC = () => {
  const graphConfig = {
    labels: ['Total Leads', 'Hot Deals', 'Executive Checked-in'],
    counts: [10, 20, 30],
    colors: ['red', 'green', 'blue'],
    chartType: 'line',
  };

  const graphData = [
    { month: 'January', sales: 100 },
    { month: 'February', sales: 150 },
    { month: 'March', sales: 200 },
    { month: 'April', sales: 120 },
    { month: 'May', sales: 180 },
    { month: 'June', sales: 250 },
  ];

  return (
    <div className='bg-[#F7F7FB]'>
      this is dashboard page
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-center p-6 mx-10 gap-0'>
        <div className='flex flex-col m-auto bg-white rounded-lg p-4'>
          <div className='flex justify-between items-center mx-7'>
            <div>
              <h4 className='text-xl font-semibold'>Total Leads</h4>
            </div>
            <div className='bg-[#E5DFFF] py-2 px-4 rounded-2xl'>
              <h4 className='text-xl font-semibold'>56</h4>
            </div>
          </div>
          <div>
            <Graph graphConfig={graphConfig} graphData={graphData} color='#5630FF' />
          </div>
        </div>

        <div className='flex flex-col m-auto bg-white rounded-lg p-4'>
          <div className='flex justify-between items-center mx-7'>
            <div>
              <h4 className='text-xl font-semibold'>Hot Deals</h4>
            </div>
            <div className='bg-[#FFC2C2] py-2 px-4 rounded-2xl'>
              <h4 className='text-xl font-semibold'>56</h4>
            </div>
          </div>
          <div>
            <Graph graphConfig={graphConfig} graphData={graphData} color='#FF7B7B' />
          </div>
        </div>

        <div className='flex flex-col m-auto bg-white rounded-lg p-4'>
          <div className='flex justify-between items-center mx-7'>
            <div>
              <h4 className='text-xl font-semibold'>Executive checked-in</h4>
            </div>
            <div className='bg-[#CBF6F1] py-2 px-4 rounded-2xl'>
              <h4 className='text-xl font-semibold'>56</h4>
            </div>
          </div>
          <div>
            <Graph graphConfig={graphConfig} graphData={graphData} color='#07BEAA' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
