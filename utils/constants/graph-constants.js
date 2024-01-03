export const graphOptions = {
  plugins: {
    legend: {
      display: false, // Set to false to hide the legend
    },
  },
  responsive: true,
  maintainAspectRatio: false, // Allow dynamic aspect ratio
  scales: {
    y: {
      display: false, // Hide y-axis labels
    },
    x: {
      display: false, // Hide x-axis labels
    },
  },
};

export const sampleData = [
  {
    totalLeads: [
      { month: 'January', sales: 100 },
      { month: 'February', sales: 150 },
      { month: 'March', sales: 125 },
      { month: 'April', sales: 150 },
      { month: 'May', sales: 160 },
      { month: 'June', sales: 140 },
      { month: 'July', sales: 170 },
      { month: 'August', sales: 150 },
      { month: 'September', sales: 130 },
      { month: 'October', sales: 180 },
      { month: 'November', sales: 170 },
      { month: 'December', sales: 200 },
    ],
  },
  {
    hotDeals: [
      { month: 'January', sales: 100 },
      { month: 'February', sales: 150 },
      { month: 'March', sales: 125 },
      { month: 'April', sales: 150 },
      { month: 'May', sales: 160 },
      { month: 'June', sales: 140 },
      { month: 'July', sales: 170 },
      { month: 'August', sales: 150 },
      { month: 'September', sales: 130 },
      { month: 'October', sales: 180 },
      { month: 'November', sales: 170 },
      { month: 'December', sales: 200 },
    ],
  },
  {
    executiveCheckIn: [
      { month: 'January', sales: 100 },
      { month: 'February', sales: 150 },
      { month: 'March', sales: 125 },
      { month: 'April', sales: 150 },
      { month: 'May', sales: 160 },
      { month: 'June', sales: 140 },
      { month: 'July', sales: 170 },
      { month: 'August', sales: 150 },
      { month: 'September', sales: 130 },
      { month: 'October', sales: 180 },
      { month: 'November', sales: 170 },
      { month: 'December', sales: 200 },
    ],
  },
];

export const graphData = [
  { month: 'January', sales: 100 },
  { month: 'February', sales: 150 },
  { month: 'March', sales: 125 },
  { month: 'April', sales: 150 },
  { month: 'May', sales: 160 },
  { month: 'June', sales: 140 },
  { month: 'July', sales: 170 },
  { month: 'August', sales: 150 },
  { month: 'September', sales: 130 },
  { month: 'October', sales: 180 },
  { month: 'November', sales: 170 },
  { month: 'December', sales: 200 },
];

export const graphConfig = [
  {
    id: 1,
    label: 'Total Leads',
    count: 10,
    color: '#5630FF',
    countColor: '#E5DFFF',
  },
  {
    id: 2,
    label: 'Hot Deals',
    count: 20,
    color: '#FF7B7B',
    countColor: '#FFC2C2',
  },
  {
    id: 3,
    label: 'Executive Checked-in',
    count: 30,
    color: '#07BEAA',
    countColor: '#CBF6F1',
  },
];
