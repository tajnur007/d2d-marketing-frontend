import { StatusCheckboxProps } from '@/utils/constants/leadslist-constant';
import React from 'react';

const StatusCheckbox: React.FC<StatusCheckboxProps> = ({
  status,
  handleCheckboxChange,
}) => {
  return (
    <div className='flex ml-1 my-1'>
      <div className='flex items-center me-4'>
        <input
          id='hot-checkbox'
          type='checkbox'
          checked={status.hot}
          onChange={() => handleCheckboxChange('hot')}
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
          checked={status.warm}
          onChange={() => handleCheckboxChange('warm')}
          className='w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
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
          type='checkbox'
          checked={status.cold}
          onChange={() => handleCheckboxChange('cold')}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label
          htmlFor='cold-checkbox'
          className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
          Cold
        </label>
      </div>
    </div>
  );
};

export default StatusCheckbox;
