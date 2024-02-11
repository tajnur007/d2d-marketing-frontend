'use client';

import { ChangeEvent, useState, FormEvent } from 'react';
import { AxiosError } from 'axios';
import { InfinitySpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { AuthService } from '@/services/auth-service';
import CheckYourEmailModal from '@/components/check-mail-modal';
import { PasswordHideIcon, PasswordRevealIcon } from '@/assets/icons';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { SignUpFormItems } from '@/models/global-types';
import { SignUpFORM_ITEMS } from '@/utils/constants/common-constants';
import { signUpFormErrorCheck } from '@/utils/helpers/common-helpers';

const SignupForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignUpFormItems>(SignUpFORM_ITEMS);
  const [formErrors, setFormErrors] = useState<SignUpFormItems>(SignUpFORM_ITEMS);

  const [showPassword, setShowPassword] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState('jack365@gmail.com');

  const AuthServices = new AuthService();

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    //console.log(value);

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    setFormErrors((prev) => {
      return { ...prev, [name]: '' };
    });
  };
  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newFormErrors: any = {};

    // Check for errors in form fields
    for (let field in formData) {
      const error = signUpFormErrorCheck(formData, field);
      if (error) {
        newFormErrors[field] = error;
      }
    }

    setFormErrors(newFormErrors);

    if (Object.keys(newFormErrors).length === 0) {
      try {
        setLoading(true);
        const payload = {
          company_name: formData.OrganizationName,
          user_info: {
            name: formData.FullName,
            email: formData.Email,
            password: formData.Password,
          },
        };

        //console.log(payload);

        // Call your API to sign up the user
        const response = await AuthServices.signup(payload);
        //console.log('Response: ', response);

        if (response.Message === 'created successfully') {
          setSelectedEmail(payload.user_info.email as string);
          setShowModal(true);
          setLoading(false);
        }
      } catch (error) {
        // Handle errors
        const axiosError = error as AxiosError;
        setLoading(false);
        console.error('Error submitting form:', axiosError);
        //toast.error('Error Submitting Form.');

        if (axiosError.request) {
          // The request was made but no response was received
          console.log('Request details:', axiosError.request);
          toast.error('Another company with the same name has been registered.');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error setting up the request:', axiosError.message);
          toast.error('Error setting up the request, Try Again.');
        }
      }
    }
  };

  return (
    <>
      <div className='w-full flex items-center justify-center flex-col mt-10 mb-20'>
        <div className='2xl:w-[50%] xl:w-[60%] lg:w-[65%] md:w-[70%] sm:w-[80%] w-[90%]'>
          <div className='mb-7 border-gray-[#DBDBDB] border-b text-center'>
            <h1 className='text-black text-2xl font-semibold'>Get Started With D2D</h1>
            <p className='mt-3 text-[#7E7E7E] text-[15px] font-normal mb-5'>
              Getting started is easy
            </p>
          </div>
          <div>
            <form onSubmit={onFormSubmit}>
              <Input
                label={
                  <p className='text-[#00156A] font-medium text-xs mb-[2px]'>Name</p>
                }
                placeholder='FullName'
                type='text'
                id='fullName'
                name='FullName'
                value={formData?.FullName}
                errorMessage={formErrors.FullName}
                htmlFor='FullName'
                disabled={loading}
                onChange={handleInputChange}
                className={`mb-3 ${formErrors.FullName && 'border-red-500 shadow'}`}
              />
              <Input
                label={
                  <p className='text-[#00156A] font-medium text-xs mb-[2px]'>Email</p>
                }
                placeholder='Email'
                type='email'
                id='email'
                name='Email'
                htmlFor='email'
                disabled={loading}
                onChange={handleInputChange}
                value={formData?.Email}
                errorMessage={formErrors.Email}
                className={`mb-3 ${formErrors.Email && 'border-red-500 shadow'}`}
              />
              <Input
                label={
                  <p className='text-[#00156A] font-medium text-xs mb-[2px]'>
                    Organization Name
                  </p>
                }
                placeholder='Organization Name'
                type='text'
                id='organizationname'
                name='OrganizationName'
                htmlFor='organizationname'
                disabled={loading}
                onChange={handleInputChange}
                value={formData?.OrganizationName}
                errorMessage={formErrors.OrganizationName}
                className={`mb-3 ${
                  formErrors.OrganizationName && 'border-red-500 shadow'
                }`}
              />
              <div className='relative mb-3'>
                <Input
                  label={
                    <p className='text-[#00156A] font-medium text-xs mb-[2px]'>
                      Password
                    </p>
                  }
                  placeholder='Password'
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='Password'
                  htmlFor='password'
                  disabled={loading}
                  onChange={handleInputChange}
                  value={formData?.Password}
                  errorMessage={formErrors.Password}
                  className={`${formErrors.Password && 'border-red-500 shadow'}`}
                />
                <p
                  className={`absolute right-6 cursor-pointer ${
                    formErrors.Password ? 'top-[50px]' : 'top-[34px]'
                  }`}
                  onClick={handlePasswordVisibilityToggle}>
                  {showPassword ? <PasswordRevealIcon /> : <PasswordHideIcon />}
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
                  type={showPassword ? 'text' : 'password'}
                  id='confirmpassword'
                  name='ConfirmPassword'
                  htmlFor='confirmpassword'
                  disabled={loading}
                  onChange={handleInputChange}
                  value={formData?.ConfirmPassword}
                  errorMessage={formErrors.ConfirmPassword}
                  className={` ${formErrors.ConfirmPassword && 'border-red-500 shadow'}`}
                />
                <p
                  className={`absolute right-6 cursor-pointer ${
                    formErrors.ConfirmPassword ? 'top-[50px]' : 'top-[34px]'
                  }`}
                  onClick={handlePasswordVisibilityToggle}>
                  {showPassword ? <PasswordRevealIcon /> : <PasswordHideIcon />}
                </p>
              </div>
              <Button
                type='submit'
                className='rounded-[10px] h-[57px] mt-6 mb-[30px] text-black text-[14.85px] bg-[#FBBD1D] hover:bg-[#f3c655]'>
                {loading ? (
                  <div className='h-full w-full flex items-center justify-center'>
                    <InfinitySpin width='150' color='#ffffff' />
                  </div>
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>
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
