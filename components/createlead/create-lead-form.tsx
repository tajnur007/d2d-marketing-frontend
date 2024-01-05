import Image from 'next/image';
import mapImage from '@/assets/images/dummy-map.png';
import { Input } from '../ui/input';
import { TextArea } from '../ui/text-area';
import { ImageUpload } from '../ui/image-upload';
import { Button } from '../ui/button';
import { Select } from '../ui/select';

const CreateLeadForm = () => {
  return (
    <div className='mt-10'>
      <Input
        label='Title'
        placeholder='Title here'
        type='text'
        id='title'
        htmlFor='title'
        className='w-[40%] mb-5'
      />
      <Image src={mapImage} alt='map' width={1250} height={342} />
      <div className='flex items-center justify-between mt-10 gap-5'>
        <div className='flex items-center justify-between w-1/2'>
          <Input label='Name' placeholder='Name' type='text' id='name' htmlFor='name' />
          <Input
            label='Phone'
            placeholder='Phone number'
            type='text'
            id='phone'
            htmlFor='phone'
          />
        </div>
        <div className='flex items-center justify-between w-1/2'>
          <Input
            label='Email'
            placeholder='Email (Optional)'
            type='text'
            id='email'
            htmlFor='email'
          />
          <Input
            label='Reference'
            placeholder='Reference (Optional)'
            type='text'
            id='reference'
            htmlFor='reference'
          />
        </div>
      </div>
      <div className='flex justify-between mt-5 gap-5'>
        <TextArea
          label='Meeting Notes'
          placeholder='Notes'
          className='w-full h-[161px]'
        />

        <div className='flex flex-col justify-between gap-5 w-1/2'>
          <Select label='Status' />

          <div className='flex items-center justify-between gap-5'>
            <Input label='Reminder Title' placeholder='Reminder title)' />
            <Input label='Reminder' placeholder='DD:MM:YY TT:TT' />
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-5 gap-5 items-end'>
        <div className='flex flex-col items-center justify-center w-1/2'>
          <p>Image</p>
          <ImageUpload label='Image' placeholder='Upload image' className='h-[92px] ' />
        </div>
        <Button className='w-[193px] rounded-[10px] h-[60px]'>Create</Button>
      </div>
    </div>
  );
};

export default CreateLeadForm;
