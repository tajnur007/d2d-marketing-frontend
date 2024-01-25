'use client';

import { PasswordRevealIcon } from '@/assets/icons';
import { Button } from '@/components/button';
import CheckYourEmailModal from '@/components/check-mail-modal';
import { Input } from '@/components/input';
import { SignUpFormItems } from '@/models/global-types';
import { AuthService } from '@/services/auth-service';
import { SignUpFORM_ITEMS } from '@/utils/constants/common-constants';
import { AxiosError } from 'axios';
import { ChangeEvent, useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState<SignUpFormItems>(SignUpFORM_ITEMS);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState('jack365@gmail.com');

  const AuthServices = new AuthService();

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibilityToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(value);

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        company_name: formData.OrganizationName,
        user_info: {
          name: formData.FullName,
          email: formData.Email,
          password: formData.Password,
        },
      };

      console.log(payload);

      
      const response = await AuthServices.signup(payload);

      console.log('Response: ', response);
      if (response.Message === 'created successfully') {
        setSelectedEmail(payload.user_info.email as string);
        setShowModal(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error submitting form:', axiosError);

      if (axiosError.request) {
        // The request was made but no response was received
        console.log('Request details:', axiosError.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error setting up the request:', axiosError.message);
      }
    }
  };

  return (
    <>
      <div className='w-full flex items-center justify-center flex-col mt-10 mb-20'>
        <div className='w-[49%]'>
          <div className='mb-7 border-gray-[#DBDBDB] border-b text-center'>
            <h1 className='text-black text-2xl font-semibold'>Get Started With D2D</h1>
            <p className='mt-3 text-[#7E7E7E] text-[15px] font-normal mb-5'>
              Getting started is easy
            </p>
          </div>
          <div>
            <Input
              label={<p className='text-[#00156A] font-medium text-xs mb-[2px]'>Name</p>}
              placeholder='FullName'
              type='text'
              id='fullName'
              name='FullName'
              htmlFor='FullName'
              onChange={handleInputChange}
              className='mb-3'
            />
            <Input
              label={<p className='text-[#00156A] font-medium text-xs mb-[2px]'>Email</p>}
              placeholder='Email'
              type='text'
              id='email'
              name='Email'
              htmlFor='email'
              onChange={handleInputChange}
              className='mb-3'
            />
            <Input
              label={
                <p className='text-[#00156A] font-medium text-xs mb-[2px]'>
                  Organization Name
                </p>
              }
              placeholder='Organization Name'
              type='text'
              id='organizationName'
              name='OrganizationName'
              htmlFor='organizationName'
              onChange={handleInputChange}
              className='mb-3'
            />
            <div className='relative mb-3'>
              <Input
                label={
                  <p className='text-[#00156A] font-medium text-xs mb-[2px]'>Password</p>
                }
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='Password'
                htmlFor='password'
                onChange={handleInputChange}
              />
              <p
                className='absolute top-[40px] right-6 cursor-pointer'
                onClick={handlePasswordVisibilityToggle}>
                <PasswordRevealIcon />
              </p>
            </div>
            <div className='relative'>
              <Input
                label={
                  <p className='text-[#00156A] font-medium text-xs mb-[2px]'>
                    Confirm Password
                  </p>
                }
                placeholder='Confirm Password'
                type={showConfirmPassword ? 'text' : 'password'}
                id='confirmPassword'
                name='ConfirmPassword'
                htmlFor='confirmPassword'
                onChange={handleInputChange}
              />
              <p
                className='absolute top-[40px] right-6 cursor-pointer'
                onClick={handleConfirmPasswordVisibilityToggle}>
                <PasswordRevealIcon />
              </p>
            </div>
            <Button
              onClick={handleSubmit}
              className='rounded-[10px] h-[57px] mt-6 mb-[30px] text-black text-[14.85px] bg-[#FBBD1D] hover:bg-[#f3c655]'>
              Create Account
            </Button>
          </div>
        </div>
        <p className='text-[14px] text-[#5A5A5A] font-normal text-center mx-20'>
          By continuing you indicate that you read and agreed to the Terms of Use
        </p>
      </div>
      <CheckYourEmailModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedEmail={selectedEmail}
      />
    </>
  );
};

export default SignupForm;
