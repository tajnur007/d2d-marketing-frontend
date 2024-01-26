import React from 'react'
import Graph from '../graph';

const GraphCard = ({ graphConfig, data }: {graphConfig: any, data: number}) => {
  return (
    <div className='grid grid-cols-1 bg-white rounded-xl px-6 py-2'>
      <div className='flex justify-between items-center '>
        <p className='text-[14px] font-semibold leading-[14.976px] text-[#00156A]'>
          {graphConfig.label}
        </p>

        <div
          style={{ backgroundColor: graphConfig.countColor }}
          className='bg-[#E5DFFF] py-2 px-4 rounded-2xl'>
          <h4 className='text-[16px] font-semibold'>{data}</h4>
        </div>
      </div>

      <div className='w-full h-[6vh] cursor-pointer mt-2'>
        <Graph graphData={graphConfig.graphData} color={graphConfig.color} />
      </div>
    </div>
  );
};

export default GraphCard;