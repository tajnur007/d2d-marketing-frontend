import Select from 'react-select';
import { Button } from './button';
import './dropdown-select.css';
import { useState } from 'react';
import { ASSIGN_USERS } from '@/utils/constants/common-constants';
import ShowModal from './assign-modal';

export const DemoSelect = () => {
  const [transferButton, setTransferButton] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selected, setSelected] = useState('');

  const handleConfirm = () => {
    setShowConfirmationModal(true);
  };

  const handleTransfer = () => {
    // Perform transfer action with the selected value
    console.log('Transfer confirmed for:', selected);
    setShowConfirmationModal(false);
  };

  const handleChange = (selectedOption: any) => {
    {
      ASSIGN_USERS.map((option) => {
        if (option.value === selectedOption.value) {
          setSelected(option.value);
          setTransferButton(true);
        }
      });
    }
  };

  return (
    <>
      <div className='flex place-items-center'>
        <div className='w-[205px] font-medium py-[8px]'>
          <Select
            options={ASSIGN_USERS}
            className='customselect font-medium text-[14px] tracking-[-0.28px] leading-[normal]'
            onChange={handleChange}
          />
        </div>
        <div>
          {transferButton && (
            <Button
              onClick={handleConfirm}
              className='bg-[#5630FF] text-[14px] text-white rounded-[11px] w-[80px] px-[8px] py-[10px] ml-2 justify-center items-center content-center gap-[10px] transition duration-500 ease-in-out transform hover:-translate-y-1.5 hover:scale-200 font-medium tracking-[-0.28px] leading-[normal] whitespace-nowrap'>
              Transfer
            </Button>
          )}
        </div>
      </div>
      <ShowModal
        showConfirmationModal={showConfirmationModal}
        setShowConfirmationModal={setShowConfirmationModal}
        selected={selected}
        handleTransfer={handleTransfer}
      />
    </>
  );
};
