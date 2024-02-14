'use client';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { TextArea } from '@/components/text-area';
import { SingleLeadItems, UpdateLeadPayload } from '@/models/global-types';
import { LeadService } from '@/services/lead-services';
import {
  ASSIGN_TO_NEW,
  CREATE_LEAD_STATUS_NEW,
  PAGE_ROUTES,
  SINGLE_LEAD_ITEMS,
  UPDATE_LEAD_PAYLOAD,
} from '@/utils/constants/common-constants';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CustomSelect } from '../select/custom-select';
import Map from './map';
import Dropzone from './multi-image-upload';
import { LeadsContext } from '@/context/leads-context';
import { UserService } from '@/services/user-services';

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
  const [images, setImages] = useState([]);
  const [pending, setPending] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const { executivesOption, setExecutivesOption } = useContext(LeadsContext);

  const { data } = useSession();
  // @ts-ignore
  const token = data?.user?.access_token;
  const router = useRouter();
  const LeadServices = new LeadService();

  const searchParams: any = useSearchParams();
  const userId = searchParams.get('id');

  useEffect(() => {
    if (token) {
      const UserServices = new UserService();
      UserServices.getExecutivesData(setExecutivesOption, token, setIsLoading);
    }
  }, [token, setExecutivesOption]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make an API request to get user data with the ID equal to userId
        const response = await LeadServices.getUserLead(userId, token);
        setSingleLeadData(response.data.Data);
      } catch (error) {
        console.error('Error fetching user lead:', error);
      }
    };

    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setUpdatePayload(() => {
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
        image_infos: images,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleLeadData, images]);

  const handlePendingChange = (isPending: boolean) => {
    setPending(isPending);
  };

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

    try {
      if (token) {
        await LeadServices.updateLead(userId, updatePayload, token);
        toast.success('Lead updated successfully.');
        router.push(PAGE_ROUTES.Leads);
      } else {
        toast.error('Something went wrong.');
        throw new Error('Token is missing.');
      }
    } catch (error) {
      console.error('Error updating lead:', error);
      toast.error('Failed to update lead. Please try again.');
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
            options={executivesOption}
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
          <div className='items-start justify-center '>
            <p className='text-[#00156A] font-medium text-xs mb-2'>Image</p>
            <Dropzone
              singleLeadData={singleLeadData}
              onChange={setImages}
              onPendingChange={handlePendingChange}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-end  mt-5 gap-5 items-end'>
        <Button
          onClick={updateData}
          disabled={pending === true}
          className='w-[193px] rounded-[10px] h-[60px]'>
          Update
        </Button>
      </div>
    </div>
  );
};

export default UpdateLeadForm;
