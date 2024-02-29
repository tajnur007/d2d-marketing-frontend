'use client';

import { ChangeEvent, useState, FormEvent } from 'react';
import { AxiosError } from 'axios';
import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { AuthService } from '@/services/auth-service';
import CheckYourEmailModal from '@/components/check-mail-modal';
import { PasswordHideIcon, PasswordRevealIcon } from '@/assets/icons';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { SignUpFormItems } from '@/models/global-types';
import {
  SIGNUP_FORM_ERRORS,
  SIGNUP_FORM_ITEMS,
} from '@/utils/constants/common-constants';
import { deepCopy, signUpFormErrorCheck } from '@/utils/helpers/common-helpers';
import Link from 'next/link';
import TermsOfUseModal from '@/components/terms-of-use-modal';

const SignupForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isAgreeTerms, setIsAgreeTerms] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const [selectedEmail, setSelectedEmail] = useState('');
  const [formData, setFormData] = useState<SignUpFormItems<string>>(
    deepCopy(SIGNUP_FORM_ITEMS)
  );
  const [formErrors, setFormErrors] = useState<SignUpFormItems<boolean>>(
    deepCopy(SIGNUP_FORM_ERRORS)
  );

  const AuthServices = new AuthService();

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    setFormErrors((prev) => {
      return { ...prev, [name]: false };
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

        const response = await AuthServices.signup(payload);

        if (response.Message === 'created successfully') {
          setSelectedEmail(payload.user_info.email as string);
          setShowModal(true);
          setLoading(false);
          setFormData(deepCopy(SIGNUP_FORM_ITEMS));
          setFormErrors(deepCopy(SIGNUP_FORM_ERRORS));
        }
      } catch (error: any) {
        setLoading(false);
        toast.error(error?.response?.data?.message || 'Error while creating an account!');
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
                required
                label='Name'
                placeholder='FullName'
                id='fullName'
                name='FullName'
                value={formData?.FullName}
                isError={formErrors.FullName}
                disabled={loading}
                onChange={handleInputChange}
              />
              <Input
                required
                label='Email'
                placeholder='Email'
                type='email'
                id='email'
                name='Email'
                disabled={loading}
                onChange={handleInputChange}
                value={formData?.Email}
                isError={formErrors.Email}
              />
              <Input
                required
                label='Organization Name'
                placeholder='Organization Name'
                id='organizationname'
                name='OrganizationName'
                disabled={loading}
                onChange={handleInputChange}
                value={formData?.OrganizationName}
                isError={formErrors.OrganizationName}
              />
              <div className='relative'>
                <Input
                  required
                  label='Password'
                  placeholder='Password'
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='Password'
                  disabled={loading}
                  onChange={handleInputChange}
                  value={formData?.Password}
                  isError={formErrors.Password}
                />
                <p
                  className='absolute top-8 lg:top-9 2xl:top-[42px] right-2 lg:right-6 cursor-pointer'
                  onClick={handlePasswordVisibilityToggle}>
                  {showPassword ? <PasswordRevealIcon /> : <PasswordHideIcon />}
                </p>
              </div>
              <div className='relative'>
                <Input
                  required
                  label='Confirm Password'
                  placeholder='Confirm Password'
                  type={showPassword ? 'text' : 'password'}
                  id='confirmpassword'
                  name='ConfirmPassword'
                  disabled={loading}
                  onChange={handleInputChange}
                  value={formData?.ConfirmPassword}
                  isError={formErrors.ConfirmPassword}
                />
                <p
                  className='absolute top-8 lg:top-9 2xl:top-[42px] right-2 lg:right-6 cursor-pointer'
                  onClick={handlePasswordVisibilityToggle}>
                  {showPassword ? <PasswordRevealIcon /> : <PasswordHideIcon />}
                </p>
              </div>
              <Button
                type='submit'
                disabled={!isAgreeTerms}
                className='rounded-[10px] md:h-[35px] lg:h-[48px] 2xl:h-14 mt-5'>
                {loading ? (
                  <div className='h-full w-full flex items-center justify-center'>
                    <Oval width='30' color='#ffffff' />
                  </div>
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>
          </div>
          <div className='mt-5 text-[12px] text-[#5A5A5A] text-left flex justify-start align-middle'>
            <input
              id='terms'
              type='checkbox'
              checked={isAgreeTerms}
              onChange={() => setIsAgreeTerms((preValue) => !preValue)}
            />
            <label htmlFor='terms' className='ml-2'>
              I agree to the
            </label>
            <span
              className='ml-1 font-semibold text-[#5630FF] cursor-pointer'
              onClick={() => setShowTermsModal(true)}>
              Terms of Use
            </span>
          </div>
          <p className='text-[#313957] mt-[30px] text-center'>
            Already have an account?
            <Link
              href='/auth/signin'
              className='ml-1 font-semibold text-[#5630FF] cursor-pointer'>
              Log In
            </Link>
          </p>
        </div>
      </div>

      <TermsOfUseModal showModal={showTermsModal} setShowModal={setShowTermsModal} />

      <CheckYourEmailModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedEmail={selectedEmail}
      />
    </>
  );
};

export default SignupForm;
