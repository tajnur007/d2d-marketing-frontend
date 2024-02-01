'use-client';

import { CalendarIcon } from '@/assets/icons';
import { FilterLeadsCardProps, StatusState } from '@/models/global-types';
import { useState, useContext } from 'react';
import { LeadsContext } from '@/context/leads-context';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CustomMultiSelect } from '../custom-multi-select';
import StatusCheckbox from '../status-checkbox';
import './style.css';
import { LeadService } from '@/services/lead-services';
import { useSession } from 'next-auth/react';

const FilterLeadsCard: React.FC<FilterLeadsCardProps> = ({
  onFilterData,
  setFilterCardOpen,
}) => {
  //! State for date range
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  //! State for status
  const [status, setStatus] = useState<StatusState>({
    hot: false,
    warm: false,
    cold: false,
  });

  //! State for Created by
  const [selectedCreatedBy, setCreatedBy] = useState<string>('');
  const [selectedAssignee, setAssignee] = useState<string>('');
  const { executivesOption, setExecutivesOption, createdByOptions, setCreatedByOptions } =
    useContext(LeadsContext);

  //* Output
  const filterData = {
    startDate: startDate,
    endDate: endDate,
    status: status,
    createdBy: selectedCreatedBy,
    assignee: selectedAssignee,
  };

  const handleCheckboxChange = (statusName: keyof StatusState) => {
    setStatus((prevStatus) => ({
      hot: statusName === 'hot' ? !prevStatus.hot : false,
      warm: statusName === 'warm' ? !prevStatus.warm : false,
      cold: statusName === 'cold' ? !prevStatus.cold : false,
    }));
  };

  const { data } = useSession();
  const ApplyFilter = async () => {
    try {
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

      // from selected data, we extract ID to send it to payload
      const selectedAssigneeId = executivesOption.find(
        (option: any) => option.label === filterData.assignee[0]
      )?.id;

      const SelectedCreatedById = createdByOptions.find(
        (option: any) => option.label === filterData.createdBy[0]
      )?.created_by_user_id;

      //! payload
      const payloadObj = {
        match: {
          meeting_status: {
            any: [],
          },
          created_by_user_id: {
            any: [SelectedCreatedById],
          },
          executive_id: {
            any: [selectedAssigneeId],
          },
        },
        range: {
          created_at: {
            lte: endDate?.toISOString(),
            gte: startDate?.toISOString(),
          },
        },
      };
      console.log(payloadObj);

      // @ts-ignore
      const token = data?.user?.access_token;

      const LeadServices = new LeadService();
      if (token) {
        //await LeadServices.createLead(payloadObj, token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const CancelFilter = () => {
    setFilterCardOpen(false);
  };

  return (
    <div>
      <div className=' bg-white  mt-2 pl-[12px] pt-[20px] pr-[20px] pb-[20px]'>
        {/* Created by */}
        <div>
          <label className='font-semibold text-base leading-[28px] text-[#00156A] mb-1 pl-[8px]'>
            Created by
          </label>
          <div>
            <CustomMultiSelect
              setSelected={setCreatedBy}
              options={createdByOptions}
              onSelectChange={(value: any) => setCreatedBy(value)}
            />
          </div>
        </div>

        <div className='border-t my-[10px] w-[349px] h-[1px] border-[#E9F0FF] ml-[7px]'></div>

        {/* Assignee */}
        <div className='mt-[10px]'>
          <label className='font-semibold text-base leading-[28px] text-[#00156A] mb-1 pl-[8px]'>
            Assignee
          </label>
          <div>
            <CustomMultiSelect
              setSelected={setAssignee}
              options={executivesOption}
              onSelectChange={(value: any) => setAssignee(value)}
            />
          </div>
        </div>

        <div className='border-t my-[10px] w-[349px] h-[1px] border-[#E9F0FF] ml-[7px]'></div>

        {/* Status */}
        <div className='mt-[10px]'>
          <label className='font-semibold text-base leading-[28px] text-[#00156A] mb-1 pl-[8px]'>
            Status
          </label>
          <div className='m-[10px] flex items-center'>
            <StatusCheckbox
              id='hot-checkbox'
              checked={status.hot}
              onChange={() => handleCheckboxChange('hot')}>
              Hot
            </StatusCheckbox>
            <StatusCheckbox
              id='warm-checkbox'
              checked={status.warm}
              onChange={() => handleCheckboxChange('warm')}>
              Warm
            </StatusCheckbox>
            <StatusCheckbox
              id='cold-checkbox'
              checked={status.cold}
              onChange={() => handleCheckboxChange('cold')}>
              Cold
            </StatusCheckbox>
          </div>
        </div>

        <div className='border-t my-[10px] w-[349px] h-[1px] border-[#E9F0FF] ml-[7px]'></div>

        {/* Date Range */}
        <div className='my-[10px] pl-[8px]'>
          <label className='font-semibold text-base leading-[28px] text-[#00156A] mb-1'>
            Date Range
          </label>
          <div className='bg-white w-full mt-2 text-center'>
            <div className='flex space-x-2 items-center'>
              <div className='relative w-[159px] h-[44px]'>
                <div className='py-2 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 date-style flex justify-start'>
                  <DatePicker
                    selected={startDate}
                    onChange={(date: any) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat='MMM d, yyyy'
                  />
                </div>
                <span className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600'>
                  <CalendarIcon />
                </span>
              </div>
              <span className='text-[#667085]'>–</span>
              <div className='relative w-[159px] h-[44px]'>
                <div className='py-2 px-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 date-style flex justify-start'>
                  <DatePicker
                    selected={endDate}
                    onChange={(date: any) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat='MMM d, yyyy'
                  />
                </div>
                <span className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600'>
                  <CalendarIcon />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Apply and Cancel Buttons */}
        <div className='flex justify-between mt-[18px] gap-2 pl-[8px]'>
          <button
            onClick={CancelFilter}
            className='bg-[#EBEBEB] text-black font-semibold px-4 py-2 focus:outline-none w-[170px] h-[40px] rounded-xl text-sm leading-5 transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
            Cancel
          </button>
          <button
            onClick={ApplyFilter}
            className='bg-[#5630FF] text-white font-semibold px-4 py-2 focus:outline-none w-[170px] h-[40px] rounded-xl text-sm leading-5 transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterLeadsCard;
