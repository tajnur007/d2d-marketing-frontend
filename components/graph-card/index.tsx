import React from 'react';
import Graph from '../graph';

const GraphCard = ({ graphConfig, data }: { graphConfig: any; data: number }) => {
  return (
    <div className='grid grid-cols-1 bg-white rounded-xl px-6 py-2'>
      <div className='flex justify-between items-center '>
        <p className='xl:text-[14px] text-[12px] font-semibold leading-[14.976px] text-[#00156A]'>
          {graphConfig.label}
        </p>

        <div
          style={{ backgroundColor: graphConfig.countColor }}
          className='bg-[#E5DFFF] xl:py-2 py-1 xl:px-4 px-3 rounded-2xl'>
          <h4 className='xl:text-[16px] text-[14px] font-semibold'>{data}</h4>
        </div>
      </div>

      <div className='w-full h-[6vh] cursor-pointer mt-2'>
        <Graph graphData={graphConfig.graphData} color={graphConfig.color} />
      </div>
    </div>
  );
};

export default GraphCard;
