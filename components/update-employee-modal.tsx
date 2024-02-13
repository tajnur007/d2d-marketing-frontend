'use client';
import { useState, useEffect, use } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import {
  ManagerType,
  UpdateEmployeeModalProps,
  UpdateEmployeePayload,
} from '@/models/global-types';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { ExIcon } from '@/assets/icons';
import {
  EMPLOYEE_ROLE,
  MANAGERS,
  UPDATE_EMPLOYEE_PAYLOAD,
} from '@/utils/constants/common-constants';
import './dropdown-select.css';
import { useSession } from 'next-auth/react';
import { UserService } from '@/services/user-services';
import { toast } from 'react-toastify';

if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = '#00000054';
}

const UpdateEmployeeModal = ({
  modalIsOpen,
  isExecutive,
  setModalIsOpen = () => {},
  setIsExecutive = () => {},
  isRefreshData,
  setIsRefreshData = () => {},
  employeeinfo,
}: UpdateEmployeeModalProps) => {
  const [selected, setSelected] = useState<string>(employeeinfo?.user_type);
  const [managers, setManagers] = useState<ManagerType[]>();
  const [manager, setManager] = useState<string>(employeeinfo?.manager_name);
  const [updatePayload, setUpdatePayload] = useState<UpdateEmployeePayload>(
    UPDATE_EMPLOYEE_PAYLOAD
  );

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
        setManagers([...data]);
      }
    };
    getData();
  }, [data, modalIsOpen]);

  useEffect(() => {
    if (employeeinfo.user_type === 'executive') {
      setIsExecutive(true);
    } else {
      setIsExecutive(false);
    }
    setUpdatePayload(() => {
      return {
        name: employeeinfo?.name,
        user_type: employeeinfo?.user_type,
        phone: employeeinfo?.phone,
        manager_id: employeeinfo?.manager_id,
        manager_name: employeeinfo?.manager_name,
        image_name: '',
        image_path: '',
      };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const selectedManager = selected === 'executive' ? manager : '';
    const selectedManagerId = MANAGERS.findIndex(
      (item) => item.value === selectedManager
    );
    setUpdatePayload((prev: any) => {
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
  }, [selected, manager]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Update selected value when the dropdown changes

  const handleSelectChange = (selectedOption: any) => {
    setSelected(selectedOption.value);
  };

  const handleManagerChange = (selectedOption: any) => {
    setManager(selectedOption.value);
  };

  // Update the payload when the input changes

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setUpdatePayload((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const updateData = async () => {
    try {
      //@ts-ignore
      const token = data?.user?.access_token;

      const UserServices = new UserService();
      // console.log('updatePayload', updatePayload);
      const resp = await UserServices.updateEmployeeInfo(
        employeeinfo.id,
        updatePayload,
        token
      );

      if (resp?.status === 202) {
        toast.success('Successfully Updated employee info!');
        // Refresh the data after updating the employee info
        setIsRefreshData(!isRefreshData);
        // Close the modal after updating the employee info
        setModalIsOpen(false);
      }
    } catch (err) {
      toast.error('Failed to update employee info!');
      console.log(err);
    }
  };

  return (
    <div>
      <Modal
        style={{
          content: {
            outline: 'none', // Remove browser focus border
          },
        }}
        className={
          'absolute w-[646px] h-auto -translate-x-2/4 -translate-y-2/4 left-[50%] right-[auto] top-[50%] bottom-[auto]'
        }
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}>
        <div className='m-[30px]'>
          <div className='flex justify-between mb-7'>
            <p className='text-indigo-950 text-2xl font-bold leading-[14px]'>
              Update employee
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
            onChange={handleInputChange}
            defaultValue={employeeinfo?.name}
            className='w-full mb-3 2xl:mb-5'
          />

          <Input
            label='Phone Number'
            placeholder='Phone Number'
            type='text'
            id='phone'
            name='phone'
            htmlFor='phone'
            onChange={handleInputChange}
            defaultValue={employeeinfo?.phone}
            className='w-full mb-3 2xl:mb-5'
          />

          <label className='text-[#00156A] text-xs 2xl:text-sm mb-1 font-medium'>
            Role
          </label>

          <Select
            options={EMPLOYEE_ROLE}
            defaultValue={
              employeeinfo?.user_type === 'executive'
                ? EMPLOYEE_ROLE[1]
                : EMPLOYEE_ROLE[0]
            }
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
                className='h-[48px] 2xl:h-14 create-reminder-select mb-5 font-medium text-black text-sm 2xl:text-[16px]'
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
                defaultInputValue={employeeinfo?.manager_name ?? ''}
                placeholder={
                  employeeinfo?.manager_name
                    ? employeeinfo.manager_name
                    : 'Select Manager'
                }
              />
            </>
          )}

          <Button onClick={updateData} className='w-full rounded-[10px] h-[60px]'>
            Update
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateEmployeeModal;
