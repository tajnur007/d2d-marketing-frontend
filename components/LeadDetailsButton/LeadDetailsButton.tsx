'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import LeadDetails from '@/components/lead-details';
import { LEADS_DATA_TYPE } from '@/models/global-types';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import LeadsOptions from './leads-options';

const LeadDetailsButton = ({ data }: { data: LEADS_DATA_TYPE }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(false);
  const newRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleButtons = () => {
    setOptions((prevState) => !prevState);
  };

  const handleOutsideClick = (e: any) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setOptions(false);
    }
  };

  return (
    <>
      <Image
        ref={newRef}
        className='cursor-pointer h-6 w-6'
        src={moreImage}
        alt=''
        onClick={toggleButtons}
      />
      {options && <LeadsOptions />}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        size={450}
        overlayOpacity={0}>
        <LeadDetails setIsOpen={setIsOpen} data={data} />
      </Drawer>
    </>
  );
};

export default LeadDetailsButton;
