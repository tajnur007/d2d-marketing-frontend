import { AfterFilterLeadsIcon, FilterLeadsIcon } from '@/assets/icons';
import { useRef, useState } from 'react';
import FilterLeadsCard from '../filter-leads-card';
import 'react-modern-drawer/dist/index.css';
import Popup from 'reactjs-popup';
import { PopupActions } from 'reactjs-popup/dist/types';

function FilterLeadsButton({ onFilterData }: any) {
  const [isFilterCardOpen, setFilterCardOpen] = useState(false);
  const [filterData, setFilterData] = useState({});
  const [filterIcon, setFilterIcon] = useState<boolean>(false);
  const ref = useRef<PopupActions>(null);

  const toggleFilterCard = () => {
    setFilterCardOpen((prevState) => !prevState);
  };

  !isFilterCardOpen && onFilterData(filterData);

  const closeTooltip = () => {
    if (ref.current) {
      ref.current.close();
    }
  };

  return (
    <div>
      <Popup
        ref={ref}
        trigger={
          <button
            onClick={toggleFilterCard}
            type='button'
            className='text-white bg-[#5630ff] md:h-[36px] lg:h-[100%] hover:shadow-blue-500/15 hover:dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-[14px] text-sm md:p-2 lg:p-3 text-center transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200 relative'>
            <div className='flex justify-between items-center'>
              <div className='md:mr-1 lg:mr-2'>
                {filterIcon ? <AfterFilterLeadsIcon /> : <FilterLeadsIcon />}
              </div>

              <div className='font-medium md:text-[12px] lg:text-[14px] leading-[normal] tracking-[0] whitespace-nowrap'>
                Filter
              </div>
            </div>
          </button>
        }
        position='bottom right'
        on='click'
        onClose={() => setFilterCardOpen(false)}
        closeOnDocumentClick
        closeOnEscape
        mouseLeaveDelay={200}
        mouseEnterDelay={0}
        contentStyle={{
          width: '360px',
          padding: '0px',
          border: 'none',
          background: 'white',
          borderRadius: '10px',
          marginTop: '10px',
        }}
        arrow={false}>
        {
          <FilterLeadsCard
            setFilterCardOpen={setFilterCardOpen}
            onFilterData={(data: any) => setFilterData(data)}
            filterIcon={filterIcon}
            setFilterIcon={setFilterIcon}
            closeTooltip={closeTooltip}
          />
        }
      </Popup>
    </div>
  );
}

export default FilterLeadsButton;
