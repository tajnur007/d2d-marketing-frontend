'use-client'

import Graph from '@/components/ui/Graph/Graph';
import React from 'react';

const GraphList: React.FC = () => {
  const graphConfig = {
    labels: ['Total Leads', 'Hot Deals', 'Executive Checked-in'],
    counts: [10, 20, 30],
    colors: ['#5630FF', '#FF7B7B', '#07BEAA'],
    chartType: 'line',
  };

  const graphData = [
    { month: 'January', sales: 100 },
    { month: 'February', sales: 150 },
    { month: 'March', sales: 125 },
    { month: 'April', sales: 150 },
    { month: 'May', sales: 160 },
    { month: 'June', sales: 140 },
    { month: 'July', sales: 170 },
    { month: 'August', sales: 150 },
    { month: 'September', sales: 130 },
    { month: 'October', sales: 180 },
    { month: 'November', sales: 170 },
    { month: 'December', sales: 200 },
  ];

  return (
    <div className='bg-[#F7F7FB]'>
      this is dashboard page
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-center p-6 gap-2'>
        <div className='grid grid-cols-1 bg-white rounded-xl px-2 py-4'>
          <div className='flex justify-between items-center mx-7'>
            <div>
              <p className='text-lg font-semibold text-[#00156A]'>Total Leads</p>
            </div>
            <div className='bg-[#E5DFFF] py-2 px-4 rounded-2xl'>
              <h4 className='text-xl font-semibold'>56</h4>
            </div>
          </div>
          <div>
            {/* <p className='bg-[#5630ff24]'></p> */}
            <Graph graphConfig={graphConfig} graphData={graphData} color='#5630FF' />
          </div>
        </div>

        <div className='grid grid-cols-1 bg-white rounded-xl px-2 py-4'>
          <div className='flex justify-between items-center mx-7'>
            <div>
              <p className='text-lg font-semibold text-[#00156A]'>Hot Deals</p>
            </div>
            <div className='bg-[#FFC2C2] py-2 px-4 rounded-2xl'>
              <h4 className='text-xl font-semibold'>56</h4>
            </div>
          </div>
          <div>
            <Graph graphConfig={graphConfig} graphData={graphData} color='#FF7B7B' />
          </div>
        </div>

        <div className='grid grid-cols-1 bg-white rounded-xl px-2 py-4'>
          <div className='flex justify-between items-center mx-7'>
            <div>
              <p className='text-lg font-semibold text-[#00156A]'>Executive checked-in</p>
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

export default GraphList;
