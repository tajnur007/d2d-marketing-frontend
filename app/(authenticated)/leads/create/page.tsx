'use client';
import { BackArrowIcon } from '@/assets/icons';
import CreateLeadForm from '@/components/createlead/create-lead-form';
import { useRouter } from 'next/navigation';

const LeadsCreatePage = () => {
  const router = useRouter();

  return (
    <div className='bg-white rounded-[10px] p-6'>
      <div className='flex items-center gap-5'>
        <p onClick={() => router.push('/leads')} className=' cursor-pointer'>
          <BackArrowIcon />
        </p>
        <p className='Metropolis text-[#25254C] text-[20px] font-medium tracking-[.6px]'>Create</p>
      </div>
      <CreateLeadForm />
    </div>
  );
};

export default LeadsCreatePage;
