'use client';

import { Input } from '@/components/input';
import { TextArea } from '@/components/text-area';
import { ImageUpload } from '@/components/image-upload';
import { Button } from '@/components/button';
import { useEffect, useState } from 'react';
import {
  ASSIGN_TO_NEW,
  CREATE_LEAD_STATUS_NEW,
  PAGE_ROUTES,
  SINGLE_LEAD_ITEMS,
  UPDATE_LEAD_PAYLOAD,
} from '@/utils/constants/common-constants';
import { FormItems, SingleLeadItems, UpdateLeadPayload, UpdateReminderType } from '@/models/global-types';
import { CustomSelect } from '../select/custom-select';
import Map from './map';
import { useSession } from 'next-auth/react';
import { LeadService } from '@/services/lead-services';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

const UpdateLeadForm = () => {

  const [statusSelected, setStatusSelected] = useState('');
  const [assignedToSelected, setAssignedToSelected] = useState('');
  const [singleLeadData, setSingleLeadData] =
    useState<SingleLeadItems>(SINGLE_LEAD_ITEMS);
  const [updatePayload, setUpdatePayload] =
    useState<UpdateLeadPayload>(UPDATE_LEAD_PAYLOAD);
  const [location, setLocation] = useState({
    lat: 22.04,
    lng: 30.0,
  });

  const router = useRouter();

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

  useEffect(() => {
    setUpdatePayload(( ) => {
      return {
        title: singleLeadData?.title || '',
        executive_id: singleLeadData?.executive_id || 0,
        executive_name: singleLeadData?.executive_name || '',
        latitude: location?.lat || 0,
        longitude: location?.lng || 0,
        meeting_status: singleLeadData?.meeting_status || '',
        point_of_contact: {
          name: singleLeadData?.point_of_contact?.name || '',
          phone: singleLeadData?.point_of_contact?.phone || '',
          email: singleLeadData?.point_of_contact?.email || '',
          meeting_notes: singleLeadData?.point_of_contact?.meeting_notes || '',
          reference: singleLeadData?.point_of_contact?.reference || '',
        },
        reminder: [
          {
            title: "ab_update",
            user_id: parseInt(paramValue),
            reminder_time: "2023-03-20T15:51:05+07:00",
            notes: "new_update",
            status: "pending"
          }
        ],
        image_infos: singleLeadData?.image_info_json || {} as any,
        
      };
    });
  }, [singleLeadData]);

  console.log('updatePayload');
  console.log(updatePayload);

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;

    setUpdatePayload((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handlePointOfContactChange = (e: any) => {
    const { name, value } = e.target;

    setUpdatePayload((prev) => {
      return { ...prev, point_of_contact: { ...prev.point_of_contact, [name]: value } };
    });
  };

  useEffect(() => {
    setUpdatePayload((prev) => {
      return {
        ...prev,
        meeting_status: statusSelected,
        executive_name: assignedToSelected,
      };
    });
  }, [statusSelected, assignedToSelected]);

  const updateData = async () => {
    setUpdatePayload((prev) => {
      return { ...prev, location };
    });

    if (token) {
      await LeadServices.updateLead(paramValue, updatePayload, token);
      console.log('updatePayload');
      console.log(updatePayload);
      toast.success('Lead Update successfully.');
      router.push(PAGE_ROUTES.Leads);
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
          name='title'
          htmlFor='title'
          className='w-full mb-5'
          onChange={handleSelectChange}
          defaultValue={singleLeadData?.title}
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
            name='name'
            htmlFor='name'
            onChange={handlePointOfContactChange}
            defaultValue={singleLeadData?.point_of_contact?.name}
          />

          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Phone</p>}
            placeholder='Phone number'
            type='text'
            id='phone'
            name='phone'
            htmlFor='phone'
            onChange={handlePointOfContactChange}
            defaultValue={singleLeadData?.point_of_contact?.phone}
          />
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-1/2 gap-5'>
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Email</p>}
            placeholder='Email (Optional)'
            type='email'
            id='email'
            name='email'
            htmlFor='email'
            onChange={handlePointOfContactChange}
            defaultValue={singleLeadData?.point_of_contact?.email}
          />

          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Reference</p>}
            placeholder='Reference (Optional)'
            type='text'
            id='reference'
            name='reference'
            htmlFor='reference'
            onChange={handlePointOfContactChange}
            defaultValue={singleLeadData?.point_of_contact?.reference}
          />
        </div>
      </div>
      <div className='flex items-center justify-between mt-5 gap-5'>
        <div className='w-1/2'>
          <TextArea
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Remarks</p>}
            placeholder='Notes'
            name='meeting_notes'
            className='h-[182px]'
            onChange={handlePointOfContactChange}
            defaultValue={singleLeadData?.point_of_contact?.meeting_notes}
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
              onChange={handleSelectChange}
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
