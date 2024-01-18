'use client';
import Image from 'next/image';
import mapImage from '@/assets/images/dummy-map.png';
import { Input } from '@/components/input';
import { TextArea } from '@/components/text-area';
import { ImageUpload } from '@/components/image-upload';
import { Button } from '@/components/button';
import { DatePicker } from '@/components/date-picker';
import { useEffect, useState } from 'react';
import {
  ASSIGN_TO_NEW,
  CREATE_LEAD_STATUS_NEW,
  FORM_ITEMS,
} from '@/utils/constants/common-constants';
import { FormItems } from '@/models/global-types';
import { AssignToSelect } from '../select/assign-to-select';
import { StatusSelect } from '../select/status-select';

const CreateLeadForm = () => {
  const [selected, setSelected] = useState('Pending');
  const [formData, setFormData] = useState<FormItems>(FORM_ITEMS);
  const [formErrors, setFormErrors] = useState<FormItems>(FORM_ITEMS);

  const getDate = (e: string) => {
    console.log(e);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    console.log(value);

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });

    setFormErrors((prev) => {
      return { ...prev, [name]: '' };
    });
  };

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, Status: selected };
    });
  }, [selected, formErrors]);

  const submitData = () => {
    const newFormErrors: any = {};

    for (let field in formData) {
      if (formData[field as keyof typeof formData] === '') {
        newFormErrors[field] = `(${field} is required)`;
      }
    }
    setFormErrors(newFormErrors);
  };

  return (
    <div className='mt-2 p-6 overflow-y-auto h-[calc(100%-30px)] tiny-scrollbar'>
      <div className='flex items-center justify-between mt-10 gap-5'>
        <Input
          label={<p className='text-[#00156A] font-medium text-xs mb-1'>Title</p>}
          placeholder='Title here'
          type='text'
          id='title'
          name='Title'
          htmlFor='title'
          errorMessage={formErrors.Title}
          className={`w-full mb-5 ${formErrors.Title && 'border-red-500 shadow'}`}
          onChange={handleInputChange}
        />
        <div className='flex flex-col justify-between gap-5 w-full'>
          <AssignToSelect
            label='Assign to'
            setSelected={setSelected}
            options={ASSIGN_TO_NEW}
          />
        </div>
      </div>
      <div className='rounded-2xl relative'>
        <Image
          src={mapImage}
          alt='map'
          height={342}
          width={2860}
          onChange={handleInputChange}
        />
      </div>

      <div className='flex items-center justify-between mt-10 gap-5'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-1/2 gap-5'>
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Name</p>}
            placeholder='Name'
            type='text'
            id='name'
            name='Name'
            errorMessage={formErrors.Name}
            htmlFor='name'
            onChange={handleInputChange}
            className={` ${formErrors.Name && 'border-red-500 shadow'}`}
          />
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Phone</p>}
            placeholder='Phone number'
            type='text'
            id='phone'
            name='Phone'
            errorMessage={formErrors.Phone}
            htmlFor='phone'
            onChange={handleInputChange}
            className={` ${formErrors.Phone && 'border-red-500 shadow'}`}
          />
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-1/2 gap-5'>
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Email</p>}
            placeholder='Email (Optional)'
            type='email'
            id='email'
            name='Email'
            htmlFor='email'
            onChange={handleInputChange}
          />
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Reference</p>}
            placeholder='Reference (Optional)'
            type='text'
            id='reference'
            name='Reference'
            htmlFor='reference'
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='flex items-center justify-between mt-5 gap-5'>
        <div className='w-1/2'>
          <TextArea
            label={
              <p className='text-[#00156A] font-medium text-xs mb-1'>Meeting Notes</p>
            }
            placeholder='Notes'
            name='Note'
            errorMessage={formErrors.Note}
            className={`h-[161px] ${formErrors.Note && 'border-red-500 shadow'}`}
            onChange={handleInputChange}
          />
        </div>

        <div className='flex flex-col justify-between gap-5 w-1/2'>
          <StatusSelect
            label='Status'
            setSelected={setSelected}
            options={CREATE_LEAD_STATUS_NEW}
          />

          <div className='flex flex-col items-start justify-center '>
            <p className='text-[#00156A] font-medium text-xs mb-1'>
              Image
              {formErrors.Image && (
                <span className='text-red-500 text-xs ml-1'>{formErrors.Image}</span>
              )}
            </p>
            <ImageUpload
              label={<p className='text-[#00156A] font-medium text-xs mb-1'>Image</p>}
              placeholder='Upload image'
              name='Image'
              onChange={handleInputChange}
              className={`h-[92px] ${formErrors.Image && 'border-red-500 shadow'}`}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-end mt-5 gap-5 items-end'>
        <div className='w-1/2 flex justify-end '>
          <Button onClick={submitData} className='w-[193px] rounded-[10px] h-[60px] '>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateLeadForm;
