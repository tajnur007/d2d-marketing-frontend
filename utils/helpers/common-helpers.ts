import { LEADS_DATA_TYPE } from '@/models/global-types';

export function ensureTrailingSlash(str: string = '/') {
  return str.endsWith('/') ? str : `${str}/`;
}

// Define a function to get the appropriate color based on status

export function getLatestLeads(data: LEADS_DATA_TYPE[]): LEADS_DATA_TYPE[] {
  const convertedData = data.map((item) => {
    const convertedTimestamp = new Date(item.timestamp).toISOString();
    return { ...item, timestamp: convertedTimestamp };
  });
  const sortedData = convertedData
    .sort((a, b) => {
      return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    })
    .slice(-5);
  return sortedData;
}
