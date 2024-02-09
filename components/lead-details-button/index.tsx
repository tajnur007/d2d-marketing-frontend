'use client';
import Image from 'next/image';
import Popup from 'reactjs-popup';
import { useState, useRef, useEffect, useContext } from 'react';
import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import LeadDetails from '@/components/lead-details';
import { LeadListType } from '@/models/global-types';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import LeadsOptions from './leads-options';
import { roundToNearestMinutes } from 'date-fns';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { useRouter } from 'next/navigation';
import DeleteConfirmationModal from '../delete-confirmation-modal';
import { LeadsContext } from '@/context/leads-context';
import './style.css';

const LeadDetailsButton = ({
  data,
  leadRefresh,
  setLeadRefresh = () => {},
}: {
  data: LeadListType;
  leadRefresh: boolean;
  setLeadRefresh: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const ref = useRef<any>(null);
  const router = useRouter();
  const { leadDetailsRef } = useContext(LeadsContext);

  const toggleDrawer = () => {
    setIsOpen((prevState: any) => !prevState);
  };

  const handleViewButton = () => {
    setIsOpen(true);
    leadDetailsRef.current.close();
  };

  //! data.id pass in lead update page
  const handleEditButton = () => {
    router.push(`${PAGE_ROUTES.LeadUpdate}?id=${data.id}`);
  };
  const handleDeleteButton = async () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <Popup
        ref={leadDetailsRef}
        trigger={
          <div className=''>
            <Image className='cursor-pointer h-6 w-6 relative' src={moreImage} alt='' />
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
          position: 'fixed',
        }}
        overlayStyle={{
          position: 'relative',
        }}
        className='popup-button'
        arrow={false}>
        {!modalIsOpen && (
          <LeadsOptions
            handleViewButton={handleViewButton}
            handleEditButton={handleEditButton}
            handleDeleteButton={handleDeleteButton}
          />
        )}
      </Popup>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        size={450}
        overlayOpacity={0}>
        <LeadDetails setIsOpen={setIsOpen} data={data} isOpen={isOpen} />
      </Drawer>
      <DeleteConfirmationModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        data={data}
        isRefreshData={leadRefresh}
        setIsRefreshData={setLeadRefresh}
      />
    </>
  );
};

export default LeadDetailsButton;
