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
  executive_id: number;
  executive_name: string;
  count_of_leads: number;
  initials: string;
}

export interface statusColor {
  cold?: string;
  hot?: string;
  warm?: string;
}

export interface LEADERBOARD {
  Count: number;
  Data: Person[] | null;
}

export interface LATEST_LEADS_LIST_DATA_TYPE {
  id: number;
  title: string;
  latitude: number;
  longitude: number;
  meeting_status: string;
  assignment_status: string;
  image_info_json: [
    {
      image_name: string;
      image_path: string;
    }
  ];
  executive_id: number;
  executive_name: string;
  previous_user_id: number;
  manager_id: number;
  manager_name: string;
  point_of_contact: {
    name: string;
    phone: string;
    email: string;
    reference: string;
    meeting_notes: string;
  };
  company_id: number;
  created_at: string;
  created_by: string;
  reminders: string;
}

export interface LATEST_LEADS_DATA_TYPE {
  Count: number;
  Data: [LATEST_LEADS_LIST_DATA_TYPE];
}

export interface LeadsDataType {
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

export interface PointsOfContactType {
  email: string;
  meeting_notes?: string;
  name: string;
  phone: string;
  reference: string;
}

export interface ImageInfoType {
  image_name?: string;
  image_path?: string;
}

export interface RemainderType {
  company_id: number;
  id: number;
  lead_id?: number;
  notes?: string;
  reminder_time?: string;
  status?: string;
  title?: string;
  user_id?: number;
}

export interface UpdateRemainderType {
  notes: string;
  reminder_time: string;
  status: string;
  title: string;
}

export interface LeadListType {
  assignment_status: string;
  company_id: number;
  created_at: string;
  created_by: string;
  executive_id: number;
  executive_name: string;
  id: number;
  image_info_json: ImageInfoType[];
  latitude: number;
  longitude: number;
  manager_id: number;
  manager_name: string;
  meeting_status: string;
  point_of_contact: PointsOfContactType;
  previous_user_id: number;
  remainders: any;
  title: string;
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
export interface ManagerType {
  id: number;
  company_id: number;
  manager_id?: number;
  name: string;
  manager_name?: string;
  user_type: string;
  email: string;
  phone: string;
  image_path?: string;
  image_name?: string;
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
  Image?: [{ image_name: string; image_path: string }];
  AssignedTo?: string;
  location: MapLocation;
}

//! Single Lead data
export interface SingleLeadItems {
  assignment_status?: string;
  company_id?: number;
  created_at?: string;
  created_by?: string;
  created_by_user_id?: number;
  executive_id?: number;
  executive_name?: string;
  id?: number;
  image_info_json?: ImageInfoType[];
  latitude?: number;
  longitude?: number;
  manager_id?: number;
  manager_name?: string;
  meeting_status?: string;
  point_of_contact?: PointsOfContactType;
  previous_user_id?: number;
  reminders?: RemainderType[];
  title?: string;
}

export interface TransferLeadPayload {
  executive_id: number;
  executive_name: string;
}

export interface UpdateReminderType {
  title: string;
  user_id: number;
  reminder_time: string;
  notes: string;
  status: string;
}

export interface UpdateLeadPayload {
  title: string;
  executive_id: number;
  executive_name: string;
  latitude: number;
  longitude: number;
  meeting_status: string;
  point_of_contact: PointsOfContactType;
  reminder: UpdateReminderType[];
  image_infos: ImageInfoType[];
}

export interface SettingFormItems {
  Name?: string;
  Phone?: string;
  Email?: string;
  Image?: string;
  CurrentPassword?: string;
  NewPassword?: string;
  ConfirmPassword?: string;
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
  defaultValue?: string;
  isBothSelectFieldNull?: boolean;
  setIsBothSelectFieldNull?: (item: boolean) => void;
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
  defaultValue?: string;
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
  label?: string;
  company_id?: number;
  email?: string;
  id?: number;
  image_name?: string;
  image_path?: string;
  manager_id?: number;
  manager_name?: string;
  name?: string;
  phone?: string;
  user_type?: string;
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
  isExecutive: boolean;
  setModalIsOpen: (item: boolean) => void;
  setIsExecutive: (item: boolean) => void;
  formData: CreateEmployeeItems;
  setFormData: (item: any) => void;
  formErrors: CreateEmployeeItems;
  setFormErrors: (item: any) => void;
}

export interface UpdateEmployeeModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (item: boolean) => void;
  isExecutive: boolean;
  setIsExecutive: (item: boolean) => void;
  employeeinfo: any;
  isRefreshData: boolean;
  setIsRefreshData: (item: boolean) => void;
}

export interface UpdateEmployeePayload {
  name: string;
  user_type: string;
  phone: string;
  manager_id: number;
  manager_name: string;
  image_name: string;
  image_path: string;
}

export interface FilterLeadsCardProps {
  setFilterCardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onFilterData: (data: any) => void;
  filterIcon: boolean;
  setFilterIcon: React.Dispatch<React.SetStateAction<boolean>>;
  closeTooltip: () => void;
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
  leadsData: LeadListType[];
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
  setIsCreated: (item: boolean) => void;
  leadsData: any;
}

export interface DeleteModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (item: boolean) => void;
  data: LeadListType;
  isRefreshData: boolean;
  setIsRefreshData: (item: boolean) => void;
}

export interface CreateEmployeeItems {
  name?: string;
  phone?: string;
  email?: string;
  user_type?: string;
  manager_name?: string;
  manager_id?: number;
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
  handleViewButton: () => void;
  handleEditButton: () => void;
  handleDeleteButton: () => void;
}

export interface LeadsDataType {
  value?: string;
  label?: string;
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

export interface EmployeeOptionsProps {
  handleViewButton?: () => void;
  handleDeleteButton?: () => Promise<void>;
  handleEditButton?: () => void;
}

export interface RemainderProps {
  reminder: RemainderType;
  token: string;
  setReminders: (item: any) => void;
  isUpdated: boolean;
  setIsUpdated: (item: boolean) => void;
}

export interface UpdateRemainderModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (item: boolean) => void;
  formData: RemainderType;
  setFormData: (item: any) => void;
  formErrors: UpdateRemainderType;
  setFormErrors: (item: any) => void;
  selected: string;
  setSelected: (item: string) => void;
  setIsUpdated: (item: boolean) => void;
}
