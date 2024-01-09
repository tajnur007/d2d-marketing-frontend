import { GRAPH_CONFIG } from '@/utils/constants/graph-constants';
import React from 'react';
import Graph from '@/components/Graph/Graph';

const GraphList: React.FC = () => {
  return (
    <div className='bg-[#F7F7FB]'>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-between p-6 gap-5'>
        {GRAPH_CONFIG.map((item, index) => (
          <div key={index} className='grid grid-cols-1 bg-white rounded-xl px-2 py-4'>
            <div className='flex justify-between items-center mx-7'>
              <div>
                <p className='text-lg font-semibold text-[#00156A]'>{item.label}</p>
              </div>
              <div
                style={{ backgroundColor: item.countColor }}
                className='bg-[#E5DFFF] py-2 px-4 rounded-2xl'>
                <h4 className='text-xl font-semibold'>{item.count}</h4>
              </div>
            </div>
            <div>
              <div className='w-max-[300px] w-[100%] h-[139px] p-[20px] cursor-pointer'>
                <Graph graphData={item.graphData} color={item.color} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphList;
