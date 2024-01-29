'use client';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import { useState, useEffect, useRef } from 'react';
import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import LeadDetails from '@/components/lead-details';
import { LEADS_DATA_TYPE } from '@/models/global-types';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import LeadsOptions from './leads-options';
import { roundToNearestMinutes } from 'date-fns';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { useRouter } from 'next/navigation';

const LeadDetailsButton = ({ data }: { data: LEADS_DATA_TYPE }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState(false);
  const ref = useRef<any>(null);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen((prevState: any) => !prevState);
  };

  const handleViewButton = () => {
    setIsOpen(true);
    ref.current.close();
    console.log('button');
  };

  const toggleButtons = () => {
    setOptions((prevState) => !prevState);
  };

  //! data.id pass in lead update page
  const handleEditButton = () => {
    router.push(`${PAGE_ROUTES.LeadUpdate}?id=${data.id}`);
  };

  return (
    <>
      <Popup
        ref={ref}
        trigger={
          <div className='menu-item'>
            <Image className='cursor-pointer h-6 w-6' src={moreImage} alt='' />
          </div>
        }
        position='left center'
        on='click'
        closeOnDocumentClick
        closeOnEscape
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{
          padding: '0px',
          border: 'none',
          background: '#F8F8F8',
          borderRadius: '0.75rem',
          marginLeft: '10px',
        }}
        arrow={false}>
        <LeadsOptions
          handleViewButton={handleViewButton}
          handleEditButton={handleEditButton}
        />
      </Popup>
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
