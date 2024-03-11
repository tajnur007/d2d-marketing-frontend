'use client';

import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Image from 'next/image';
import { SettingFormItems } from '@/models/global-types';
import { SETTING_FORM_ITEMS } from '@/utils/constants/common-constants';
import profileImage from '@/assets/images/profilePic.png';
import { Input } from '@/components/input';
import { EditIcon } from '@/assets/icons';
import { UserService } from '@/services/user-services';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

const AccountSettingsPage = ({
  setChangePasswordClicked = () => {},
}: {
  setChangePasswordClicked?: any;
}) => {
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);
  const [formData, setFormData] = useState<SettingFormItems>(SETTING_FORM_ITEMS);
  const [formErrors, setFormErrors] = useState<SettingFormItems>(SETTING_FORM_ITEMS);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImageSrc, setProfileImageSrc] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>();
  const { data } = useSession();

  const UserServices = new UserService();

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

  useEffect(() => {
    if (userInfo?.email) {
      setFormData({
        Name: userInfo?.name,
        Phone: userInfo?.phone,
        Email: userInfo?.email,
        Image: userInfo?.image_path,
      });
    }
  }, [userInfo]);

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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handlePasswordButtonClick = () => {
    setChangePasswordClicked(false);
  };

  const checkErrors = (): boolean => {
    const newFormErrors: any = {};

    for (let field in formData) {
      if (formData[field as keyof typeof formData] === '') {
        newFormErrors[field] = `(${field} is required)`;
      }
    }

    setFormErrors(newFormErrors);

    return !newFormErrors.Name;
  };

  const submitData = (e: React.FormEvent) => {
    e.preventDefault();

    if (checkErrors()) {
      // @ts-ignore
      const token = data?.user?.access_token || '';
      const payload = {
        name: formData.Name,
        phone: formData.Phone || '',
      };

      UserServices.updateEmployeeInfo(userInfo.id, payload, token)
        .then(() => toast.success('Account updated successfully!'))
        .catch((error) => {
          toast.error(error?.response?.data?.message || 'Cound not saved updated info!');
        });
    }
  };

  const cancelEditProfile = () => {
    checkErrors();
    setIsEditProfile(false);
    setFormData({
      Name: userInfo?.name,
      Phone: userInfo?.phone,
      Email: userInfo?.email,
      Image: userInfo?.image_path,
    });
  };

  return (
    <section>
      <div className='w-full h-[calc(100vh-90px)] p-6 rounded-[10px] bg-white'>
        <div className='text-[#00156A] font-bold'>Account Settings</div>
        <div className='mt-3 text-[#00156A] text-xs font-medium'>
          Change Profile Picture
        </div>

        <div className='flex items-center justify-between mt-2 mb-5'>
          <div className='flex items-center'>
            <Image
              src={profileImageSrc || profileImage}
              alt='Profile Picture'
              width={20}
              height={20}
              className='rounded-full w-20 h-20 flex-shrink-0'
            />
            <div className='ml-4 cursor-pointer' onClick={handleEditIconClick}>
              <EditIcon />
              <input
                type='file'
                accept='image/*'
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className='flex gap-2 2xl:gap-3'>
            <button
              className='text-[#191D31] text-sm 2xl:text-base rounded-lg px-4 2xl:px-5 h-9 2xl:h-12 bg-transparent border border-[#d8d7d7] text-nowrap'
              onClick={() => setIsEditProfile(true)}>
              Edit Profile
            </button>
            <button
              onClick={handlePasswordButtonClick}
              className='text-white text-sm 2xl:text-base rounded-lg px-4 2xl:px-5 h-9 2xl:h-12 bg-[#5630FF] text-nowrap'>
              Change Password
            </button>
          </div>
        </div>

        <form className='bg-white' onSubmit={submitData} id='settings-form'>
          <div className='gap-4 2xl:gap-5 mt-2'>
            <Input
              label='Full Name'
              id='fullName'
              name='Name'
              placeholder='Full Name'
              readOnly={!isEditProfile}
              isError={!!formErrors.Name}
              value={formData.Name}
              onChange={handleInputChange}
            />
            <Input
              label='Email'
              id='email'
              name='Email'
              readOnly
              required
              requiredText='This field is not editable'
              value={userInfo?.email}
              onChange={handleInputChange}
            />

            <Input
              label='Phone Number'
              id='phone'
              name='Phone'
              placeholder='Phone Number'
              readOnly={!isEditProfile}
              value={formData.Phone}
              onChange={handleInputChange}
            />

            <Input
              label='Role'
              id='role'
              name='Role'
              readOnly
              required
              requiredText='This field is not editable'
              value={userInfo?.user_type}
            />
          </div>

          {isEditProfile && (
            <div className='flex justify-end items-center gap-2 2xl:gap-3 mt-5'>
              <button
                className='text-[#69708C] w-[121px] 2xl:w-32 h-9 2xl:h-12 text-sm 2xl:text-base rounded-lg bg-[#EBEBEB]'
                onClick={cancelEditProfile}>
                Cancel
              </button>
              <button
                type='submit'
                className='text-white w-[110px] 2xl:w-32 h-9 2xl:h-12 text-sm 2xl:text-base rounded-lg  bg-[#4318FF]'>
                Save
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default AccountSettingsPage;
