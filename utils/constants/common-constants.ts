import { FormItems, SidebarItem } from '@/models/global-types';
import { HomeIcon, BookIcon, SettingIcon } from '../../assets/icons';

export const PAGE_ROUTES = {
  Dashboard: '/dashboard',
  Leads: '/leads',
  Settings: '/settings',
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
};

export const CREATE_LEAD_STATUS: string[] = [
  LEAD_STATUS.Pending,
  LEAD_STATUS.Progress,
  LEAD_STATUS.Completed,
  LEAD_STATUS.Hot,
];
