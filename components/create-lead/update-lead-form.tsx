'use client';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { TextArea } from '@/components/text-area';
import { FormItems, SingleLeadItems } from '@/models/global-types';
import { UserService } from '@/services/user-services';
import { LeadService } from '@/services/lead-services';
import {
  CREATE_LEAD_STATUS_NEW,
  FORM_ITEMS,
  PAGE_ROUTES,
  SINGLE_LEAD_ITEMS,
} from '@/utils/constants/common-constants';
import { leadFormErrorCheck } from '@/utils/helpers/common-helpers';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, use, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CustomSelect } from '../select/custom-select';
import Map from './map';
import Dropzone from './multi-image-upload';
import { LeadsContext } from '@/context/leads-context';
import MiniLoader from '../mini-loader';

const UpdateLeadForm: React.FC = () => {
  const [statusSelected, setStatusSelected] = useState('');
  const [assignedToSelected, setAssignedToSelected] = useState('');
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState<FormItems>(FORM_ITEMS);
  const [formErrors, setFormErrors] = useState<FormItems>(FORM_ITEMS);
  const [pending, setPending] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [singleLeadData, setSingleLeadData] =
    useState<SingleLeadItems>(SINGLE_LEAD_ITEMS);

  const handlePendingChange = (isPending: boolean) => {
    setPending(isPending);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({
    lat: 22.04,
    lng: 30.0,
  });

  const router = useRouter();

  const { executivesOption, setExecutivesOption } = useContext(LeadsContext);

  const { data } = useSession();
  // @ts-ignore
  const token = data?.user?.access_token;
  const LeadServices = new LeadService();

  //! Get the user id from the URL
  const searchParams: any = useSearchParams();
  const userId = searchParams.get('id');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        //! Make an API request to get user data with the ID equal to userId
        const response = await LeadServices.getUserLead(userId, token);
        setSingleLeadData(response.data.Data);
        setStatusSelected(response.data.Data?.meeting_status);
        setAssignedToSelected(response.data.Data?.executive_name);
      } catch (error) {
        toast.error('Error fetching user lead.');
      }
    };
    fetchUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const singlepayload = {
      Title: singleLeadData?.title,
      Name: singleLeadData?.point_of_contact?.name,
      Phone: singleLeadData?.point_of_contact?.phone,
      Email: singleLeadData?.point_of_contact?.email,
      Reference: singleLeadData?.point_of_contact?.reference,
      Note: singleLeadData?.point_of_contact?.meeting_notes,
      Status: singleLeadData?.meeting_status,
      Images: images,
      AssignedTo: singleLeadData?.executive_name,
      location: {
        lat: location?.lat,
        lng: location?.lng,
      },
    };
    //! Set the form data for auto filling the form
    setFormData(singlepayload);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleLeadData, images]);

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, Images: [...images] };
    });
  }, [images]);

  useEffect(() => {
    if (token) {
      const UserServices = new UserService();
      UserServices.getExecutivesData(setExecutivesOption, token, setIsLoading);
    }
  }, [token, setExecutivesOption]);

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, Status: statusSelected, AssignedTo: assignedToSelected };
    });

    if (statusSelected) {
      setFormErrors((prev) => {
        return { ...prev, Status: '' };
      });
    }
    if (assignedToSelected) {
      setFormErrors((prev) => {
        return { ...prev, AssignedTo: '' };
      });
    }
    setIsSuccess(false);
  }, [statusSelected, assignedToSelected]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });

    setFormErrors((prev) => {
      return { ...prev, [name]: '' };
    });
  };

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setPending(true);
    event.preventDefault();
    setFormData((prev) => {
      return { ...prev, location };
    });

    try {
      const newFormErrors: any = {};

      for (let field in formData) {
        if (leadFormErrorCheck(formData, field)) {
          newFormErrors[field] = leadFormErrorCheck(formData, field);
        }
      }

      setFormErrors(newFormErrors);

      if (Object.keys(newFormErrors).length === 0) {
        executivesOption.map((option: any) => {
          if (option.name === assignedToSelected) {
            setFormData((prev) => {
              return { ...prev, AssignedTo: option.name, ExecutiveId: option.id };
            });
          }
        });

        //! Payload object
        const payloadObj = {
          title: formData?.Title,
          executive_id: formData?.ExecutiveId,
          executive_name: formData?.AssignedTo,
          latitude: location?.lat,
          longitude: location?.lng,
          meeting_status: formData?.Status,

          point_of_contact: {
            name: formData?.Name,
            phone: formData?.Phone,
            email: formData?.Email,
            meeting_notes: formData?.Note,
            reference: formData?.Reference,
          },

          image_infos: [...images],
        };

        // @ts-ignore
        const token = data?.user?.access_token;

        const LeadServices = new LeadService();
        if (token) {
          const res = await LeadServices.updateLead(userId, payloadObj, token);
          if (res.status === 202) {
            setFormData(FORM_ITEMS);
            setStatusSelected('');
            setAssignedToSelected('');
            setImages([]);
            setIsSuccess(true);
            toast.success('Lead updated successfully.');
            router.push(PAGE_ROUTES.Leads);
          }
        } else {
          toast.error('Something went wrong.');
        }
      }
    } catch (err) {
      toast.error('Failed to update lead. Please try again.');
    }
    setPending(false);
  };

  return (
    <div className='mt-2 p-6 overflow-y-auto h-[calc(100%-30px)] tiny-scrollbar'>
      <form onSubmit={onFormSubmit}>
        <div className='flex items-center justify-between mt-10 gap-5'>
          <Input
            label='Title'
            placeholder='Title here'
            id='title'
            name='Title'
            disabled={pending}
            value={formData?.Title}
            onChange={handleInputChange}
          />

          <div className='flex flex-col justify-between gap-5 w-full mb-[21px]'>
            <CustomSelect
              label='AssignedTo'
              setSelected={setAssignedToSelected}
              options={executivesOption}
              errorMessage={formErrors.AssignedTo}
              className={`${formErrors.AssignedTo && '!border-red-500 !shadow'}`}
              isLoading={pending}
              selected={isSuccess ? '' : assignedToSelected}
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
              id='name'
              name='Name'
              disabled={pending}
              value={formData?.Name}
              onChange={handleInputChange}
            />

            <Input
              label='Phone'
              placeholder='Phone number'
              id='phone'
              name='Phone'
              disabled={pending}
              value={formData?.Phone}
              onChange={handleInputChange}
            />
          </div>

          <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-1/2 gap-5'>
            <Input
              label='Email'
              placeholder='Email (Optional)'
              type='email'
              id='email'
              name='Email'
              disabled={pending}
              value={formData?.Email}
              onChange={handleInputChange}
            />

            <Input
              label='Reference'
              placeholder='Reference (Optional)'
              id='reference'
              name='Reference'
              disabled={pending}
              value={formData?.Reference}
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
              disabled={pending}
              value={formData?.Note}
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
              errorMessage={formErrors.Status}
              className={`${formErrors.Status && 'border-red-500 shadow'}`}
              isLoading={pending}
              selected={isSuccess ? '' : statusSelected}
            />
            <div className='items-start justify-center '>
              <p className='text-[#00156A] font-medium text-xs mb-2'>Image</p>
              <Dropzone
                onChange={setImages}
                onPendingChange={handlePendingChange}
                singleLeadData={singleLeadData}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end  mt-5 gap-5 items-end'>
          <Button
            type='submit'
            disabled={pending}
            className={`w-[193px] rounded-[10px] h-[60px]`}>
            {pending ? <MiniLoader /> : ' Update'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateLeadForm;
