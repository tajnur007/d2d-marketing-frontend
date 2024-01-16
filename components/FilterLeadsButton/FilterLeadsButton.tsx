import { useState } from 'react';
import FilterLeadsCard from '../FilterLeadsCard/FilterLeadsCard';

function FilterLeadsButton() {
  const [isFilterCardOpen, setFilterCardOpen] = useState(false);

  const toggleFilterCard = () => {
    setFilterCardOpen(!isFilterCardOpen);
  };

  return (
    <>
      <button
        onClick={toggleFilterCard}
        type='button'
        className='text-white bg-[#5630ff] hover:shadow-blue-500/15 hover:dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-[14px] text-sm p-3 text-center transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
        <div className='flex justify-between items-center'>
          <div className='mr-2'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g id='vuesax/outline/filter'>
                <g id='filter'>
                  <path
                    id='Vector'
                    d='M10.9399 22.65C10.4599 22.65 9.9899 22.53 9.5499 22.29C8.6699 21.8 8.1399 20.91 8.1399 19.91V14.61C8.1399 14.11 7.8099 13.36 7.4999 12.98L3.7599 9.02001C3.1299 8.39001 2.6499 7.31001 2.6499 6.50001V4.20001C2.6499 2.60001 3.8599 1.35001 5.3999 1.35001H18.5999C20.1199 1.35001 21.3499 2.58001 21.3499 4.10001V6.30001C21.3499 7.35001 20.7199 8.54001 20.1299 9.13001L15.7999 12.96C15.3799 13.31 15.0499 14.08 15.0499 14.7V19C15.0499 19.89 14.4899 20.92 13.7899 21.34L12.4099 22.23C11.9599 22.51 11.4499 22.65 10.9399 22.65ZM5.3999 2.85001C4.6999 2.85001 4.1499 3.44001 4.1499 4.20001V6.50001C4.1499 6.87001 4.4499 7.59001 4.8299 7.97001L8.6399 11.98C9.1499 12.61 9.6499 13.66 9.6499 14.6V19.9C9.6499 20.55 10.0999 20.87 10.2899 20.97C10.7099 21.2 11.2199 21.2 11.6099 20.96L12.9999 20.07C13.2799 19.9 13.5599 19.36 13.5599 19V14.7C13.5599 13.63 14.0799 12.45 14.8299 11.82L19.1099 8.03001C19.4499 7.69001 19.8599 6.88001 19.8599 6.29001V4.10001C19.8599 3.41001 19.2999 2.85001 18.6099 2.85001H5.3999Z'
                    fill='white'
                  />
                  <path
                    id='Vector_2'
                    d='M5.99992 10.75C5.85992 10.75 5.72992 10.71 5.59992 10.64C5.24992 10.42 5.13992 9.94999 5.35992 9.59999L10.2899 1.69999C10.5099 1.34999 10.9699 1.23999 11.3199 1.45999C11.6699 1.67999 11.7799 2.13999 11.5599 2.48999L6.62992 10.39C6.48992 10.62 6.24992 10.75 5.99992 10.75Z'
                    fill='white'
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className='font-medium text-[14px] leading-[normal] tracking-[0] whitespace-nowrap'>
            Filter
          </div>
        </div>
      </button>
      {isFilterCardOpen && <FilterLeadsCard />}
    </>
  );
}

export default FilterLeadsButton;
