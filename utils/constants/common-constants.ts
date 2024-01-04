import { HomeIcon, BookIcon, SettingIcon } from '../../assets/icons';

interface SidebarItem {
  id: number;
  iconName: string;
  path: string;
  icon: () => JSX.Element;
  position: number;
}

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    iconName: 'Home',
    path: '/dashboard',
    icon: HomeIcon,
    position: -15,
  },
  {
    id: 2,
    iconName: 'Book',
    path: '/leads',
    icon: BookIcon,
    position: 50,
  },
  {
    id: 3,
    iconName: 'Setting',
    path: '/settings',
    icon: SettingIcon,
    position: 110,
  },
];
