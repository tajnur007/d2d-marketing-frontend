'use client';
import { useState, useEffect } from 'react';
import { Modal } from '@/components/modal';
import { CreateEmployeeModalProps } from '@/models/global-types';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { ExIcon } from '@/assets/icons';

const CreateEmployeeModal = ({
  modalIsOpen,
  setModalIsOpen = () => {},
  formData,
  setFormData = () => {},
  formErrors,
  setFormErrors = () => {},
}: CreateEmployeeModalProps) => {
  useEffect(() => {
    setFormData((prev: any) => {
      return { ...prev };
    });
  }, [formErrors, setFormData]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });

    setFormErrors((prev: any) => {
      return { ...prev, [name]: '' };
    });
  };

  const submitData = () => {
    const newFormErrors: any = {};

    for (let field in formData) {
      if (formData[field as keyof typeof formData] === '') {
        newFormErrors[field] = `(${field} is required)`;
      }
    }
    setFormErrors(newFormErrors);

    console.log(formData);
    if (Object.values(formData).includes('')) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Example Modal'>
        <div className='flex justify-between mb-4'>
          <p className='text-indigo-950 text-2xl font-bold leading-[14px]'>
            Create employee
          </p>
          <button onClick={closeModal}>
            <ExIcon />
          </button>
        </div>
        <Input
          label={<p className='text-[#00156A] font-medium text-xs mb-1'>Name</p>}
          placeholder='Name'
          type='text'
          id='name'
          name='Name'
          htmlFor='name'
          errorMessage={formErrors.Name}
          className={`w-full mb-5 ${formErrors.Name && 'border-red-500 shadow'}`}
          onChange={handleInputChange}
        />
        <Input
          label={<p className='text-[#00156A] font-medium text-xs mb-1'>Phone Number</p>}
          placeholder='Phone Number'
          type='text'
          id='phone'
          name='Phone'
          htmlFor='phone'
          errorMessage={formErrors.Phone}
          className={`w-full mb-5 ${formErrors.Phone && 'border-red-500 shadow'}`}
          onChange={handleInputChange}
        />
        <Input
          label={<p className='text-[#00156A] font-medium text-xs mb-1'>Email</p>}
          placeholder='Email'
          type='text'
          id='email'
          name='Email'
          htmlFor='email'
          errorMessage={formErrors.Email}
          className={`w-full mb-5 ${formErrors.Email && 'border-red-500 shadow'}`}
          onChange={handleInputChange}
        />
        <Input
          label={<p className='text-[#00156A] font-medium text-xs mb-1'>Designation</p>}
          placeholder='Designation'
          type='text'
          id='designation'
          name='Designation'
          htmlFor='designation'
          errorMessage={formErrors.Designation}
          className={`w-full mb-5 ${formErrors.Designation && 'border-red-500 shadow'}`}
          onChange={handleInputChange}
        />

        <Button onClick={submitData} className='w-full rounded-[10px] h-[60px]'>
          Create
        </Button>
      </Modal>
    </div>
  );
};

export default CreateEmployeeModal;
