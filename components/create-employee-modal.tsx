'use client';
import { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { FORM_ITEMS } from '@/utils/constants/common-constants';
import { FormItems } from '@/models/global-types';
import { Input } from '@/components/input';

const CreateEmployeeModal = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormItems>(FORM_ITEMS);
  const [formErrors, setFormErrors] = useState<FormItems>(FORM_ITEMS);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    console.log('modal-open');
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    console.log(value);

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });

    setFormErrors((prev) => {
      return { ...prev, [name]: '' };
    });
  };

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev };
    });
  }, [formErrors]);

  const submitData = () => {
    const newFormErrors: any = {};

    for (let field in formData) {
      if (formData[field as keyof typeof formData] === '') {
        newFormErrors[field] = `(${field} is required)`;
      }
    }
    setFormErrors(newFormErrors);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel='Example Modal'>
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <Input
            label={<p className='text-[#00156A] font-medium text-xs mb-1'>Title</p>}
            placeholder='Title here'
            type='text'
            id='title'
            name='Title'
            htmlFor='title'
            errorMessage={formErrors.Title}
            className={`w-full mb-5 ${formErrors.Title && 'border-red-500 shadow'}`}
            onChange={handleInputChange}
          />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default CreateEmployeeModal;
