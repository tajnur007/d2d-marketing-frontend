import { GRAPH_CONFIG } from '@/utils/constants/graph-constants';
import React from 'react';
import Graph from '../graph';

const GraphList: React.FC = () => {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-between gap-[1.1rem] mb-6 lg:h-[15vh]'>
      {GRAPH_CONFIG.map((item, index) => (
        <div key={index} className='grid grid-cols-1 bg-white rounded-xl px-6 py-2'>
          <div className='flex justify-between items-center '>
            <p className='text-[14px] font-semibold leading-[14.976px] text-[#00156A]'>
              {item.label}
            </p>

            <div
              style={{ backgroundColor: item.countColor }}
              className='bg-[#E5DFFF] py-2 px-4 rounded-2xl'>
              <h4 className='text-[16px] font-semibold'>{item.count}</h4>
            </div>
          </div>

          <div className='w-full h-[6vh] cursor-pointer mt-2'>
            <Graph graphData={item.graphData} color={item.color} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GraphList;
