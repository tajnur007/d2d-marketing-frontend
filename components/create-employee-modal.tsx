'use client';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { CreateEmployeeModalProps } from '@/models/global-types';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { ExIcon } from '@/assets/icons';
import { EMPLOYEE_ROLE, MANAGERS } from '@/utils/constants/common-constants';
import './dropdown-select.css';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const CreateEmployeeModal = ({
  modalIsOpen,
  setModalIsOpen = () => {},
  formData,
  setFormData = () => {},
  formErrors,
  setFormErrors = () => {},
}: CreateEmployeeModalProps) => {
  const [selected, setSelected] = useState<string>('Manager');
  const [manager, setManager] = useState<string>('');
  const [isExecutive, setIsExecutive] = useState<boolean>(false);

  useEffect(() => {
    setFormData((prev: any) => {
      return { ...prev, Role: selected, Manager: manager };
    });
    if (selected === 'Executive') {
      setIsExecutive(true);
    } else {
      setIsExecutive(false);
    }
  }, [selected, manager, formErrors]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSelectChange = (selectedOption: any) => {
    setSelected(selectedOption.value);
  };

  const handleManagerChange = (selectedOption: any) => {
    setManager(selectedOption.value);
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
        className={
          'absolute w-[646px] h-auto  -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
        }
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}>
        <div className='m-[30px]'>
          <div className='flex justify-between mb-7'>
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
            label={
              <p className='text-[#00156A] font-medium text-xs mb-1'>Phone Number</p>
            }
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
          <label className='text-[#00156A] text-xs mb-1 font-medium'>Role</label>
          <Select
            options={EMPLOYEE_ROLE}
            defaultValue={EMPLOYEE_ROLE[0]}
            className='create-reminder-select mb-5 font-medium text-black text-[14px] tracking-[-0.28px] leading-[normal]'
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderColor: '2px #F3F3F3 solid',
                width: '100%',
                height: '56px',
                borderRadius: '10px',
              }),
            }}
            onChange={handleSelectChange}
          />
          {isExecutive && (
            <>
              <label className='text-[#00156A] text-xs mb-1 font-medium'>
                Select Manager
              </label>
              <Select
                options={MANAGERS}
                defaultValue={MANAGERS[0]}
                className='create-reminder-select mb-5 font-medium text-black text-[14px] tracking-[-0.28px] leading-[normal]'
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    borderColor: '2px #F3F3F3 solid',
                    width: '100%',
                    height: '56px',
                    borderRadius: '10px',
                  }),
                }}
                onChange={handleManagerChange}
              />
            </>
          )}
          <Button onClick={submitData} className='w-full rounded-[10px] h-[60px] '>
            Create
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CreateEmployeeModal;
