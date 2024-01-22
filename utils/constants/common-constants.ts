import {
  FormItems,
  SidebarItem,
  statusColor,
  CreateLeadStatusItems,
  CreateAssignToItems,
  AssignToUsers,
  SignUpFormItems,
  CreateEmployeeItems,
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
  Reminder: '',
  Date: '',
  Image: '',
};
export const SignUpFORM_ITEMS: SignUpFormItems = {
  Name: '',
  Email: '',
  OrganizationName: '',
  Password: '',
  ConfirmPassword: '',
};

export const LEAD_STATUS = {
  Pending: 'Pending',
  Progress: 'Progress',
  Completed: 'Completed',
  Hot: 'Hot',
  Cool: 'Cool',
  Warm: 'Warm',
};

export const CREATE_LEAD_STATUS_NEW: CreateLeadStatusItems[] = [
  { value: 'Pending', label: 'Pending' },
  { value: 'Progress', label: 'Progress' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Hot', label: 'Hot' },
  { value: 'Cool', label: 'Cool' },
  { value: 'Warm', label: 'Warm' },
];

export const ASSIGN_USERS: AssignToUsers[] = [
  { value: 'Tajnur Vai', label: 'Assign to Tajnur Vai' },
  { value: 'Fardin Vai', label: 'Assign to Fardin Vai' },
  { value: 'MA Hridoy', label: 'Assign to MA Hridoy' },
  { value: 'RK Shawon', label: 'Assign to RK Shawon' },
  { value: 'Mursalin Khan', label: 'Assign to Mursalin Khan' },
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
  LEAD_STATUS.Progress,
  LEAD_STATUS.Completed,
  LEAD_STATUS.Hot,
  LEAD_STATUS.Cool,
  LEAD_STATUS.Warm,
];

export const CREATE_EMPLOYEE_FORM_ITEMS: CreateEmployeeItems = {
  Name: '',
  Phone: '',
  Email: '',
  Designation: '',
}

export const AUTH_LEFT_TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.";

export const NEXTAUTH_SECRET = `JMKLDJKLDJgdfgdfKLDSJKLgkljgdkl`;
export const SERVER_BASE_URL = 'http://157.245.204.196:8021/v1';

