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
} from '@/utils/constants/common-constants';
import { FormItems } from '@/models/global-types';
import { CustomSelect } from '../select/custom-select';
import Map from './map';
import { ApiService } from '@/services/api-services';
import { useSession } from 'next-auth/react';

const UpdateLeadForm = () => {
  const [statusSelected, setStatusSelected] = useState(CREATE_LEAD_STATUS_NEW[0].value);
  const [assignedToSelected, setAssignedToSelected] = useState(ASSIGN_TO_NEW[0].value);
  const [formData, setFormData] = useState<FormItems>(FORM_ITEMS);
  const [location, setLocation] = useState({
    lat: 22.04,
    lng: 30.0,
  });

  const { data } = useSession();

  const [queryParam, setQueryParam] = useState('');

  useEffect(() => {
    // Parse URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Get the value of the 'param' query parameter
    const paramValue: any = searchParams.get('id');

    // @ts-ignore
    const token = data?.user?.access_token;
    const ApiServices = new ApiService();
    
    const fetchUserData = async () => {
      try {
        // Make an API request to get user data with the ID equal to paramValue
        const response = await ApiServices.getUser(paramValue, token);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();

    console.log(paramValue);
    // Update state with the query parameter value
    setQueryParam(paramValue);
  }, []);

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

  const submitData = async () => {
    setFormData((prev) => {
      return { ...prev, location };
    });

    try {
      // @ts-ignore
      // const token = data?.user?.access_token;
      // const ApiServices = new ApiService();
      // const resp = await ApiServices.createLead(payloadObj, token);
      // console.log(`server response ${resp}`);
    } catch (err) {
      console.log(err);
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
          onChange={handleInputChange}
        />

        <div className='flex flex-col justify-between gap-5 w-full mb-[21px]'>
          <CustomSelect
            label='AssignedTo'
            setSelected={setAssignedToSelected}
            options={ASSIGN_TO_NEW}
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
          />

          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Phone</p>}
            placeholder='Phone number'
            type='text'
            id='phone'
            name='Phone'
            htmlFor='phone'
            onChange={handleInputChange}
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
          />

          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Reference</p>}
            placeholder='Reference (Optional)'
            type='text'
            id='reference'
            name='Reference'
            htmlFor='reference'
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='flex items-center justify-between mt-5 gap-5'>
        <div className='w-1/2'>
          <TextArea
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Remarks</p>}
            placeholder='Notes'
            name='Note'
            onChange={handleInputChange}
          />
        </div>

        <div className='flex flex-col justify-between gap-2 w-1/2'>
          <CustomSelect
            label='Status'
            setSelected={setStatusSelected}
            options={CREATE_LEAD_STATUS_NEW}
          />

          <div className='flex flex-col items-start justify-center '>
            <p className='text-[#00156A] font-medium text-xs mb-2'>Image</p>

            <ImageUpload
              placeholder='Upload image'
              name='Image'
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-end  mt-5 gap-5 items-end'>
        <Button onClick={submitData} className='w-[193px] rounded-[10px] h-[60px]'>
          Update
        </Button>
      </div>
    </div>
  );
};

export default UpdateLeadForm;
