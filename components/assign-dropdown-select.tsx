'use client';
import { LeadsContext } from '@/context/leads-context';
import { TransferLeadPayload } from '@/models/global-types';
import { TRANSFER_LEAD_PAYLOAD } from '@/utils/constants/common-constants';
import { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { Button } from './button';
import './dropdown-select.css';
import TransferConfirmationModal from './transfer-confirmation-modal';
import { toast } from 'react-toastify';
import { LeadService } from '@/services/lead-services';
import { useSession } from 'next-auth/react';

export const AssignDropdownSelect = ({ leadData }: any) => {
  const [transferButton, setTransferButton] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedName, setSelectedName] = useState('');
  const { executivesOption, setExecutivesOption } = useContext(LeadsContext);
  const [transferPayload, setTransferPayload] =
    useState<TransferLeadPayload>(TRANSFER_LEAD_PAYLOAD);

    const { data: sessionData } = useSession();
    // @ts-ignore
    const token = sessionData?.user?.access_token;
    const LeadServices = new LeadService();

  const handleConfirm = () => {
    setShowConfirmationModal(true);
  };

  useEffect(() => {
    setTransferPayload(() => {
      return {
        executive_id: selectedId || 0,
        executive_name: selectedName || '',
      };
    });
  }, [selectedId, selectedName]);

  const handleTransfer = async() => {
    try {
      if (token) {
        await LeadServices.transferLead(leadData.id, transferPayload, token);
        toast.success(`Successfully lead transferred to ${selectedName}!`);
        setShowConfirmationModal(false);
      } else {
        toast.error('Something went wrong.');
        setShowConfirmationModal(true);
        throw new Error('Token is missing.');
      }
    } catch (error) {
      toast.error('Failed to transfer lead. Please try again.');
      setShowConfirmationModal(true);
    }
  };

  const handleChange = (selectedOption: any) => {
    {
      executivesOption.map((option: any) => {
        if (option.value === selectedOption.value) {
          setSelectedName(option.value);
          setSelectedId(option.id);
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
            options={executivesOption}
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
      <TransferConfirmationModal
        showConfirmationModal={showConfirmationModal}
        setShowConfirmationModal={setShowConfirmationModal}
        selected={selectedName}
        handleTransfer={handleTransfer}
      />
    </>
  );
};
