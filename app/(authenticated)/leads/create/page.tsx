import { BackArrowIcon } from '@/assets/icons';
import CreateLeadForm from '@/components/createlead/create-lead-form';

const LeadsCreatePage = () => {
  return (
    <div className='m-5 bg-white rounded-[10px] p-6'>
      <div className='flex items-center gap-5'>
        <BackArrowIcon />
        <p className='text-[#25254C] text-xl font-medium'>Create</p>
      </div>
      <CreateLeadForm />
    </div>
  );
};

export default LeadsCreatePage;
