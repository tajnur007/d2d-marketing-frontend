'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import LeadDetails from '@/components/lead-details';
import { LeadListType } from '@/models/global-types';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import LeadsOptions from './leads-options';
import DeleteConfirmationModal from '../delete-confirmation-modal';

const LeadDetailsButton = ({
  data,
  leadRefresh,
  setLeadRefresh,
}: {
  data: LeadListType;
  leadRefresh: boolean;
  setLeadRefresh: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState: any) => !prevState);
  };

  const toggleButtons = () => {
    setOptions((prevState) => !prevState);
  };

  const handleDeleteButton = async () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <Image
        className='cursor-pointer h-6 w-6'
        src={moreImage}
        alt=''
        onClick={toggleButtons}
      />
      {options && (
        <LeadsOptions
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          options={options}
          setOptions={setOptions}
          handleDeleteButton={handleDeleteButton}
        />
      )}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        size={450}
        overlayOpacity={0}>
        <LeadDetails setIsOpen={setIsOpen} data={data} />
      </Drawer>
      <DeleteConfirmationModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        data={data}
        leadRefresh={leadRefresh}
        setLeadRefresh={setLeadRefresh}
      />
    </>
  );
};

export default LeadDetailsButton;
