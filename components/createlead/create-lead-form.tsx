'use client';
import Image from 'next/image';
import mapImage from '@/assets/images/dummy-map.png';
import { Input } from '../ui/input';
import { TextArea } from '../ui/text-area';
import { ImageUpload } from '../ui/image-upload';
import { Button } from '../ui/button';
import { Select } from '../ui/select';
import { DatePicker } from '../ui/date-picker';
import { ChangeEvent } from 'react';

const CreateLeadForm = () => {
  const handleInputChange = (e: ChangeEvent) => {};
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
        <div className='flex items-center justify-between w-1/2 gap-5'>
          <Input label='Name' placeholder='Name' type='text' id='name' htmlFor='name' />
          <Input
            label='Phone'
            placeholder='Phone number'
            type='text'
            id='phone'
            htmlFor='phone'
          />
        </div>
        <div className='flex items-center justify-between w-1/2 gap-5'>
          <Input
            label='Email'
            placeholder='Email (Optional)'
            type='email'
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
      <div className='flex items-center justify-between mt-10 gap-5'>
        <div className='w-1/2'>
          <TextArea label='Meeting Notes' placeholder='Notes' className=' h-[161px] ' />
        </div>

        <div className='flex flex-col justify-between gap-5 w-1/2'>
          <Select label='Status' />

          <div className='flex items-center justify-between gap-5'>
            <Input label='Reminder Title' placeholder='Reminder title)' />
            <DatePicker
              label='Reminder'
              placeholder='DD:MM:YY TT:TT'
              type='date'
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-5 gap-5 items-end'>
        <div className='flex flex-col items-start justify-center w-1/2'>
          <p className='text-[#00156A] text-sm font-medium'>Image</p>
          <ImageUpload label='Image' placeholder='Upload image' className='h-[92px] ' />
        </div>
        <div className='w-1/2 flex justify-end '>
          <Button className='w-[193px] rounded-[10px] h-[60px] '>Create</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateLeadForm;
