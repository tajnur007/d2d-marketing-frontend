import { SidebarItem } from '@/models/global-types';
import { HomeIcon, BookIcon, SettingIcon } from '../../assets/icons';

export const PAGE_ROUTES = {
  Dashboard: '/dashboard',
  Leads: '/leads',
  Settings: '/settings',
  Signin: 'auth/signin',
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
