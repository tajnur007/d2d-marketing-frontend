import { LEAD_STATUS } from "./common-constants";

export type LEADS_DATA_TYPE = {
  id: number;
  title: string;
  date: string;
  assignedByName: string;
  assignedByNumber: string;
  assignedToName: string;
  status: string;
};


export const LEADS_DATA: LEADS_DATA_TYPE[] = [
  {
    id: 1,
    title: 'Social Media Marketing',
    date: 'Tue 21 Nov, 2023 11:34 AM',
    assignedByName: 'Saidul M Khan',
    assignedByNumber: '+88-01623364856',
    assignedToName: 'Rezaul Mursalin Khan',
    status: LEAD_STATUS.Hot,
  },
  {
    id: 2,
    title: 'Content Creation',
    date: 'Wed 22 Nov, 2023 02:45 PM',
    assignedByName: 'Nadia Rahman',
    assignedByNumber: '+88-01755432123',
    assignedToName: 'Aminul Islam',
    status: LEAD_STATUS.Progress,
  },
  {
    id: 3,
    title: 'Website Redesign',
    date: 'Thu 23 Nov, 2023 09:15 AM',
    assignedByName: 'Farah Ahmed',
    assignedByNumber: '+88-01987654321',
    assignedToName: 'Sadia Rahman',
    status: LEAD_STATUS.Pending,
  },
  {
    id: 4,
    title: 'Email Campaign',
    date: 'Fri 24 Nov, 2023 03:30 PM',
    assignedByName: 'Imran Khan',
    assignedByNumber: '+88-01555667788',
    assignedToName: 'Tahmina Akhter',
    status: LEAD_STATUS.Hot,
  },
  {
    id: 5,
    title: 'SEO Optimization',
    date: 'Sat 25 Nov, 2023 10:20 AM',
    assignedByName: 'Mehnaz Islam',
    assignedByNumber: '+88-01898989898',
    assignedToName: 'Rahim Ali',
    status: LEAD_STATUS.Completed,
  },
  {
    id: 6,
    title: 'Product Launch',
    date: 'Sun 26 Nov, 2023 01:55 PM',
    assignedByName: 'Tasnim Rahman',
    assignedByNumber: '+88-01671234567',
    assignedToName: 'Arif Hossain',
    status: LEAD_STATUS.Progress,
  },
  {
    id: 7,
    title: 'Graphic Design',
    date: 'Mon 27 Nov, 2023 11:10 AM',
    assignedByName: 'Nabil Khan',
    assignedByNumber: '+88-01711223344',
    assignedToName: 'Shahrukh Ahmed',
    status: LEAD_STATUS.Pending,
  },
  {
    id: 8,
    title: 'Event Promotion',
    date: 'Tue 28 Nov, 2023 04:40 PM',
    assignedByName: 'Faria Rahman',
    assignedByNumber: '+88-01998887766',
    assignedToName: 'Nashit Hasan',
    status: LEAD_STATUS.Hot,
  },
  {
    id: 9,
    title: 'Market Research',
    date: 'Wed 29 Nov, 2023 10:05 AM',
    assignedByName: 'Anika Islam',
    assignedByNumber: '+88-01551122334',
    assignedToName: 'Mahir Ahmed',
    status: LEAD_STATUS.Completed,
  },
  {
    id: 10,
    title: 'Video Production',
    date: 'Thu 30 Nov, 2023 02:15 PM',
    assignedByName: 'Khaled Khan',
    assignedByNumber: '+88-01777889900',
    assignedToName: 'Samina Akhtar',
    status: LEAD_STATUS.Progress,
  },
  {
    id: 11,
    title: 'Customer Engagement',
    date: 'Fri 1 Dec, 2023 09:30 AM',
    assignedByName: 'Rifat Rahman',
    assignedByNumber: '+88-01991122334',
    assignedToName: 'Sakib Hasan',
    status: LEAD_STATUS.Pending,
  },
];
