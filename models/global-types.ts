import { StaticImageData } from 'next/image';

import React, {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';

export interface ChildrenType {
  children: React.ReactNode;
}

export interface IconProps {
  className?: string;
}

export interface DocType {
  techno?: 'react' | 'next' | 'solid' | 'nuxt' | 'vue' | 'svelte' | 'angular';
  snippet?: 'short' | 'long' | 'special';
  version?: number;
}

export interface SidebarItem {
  id: number;
  iconName: string;
  path: string;
  icon: () => JSX.Element;
  position: number;
}

export interface Person {
  id: number;
  initials: string;
  name: string;
  totalLeads: number;
}

export interface statusColor {
  Cool?: string;
  Hot?: string;
  Warm?: string;
}

export interface LEADS_DATA_TYPE {
  id: number;
  title: string;
  date: string;
  assignedByName: string;
  assignedByNumber: string;
  assignedByEmail: string;
  assignedToName: string;
  status: string;
  location: string;
  meetingNote: string;
  image: string;
  reminder: {
    reminderTitle: string;
    reminderDate: string;
    reminderStatus: string;
  };
  timestamp: string;
}

export interface EmployeestatusColor {
  Active?: string;
  Inactive?: string;
}

export interface EmployeeType {
  id: number;
  employeeName: string;
  employeeDesignation: string;
  employeeEmail: string;
  employeePhone: string;
  employeeStatus: string;
  employeeImage?: string;
}

interface MapLocation {
  lat: number;
  lng: number;
}

export interface LocationProps {
  location: MapLocation;
  setLocation: (newLocation: MapLocation) => void;
}

export interface FormItems {
  Title?: string;
  Name?: string;
  Phone?: string;
  Email?: string;
  Reference?: string;
  Note?: string;
  Status?: string;
  Reminder?: string;
  Date?: string;
  Image?: string;
  CurrentPassword?: string;
  NewPassword?: string;
  ConfirmPassword?: string;
  location: MapLocation;
}

export interface SignUpFormItems {
  FullName?: string;
  Email?: string;
  OrganizationName?: string;
  Password?: string;
  ConfirmPassword?: string;
}

export interface SelectProps {
  label?: React.ReactNode;
  className?: string;
  selected?: string;
  setSelected?: (item: string) => void;
  options?: CreateLeadStatusItems[];
  onSelectChange?: any;
}

export interface AssignSelectProps {
  label?: React.ReactNode;
  className?: string;
  selected?: string;
  setSelected?: (item: string) => void;
  options?: CreateAssignToItems[];
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  htmlFor?: string;
  errorMessage?: string;
  getDate?: any;
}

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  htmlFor?: string;
  errorMessage?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export interface AuthCommonProps {
  pageImage: StaticImageData;
  text: string;
}

export interface NoAccountProps {
  signupPage: boolean;
}

export interface AuthLayoutProps {
  text: string;
  image: StaticImageData;
  children?: ReactNode;
}

export interface CreateReminderStatusItems {
  value: string;
  label: string;
  image?: any;
}

export interface CreateLeadStatusItems {
  value: string;
  label: string;
}

export interface AssignToUsers {
  value: string;
  label: string;
}

export interface CreateAssignToItems {
  value: string;
  label: string;
  isPublic: boolean;
}

export interface StatusState {
  hot: boolean;
  warm: boolean;
  cold: boolean;
}

export interface CreateEmployeeModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (item: boolean) => void;
  formData: CreateEmployeeItems;
  setFormData: (item: any) => void;
  formErrors: CreateEmployeeItems;
  setFormErrors: (item: any) => void;
}

export interface FilterLeadsCardProps {
  setFilterCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onFilterData: (data: any) => void;
}

export interface StatusCheckboxProps {
  id: any;
  onChange: any;
  children: any;
  checked: any;
}

export interface SearchBarProps {
  className?: string;
  value?: string;
  setValue?: (item: string) => void;
  handleKeyDown?: (e: any) => void;
}

export interface MyModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export interface CreateReminderItems {
  Title?: string;
  AssociatedLead?: string;
  Note?: string;
  Status?: string;
  Date?: string;
}

export interface CreateReminderModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (item: boolean) => void;
  formData: CreateReminderItems;
  setFormData: (item: any) => void;
  formErrors: CreateReminderItems;
  setFormErrors: (item: any) => void;
  selected: string;
  setSelected: (item: string) => void;
}

export interface CreateEmployeeItems {
  Name?: string;
  Phone?: string;
  Email?: string;
  Role?: string;
  Manager?: string;
}

export interface CreateEmployeeModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (item: boolean) => void;
  formData: CreateEmployeeItems;
  setFormData: (item: any) => void;
  formErrors: CreateEmployeeItems;
  setFormErrors: (item: any) => void;
}


export interface LeadOptionsProps {
  isOpen: boolean;
  setIsOpen: (item: any) => void;
  options: boolean;
  setOptions: (item: any) => void;
}
