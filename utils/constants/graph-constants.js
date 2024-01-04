export const GRAPH_OPTIONS = {
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

export const GRAPH_CONFIG = [
  {
    id: 1,
    label: 'Total Leads',
    count: 10,
    color: '#5630FF',
    countColor: '#E5DFFF',
    graphData: [
      { month: 'January', value: 100 },
      { month: 'February', value: 120 },
      { month: 'March', value: 135 },
      { month: 'April', value: 140 },
      { month: 'May', value: 150 },
      { month: 'June', value: 160 },
      { month: 'July', value: 170 },
      { month: 'August', value: 150 },
      { month: 'September', value: 140 },
      { month: 'October', value: 180 },
      { month: 'November', value: 170 },
      { month: 'December', value: 200 },
    ],
  },
  {
    id: 2,
    label: 'Hot Deals',
    count: 20,
    color: '#FF7B7B',
    countColor: '#FFC2C2',
    graphData: [
      { month: 'January', value: 130 },
      { month: 'February', value: 170 },
      { month: 'March', value: 125 },
      { month: 'April', value: 150 },
      { month: 'May', value: 145 },
      { month: 'June', value: 135 },
      { month: 'July', value: 139 },
      { month: 'August', value: 150 },
      { month: 'September', value: 130 },
      { month: 'October', value: 180 },
      { month: 'November', value: 123 },
      { month: 'December', value: 200 },
    ],
  },
  {
    id: 3,
    label: 'Executive Checked-in',
    count: 30,
    color: '#07BEAA',
    countColor: '#CBF6F1',
    graphData: [
      { month: 'January', value: 100 },
      { month: 'February', value: 150 },
      { month: 'March', value: 125 },
      { month: 'April', value: 150 },
      { month: 'May', value: 160 },
      { month: 'June', value: 147 },
      { month: 'July', value: 159 },
      { month: 'August', value: 150 },
      { month: 'September', value: 169 },
      { month: 'October', value: 180 },
      { month: 'November', value: 169 },
      { month: 'December', value: 200 },
    ],
  },
];