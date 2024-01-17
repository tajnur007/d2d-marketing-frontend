'use-client';

import { LEADS_DATA } from '@/utils/constants/leadslist-constant';
import { useState } from 'react';
import { CustomMultiSelect } from '../CustomMultiSelect/custom-multi-select';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { Moment } from 'moment';

interface statusState {
  hot: boolean;
  warm: boolean;
  cold: boolean;
}

interface FilterLeadsCardProps {
  setFilterCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onFilterData: (data: any) => void;
}

const FilterLeadsCard: React.FC<FilterLeadsCardProps> = ({
  onFilterData,
  setFilterCardOpen,
}) => {
  //! State for date range
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<'startDate' | 'endDate' | null>(null);

  //! State for status
  const [status, setStatus] = useState<statusState>({
    hot: false,
    warm: false,
    cold: false,
  });

  const handleCheckboxChange = (statusName: keyof statusState) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [statusName]: !prevStatus[statusName],
    }));
  };

  //! State for Created by
  const [selectedCreatedBy, setCreatedBy] = useState<string | null>(null);
  const [selectedAssignee, setAssignee] = useState<string | null>(null);

  const createdByUsersList: { value: string; label: string }[] = [];
  const assigneeUsersList: { value: string; label: string }[] = [];

  LEADS_DATA.map((item) =>
    createdByUsersList.push({
      value: item.assignedByName,
      label: item.assignedByName,
    })
  );

  LEADS_DATA.map((item) =>
    assigneeUsersList.push({
      value: item.assignedToName,
      label: item.assignedToName,
    })
  );

  //* Output
  const filterData = {
    startDate: startDate,
    endDate: endDate,
    status: status,
    createdBy: selectedCreatedBy,
    assignee: selectedAssignee,
  };

  const handleApplyFilterButton = () => {
    if (
      filterData.createdBy === null &&
      filterData.assignee === null &&
      filterData.status.hot === false &&
      filterData.status.warm === false &&
      filterData.status.cold === false &&
      filterData.endDate === null
    ) {
      setFilterCardOpen(false);
      return null;
    } else {
      onFilterData(filterData);
      setFilterCardOpen(false);
    }
  };

  const handleCancelFilterButton = () => {
    setFilterCardOpen(false);
  };

  return (
    <div className='relative text-left bg-white shadow-md'>
      {/* Dropdown Content */}
      <div className='absolute z-10 w-[389px] h-[452px] rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 right-0'>
        <div className='p-[20px]'>
          {/* Created by */}
          <div className='my-2'>
            <label className='font-semibold text-[#00156A] text-[16px] mb-1'>
              Created by
            </label>
            <div className=''>
              <div className=''>
                <div>
                  <CustomMultiSelect
                    setSelected={setCreatedBy}
                    options={createdByUsersList}
                    onSelectChange={(value:any) => setCreatedBy(value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='border-t my-[10px] w-[349px] h-[1px] border-[#E9F0FF]'></div>

          {/* Assignee */}
          <div className='my-2'>
            <label className='font-semibold text-[#00156A] text-[16px] mb-1'>
              Assignee
            </label>
            <div className=''>
              <div className=' items-center'>
                <div>
                  <CustomMultiSelect
                    setSelected={setAssignee}
                    options={assigneeUsersList}
                    onSelectChange={(value:any) => setAssignee(value)}
                  />
                </div>
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
          </div>

          <div className='border-t my-[10px] w-[349px] h-[1px] border-[#E9F0FF]'></div>

          {/* Date Range */}
          <div className='my-2'>
            <label className='font-semibold text-[#00156A] text-[16px] mb-1'>
              Date Range
            </label>
            <div className='bg-white w-full mt-2 text-center'>
              <DateRangePicker
                startDate={startDate}
                startDateId='your_unique_start_date_id'
                endDate={endDate}
                endDateId='your_unique_end_date_id'
                onDatesChange={({ startDate, endDate }) => {
                  setStartDate(startDate);
                  setEndDate(endDate);
                }}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                displayFormat={() => 'MMM D, YYYY'}
                anchorDirection='left'
              />
            </div>
          </div>

          {/* Apply and Cancel Buttons */}
          <div className='flex justify-between my-10'>
            <button
              onClick={handleCancelFilterButton}
              className='bg-[#EBEBEB] text-black font-semibold px-4 py-2 focus:outline-none w-[170px] h-[40px] rounded-xl'>
              Cancel
            </button>
            <button
              onClick={handleApplyFilterButton}
              className='bg-[#5630FF] text-white font-semibold px-4 py-2 focus:outline-none w-[170px] h-[40px] rounded-xl'>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterLeadsCard;
