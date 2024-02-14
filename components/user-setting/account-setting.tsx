'use client';

import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Image from 'next/image';
import { SettingFormItems } from '@/models/global-types';
import { SETTING_FORM_ITEMS } from '@/utils/constants/common-constants';
import profileImage from '@/assets/images/profilePic.png';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { EditIcon } from '@/assets/icons';
import { UserService } from '@/services/user-services';
import { useSession } from 'next-auth/react';

const AccountSettingsPage = ({
  setChangePasswordClicked = () => {},
}: {
  setChangePasswordClicked?: any;
}) => {
  const [formData, setFormData] = useState<SettingFormItems>(SETTING_FORM_ITEMS);
  const [formErrors, setFormErrors] = useState<SettingFormItems>(SETTING_FORM_ITEMS);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImageSrc, setProfileImageSrc] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>();
  const { data } = useSession();

  useEffect(() => {
    const getUserInfo = async () => {
      //@ts-ignore
      const token = data?.user?.access_token;

      if (token) {
        const Service = new UserService();
        const resp = await Service.getUserInfo(token);
        setUserInfo(resp?.data?.Data);
        setFormData(resp?.data?.Data);
      }
    };
    getUserInfo();
  }, [data]);

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

  const handlePasswordButtonClick = () => {
    setChangePasswordClicked(false);
  };

  const submitData = (e: React.FormEvent) => {
    e.preventDefault();

    const newFormErrors: any = {};

    for (let field in formData) {
      if (formData[field as keyof typeof formData] === '') {
        newFormErrors[field] = `(${field} is required)`;
      }
    }

    setFormErrors(newFormErrors);
  };

  return (
    <section>
      <div className='w-full h-[calc(100vh-102px)] mt-0 rounded-[10px] bg-white'>
        <div className='ml-6'>
          <div>
            <div className='text-[#00156A] font-bold text-base tracking-[-0.32px] pt-7'>
              Account Settings
            </div>
            <div className='mt-5 text-[#00156A] text-xs font-medium'>
              Change Profile Picture
            </div>
          </div>
        </div>

        <div>
          <div className='flex mt-2 ml-6 mb-5 md:flex-row'>
            <div className='flex items-center w-20 mt-[8px] md:mt-0'>
              <Image
                src={profileImageSrc || profileImage}
                alt='Profile Picture'
                width={20}
                height={20}
                className='rounded-full w-20 h-20 flex-shrink-0'
              />
            </div>
            <div
              className='mt-9 md:mt-9 ml-4 cursor-pointer'
              onClick={handleEditIconClick}>
              <EditIcon />
            </div>
            <input
              type='file'
              accept='image/*'
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <div className='ml-auto mr-8 mt-8'>
              <Button
                type='button'
                onClick={handlePasswordButtonClick}
                className='text-[#FFFFFF] text-sm 2xl:text-base rounded-lg px-5 h-[45px] 2xl:h-[52px] bg-[#5630FF]'>
                Change Password
              </Button>
            </div>
          </div>
          <form className='bg-white' onSubmit={submitData} id='settings-form'>
            <div className='gap-[10px] ml-6 mr-8 mb-2 mt-2'>
              <Input
                label='Full Name'
                placeholder='Full Name'
                type='text'
                id='fullName'
                name='Name'
                defaultValue={userInfo?.name}
                errorMessage={formErrors.Name}
                htmlFor='name'
                onChange={handleInputChange}
                className={`mb-3 2xl:mb-5 ${formErrors.Name && 'border-red-500 shadow'}`}
              />
              <Input
                label='Email'
                placeholder='Email'
                type='text'
                id='email'
                name='Email'
                htmlFor='email'
                readOnly
                value={userInfo?.email}
                errorMessage={formErrors.Email}
                onChange={handleInputChange}
                className={`mb-3 2xl:mb-5 ${formErrors.Email && 'border-red-500 shadow'}`}
              />

              <Input
                label='Phone Number'
                placeholder='Phone Number'
                type='text'
                id='phone'
                name='Phone'
                value={userInfo?.phone}
                errorMessage={formErrors.Phone}
                htmlFor='phone'
                onChange={handleInputChange}
                className={`mb-3 2xl:mb-5 ${formErrors.Phone && 'border-red-500 shadow'}`}
              />

              <Input
                label='Role (View Only)'
                placeholder='Assignee'
                type='text'
                id='role'
                name='Role'
                value={userInfo?.user_type}
                readOnly
                className='mb-3 2xl:mb-5'
              />
            </div>

            <div className='flex justify-end items-center gap-4 mr-7 mt-5'>
              <Button
                type='button'
                className='text-[#69708C] w-[121px] px-5 2xl:w-32 h-[45px] 2xl:h-[52px] text-sm 2xl:text-base rounded-lg  bg-[#EBEBEB]  hover:text-white'>
                Cancel
              </Button>
              <Button
                type='submit'
                className='text-white w-[110px] px-5 2xl:w-32 h-[45px] 2xl:h-[52px] text-sm 2xl:text-base rounded-lg  bg-[#4318FF] '>
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AccountSettingsPage;
