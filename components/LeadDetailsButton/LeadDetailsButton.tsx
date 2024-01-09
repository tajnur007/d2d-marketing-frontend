"use client";
import Image from 'next/image';
import { useState } from 'react'
import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import LeadDetails from '@/components/LeadDetails/lead-details';

const LeadDetailsButton = () => {
  const [showModal, setShowModal] = useState(false);
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