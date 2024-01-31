'use client';
import { BackArrowIcon } from '@/assets/icons';
import UpdateLeadForm from '@/components/create-lead/update-lead-form';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { useRouter } from 'next/navigation';

const LeadUpdatePage = () => {
  const router = useRouter();

  return (
    <div className='bg-white rounded-[10px] py-8 h-[84vh]'>
      <div className='flex items-center gap-5 mx-6'>
        <p onClick={() => router.push(PAGE_ROUTES.Leads)} className='cursor-pointer'>
          <BackArrowIcon />
        </p>
        <p className='text-[#25254C] text-[20px] font-medium tracking-[.6px]'>Update</p>
      </div>
      <UpdateLeadForm />
    </div>
  );
};

export default LeadUpdatePage;
