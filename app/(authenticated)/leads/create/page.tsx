'use client';

import { BackArrowIcon } from '@/assets/icons';
import CreateLeadForm from '@/components/createlead/create-lead-form';
import { useRouter } from 'next/navigation';

const LeadsCreatePage = () => {
  const router = useRouter();
  return (
    <div className='bg-white rounded-[10px] p-6'>
      <div className='flex items-center gap-5'>
        <p onClick={() => router.back()} className=' cursor-pointer'>
          <BackArrowIcon />
        </p>
        <p className='text-[#25254C] text-xl font-medium'>Create</p>
      </div>
      <CreateLeadForm />
    </div>
  );
};

export default LeadsCreatePage;
