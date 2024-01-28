import { LeadOptionsProps } from '@/models/global-types';
import { OPTION_MENU } from '@/utils/constants/common-constants';

const EmployeeOptions = ({ handleViewButton }: LeadOptionsProps) => {
  return (
    <div className='p-2 rounded-[4px] shadow'>
      {OPTION_MENU?.map(({ icon: Icon, label }) => {
        return (
          <div
            key={label}
            className='flex justify-start items-center gap-2 rounded px-2 hover:bg-purple-100 cursor-pointer'
            onClick={handleViewButton}>
            <Icon />
            <p className=' text-gray-700 leading-trim font-semibold text-[16px] block py-2 text-sm'>
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeOptions;
