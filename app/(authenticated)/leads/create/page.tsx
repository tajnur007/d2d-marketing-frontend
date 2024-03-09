'use client';
import { BackArrowIcon } from '@/assets/icons';
import CreateLeadForm from '@/components/create-lead/create-lead-form';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { useRouter } from 'next/navigation';

const LeadsCreatePage = () => {
  const router = useRouter();

  return (
    <div className='bg-white rounded-[10px] py-8 h-[calc(100vh-90px)] '>
      <div className='flex items-center gap-5 mx-6'>
        <p onClick={() => router.push(PAGE_ROUTES.Leads)} className='cursor-pointer'>
          <BackArrowIcon />
        </p>
        <p className='text-[#25254C] text-[20px] font-medium tracking-[.6px]'>Create</p>
      </div>
      <CreateLeadForm />
    </div>
  );
};

export default LeadsCreatePage;
