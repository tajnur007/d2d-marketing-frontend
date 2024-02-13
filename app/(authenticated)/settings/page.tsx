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

const SettingsPage = () => {
  const [selected, setSelected] = useState('Pending');
  const [formData, setFormData] = useState<SettingFormItems>(SETTING_FORM_ITEMS);
  const [formErrors, setFormErrors] = useState<SettingFormItems>(SETTING_FORM_ITEMS);
  const [changePasswordClicked, setChangePasswordClicked] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [profileImageSrc, setProfileImageSrc] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState('');
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

  const handleConfirmPasswordChange = (e: any) => {
    const { value } = e.target;

    setConfirmPassword(value);
    if (value !== formData.NewPassword) {
      setFormErrors((prev) => ({
        ...prev,
        ConfirmPassword: 'Confirm password does not match the new password.',
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        ConfirmPassword: '',
      }));
    }
  };

  const handlePasswordButtonClick = () => {
    setChangePasswordClicked(true);
    setShowPasswordFields(true);
  };

  const handleCancel = () => {
    setChangePasswordClicked(false);
    setShowPasswordFields(false);
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
          {changePasswordClicked ? (
            <div>
              <div className='text-[#00156A] font-bold text-base tracking-[-0.32px] pt-7'>
                Change Password
              </div>
            </div>
          ) : (
            <div>
              <div className='text-[#00156A] font-bold text-base tracking-[-0.32px] pt-7'>
                Account Settings
              </div>
              <div className='mt-5 text-[#00156A] text-xs font-medium'>
                Change Profile Picture
              </div>
            </div>
          )}
        </div>
        <form className='bg-white' onSubmit={submitData} id='settings-form'>
          {changePasswordClicked ? (
            <div className='bg-white gap-[10px] ml-6 mr-8 mb-4 mt-2'>
              <Input
                label='Current Password'
                placeholder='Current Password'
                type='password'
                id='currentPassword'
                name='CurrentPassword'
                onChange={handleInputChange}
                className={`mb-3 2xl:mb-5 ${
                  formErrors.CurrentPassword && 'border-red-500 shadow'
                }`}
              />

              <Input
                label='New Password'
                placeholder='New Password'
                type='password'
                id='newPassword'
                name='NewPassword'
                onChange={handleInputChange}
                className={`mb-3 2xl:mb-5 ${
                  formErrors.NewPassword && 'border-red-500 shadow'
                }`}
              />

              <Input
                label='Confirm Password'
                placeholder='Confirm Password'
                type='password'
                id='confirmPassword'
                name='ConfirmPassword'
                onChange={handleConfirmPasswordChange}
                className={`mb-3 2xl:mb-5 ${
                  formErrors.ConfirmPassword && 'border-red-500 shadow'
                }`}
              />

              {confirmPassword !== formData.NewPassword && (
                <p className='text-red-500 text-xs mt-1 ml-2'>
                  Confirm password does not match the new password.
                </p>
              )}
              <div className='relative mb-8 mt-4 flex justify-end'>
                <Button
                  onClick={handleCancel}
                  className='text-[#69708C] w-40 h-25 text-lg rounded-lg m-2 p-3 bg-[#EBEBEB] mb-4 hover:text-white'>
                  Cancel
                </Button>
                <Button
                  type='submit'
                  className='text-white w-40 h-25 text-lg rounded-lg m-2 p-3 bg-[#4318FF] mb-4'>
                  Save
                </Button>
              </div>
            </div>
          ) : (
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
                  {!showPasswordFields && (
                    <Button
                      onClick={handlePasswordButtonClick}
                      className='text-[#FFFFFF] text-sm 2xl:text-base rounded-lg px-5 h-[45px] 2xl:h-[52px] bg-[#5630FF]'>
                      Change Password
                    </Button>
                  )}
                </div>
              </div>

              {!changePasswordClicked && (
                <div className='gap-[10px] ml-6 mr-8 mb-2 mt-2'>
                  <Input
                    label='Full Name'
                    placeholder='Full Name'
                    type='text'
                    id='fullName'
                    name='Name'
                    value={userInfo?.name}
                    errorMessage={formErrors.Name}
                    htmlFor='name'
                    onChange={handleInputChange}
                    className={`mb-3 2xl:mb-5 ${
                      formErrors.Name && 'border-red-500 shadow'
                    }`}
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
                    className={`mb-3 2xl:mb-5 ${
                      formErrors.Email && 'border-red-500 shadow'
                    }`}
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
                    className={`mb-3 2xl:mb-5 ${
                      formErrors.Phone && 'border-red-500 shadow'
                    }`}
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
              )}
              <div className='flex justify-end items-center gap-4 mr-7 mt-5'>
                <Button
                  onClick={handleCancel}
                  className='text-[#69708C] w-[121px] px-5 2xl:w-32 h-[45px] 2xl:h-[52px] text-sm 2xl:text-base rounded-lg  bg-[#EBEBEB] hover:bg-gray-200'>
                  Cancel
                </Button>
                <Button
                  type='submit'
                  className='text-white w-[110px] px-5 2xl:w-32 h-[45px] 2xl:h-[52px] text-sm 2xl:text-base rounded-lg  bg-[#4318FF] '>
                  Save
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default SettingsPage;
