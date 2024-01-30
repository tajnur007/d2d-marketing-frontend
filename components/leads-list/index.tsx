'use client';
import { useState, useEffect, useContext } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LeadRow from '@/components/lead-row';
import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import SearchBar from '@/components/search-bar';
import { LeadListType } from '@/models/global-types';
import { LeadService } from '@/services/lead-services';
import FilterLeadsButton from '../filter-leads-button';
import CreateLeadsButton from '../create-leads-button';
import { ExecutiveContext } from '@/context/executives-context';

function LeadsList() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchData, setSearchData] = useState<LeadListType[]>([]);
  const [keyPress, setKeyPress] = useState<boolean>(false);
  const [filterData, setFilterData] = useState({});
  const [leadsData, setLeadsData] = useState<LeadListType[]>([]);
  const [leadRefresh, setLeadRefresh] = useState<boolean>(false);

  const { executivesOption, setExecutivesOption } = useContext(ExecutiveContext);
  const { data: sessionData } = useSession();
  //@ts-ignore den
  const token: string = sessionData?.user?.access_token;

  const router = useRouter();

  const handleCreateLeadButtonClick = () => {
    router.push(PAGE_ROUTES.LeadCreate);
  };

  useEffect(() => {
    if (token) {
      const LeadServices = new LeadService();
      LeadServices.getExecutivesData(setExecutivesOption, token);
      LeadServices.getLeadsData(setLeadsData, token);
    }
  }, [token, setExecutivesOption, leadRefresh]);

  useEffect(() => {
    if (keyPress && searchValue !== '') {
      const newFilteredData = leadsData.filter((data) => {
        return data.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setSearchData(newFilteredData);
    } else {
      setSearchData([]);
    }
  }, [keyPress, leadsData, searchValue, leadRefresh]);

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      setKeyPress(true);
    } else setKeyPress(false);
  };

  return (
    <div className='border border-gray-100 bg-white rounded-xl h-[84vh] w-full'>
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
                {searchData.length > 0 ? searchData.length : leadsData.length}
              </p>
            </div>
          </div>
          <div className='flex justify-around items-center'>
            <div className='flex m-0 p-0'>
              <div className='m-0 mr-2 p-0'>
                <SearchBar
                  handleKeyDown={handleKeyDown}
                  value={searchValue}
                  setValue={setSearchValue}
                  leadsData={leadsData}
                />
              </div>
              <div>
                <FilterLeadsButton onFilterData={(data: any) => setFilterData(data)} />
              </div>
              <div onClick={handleCreateLeadButtonClick}>
                <CreateLeadsButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='overflow-y-auto overflow-x-hidden tiny-scrollbar h-[68vh]'>
        <div className="w-full px-8 whitespace-nowrap [font-family:'Metropolis-Bold',Helvetica] font-medium text-[14px] leading-[normal]">
          {searchData.length > 0
            ? searchData.map((item, index) => <LeadRow key={index} item={item} leadRefresh={leadRefresh} setLeadRefresh={() => setLeadRefresh(!leadRefresh)}/>)
            : leadsData.map((item, index) => <LeadRow key={index} item={item} leadRefresh={leadRefresh} setLeadRefresh={() => setLeadRefresh(!leadRefresh)}/>)}
        </div>
      </div>
    </div>
  );
}

export default LeadsList;
