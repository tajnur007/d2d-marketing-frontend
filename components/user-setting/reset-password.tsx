'use client';

import React, { useState } from 'react';

import { ChangePasswordItems } from '@/models/global-types';
import { CHANGE_PASSWORD_FORM_ITEMS } from '@/utils/constants/common-constants';

import { Input } from '@/components/input';
import { Button } from '@/components/button';

import { UserService } from '@/services/user-services';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

const ResetPasswordPage = ({
  setChangePasswordClicked = () => {},
}: {
  setChangePasswordClicked?: any;
}) => {
  const [formData, setFormData] = useState<ChangePasswordItems>(
    CHANGE_PASSWORD_FORM_ITEMS
  );

  const [formErrors, setFormErrors] = useState<ChangePasswordItems>(
    CHANGE_PASSWORD_FORM_ITEMS
  );

  const { data } = useSession();
  // @ts-ignore
  const token = data?.user?.access_token;

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
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });

    setFormErrors((prev) => {
      return { ...prev, [name]: '' };
    });

    if (value !== formData.NewPassword) {
      setFormErrors((prev) => ({
        ...prev,
        ConfirmPassword: '(Confirm password does not match the new password.)',
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        ConfirmPassword: '',
      }));
    }
  };

  const handleCancel = () => {
    setChangePasswordClicked(true);
  };

  const submitResetPasswordData = async (e: React.FormEvent) => {
    e.preventDefault();

    const newFormErrors: any = {};

    for (let field in formData) {
      if (formData[field as keyof typeof formData] === '') {
        newFormErrors[field] = `(${field} is required)`;
      }
    }

    if (Object.keys(newFormErrors).length === 0) {
      try {
        if (token) {
          const Service = new UserService();
          if (formData?.NewPassword !== formData?.ConfirmPassword) {
            toast.error('Password does not match.');
            return;
          } else {
            const response = await Service.changePassword(
              formData?.CurrentPassword,
              formData.ConfirmPassword,
              token
            );
            if (response.status === 200) {
              toast.success('Password changed successfully.');
              setFormData(CHANGE_PASSWORD_FORM_ITEMS);
              setChangePasswordClicked(true);
            }
          }
        } else {
          toast.error('Token not found.');
        }
      } catch (error: any) {
        toast.error(error.response.data);
      }
    }

    setFormErrors(newFormErrors);
  };

  return (
    <section>
      <div className='w-full h-[calc(100vh-90px)] mt-0 rounded-[10px] bg-white'>
        <div className='ml-6'>
          <div>
            <div className='text-[#00156A] font-bold text-base tracking-[-0.32px] pt-7'>
              Change Password
            </div>
          </div>
        </div>
        <form
          className='bg-white'
          onSubmit={submitResetPasswordData}
          id='reset-password-form'>
          <div className='bg-white gap-[10px] ml-6 mr-8 mb-4 mt-2'>
            <Input
              label='Current Password'
              placeholder='Current Password'
              type='password'
              id='currentPassword'
              name='CurrentPassword'
              onChange={handleInputChange}
            />

            <Input
              label='New Password'
              placeholder='New Password'
              type='password'
              id='newPassword'
              name='NewPassword'
              onChange={handleInputChange}
            />

            <Input
              label='Confirm Password'
              placeholder='Confirm Password'
              type='password'
              id='confirmPassword'
              name='ConfirmPassword'
              onChange={handleConfirmPasswordChange}
            />

            <div className='relative mb-8 mt-4 flex justify-end'>
              <Button
                type='button'
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
        </form>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
