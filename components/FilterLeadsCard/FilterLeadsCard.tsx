import avatar from '@/assets/images/leadslist-icons/avatar.png';
import Image from 'next/image';

const FilterLeadsCard: React.FC = () => {
  return (
    <div className='relative text-left bg-white shadow-md'>
      {/* Dropdown Content */}
      <div className='absolute z-10 w-[389px] h-[510px] rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 right-0'>
        <div className='p-[20px]'>
          {/* Created by */}
          <div className='my-2'>
            <label className='font-semibold text-[#00156A] text-[16px] mb-1'>
              Created by
            </label>
            <div className='flex justify-between items-center '>
              <div className='grid grid-cols-2 gap-1 items-center'>
                <div className='bg-[#4318FF] rounded-[50px] my-2 px-2 py-1 text-white flex justify-between items-center'>
                  <div>
                    <Image src={avatar} alt='' className='w-[16px] h-[16px] mr-1' />
                  </div>
                  <div className='text-[12px]'>Saidul M Khan</div>
                  <div className='ml-1 cursor-pointer'>
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <g id='x-close'>
                        <path
                          id='Icon'
                          d='M9 3L3 9M3 3L9 9'
                          stroke='white'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className='bg-[#4318FF] rounded-[50px] my-2 px-2 py-1 text-white flex justify-between items-center'>
                  <div>
                    <Image src={avatar} alt='' className='w-[16px] h-[16px] mr-1' />
                  </div>
                  <div className='text-[12px]'>Saidul M Khan</div>
                  <div className='ml-1 cursor-pointer'>
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <g id='x-close'>
                        <path
                          id='Icon'
                          d='M9 3L3 9M3 3L9 9'
                          stroke='white'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className='bg-[#4318FF] rounded-[50px] my-2 px-2 py-1 text-white flex justify-between items-center'>
                  <div>
                    <Image src={avatar} alt='' className='w-[16px] h-[16px] mr-1' />
                  </div>
                  <div className='text-[12px]'>Saidul M Khan</div>
                  <div className='ml-1 cursor-pointer'>
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <g id='x-close'>
                        <path
                          id='Icon'
                          d='M9 3L3 9M3 3L9 9'
                          stroke='white'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'>
                    <g clip-path='url(#clip0_254_3119)'>
                      <path
                        d='M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z'
                        fill='#E9F0FF'
                      />
                      <path
                        d='M16.4996 17.0636C16.3571 17.0636 16.2146 17.0111 16.1021 16.8986L14.6021 15.3986C14.3846 15.1811 14.3846 14.8211 14.6021 14.6036C14.8196 14.3861 15.1796 14.3861 15.3971 14.6036L16.8971 16.1036C17.1146 16.3211 17.1146 16.6811 16.8971 16.8986C16.7846 17.0111 16.6421 17.0636 16.4996 17.0636Z'
                        fill='#E9F0FF'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_254_3119'>
                        <rect width='18' height='18' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className='rounded-full cursor-pointer'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g id='chevron-down'>
                    <path
                      id='Icon'
                      d='M5 7.5L10 12.5L15 7.5'
                      stroke='#667085'
                      stroke-width='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className='border-t my-[10px] w-[349px] h-[1px] border-[#E9F0FF]'></div>

          {/* Assignee */}
          <div className='my-2'>
            <label className='font-semibold text-[#00156A] text-[16px] mb-1'>
              Assignee
            </label>
            <div className='flex justify-between items-center '>
              <div className='grid grid-cols-2 gap-1 items-center'>
                <div className='bg-[#4318FF] rounded-[50px] my-2 px-2 py-1 text-white flex justify-between items-center'>
                  <div>
                    <Image src={avatar} alt='' className='w-[16px] h-[16px] mr-1' />
                  </div>
                  <div className='text-[12px]'>Saidul M Khan</div>
                  <div className='ml-1 cursor-pointer'>
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <g id='x-close'>
                        <path
                          id='Icon'
                          d='M9 3L3 9M3 3L9 9'
                          stroke='white'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className='bg-[#4318FF] rounded-[50px] my-2 px-2 py-1 text-white flex justify-between items-center'>
                  <div>
                    <Image src={avatar} alt='' className='w-[16px] h-[16px] mr-1' />
                  </div>
                  <div className='text-[12px]'>Saidul M Khan</div>
                  <div className='ml-1 cursor-pointer'>
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <g id='x-close'>
                        <path
                          id='Icon'
                          d='M9 3L3 9M3 3L9 9'
                          stroke='white'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className='bg-[#4318FF] rounded-[50px] my-2 px-2 py-1 text-white flex justify-between items-center'>
                  <div>
                    <Image src={avatar} alt='' className='w-[16px] h-[16px] mr-1' />
                  </div>
                  <div className='text-[12px]'>Saidul M Khan</div>
                  <div className='ml-1 cursor-pointer'>
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 12 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <g id='x-close'>
                        <path
                          id='Icon'
                          d='M9 3L3 9M3 3L9 9'
                          stroke='white'
                          stroke-width='1.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'>
                    <g clip-path='url(#clip0_254_3119)'>
                      <path
                        d='M8.625 16.3125C4.3875 16.3125 0.9375 12.8625 0.9375 8.625C0.9375 4.3875 4.3875 0.9375 8.625 0.9375C12.8625 0.9375 16.3125 4.3875 16.3125 8.625C16.3125 12.8625 12.8625 16.3125 8.625 16.3125ZM8.625 2.0625C5.0025 2.0625 2.0625 5.01 2.0625 8.625C2.0625 12.24 5.0025 15.1875 8.625 15.1875C12.2475 15.1875 15.1875 12.24 15.1875 8.625C15.1875 5.01 12.2475 2.0625 8.625 2.0625Z'
                        fill='#E9F0FF'
                      />
                      <path
                        d='M16.4996 17.0636C16.3571 17.0636 16.2146 17.0111 16.1021 16.8986L14.6021 15.3986C14.3846 15.1811 14.3846 14.8211 14.6021 14.6036C14.8196 14.3861 15.1796 14.3861 15.3971 14.6036L16.8971 16.1036C17.1146 16.3211 17.1146 16.6811 16.8971 16.8986C16.7846 17.0111 16.6421 17.0636 16.4996 17.0636Z'
                        fill='#E9F0FF'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_254_3119'>
                        <rect width='18' height='18' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className='rounded-full cursor-pointer'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g id='chevron-down'>
                    <path
                      id='Icon'
                      d='M5 7.5L10 12.5L15 7.5'
                      stroke='#667085'
                      stroke-width='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className='border-t my-[10px] w-[349px] h-[1px] border-[#E9F0FF]'></div>

          {/* Status */}
          <div className='my-2'>
            <label className='font-semibold text-[#00156A] text-[16px] mb-1'>
              Status
            </label>
            <div className='flex ml-1 my-1'>
              <div className='flex items-center me-4'>
                <input
                  id='hot-checkbox'
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  htmlFor='hot-checkbox'
                  className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Hot
                </label>
              </div>
              <div className='flex items-center me-4'>
                <input
                  id='warm-checkbox'
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  htmlFor='warm-checkbox'
                  className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Warm
                </label>
              </div>
              <div className='flex items-center me-4'>
                <input
                  id='cold-checkbox'
                  checked
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  htmlFor='cold-checkbox'
                  className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  Cold
                </label>
              </div>
            </div>
          </div>

          <div className='border-t my-[10px] w-[349px] h-[1px] border-[#E9F0FF]'></div>

          {/* Date Range */}
          <div className='my-2'>
            <label className='font-semibold text-[#00156A] text-[16px] mb-1'>
              Date Range
            </label>
            <div className='flex justify-between items-center gap-2'>
              <div>
                <input
                  type='text'
                  className='w-full border-gray-300 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-300 w-[159px] h-[44px]'
                />
              </div>
              <div>-</div>
              <div>
                <input
                  type='text'
                  className='border-gray-300 border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-300 w-[159px] h-[44px]'
                />
              </div>
            </div>
          </div>

          {/* Apply and Cancel Buttons */}
          <div className='flex justify-between my-[18px]'>
            <button className='bg-[#EBEBEB] text-black font-semibold px-4 py-2 focus:outline-none w-[170px] h-[40px] rounded-xl'>
              Cancel
            </button>
            <button className='bg-[#5630FF] text-white font-semibold px-4 py-2 focus:outline-none w-[170px] h-[40px] rounded-xl'>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterLeadsCard;
