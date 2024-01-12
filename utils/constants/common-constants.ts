import { FormItems, SidebarItem, statusColor } from '@/models/global-types';
import { BookIcon, HomeIcon, SettingIcon } from '../../assets/icons';

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
  EmailSent:  '/auth/forget-password/email-sent',,
  LeadCreate: '/leads/create',
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 1,
    iconName: 'Home',
    path: PAGE_ROUTES.Dashboard,
    icon: HomeIcon,
    position: -15,
  },
  {
    id: 2,
    iconName: 'Book',
    path: PAGE_ROUTES.Leads,
    icon: BookIcon,
    position: 50,
  },
  {
    id: 3,
    iconName: 'Setting',
    path: PAGE_ROUTES.Settings,
    icon: SettingIcon,
    position: 110,
  },
];

export const FORMITEMS: FormItems = {
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

export const LEAD_STATUS = {
  Pending: 'Pending',
  Progress: 'Progress',
  Completed: 'Completed',
  Hot: 'Hot',
  Cool: 'Cool',
  Warm: 'Warm',
};

export const CREATE_LEAD_STATUS: string[] = [
  LEAD_STATUS.Pending,
  LEAD_STATUS.Progress,
  LEAD_STATUS.Completed,
  LEAD_STATUS.Hot,
  LEAD_STATUS.Cool,
  LEAD_STATUS.Warm,
];

export const NEXTAUTH_SECRET = `JMKLDJKLDJgdfgdfKLDSJKLgkljgdkl`;
export const SERVER_BASE_URL = 'http://157.245.204.196:8021/v1';
