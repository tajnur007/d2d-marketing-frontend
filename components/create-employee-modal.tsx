'use client';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { CreateEmployeeModalProps, ManagerType } from '@/models/global-types';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { ExIcon } from '@/assets/icons';
import {
  CREATE_EMPLOYEE_FORM_ITEMS,
  EMPLOYEE_ROLE,
  MANAGERS,
} from '@/utils/constants/common-constants';
import './dropdown-select.css';
import { useSession } from 'next-auth/react';
import { UserService } from '@/services/user-services';
import { toast } from 'react-toastify';
import MiniLoader from './mini-loader';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const CreateEmployeeModal = ({
  modalIsOpen,
  isExecutive,
  setModalIsOpen = () => {},
  setIsExecutive = () => {},
  formData,
  setFormData = () => {},
  formErrors,
  setFormErrors = () => {},
  setIsRefreshData = () => {},
}: CreateEmployeeModalProps) => {
  const [selected, setSelected] = useState<string>(EMPLOYEE_ROLE[0]?.value);
  const [managers, setManagers] = useState<ManagerType[]>();
  const [manager, setManager] = useState<string>(MANAGERS[0]?.value);
  const [isLoading, setIsLoading] = useState(false);

  const { data } = useSession();

  useEffect(() => {
    const getData = async () => {
      //@ts-ignore
      const token = data?.user?.access_token;
      const Services = new UserService();
      if (token && modalIsOpen) {
        const resp = await Services.getManagerList(token);
        const data = resp?.data?.Data?.Data?.map((item: ManagerType) => {
          return { value: item?.name, label: item?.name };
        });
        setManagers(data);
      }
    };
    getData();
  }, [data, modalIsOpen]);

  useEffect(() => {
    const selectedManager = selected === 'executive' ? manager : '';
    const selectedManagerId = MANAGERS.findIndex(
      (item) => item.value === selectedManager
    );
    setFormData((prev: any) => {
      return {
        ...prev,
        user_type: selected,
        manager_name: selectedManager,
        manager_id: selectedManagerId + 1,
      };
    });
    if (selected === 'executive') {
      setIsExecutive(true);
    } else {
      setIsExecutive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, manager, formErrors]);

  const closeModal = () => {
    setModalIsOpen(false);
    setIsExecutive(false);
    setSelected(EMPLOYEE_ROLE[0]?.value);
    setFormData(CREATE_EMPLOYEE_FORM_ITEMS);
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

  const submitData = async () => {
    setIsLoading(true);
    try {
      const newFormErrors: any = {};

      for (let field in formData) {
        if (field !== 'manager_name' && formData[field as keyof typeof formData] === '') {
          newFormErrors[field] = `(${field} is required)`;
        }
      }
      setFormErrors(newFormErrors);

      if (Object.keys(newFormErrors).length === 0) {
        //@ts-ignore
        const token = data?.user?.access_token;

        const UserServices = new UserService();
        const resp = await UserServices.createUser(formData, token);

        console.log(resp);

        if (resp?.status === 201) {
          toast.success(resp?.data?.Message);
          setIsExecutive(false);
          setSelected(EMPLOYEE_ROLE[0]?.value);
          setFormData(CREATE_EMPLOYEE_FORM_ITEMS);
          setModalIsOpen(false);
          setIsRefreshData(true);
        }
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Modal
        className={
          'absolute w-[646px] h-auto -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
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
            label='Name'
            placeholder='Name'
            type='text'
            id='name'
            name='name'
            htmlFor='name'
            disabled={isLoading}
            value={formData?.name}
            errorMessage={formErrors.name}
            className={`w-full mb-3 2xl:mb-5 ${
              formErrors.name && 'border-red-500 shadow'
            }`}
            onChange={handleInputChange}
          />
          <Input
            label='Phone Number'
            placeholder='Phone Number'
            type='text'
            id='phone'
            name='phone'
            htmlFor='phone'
            disabled={isLoading}
            value={formData?.phone}
            errorMessage={formErrors.phone}
            className={`w-full mb-3 2xl:mb-5 ${
              formErrors.phone && 'border-red-500 shadow'
            }`}
            onChange={handleInputChange}
          />
          <Input
            label='Email'
            placeholder='Email'
            type='text'
            id='email'
            name='email'
            htmlFor='email'
            disabled={isLoading}
            value={formData?.email}
            errorMessage={formErrors.email}
            className={`w-full mb-3 2xl:mb-5 ${
              formErrors.email && 'border-red-500 shadow'
            }`}
            onChange={handleInputChange}
          />
          <label className='text-[#00156A] text-xs 2xl:text-sm mb-1 font-medium'>
            Role
          </label>
          <Select
            options={EMPLOYEE_ROLE}
            defaultValue={EMPLOYEE_ROLE[0]}
            className='h-[48px] 2xl:h-14 create-reminder-select mb-3 2xl:mb-5 font-medium text-black text-sm 2xl:text-[16px]'
            styles={{
              control: (baseStyles, { isFocused }) => ({
                ...baseStyles,
                borderColor: '2px #F3F3F3 solid',
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                boxShadow: isFocused ? '0 0 0 3px #e9d5ff' : 'none',
                transition: 'all 500ms',
                border: isFocused ? '1px solid #a855f7' : '1px solid #F3F3F3',
                '&:hover': isFocused ? '1px solid #a855f7' : '1px solid #F3F3F3',
              }),
            }}
            onChange={handleSelectChange}
          />
          {isExecutive && (
            <>
              <label className='text-[#00156A] text-xs 2xl:text-sm mb-1 font-medium'>
                Select Manager
              </label>
              <Select
                options={managers}
                defaultValue={managers && managers[0]}
                className='h-[48px] 2xl:h-14 create-reminder-select mb-3 2xl:mb-5 font-medium text-black text-sm 2xl:text-[16px]'
                styles={{
                  control: (baseStyles, { isFocused }) => ({
                    ...baseStyles,
                    borderColor: '2px #F3F3F3 solid',
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    boxShadow: isFocused ? '0 0 0 3px #e9d5ff' : 'none',
                    transition: 'all 500ms',
                    border: isFocused ? '1px solid #a855f7' : '1px solid #F3F3F3',
                    '&:hover': isFocused ? '1px solid #a855f7' : '1px solid #F3F3F3',
                  }),
                }}
                onChange={handleManagerChange}
              />
            </>
          )}
          <Button
            onClick={submitData}
            disabled={isLoading}
            className='w-full rounded-[10px] h-[60px] '>
            {isLoading ? <MiniLoader /> : 'Create'}
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CreateEmployeeModal;
