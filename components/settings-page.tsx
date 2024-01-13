'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import Image from 'next/image';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { FormItems } from '@/models/global-types';
import { FORMITEMS } from '@/utils/constants/common-constants';
import profileImage from '@/assets/images/profile.png';
import { Input } from './input';
import { Button } from './button';

const SettingsPage = () => {
  const [selected, setSelected] = useState('Pending');
  const [formData, setFormData] = useState<FormItems>(FORMITEMS);
  const [formErrors, setFormErrors] = useState<FormItems>(FORMITEMS);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

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

  const handleCancel = () => {
    console.log('reset form clicked');
  };

  return (
    <section className='flex justify-center w-full'>
      <div className='flex flex-col items-center '>
        <p className='text-4xl font-bold m-8'>Update Profile</p>
        <form onSubmit={submitData} id='settings-form'>
          <div className='w-full flex justify-center bottom-5'>
            <Image src={profileImage} alt='' height={46} width={46} />
          </div>
          <Input
            label='Name'
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
            label='Email'
            placeholder='Email'
            type='text'
            id='email'
            name='email'
            errorMessage={formErrors.Name}
            htmlFor='email'
            onChange={handleInputChange}
            className={` ${formErrors.Name && 'border-red-500 shadow'}`}
          />
          <div className=' m-0 p-0 gap-2'>
            <Button
              onClick={handleCancel}
              className='text-[#4318FF] text-lg rounded-lg m-2 p-3 bg-white '>
              Cancel
            </Button>
            <Button
              type='submit'
              className='text-white text-lg rounded-lg m-2 p-3 bg-[#4318FF] '>
              Save changes
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SettingsPage;
