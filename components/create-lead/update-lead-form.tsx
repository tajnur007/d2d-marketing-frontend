'use client';

import { Input } from '@/components/input';
import { TextArea } from '@/components/text-area';
import { ImageUpload } from '@/components/image-upload';
import { Button } from '@/components/button';
import { useEffect, useState } from 'react';
import {
  ASSIGN_TO_NEW,
  CREATE_LEAD_STATUS_NEW,
  FORM_ITEMS,
  SINGLE_LEAD_ITEMS,
} from '@/utils/constants/common-constants';
import { FormItems, SingleLeadItems } from '@/models/global-types';
import { CustomSelect } from '../select/custom-select';
import Map from './map';
import { useSession } from 'next-auth/react';
import { LeadService } from '@/services/lead-services';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

const UpdateLeadForm = () => {
  const [statusSelected, setStatusSelected] = useState('');
  const [assignedToSelected, setAssignedToSelected] = useState('');
  const [formData, setFormData] = useState<FormItems>(FORM_ITEMS);
  const [singleLeadData, setSingleLeadData] = useState<SingleLeadItems>(SINGLE_LEAD_ITEMS);
  const [location, setLocation] = useState({
    lat: 22.04,
    lng: 30.0,
  });

  const { data: sessionData } = useSession();
  // @ts-ignore
  const token = sessionData?.user?.access_token;
  const LeadServices = new LeadService();

  const searchParams: any = useSearchParams();
  const paramValue = searchParams.get('id');


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make an API request to get user data with the ID equal to paramValue
        const response = await LeadServices.getUserLead(paramValue, token);
        setSingleLeadData(response.data.Data);
      
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);
  console.log('singleLeadData');
  console.log(singleLeadData);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, Status: statusSelected, AssignedTo: assignedToSelected };
    });
  }, [statusSelected, assignedToSelected]);

  const updateData = async () => {
    setFormData((prev) => {
      return { ...prev, location };
    });
    const payloadObj = {
      title: formData?.Title,
      executive_id: 143,
      executive_name: formData?.AssignedTo,
      latitude: location?.lat,
      longitude: location?.lng,
      meeting_status: formData?.Status,

      point_of_contact: {
        name: formData?.Name,
        number: formData?.Phone,
        email: formData?.Email,
        meeting_notes: formData?.Note,
        reference: formData?.Reference,
      },

      image_infos: [{ image_name: `${formData?.Name}_img`, image_path: formData?.Image }],
    };
    if (token) {
      await LeadServices.updateLead(paramValue, payloadObj, token);
      toast.success('Lead Update successfully.');
    } else {
      toast.error('Something went wrong.');
    }
  };

  return (
    <div className='mt-2 p-6 overflow-y-auto h-[calc(100%-30px)] tiny-scrollbar'>
      <div className='flex items-center justify-between mt-10 gap-5'>
        <Input
          label={<p className='text-[#00156A] font-medium text-xs mb-1'>Title</p>}
          placeholder='Title here'
          type='text'
          id='title'
          name='Title'
          htmlFor='title'
          className='w-full mb-5'
          onChange={handleInputChange}
          value={singleLeadData?.title}
        />

        <div className='flex flex-col justify-between gap-5 w-full mb-[21px]'>
          <CustomSelect
            label='AssignedTo'
            setSelected={setAssignedToSelected}
            options={ASSIGN_TO_NEW}
            defaultValue={singleLeadData?.executive_name}
          />
        </div>
      </div>

      <div className='rounded-2xl relative h-[342px] w-full'>
        <Map setLocation={setLocation} location={location} />
      </div>

      <div className='flex items-center justify-between mt-10 gap-5'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-1/2 gap-5'>
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Name</p>}
            placeholder='Name'
            type='text'
            id='name'
            name='Name'
            htmlFor='name'
            onChange={handleInputChange}
            value={singleLeadData?.point_of_contact?.name}
          />

          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Phone</p>}
            placeholder='Phone number'
            type='text'
            id='phone'
            name='Phone'
            htmlFor='phone'
            onChange={handleInputChange}
            value={singleLeadData?.point_of_contact?.phone}
          />
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-1/2 gap-5'>
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Email</p>}
            placeholder='Email (Optional)'
            type='email'
            id='email'
            name='Email'
            htmlFor='email'
            onChange={handleInputChange}
            value={singleLeadData?.point_of_contact?.email}
          />

          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Reference</p>}
            placeholder='Reference (Optional)'
            type='text'
            id='reference'
            name='Reference'
            htmlFor='reference'
            onChange={handleInputChange}
            value={singleLeadData?.point_of_contact?.reference}
          />
        </div>
      </div>
      <div className='flex items-center justify-between mt-5 gap-5'>
        <div className='w-1/2'>
          <TextArea
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Remarks</p>}
            placeholder='Notes'
            name='Note'
            className='h-[182px]'
            onChange={handleInputChange}
            value={singleLeadData?.point_of_contact?.meeting_notes}
          />
        </div>

        <div className='flex flex-col justify-between gap-2 w-1/2'>
          <CustomSelect
            label='Status'
            setSelected={setStatusSelected}
            options={CREATE_LEAD_STATUS_NEW}
            defaultValue={singleLeadData?.meeting_status}
          />

          <div className='flex flex-col items-start justify-center '>
            <p className='text-[#00156A] font-medium text-xs mb-2'>Image</p>

            <ImageUpload
              placeholder='Upload image'
              name='Image'
              className='h-[92px]'
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-end  mt-5 gap-5 items-end'>
        <Button onClick={updateData} className='w-[193px] rounded-[10px] h-[60px]'>
          Update
        </Button>
      </div>
    </div>
  );
};

export default UpdateLeadForm;
