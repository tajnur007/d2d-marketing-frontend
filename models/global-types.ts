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

export interface CreateLeadStatusItems {
  value: string;
  label: string;
}

export interface CreateAssignToItems {
  value: string;
  label: string;
  isPublic: boolean;
}
