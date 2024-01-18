'use client';

import React, { useState, useEffect, ChangeEvent, useRef } from 'react';
import Image from 'next/image';
import { FormItems } from '@/models/global-types';
import { FORM_ITEMS } from '@/utils/constants/common-constants';
import profileImage from '@/assets/images/profilePic.png';
import { Input } from './input';
import { Button } from './button';
import { EditIcon } from '@/assets/icons';

const SettingsPage = () => {
  const [selected, setSelected] = useState('Pending');
  const [formData, setFormData] = useState<FormItems>(FORM_ITEMS);
  const [formErrors, setFormErrors] = useState<FormItems>(FORM_ITEMS);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImageSrc, setProfileImageSrc] = useState<string | null>(null);

  const handleEditIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImageSrc(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

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
    <section>
      <div className='bg-white w-full mt-0 mb-5'>
        <div className=' ml-6'>
          <div className='text-[#00156A] font-bold text-base tracking-[-0.32px] pt-7'>
            Account Settings
          </div>
          <div className='mt-5 text-[#00156A] text-xs font-medium'>
            Change Profile Picture
          </div>
        </div>
        <form onSubmit={submitData} id='settings-form'>
          <div className='flex mt-2 ml-6'>
            <div className="flex items-center w-15 mt-[8px] ">
            <Image
              src={profileImageSrc || profileImage} 
              alt="Profile Picture"
              width={20}
              height={20}
              className="rounded-full w-20 h-20 flex-shrink-0"
            />
            </div>
            <div className='mt-9 ml-4 cursor-pointer' onClick={handleEditIconClick}>
              <EditIcon />
            </div>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>
          <div className='gap-[10px] ml-6 mr-8 mb-4 mt-2'>
            <Input
              label={<p className='text-[#00156A] font-medium text-xs mt-6 mb-1'>Full Name</p>}
              placeholder='Full Name'
              type='text'
              id='fullName'
              name='fullName'
              errorMessage={formErrors.Name}
              htmlFor='name'
              onChange={handleInputChange}
              className={` ${formErrors.Name && 'border-red-500 shadow'}`}
            />
            <Input
              label={<p className='text-[#00156A] font-medium text-xs mt-2 mb-1'>Email</p>}
              placeholder='Email'
              type='text'
              id='email'
              name='email'
              errorMessage={formErrors.Name}
              htmlFor='email'
              onChange={handleInputChange}
              className={` ${formErrors.Name && 'border-red-500 shadow'}`}
            />

            <Input
              label={<p className='text-[#00156A] font-medium text-xs mt-2 mb-1'>Phone Number</p>}
              placeholder='Phone Number'
              type='text'
              id='phone'
              name='phone'
              errorMessage={formErrors.Name}
              htmlFor='phone'
              onChange={handleInputChange}
              className={` ${formErrors.Name && 'border-red-500 shadow'}`}
            />

            <Input
              label={<p className='text-[#00156A] font-medium text-xs mt-2 mb-1'>Role (View Only)</p>}
              placeholder='Assignee'
              type='text'
              id='role'
              name='role'
              readOnly
            />

          </div>
          <div className='flex ml-[795px] mb-3'>
            <Button
              onClick={handleCancel}
              className='text-[#69708C] w-40 h-25 p-18 rounded-lg m-2 p-3 bg-[#EBEBEB]'>
              Cancel
            </Button>
            <Button
              type='submit'
              className='text-white w-40 h-25 text-lg rounded-lg m-2 p-3 bg-[#4318FF]'>
              Save
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SettingsPage;
