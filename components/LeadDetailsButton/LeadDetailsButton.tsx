'use client';
import Image from 'next/image';
import { useState } from 'react';
import moreImage from '@/assets/images/leadslist-icons/more_vert.png';
import LeadDetails from '@/components/lead-details';
import { LEADS_DATA_TYPE } from '@/utils/constants/leadslist-constant';

const LeadDetailsButton = ({ data }: { data: LEADS_DATA_TYPE }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Image
        className=' cursor-pointer'
        src={moreImage}
        alt=''
        onClick={() => setShowModal(true)}
      />

      {showModal && <LeadDetails setShowModal={setShowModal} data={data} />}
    </>
  );
};

export default LeadDetailsButton;
