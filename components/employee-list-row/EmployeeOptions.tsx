import { EmployeeOptionsProps } from '@/models/global-types';
import { OPTION_MENU } from '@/utils/constants/common-constants';

const EmployeeOptions = ({
  handleDeleteButton,
  handleEditButton,
}: EmployeeOptionsProps) => {
  const optionMenu = OPTION_MENU?.filter((item) => item.label !== 'View Details');

  return (
    <div className='p-2 rounded-[4px] shadow'>
      {optionMenu?.map(({ icon: Icon, label }) => {
        return (
          <div
            key={label}
            className='flex justify-start outline-none items-center gap-2 rounded px-2 hover:bg-purple-100 cursor-pointer'
            onClick={
              label === 'Edit'
                ? handleEditButton
                : label === 'Delete'
                ? handleDeleteButton
                : undefined
            }>
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
