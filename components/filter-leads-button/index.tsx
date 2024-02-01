import { FilterLeadsIcon } from '@/assets/icons';
import { useState } from 'react';
import FilterLeadsCard from '../filter-leads-card';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

function FilterLeadsButton({ onFilterData }: any) {
  const [isFilterCardOpen, setFilterCardOpen] = useState(false);
  const [filterData, setFilterData] = useState({});

  const toggleFilterCard = () => {
    setFilterCardOpen((prevState) => !prevState);
  };

  !isFilterCardOpen && onFilterData(filterData);

  return (
    <div>
      <button
        onClick={toggleFilterCard}
        type='button'
        className='text-white bg-[#5630ff] hover:shadow-blue-500/15 hover:dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-[14px] text-sm p-3 text-center transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200 relative'>
        <div className='flex justify-between items-center'>
          <div className='mr-2'>
            <FilterLeadsIcon />
          </div>

          <div className='font-medium text-[14px] leading-[normal] tracking-[0] whitespace-nowrap'>
            Filter
          </div>
        </div>
      </button>

      <Drawer
        open={isFilterCardOpen}
        onClose={toggleFilterCard}
        direction='top'
        className='filter-drawer-style rounded-[10px] overflow-y-scroll tiny-scrollbar top-[200px] z-50'
        size={0}
        overlayOpacity={0}>
        {isFilterCardOpen && (
          <FilterLeadsCard
            setFilterCardOpen={setFilterCardOpen}
            onFilterData={(data: any) => setFilterData(data)}
          />
        )}
      </Drawer>
    </div>
  );
}

export default FilterLeadsButton;
