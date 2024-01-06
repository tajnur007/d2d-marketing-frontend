export function ensureTrailingSlash(str: string = '/') {
  return str.endsWith('/') ? str : `${str}/`;
}

// Define a function to get the appropriate color based on status
export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Hot':
      return 'bg-blue-200';
    case 'Pending':
      return 'bg-red-200';
    case 'Progress':
      return 'bg-orange-200';
    case 'Completed':
      return 'bg-green-200';
    default:
      return 'bg-gray-200';
  }
};
