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

  const toggleDrawer = () => {
    setIsOpen((prevState: any) => !prevState);
  };

  const toggleButtons = () => {
    setOptions((prevState) => !prevState);
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
    </>
  );
};

export default LeadDetailsButton;
