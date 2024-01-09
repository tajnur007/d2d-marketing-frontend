"use client";
import Image from 'next/image';
import React from 'react'
import moreImage from '/assets/images/leadslist-icons/more_vert.png';
import LeadDetails from '../LeadDetails/lead-details';

const LeadDetailsButton = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <Image className=' cursor-pointer' src={moreImage} alt='' />
      </button>
      {showModal && <LeadDetails setShowModal={setShowModal} />}
    </>
  );
}

export default LeadDetailsButton