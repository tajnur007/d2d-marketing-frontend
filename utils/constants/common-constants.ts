import {
  FormItems,
  SidebarItem,
  statusColor,
  CreateAssignToItems,
  AssignToUsers,
  SignUpFormItems,
  CreateReminderItems,
  CreateEmployeeItems,
  CreateReminderStatusItems,
  CreateLeadStatusItems,
} from '@/models/global-types';
import { BookIcon, HomeIcon, SettingIcon, EmployeeListIcon } from '../../assets/icons';

export const getStatusColor: statusColor = {
  Cool: 'bg-blue-200',
  Hot: 'bg-[#FFD9D9]',
  Warm: 'bg-[#FFEFB8]',
};

export const PAGE_ROUTES = {
  Dashboard: '/dashboard',
  Leads: '/leads',
  Settings: '/settings',
  Signin: '/auth/signin',
  Signup: '/auth/signup',
  Forgetpassword: '/auth/forget-password',
  EmailSent: '/auth/forget-password/email-sent',
  LeadCreate: '/leads/create',
  EmployeeList: '/employee-list',
};

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const API_PATHS = {
  Signup: '/auth/sign-up',
  CreateUser: '/user/create',
  CreateLead: '/lead/create',
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 1,
    iconName: 'Dashboard',
    path: PAGE_ROUTES.Dashboard,
    icon: HomeIcon,
    position: 0,
  },
  {
    id: 2,
    iconName: 'Leads',
    path: PAGE_ROUTES.Leads,
    icon: BookIcon,
    position: 50,
  },
  {
    id: 3,
    iconName: 'Employee List',
    path: PAGE_ROUTES.EmployeeList,
    icon: EmployeeListIcon,
    position: 100,
  },
  {
    id: 4,
    iconName: 'Settings',
    path: PAGE_ROUTES.Settings,
    icon: SettingIcon,
    position: 150,
  },
];

export const FORM_ITEMS: FormItems = {
  Title: '',
  Name: '',
  Phone: '',
  Email: '',
  Reference: '',
  Note: '',
  Status: '',
  Image: '',
  AssignedTo: '',
  location: { lat: 0, lng: 0 },

  // title: '',
  // executive_id: 143,
  // executive_name: 'aa_user2',
  // latitude: 0,
  // longitude: 0,
  // meeting_status: '',
  // point_of_contact: {
  //   name: '',
  //   number: '',
  //   email: '',
  //   meeting_notes: '',
  //   reference: '',
  // },
  // image_infos: [
  //   {
  //     image_name: '',
  //     image_path: '',
  //   },
  // ],
};

export const CREATE_REMINDER_ITEMS: CreateReminderItems = {
  Title: '',
  AssociatedLead: '',
  Note: '',
  Status: '',
  Date: '',
};

export const SignUpFORM_ITEMS: SignUpFormItems = {
  FullName: '',
  Email: '',
  OrganizationName: '',
  Password: '',
  ConfirmPassword: '',
};

export const LEAD_STATUS = {
  Pending: 'Pending',
  InProgress: 'In-Progress',
  Completed: 'Completed',
  Hot: 'Hot',
  Cool: 'Cool',
  Warm: 'Warm',
};

export const CREATE_REMINDER_STATUS: CreateReminderStatusItems[] = [
  { value: 'Pending', label: 'Pending' },
  { value: 'In-Progress', label: 'In-Progress' },
  { value: 'Completed', label: 'Completed' },
];

export const CREATE_LEAD_STATUS_NEW: CreateLeadStatusItems[] = [
  { value: 'hot', label: 'Hot' },
  { value: 'cool', label: 'Cool' },
  { value: 'warm', label: 'Warm' },
];

export const ASSIGN_USERS: AssignToUsers[] = [
  { value: 'Tajnur Vai', label: 'Assign to Tajnur Vai' },
  { value: 'Fardin Vai', label: 'Assign to Fardin Vai' },
  { value: 'MA Hridoy', label: 'Assign to MA Hridoy' },
  { value: 'RK Shawon', label: 'Assign to RK Shawon' },
  { value: 'Mursalin Khan', label: 'Assign to Mursalin Khan' },
];

export const EMPLOYEE_ROLE: AssignToUsers[] = [
  { value: 'manager', label: 'Manager' },
  { value: 'executive', label: 'Executive' },
];

export const MANAGERS: AssignToUsers[] = [
  { value: 'Nibaron Kumar Das', label: 'Nibaron Kumar Das' },
  { value: 'Rezaul Mursalin Khan', label: 'Rezaul Mursalin Khan' },
  { value: 'Aminul Islam', label: 'Aminul Islam' },
  { value: 'Sadia Rahman', label: 'Sadia Rahman' },
  { value: 'Tahmina Akhter', label: 'Tahmina Akhter' },
  { value: 'Rahim Ali', label: 'Rahim Ali' },
];

export const ASSIGN_TO_NEW: CreateAssignToItems[] = [
  { value: 'Nibaron Kumar Das', label: 'Nibaron Kumar Das', isPublic: true },
  { value: 'Rezaul Mursalin Khan', label: 'Rezaul Mursalin Khan', isPublic: false },
  { value: 'Aminul Islam', label: 'Aminul Islam', isPublic: true },
  { value: 'Sadia Rahman', label: 'Sadia Rahman', isPublic: true },
  { value: 'Tahmina Akhter', label: 'Tahmina Akhter', isPublic: false },
  { value: 'Rahim Ali', label: 'Rahim Ali', isPublic: false },
];

export const CREATE_LEAD_STATUS: string[] = [
  LEAD_STATUS.Pending,
  LEAD_STATUS.InProgress,
  LEAD_STATUS.Completed,
  LEAD_STATUS.Hot,
  LEAD_STATUS.Cool,
  LEAD_STATUS.Warm,
];

export const CREATE_EMPLOYEE_FORM_ITEMS: CreateEmployeeItems = {
  name: '',
  phone: '',
  email: '',
  user_type: '',
  manager_name: '',
  manager_id: 1,
};

export const AUTH_LEFT_TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.";
