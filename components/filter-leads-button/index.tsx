import { FilterLeadsIcon } from '@/assets/icons';
import { useState } from 'react';
import FilterLeadsCard from '../filter-leads-card';

function FilterLeadsButton({ onFilterData }: any) {
  const [isFilterCardOpen, setFilterCardOpen] = useState(false);
  const [filterData, setFilterData] = useState({});

  const toggleFilterCard = () => {
    setFilterCardOpen(!isFilterCardOpen);
  };

  !isFilterCardOpen && onFilterData(filterData);

  return (
    <>
      <button
        onClick={toggleFilterCard}
        type='button'
        className='text-white bg-[#5630ff] hover:shadow-blue-500/15 hover:dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-[14px] text-sm p-3 text-center transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
        <div className='flex justify-between items-center'>
          <div className='mr-2'>
            <FilterLeadsIcon />
          </div>
          <div className='font-medium text-[14px] leading-[normal] tracking-[0] whitespace-nowrap'>
            Filter
          </div>
        </div>
      </button>

      {isFilterCardOpen && (
        <FilterLeadsCard
          setFilterCardOpen={setFilterCardOpen}
          onFilterData={(data: any) => setFilterData(data)}
        />
      )}
    </>
  );
}

export default FilterLeadsButton;
