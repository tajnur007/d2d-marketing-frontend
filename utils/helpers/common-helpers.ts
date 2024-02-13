import { ChangePasswordItems, FormItems, LeadsDataType, SignUpFormItems } from '@/models/global-types';
import axios from 'axios';

export function ensureTrailingSlash(str: string = '/') {
  return str.endsWith('/') ? str : `${str}/`;
}

// Define a function to get the appropriate color based on status

export function getLatestLeads(data: LeadsDataType[]): LeadsDataType[] {
  const convertedData = data.map((item) => {
    const convertedTimestamp = new Date(item.timestamp).toISOString();
    return { ...item, timestamp: convertedTimestamp };
  });
  const sortedData = convertedData
    .sort((a, b) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    })
    .slice(-5);
  return sortedData;
}

function isValidEmail(email: any) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// Valid range is 10-12 digits
// Valid formats:
// (123) 456-7890,
// (123)456-7890,
// 123-456-7890,
// 123.456.7890,
// 1234567890,
// +31636363634 or
// 075-63546725
const validatePhone = (phone: any) => {
  return String(phone)
    .toLowerCase()
    .match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
};

export const leadFormErrorCheck = (formData: FormItems, field: string) => {
  const safeFields = {
    Email: 'Email',
    Reference: 'Reference',
  };

  if (safeFields[field as keyof typeof safeFields]) {
    if (field === 'Email' && formData[field as keyof typeof formData] !== '') {
      const emailValue = formData[field as keyof typeof formData];
      return isValidEmail(emailValue) ? false : `(${field} is invalid)`;
    } else {
      return false;
    }
  }

  if (formData[field as keyof typeof formData] === '') {
    return `(${field} is required)`;
  } else {
    if (field === 'Phone') {
      const phoneValue = formData[field as keyof typeof formData];
      return validatePhone(phoneValue) ? false : `(${field} is invalid)`;
    } else if (field === 'Images') {
      return formData[field]?.length !== 0 ? false : `(${field} is required)`;
    } else {
      return false;
    }
  }
};

export const generateInitials = (fullName: string): string => {
  const names = fullName.split(/\s+/).filter(Boolean);
  let firstName = names.shift() || '';
  let lastName = names.pop() || '';
  let middleName = names.join(' ');
  const initials = `${firstName.charAt(0)}${middleName ? middleName.charAt(0) : ''}${
    lastName ? lastName.charAt(0) : ''
  }`;
  return initials.toUpperCase();
};

export const validateImageUrl = async (imageUrl: string): Promise<boolean> => {
  try {
    const response = await axios.get(imageUrl);
    if (response.status === 200) {
      return true; // URL is valid
    } else {
      return false; // URL is not valid
    }
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return false; // URL is not valid and returns "Not Found" status
    } else {
      console.error('Error validating URL:', error.message);
      throw new Error('An error occurred while validating the URL');
    }
  }
};

export const signUpFormErrorCheck = (formData: SignUpFormItems, field: string) => {
  const safeFields = {
    FullName: 'FullName',
    Email: 'Email',
    OrganizationName: 'OrganizationName',
    Password: 'Password',
    ConfirmPassword: 'ConfirmPassword',
  };

  if (safeFields[field as keyof typeof safeFields]) {
    if (formData[field as keyof typeof formData] === '') {
      return `(${field} is required)`;
    }

    if (field === 'Email') {
      const emailValue = formData[field as keyof typeof formData];
      return isValidEmail(emailValue) ? null : `(${field} is invalid)`;
    }

    if (field === 'ConfirmPassword' && formData.Password !== formData.ConfirmPassword) {
      return '(Passwords do not match)';
    }

    return null; // Safe field is valid
  }

  // Handle non-safe fields
  if (formData[field as keyof typeof formData] === '') {
    return `(${field} is required)`;
  }

  return null; // Non-safe field is valid
};
