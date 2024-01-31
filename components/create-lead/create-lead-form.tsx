'use client';

import { Input } from '@/components/input';
import { TextArea } from '@/components/text-area';
import { ImageUpload } from '@/components/image-upload';
import { Button } from '@/components/button';
import { useEffect, useState, useContext } from 'react';
import {
  ASSIGN_TO_NEW,
  CREATE_LEAD_STATUS_NEW,
  FORM_ITEMS,
  IMAGE_DETAIL,
  PAGE_ROUTES,
} from '@/utils/constants/common-constants';
import { FormItems } from '@/models/global-types';
import { CustomSelect } from '../select/custom-select';
import Map from './map';
import { LeadService } from '@/services/lead-services';
import { useSession } from 'next-auth/react';
import { ExecutiveContext } from '@/context/executives-context';
import { leadFormErrorCheck } from '@/utils/helpers/common-helpers';
import { toast } from 'react-toastify';
import { redirect, useRouter } from 'next/navigation';

const CreateLeadForm = () => {
  const [statusSelected, setStatusSelected] = useState('');
  const [assignedToSelected, setAssignedToSelected] = useState('');
  const [formData, setFormData] = useState<FormItems>(FORM_ITEMS);
  const [formErrors, setFormErrors] = useState<FormItems>(FORM_ITEMS);
  const [isBothSelectFieldNull, setIsBothSelectFieldNull] = useState(false);
  const [location, setLocation] = useState({
    lat: 22.04,
    lng: 30.0,
  });

  const router = useRouter();

  const { executivesOption, setExecutivesOption } = useContext(ExecutiveContext);

  const { data } = useSession();
  // @ts-ignore
  const token = data?.user?.access_token;

  useEffect(() => {
    if (token) {
      const LeadServices = new LeadService();
      LeadServices.getExecutivesData(setExecutivesOption, token);
    }
  }, [token, setExecutivesOption]);

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, Status: statusSelected, AssignedTo: assignedToSelected };
    });
  }, [statusSelected, assignedToSelected, formErrors]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });

    setFormErrors((prev) => {
      return { ...prev, [name]: '' };
    });
  };

  const submitData = async () => {

    if (statusSelected === '' && assignedToSelected === '') {
      setIsBothSelectFieldNull(true);
      toast.info('Please select Status or AssignedTo field.');
      return;
    }
    else {
      setIsBothSelectFieldNull(false);
    }

    setFormData((prev) => {
      return { ...prev, location };
    });

    try {
      const newFormErrors: any = {};

      for (let field in formData) {
        if (leadFormErrorCheck(formData, field)) {
          console.log(leadFormErrorCheck(formData, field));
          newFormErrors[field] = leadFormErrorCheck(formData, field);
        }
      }

      setFormErrors(newFormErrors);
      console.log(newFormErrors);
      if (Object.keys(newFormErrors).length === 0 && isBothSelectFieldNull === false) {
        //! Payload object

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

          image_infos: [
            {
              image_name: IMAGE_DETAIL.name,
              image_path: IMAGE_DETAIL.path,
            },
          ],
        };

        const LeadServices = new LeadService();

        if (token) {
          await LeadServices.createLead(payloadObj, token);
          toast.success('Create lead successfully.');
          router.push(PAGE_ROUTES.Dashboard);
        } else {
          toast.error('Something went wrong.');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='mt-2 p-6 overflow-y-auto h-[calc(100%-30px)] tiny-scrollbar'>
      <div className='flex items-center justify-between mt-10 gap-5'>
        <Input
          label='Title'
          placeholder='Title here'
          type='text'
          id='title'
          name='Title'
          htmlFor='title'
          errorMessage={formErrors.Title}
          className={`w-full mb-5 ${formErrors.Title && 'border-red-500 shadow'}`}
          onChange={handleInputChange}
        />

        <div className='flex flex-col justify-between gap-5 w-full mb-[21px]'>
          <CustomSelect
            label='AssignedTo'
            setSelected={setAssignedToSelected}
            options={executivesOption}
            className={` ${isBothSelectFieldNull && '!border-red-500 !shadow'}`}
          />
        </div>
      </div>

      <div className='rounded-2xl relative h-[342px] w-full'>
        <Map setLocation={setLocation} location={location} />
      </div>

      <div className='flex items-center justify-between mt-10 gap-5'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-1/2 gap-5'>
          <Input
            label='Name'
            placeholder='Name'
            type='text'
            id='name'
            name='Name'
            errorMessage={formErrors.Name}
            htmlFor='name'
            onChange={handleInputChange}
            className={` ${formErrors.Name && 'border-red-500 shadow'}`}
          />

          <Input
            label='Phone'
            placeholder='Phone number'
            type='text'
            id='phone'
            name='Phone'
            errorMessage={formErrors.Phone}
            htmlFor='phone'
            onChange={handleInputChange}
            className={` ${formErrors.Phone && 'border-red-500 shadow'}`}
          />
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-1/2 gap-5'>
          <Input
            label='Email'
            placeholder='Email (Optional)'
            type='email'
            id='email'
            name='Email'
            htmlFor='email'
            errorMessage={formErrors.Email}
            onChange={handleInputChange}
            className={` ${formErrors.Email && 'border-red-500 shadow'}`}
          />

          <Input
            label='Reference'
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
            label='Remarks'
            placeholder='Notes'
            name='Note'
            errorMessage={formErrors.Note}
            className={`h-[182px] ${formErrors.Note && 'border-red-500 shadow'}`}
            onChange={handleInputChange}
          />
        </div>

        <div className='flex flex-col justify-between gap-2 w-1/2'>
          <CustomSelect
            label='Status'
            setSelected={setStatusSelected}
            options={CREATE_LEAD_STATUS_NEW}
            className={` ${isBothSelectFieldNull && 'border-red-500 shadow'}`}
          />

          <div className='flex flex-col items-start justify-center '>
            <p className='text-[#00156A] font-medium text-xs mb-2'>
              Image
              {formErrors.Image && (
                <span className='text-red-500 text-xs ml-1'>{formErrors.Image}</span>
              )}
            </p>

            <ImageUpload
              placeholder='Upload image'
              name='Image'
              onChange={handleInputChange}
              className={`h-[92px] ${formErrors.Image && 'border-red-500 shadow'}`}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-end  mt-5 gap-5 items-end'>
        <Button onClick={submitData} className='w-[193px] rounded-[10px] h-[60px]'>
          Create
        </Button>
      </div>
    </div>
  );
};

export default CreateLeadForm;
