import Image from 'next/image';
import mapImage from '@/assets/images/dummy-map.png';

const CreateLeadForm = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col mb-5'>
        <label htmlFor='title' className='text-[#00156A] text-sm font-medium'>
          Title
        </label>
        <input
          type='text'
          placeholder='Title here'
          id='title'
          className='w-[487px] rounded-[10px] border-2 border-[#F3F3F3] focus:border-[#F3F3F3] border-solid py-4 px-3 placeholder-[#B9C1D9]  text-base font-medium'
        />
      </div>
      <Image src={mapImage} alt='map' width={1250} height={342} />
    </div>
  );
};

export default CreateLeadForm;
