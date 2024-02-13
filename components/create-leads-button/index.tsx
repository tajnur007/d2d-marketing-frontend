import plusImage from '@/assets/images/leadslist-icons/add-circle.png';
import Image from 'next/image';

function CreateLeadsButton() {
  return (
    <button
      type='button'
      className='text-white md:w-[112px] lg:w-[140px] bg-[#5630ff] hover:shadow-blue-500/15 hover:dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-[14px] text-sm md:p-2 lg:p-3 text-center md:mx-3 lg:mx-5 transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
      <div className='flex justify-between items-center'>
        <div className='md:mr-1 lg:mr-2'>
          <Image src={plusImage} alt='' />
        </div>
        <div className='font-medium md:text-[12px] lg:text-[14px] leading-[normal] tracking-[0] whitespace-nowrap'>
          Create leads
        </div>
      </div>
    </button>
  );
}

export default CreateLeadsButton;
