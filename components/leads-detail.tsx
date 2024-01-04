import React from 'react';
import Image from 'next/image';

const LeadsModal = () => {
  return (
    <div className='modal-main-body h-screen flex justify-center items-center fixed top-0 left-0 w-full h-full bg-opacity-50'>
      <div className='bg-white p-8 rounded-lg shadow-xl'>
        <h2 className='text-2xl font-semibold mb-4 text-[#25254C]'>Details</h2>
        <h4 className='text-[#5630FF] font-medium'>Location</h4>
        <div className='flex items-center gap-4'>
          <div className='flex-grow break-all'>
            Kamal ataturk avenue, banani, Dhaka
          </div>
          <button className='text-[#5630FF]'>Change</button>
        </div>
        <div className='desc'>
          Lorem Ipsum is Simply Dummy <button className='bg-[#FFD9D9] text-white'>Hot</button>
          <div className='text-[#8A8A8A]'>Tue 21 Nov, 2023  11:34 AM</div>
        </div>
        <div className='poc bg-[#EDEBF4] p-4 rounded-lg mt-4'>
          <h4 className='text-[#5630FF] mb-2'>Points of Contact</h4>
          <div className='rounded-lg bg-white mb-4 p-4'>
            <div className='text-[#5630FF] mb-2'>Name</div>
            <div className='font-bold text-black'>Md. Hussain Al Muhee</div>
          </div>
          <div className='rounded-lg bg-white mb-4 p-4'>
            <div className='text-[#5630FF] mb-2'>Phone</div>
            <div className='font-bold text-black'>+880 1712 11 22 33</div>
          </div>
          <div className='rounded-lg bg-white mb-4 p-4'>
            <div className='text-[#5630FF] mb-2'>Email</div>
            <div className='font-bold text-black'>hussain.muhee@vivasoftltd.com</div>
          </div>
          <div className='rounded-lg bg-white mb-4 p-4'>
            <div className='text-[#5630FF] mb-2'>Reference</div>
            <div className='font-bold text-black'>Md Ashiqul Amin</div>
          </div>
          <div className='rounded-lg bg-white p-4'>
            <div>Meeting notes</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>
        <div className='reminder bg-[#F8F6FF] p-4 rounded-lg mt-4'>
          <div className='text-[#5630FF] mb-2'>Reminder</div>
          <div className='font-bold text-black'>Meeting Jobbar vai for New Project</div>
          <div className='text-[#8A8A8A]'>dd/mm/yyyy</div>
          <button className='bg-[#B8FFDD]'>Completed</button>
        </div>
        <button className='text-[#5630FF] flex justify-center ml-auto'>Add Reminder</button>
      </div>
    </div>
  );
};

export default LeadsModal;
