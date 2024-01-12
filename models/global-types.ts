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
  label?: string;
  className?: string;
  selected?: string;
  setSelected?: (item: string) => void;
  options?: string[];
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
  errorMessage?: string;
}

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  htmlFor?: string;
  errorMessage?: string;
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
