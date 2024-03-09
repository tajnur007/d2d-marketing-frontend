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
import { LeadsContext } from '@/context/leads-context';
import Loader from '../loader';
import { UserService } from '@/services/user-services';
import Image from 'next/image';
import noDataImage from '@/assets/images/no-data-image.png';

function LeadsList() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchData, setSearchData] = useState<LeadListType[]>([]);
  const [keyPress, setKeyPress] = useState<boolean>(false);
  const [filterData, setFilterData] = useState({});
  const [leadRefresh, setLeadRefresh] = useState<boolean>(false);

  const {
    executivesOption,
    setExecutivesOption,
    leadDetailsRef,
    createdByOptions,
    setCreatedByOptions,
    leadsData,
    setLeadsData,
    isLoading,
    setIsLoading,
  } = useContext(LeadsContext);

  const { data: sessionData } = useSession();
  //@ts-ignore den
  const token: string = sessionData?.user?.access_token;

  const router = useRouter();

  useEffect(() => {
    if (token) {
      const LeadServices = new LeadService();
      const UserServices = new UserService();
      UserServices.getExecutivesData(setExecutivesOption, token, setIsLoading);
      LeadServices.getLeadsData(setLeadsData, token, setIsLoading);
      LeadServices.getCreatedByData(setCreatedByOptions, token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleCreateLeadButtonClick = () => {
    router.push(PAGE_ROUTES.LeadCreate);
  };

  useEffect(() => {
    if (keyPress && searchValue !== '') {
      const newFilteredData = leadsData?.Data?.filter((data: LeadListType) => {
        return data.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setSearchData(newFilteredData);
    } else {
      setSearchData([]);
    }
  }, [keyPress, leadsData, searchValue]);

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      setKeyPress(true);
    } else setKeyPress(false);
  };

  const handleScroll = () => {
    leadDetailsRef?.current.close();
  };

  return (
    <div
      className='border border-gray-100 bg-white rounded-xl w-full h-[calc(100vh-90px)] md:pb-4 lg:pb-6'
      onScroll={handleScroll}>
      <div className='py-4 md:py-6 pl-8 h-[96px] sticky top-0 bg-white z-10 p-6 rounded-xl'>
        <div className='flex justify-between gap-5'>
          <div className='flex pt-2'>
            <div>
              <p className='font-semibold md:text-[14px] lg:text-[16px] text-[#2B3674]'>
                Leads
              </p>
            </div>

            <div className='flex items-center justify-center lg:h-6 md:h-3 bg-[#D2FBE7] rounded-[17px] ms-2 p-2'>
              <p className='text-black font-semibold md:text-[14px] lg:text-[16px]'>
                {searchData?.length > 0 ? searchData?.length : leadsData?.Count}
              </p>
            </div>
          </div>

          <div className='flex justify-end m-0 p-0 md:w-full lg:w-[72%]'>
            <SearchBar
              handleKeyDown={handleKeyDown}
              value={searchValue}
              setValue={setSearchValue}
              leadsData={leadsData}
            />

            <div>
              <FilterLeadsButton onFilterData={(data: any) => setFilterData(data)} />
            </div>
            <div onClick={handleCreateLeadButtonClick}>
              <CreateLeadsButton />
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className='h-[calc(100%-105px)] overflow-y-auto overflow-x-hidden tiny-scrollbar'>
          {!!leadsData?.Data?.length ? (
            <div className='w-full px-8 whitespace-nowrap font-medium text-[14px] leading-[normal]'>
              {searchData?.length > 0
                ? searchData?.map((item, index) => (
                    <LeadRow
                      key={index}
                      item={item}
                      leadRefresh={leadRefresh}
                      setLeadRefresh={() => setLeadRefresh(!leadRefresh)}
                    />
                  ))
                : leadsData.Data?.map((item: LeadListType, index: number) => (
                    <LeadRow
                      key={index}
                      item={item}
                      leadRefresh={leadRefresh}
                      setLeadRefresh={() => setLeadRefresh(!leadRefresh)}
                    />
                  ))}
            </div>
          ) : (
            <div className='h-full flex justify-center items-center'>
              <Image
                src={noDataImage}
                alt='no-data-image'
                className='w-[400px] 2xl:w-[500px]'
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LeadsList;
