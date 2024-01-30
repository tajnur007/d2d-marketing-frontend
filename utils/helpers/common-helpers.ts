import { FormItems, LeadsDataType } from '@/models/global-types';

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
    Status: 'Status',
    AssignedTo: 'AssignedTo',
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
    } else {
      return false;
    }
  }
};
