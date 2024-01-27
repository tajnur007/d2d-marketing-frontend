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
import { ApiService } from '@/services/api-services';

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
}: CreateEmployeeModalProps) => {
  const [selected, setSelected] = useState<string>(EMPLOYEE_ROLE[0]?.value);
  const [managers, setManagers] = useState<ManagerType[]>();
  const [manager, setManager] = useState<string>(MANAGERS[0]?.value);

  const { data } = useSession();

  useEffect(() => {
    const getData = async () => {
      //@ts-ignore
      const token = data?.user?.access_token;
      const Services = new ApiService();
      if (token) {
        const resp = await Services.getManagerList(token);
        const data = resp?.data?.Data?.Data?.map((item: ManagerType) => {
          return { value: item?.name, label: item?.name };
        });
        setManagers([...data]);
      }
    };
    getData();
  }, [data]);

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

        const UserServices = new ApiService();
        const resp = await UserServices.createUser(formData, token);

        console.log(resp);

        if (resp?.status === 201) {
          setModalIsOpen(false);
          setIsExecutive(false);
          setSelected(EMPLOYEE_ROLE[0]?.value);
          setFormData(CREATE_EMPLOYEE_FORM_ITEMS);
        }
      }
    } catch (err) {
      console.log(err);
    }
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
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Name</p>}
            placeholder='Name'
            type='text'
            id='name'
            name='name'
            htmlFor='name'
            errorMessage={formErrors.name}
            className={`w-full mb-5 ${formErrors.name && 'border-red-500 shadow'}`}
            onChange={handleInputChange}
          />
          <Input
            label={
              <p className='text-[#00156A] font-medium text-xs mb-1'>Phone Number</p>
            }
            placeholder='Phone Number'
            type='text'
            id='phone'
            name='phone'
            htmlFor='phone'
            errorMessage={formErrors.phone}
            className={`w-full mb-5 ${formErrors.phone && 'border-red-500 shadow'}`}
            onChange={handleInputChange}
          />
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Email</p>}
            placeholder='Email'
            type='text'
            id='email'
            name='email'
            htmlFor='email'
            errorMessage={formErrors.email}
            className={`w-full mb-5 ${formErrors.email && 'border-red-500 shadow'}`}
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
                options={managers}
                defaultValue={managers && managers[0]}
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
