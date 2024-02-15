'use client';
import { useState, useEffect, FormEvent } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import {
  CreateEmployeeModalProps,
  ManagerOption,
  ManagerType,
} from '@/models/global-types';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { ExIcon } from '@/assets/icons';
import {
  CREATE_EMPLOYEE_FORM_ITEMS,
  EMPLOYEE_ROLE,
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
  const [manager, setManager] = useState<ManagerOption>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const { data } = useSession();

  useEffect(() => {
    const getData = async () => {
      //@ts-ignore
      const token = data?.user?.access_token;
      const Services = new UserService();
      if (token && modalIsOpen) {
        const resp = await Services.getManagerList(token);
        const data = resp?.data?.Data?.Data?.map((item: ManagerType) => {
          return { value: item?.name, label: item?.name, manager_id: item.id };
        });
        data && setManager(data[0]);
        data && setManagers([...data]);
      }
    };
    getData();
  }, [data, modalIsOpen]);

  useEffect(() => {
    setFormData((prev: any) => {
      return {
        ...prev,
        user_type: selected,
        manager_name: manager?.value,
        manager_id: manager?.manager_id,
      };
    });

    setFormErrors((prev: any) => {
      return { ...prev, manager_name: '', manager_id: 0 };
    });

    if (selected === 'executive') {
      setIsExecutive(true);
    } else {
      setIsExecutive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, manager]);

  const closeModal = () => {
    setModalIsOpen(false);
    setIsExecutive(false);
    setIsSuccess(false);
    setSelected(EMPLOYEE_ROLE[0]?.value);
    setFormData(CREATE_EMPLOYEE_FORM_ITEMS);
    setFormErrors(CREATE_EMPLOYEE_FORM_ITEMS);
  };

  const handleSelectChange = (selectedOption: any) => {
    setSelected(selectedOption.value);
  };

  const handleManagerChange = (selectedOption: any) => {
    setIsSuccess(false);
    setManager(selectedOption);
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

  const submitData = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const newFormErrors: any = {};

      if (manager?.value && manager?.manager_id) {
        formData = {
          ...formData,
          manager_name: manager?.value,
          manager_id: manager?.manager_id,
        };
      }

      for (let field in formData) {
        if (field !== 'manager_name' && formData[field as keyof typeof formData] === '') {
          newFormErrors[field] = `(${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required)`;
        }
      }

      setFormErrors(newFormErrors);

      if (Object.keys(newFormErrors).length === 0) {
        //@ts-ignore
        const token = data?.user?.access_token;

        const UserServices = new UserService();
        const resp = await UserServices.createUser(formData, token);

        if (resp?.status === 201) {
          toast.success(resp?.data?.Message);
          setIsSuccess(true);
          closeModal();
          setIsRefreshData(true);
        }
      }
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Modal
        className={
          'absolute w-[520px] 2xl:w-[600px] h-auto -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto] outline-none'
        }
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}>
        <div>
          <form onSubmit={submitData}>
            <div className='flex justify-between mb-7'>
              <p className='text-indigo-950 text-2xl font-bold leading-[14px]'>
                Create employee
              </p>
              <span onClick={closeModal} className='cursor-pointer'>
                <ExIcon />
              </span>
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
              isDisabled={isLoading}
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
              <div className='mb-3 2xl:mb-5'>
                <label className='text-[#00156A] text-xs 2xl:text-sm mb-1 font-medium'>
                  Select Manager
                </label>
                <Select
                  options={managers}
                  isDisabled={isLoading}
                  value={manager}
                  className='h-[48px] 2xl:h-14 create-reminder-select mb-3 2xl:mb-5 font-medium text-black text-sm 2xl:text-[16px]'
                  styles={{
                    control: (baseStyles, { isFocused }) => ({
                      ...baseStyles,
                      border:
                        manager?.value === '' && !isFocused
                          ? '1px solid red'
                          : isFocused
                          ? '1px solid #a855f7'
                          : '1px solid #F3F3F3',
                      '&:hover': {
                        border:
                          manager?.value === '' && !isFocused
                            ? '1px solid red'
                            : isFocused
                            ? '1px solid #a855f7'
                            : '1px solid #F3F3F3',
                      },
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px',
                      boxShadow: isFocused ? '0 0 0 3px #e9d5ff' : 'none',
                      transition: 'all 500ms',
                    }),
                  }}
                  onChange={handleManagerChange}
                />
              </div>
            )}
            <Button
              type='submit'
              disabled={isLoading}
              className='w-full h-[60px] transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200'>
              {isLoading ? <MiniLoader /> : 'Create'}
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateEmployeeModal;
