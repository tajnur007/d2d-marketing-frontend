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
} from '@/utils/constants/common-constants';
import { FormItems } from '@/models/global-types';
import { CustomSelect } from '../select/custom-select';
import Map from './map';
import { ApiService } from '@/services/api-services';
import { useSession } from 'next-auth/react';
import { ExecutiveContext } from '@/context/executives-context';
import { leadFormErrorCheck } from '@/utils/helpers/common-helpers';

const CreateLeadForm = () => {
  const [statusSelected, setStatusSelected] = useState(CREATE_LEAD_STATUS_NEW[0].value);
  const [assignedToSelected, setAssignedToSelected] = useState(ASSIGN_TO_NEW[0].value);
  const [formData, setFormData] = useState<FormItems>(FORM_ITEMS);
  const [formErrors, setFormErrors] = useState<FormItems>(FORM_ITEMS);
  const [location, setLocation] = useState({
    lat: 22.04,
    lng: 30.0,
  });

  const { executivesOption, setExecutivesOption } = useContext(ExecutiveContext);

  const { data } = useSession();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });

    setFormErrors((prev) => {
      return { ...prev, [name]: '' };
    });
  };

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, Status: statusSelected, AssignedTo: assignedToSelected };
    });
  }, [statusSelected, assignedToSelected, formErrors]);

  const submitData = async () => {
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
      if (Object.keys(newFormErrors).length === 0) {
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

          image_infos: [{ image_name: `img_name`, image_path: formData?.Image || '' }], //dummy image until image upload api is integrated
        };

        // @ts-ignore
        const token = data?.user?.access_token;

        const ApiServices = new ApiService();
        const resp = await ApiServices.createLead(payloadObj, token);

        console.log(`server response ${resp}`);
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
