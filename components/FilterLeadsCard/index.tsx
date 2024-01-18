'use-client';

import { FilterLeadsCardProps, StatusState } from '@/models/global-types';
import {
  ASSIGNEE_USERS_LIST,
  CREATED_BY_USERS_LIST,
} from '@/utils/constants/leadslist-constant';
import { Moment } from 'moment';
import { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { CustomMultiSelect } from '../CustomMultiSelect';
import StatusCheckbox from '../StatusCheckBox/StatusCheckbox';

const FilterLeadsCard: React.FC<FilterLeadsCardProps> = ({
  onFilterData,
  setFilterCardOpen,
}) => {
  //! State for date range
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<'startDate' | 'endDate' | null>(null);

  //! State for status
  const [status, setStatus] = useState<StatusState>({
    hot: false,
    warm: false,
    cold: false,
  });

  const handleCheckboxChange = (statusName: keyof StatusState) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [statusName]: !prevStatus[statusName],
    }));
  };

  //! State for Created by
  const [selectedCreatedBy, setCreatedBy] = useState<string | null>(null);
  const [selectedAssignee, setAssignee] = useState<string | null>(null);

  //* Output
  const filterData = {
    startDate: startDate,
    endDate: endDate,
    status: status,
    createdBy: selectedCreatedBy,
    assignee: selectedAssignee,
  };

  const ApplyFilter = () => {
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

  const CancelFilter = () => {
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
            <div>
              <CustomMultiSelect
                setSelected={setCreatedBy}
                options={CREATED_BY_USERS_LIST}
                onSelectChange={(value: any) => setCreatedBy(value)}
              />
            </div>
          </div>

          <div className='border-t my-[10px] w-[349px] h-[1px] border-[#E9F0FF]'></div>

          {/* Assignee */}
          <div className='my-2'>
            <label className='font-semibold text-[#00156A] text-[16px] mb-1'>
              Assignee
            </label>
            <div className='items-center'>
              <CustomMultiSelect
                setSelected={setAssignee}
                options={ASSIGNEE_USERS_LIST}
                onSelectChange={(value: any) => setAssignee(value)}
              />
            </div>
          </div>

          <div className='border-t my-[10px] w-[349px] h-[1px] border-[#E9F0FF]'></div>

          {/* Status */}
          <div className='my-2'>
            <label className='font-semibold text-[#00156A] text-[16px] mb-1'>
              Status
            </label>
            <StatusCheckbox status={status} handleCheckboxChange={handleCheckboxChange} />
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
              onClick={CancelFilter}
              className='bg-[#EBEBEB] text-black font-semibold px-4 py-2 focus:outline-none w-[170px] h-[40px] rounded-xl'>
              Cancel
            </button>
            <button
              onClick={ApplyFilter}
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
