'use client';
import { useState, useEffect } from 'react';
import { LEADS_DATA } from '@/utils/constants/leadslist-constant';
import LeadRow from '@/components/LeadRow/LeadRow';
import CreateLeadsButton from '@/components/CreateLeadsButton/CreateLeadsButton';
import { useRouter } from 'next/navigation';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import SearchBar from '@/components/search-bar';
import { LEADS_DATA_TYPE } from '@/models/global-types';

function LeadsList() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchData, setSearchData] = useState<LEADS_DATA_TYPE[]>([]);
  const [keyPress, setKeyPress] = useState<boolean>(false);

  const router = useRouter();
  const handleCreateLeadButtonClick = () => {
    router.push(PAGE_ROUTES.LeadCreate);
  };

  useEffect(() => {
    if (searchValue !== '') {
      const newFilteredData = LEADS_DATA.filter((data) => {
        return data.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setSearchData(newFilteredData);
    } else {
      setSearchData([]);
    }
  }, [keyPress]);

  const handleKeyDown = (e: any) => {
    console.log('key: ', e.key);
    if (e.key === 'Enter') {
      setKeyPress(true);
    } else setKeyPress(false);
  };

  return (
    <div className='border border-gray-100 bg-white rounded-xl h-[88vh] w-full'>
      <div className='py-4 md:py-6 pl-8 h-[96px]'>
        <div className='flex justify-between items-start content-center'>
          <div className='flex items-center pt-2'>
            <div>
              <p className="[font-family:'Metropolis-Bold',Helvetica] font-semibold text-[16px] tracking-[-0.32px] leading-[normal] whitespace-nowrap text-capitalize text-[#2B3674]">
                Leads
              </p>
            </div>

            <div className='flex items-center justify-center h-6 bg-[#D2FBE7] rounded-[17px] ms-2 p-2'>
              <p className="leading-[normal] text-black [font-family:'Metropolis-Bold',Helvetica] font-semibold text-[16px] tracking-[-0.32px] whitespace-nowrap text-capitalize">
                {LEADS_DATA.length}
              </p>
            </div>
          </div>
          <div className='flex m-0 p-0'>
            <div className='m-0 p-0'>
              <SearchBar
                handleKeyDown={handleKeyDown}
                value={searchValue}
                setValue={setSearchValue}
              />
            </div>
            <div onClick={handleCreateLeadButtonClick}>
              <CreateLeadsButton />
            </div>
          </div>
        </div>
      </div>
      <div className='overflow-y-auto overflow-x-hidden tiny-scrollbar h-[71vh]'>
        <div className="w-full px-8 whitespace-nowrap [font-family:'Metropolis-Bold',Helvetica] font-medium text-[14px] leading-[normal]">
          {searchData.length > 0
            ? searchData.map((item, index) => <LeadRow key={index} item={item} />)
            : LEADS_DATA.map((item, index) => <LeadRow key={index} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default LeadsList;
