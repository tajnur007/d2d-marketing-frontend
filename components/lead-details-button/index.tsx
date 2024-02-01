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
  const { leadDetailsRef } = useContext(LeadsContext);

  const toggleDrawer = () => {
    setIsOpen((prevState: any) => !prevState);
  };

  const handleViewButton = () => {
    setIsOpen(true);
    leadDetailsRef.current.close();
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
