import { EyeIcon, EditIcon, DeleteIcon } from '@/assets/icons';
import { LeadOptionsProps } from '@/models/global-types';

const LeadsOptions = ({ handleViewButton, handleEditButton }: LeadOptionsProps) => {
  return (
    <div className='menu'>
      <div className='py-1'>
        <button
          type='button'
          className='menu-item flex justify-start items-center pl-4 '
          onClick={handleViewButton}>
          <div>
            <EyeIcon />
          </div>
          <div className=' text-gray-700 leading-trim font-semibold text-[16px] block px-4 py-2 text-sm'>
            View Details
          </div>
        </button>
        <button 
        type='button'
        className='menu-item flex justify-start items-center pl-4'
        onClick={handleEditButton}
        >
          <div>
            <EditIcon />
          </div>
          <div className=' text-gray-700 leading-trim font-semibold text-[16px] block px-4 py-2 text-sm'>
            Edit
          </div>
        </button>
        <button className='menu-item flex justify-start items-center pl-4'>
          <div>
            <DeleteIcon />
          </div>
          <div className=' text-gray-700 leading-trim font-semibold text-[16px] block px-4 py-2 text-sm'>
            Delete
          </div>
        </button>
      </div>
    </div>
  );
};

export default LeadsOptions;
