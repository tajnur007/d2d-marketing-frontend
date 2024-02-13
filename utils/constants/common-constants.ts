import {
  AssignToUsers,
  CreateAssignToItems,
  CreateEmployeeItems,
  CreateLeadStatusItems,
  CreateReminderItems,
  CreateReminderStatusItems,
  FormItems,
  LATEST_LEADS_DATA_TYPE,
  LEADERBOARD,
  UpdateRemainderType,
  SettingFormItems,
  SidebarItem,
  SignUpFormItems,
  SingleLeadItems,
  UpdateLeadPayload,
  statusColor,
  UpdateEmployeePayload,
  TransferLeadPayload,
} from '@/models/global-types';
import {
  BookIcon,
  DeleteIcon,
  EditIcon,
  EmployeeListIcon,
  EyeIcon,
  HomeIcon,
  SettingIcon,
} from '../../assets/icons';

export const getStatusColor: statusColor = {
  cold: 'bg-blue-200',
  hot: 'bg-[#FFD9D9]',
  warm: 'bg-[#FFEFB8]',
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
  LeadUpdate: '/leads/edit',
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
  GetUserInfo: '/user/info',
  GetManagerList: '/user/manager-list',
  CreateLead: '/lead/create',
  DashboardInfo: '/lead/dashboard-info',
  GetExecutives: '/user/executive-list',
  ResetPassword: '/user/forget-password',
  LatestLeads: '/lead/dashboard-info-latest-leads',
  Leaderboard: '/lead/leaderboard',
  LeadView: '/lead/view',
  UpdateLead: '/lead/update',
  DeleteLead: '/lead/delete',
  GetLeads: '/lead/list',
  EmployeeListInfo: '/user/list',
  CreateReminder: '/reminder/create',
  UploadLeadImage: '/lead/upload-image',
  GetAllReminder: '/reminder/list',
  DeleteReminder: '/reminder/delete',
  UpdateRemainder: '/reminder/update',
  FilterLeads: '/lead/filter',
  UpdateEmployeeInfo: '/user/update',
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
  Image: [
    {
      image_name: '',
      image_path: '',
    },
  ],
  AssignedTo: '',
  location: { lat: 0, lng: 0 },
};

export const SINGLE_LEAD_ITEMS: SingleLeadItems = {
  assignment_status: '',
  company_id: 0,
  created_at: '',
  created_by: '',
  created_by_user_id: 0,
  executive_id: 0,
  executive_name: '',
  id: 0,
  image_info_json: [
    {
      image_name: '',
      image_path: '',
    },
  ],
  latitude: 0,
  longitude: 0,
  manager_id: 0,
  manager_name: '',
  meeting_status: '',
  point_of_contact: {
    name: '',
    phone: '',
    email: '',
    reference: '',
    meeting_notes: '',
  },
  previous_user_id: 0,
  reminders: [
    {
      id: 0,
      title: '',
      lead_id: 0,
      user_id: 0,
      reminder_time: '',
      notes: '',
      status: '',
      company_id: 0,
    },
  ],
};

export const UPDATE_LEAD_PAYLOAD: UpdateLeadPayload = {
  title: '',
  executive_id: 0,
  executive_name: '',
  latitude: 0,
  longitude: 0,
  meeting_status: '',
  point_of_contact: {
    name: '',
    phone: '',
    email: '',
    reference: '',
    meeting_notes: '',
  },
  image_infos: [
    {
      image_name: '',
      image_path: '',
    },
  ],
};

export const TRANSFER_LEAD_PAYLOAD: TransferLeadPayload = {
  executive_id: 0,
  executive_name: '',
};

export const UPDATE_EMPLOYEE_PAYLOAD: UpdateEmployeePayload = {
  name: '',
  user_type: '',
  phone: '',
  manager_id: 0,
  manager_name: '',
  image_name: '',
  image_path: '',
};

export const SETTING_FORM_ITEMS: SettingFormItems = {
  Name: '',
  Phone: '',
  Email: '',
  Image: '',
  CurrentPassword: '',
  NewPassword: '',
  ConfirmPassword: '',
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
  cold: 'cold',
  warm: 'warm',
};

export const CREATE_REMINDER_STATUS: CreateReminderStatusItems[] = [
  { value: 'Pending', label: 'Pending' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Canceled', label: 'Canceled' },
];

export const CREATE_LEAD_STATUS_NEW: CreateLeadStatusItems[] = [
  { value: 'hot', label: 'Hot' },
  { value: 'cold', label: 'Cold' },
  { value: 'warm', label: 'Warm' },
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
  LEAD_STATUS.cold,
  LEAD_STATUS.warm,
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

export const LATEST_LEADS_ITEMS: LATEST_LEADS_DATA_TYPE = {
  Count: 0,
  Data: [
    {
      id: 0,
      title: ' ',
      latitude: 0,
      longitude: 0,
      meeting_status: ' ',
      assignment_status: ' ',
      image_info_json: [
        {
          image_name: ' ',
          image_path: ' ',
        },
      ],
      executive_id: 0,
      executive_name: ' ',
      previous_user_id: 0,
      manager_id: 0,
      manager_name: ' ',
      point_of_contact: {
        name: ' ',
        phone: ' ',
        email: ' ',
        reference: ' ',
        meeting_notes: ' ',
      },
      company_id: 0,
      created_at: ' ',
      created_by: ' ',
      reminders: ' ',
    },
  ],
};

export const OPTION_MENU = [
  {
    label: 'View Details',
    icon: EyeIcon,
  },
  {
    label: 'Edit',
    icon: EditIcon,
  },
  {
    label: 'Delete',
    icon: DeleteIcon,
  },
];

export const LEADERBOARD_ITEMS: LEADERBOARD = {
  Count: 0,
  Data: [
    {
      executive_id: 0,
      executive_name: '',
      count_of_leads: 0,
      initials: '',
    },
  ],
};

export const UPDATE_REMINDER_ITEMS: UpdateRemainderType = {
  title: '',
  notes: '',
  status: '',
  reminder_time: '',
};

export const IMAGE_DETAIL = {
  name: '60511ab5-b11d-441c-bd8c-c2c163b3bfbe_D2D.drawio (1)_lead_353787.png',
  path: 'http://157.245.204.196:8021/v1/auth/image-by-path?image_path=files/60511ab5-b11d-441c-bd8c-c2c163b3bfbe_D2D.drawio (1)_lead_353787.png',
};
