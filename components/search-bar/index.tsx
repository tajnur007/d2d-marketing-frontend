'use client';

import { useEffect, useRef, useState } from 'react';
import Drawer from 'react-modern-drawer';
import { SearchIcon } from '@/assets/icons';
import SuggestionRow from '@/components/search-bar/suggestion-row';
import { LeadListType, SearchBarProps } from '@/models/global-types';
import { LEADS_DATA } from '@/utils/constants/leadslist-constant';
import LeadDetails from '../lead-details';
import { FallingLines } from 'react-loader-spinner';

const SearchBar = ({
  value = '',
  setValue = () => {},
  handleKeyDown,
  leadsData,
}: SearchBarProps) => {
  const [isSuggestionCardOpen, setIsSuggestionCardOpen] = useState<boolean>(false);
  const [suggestionData, setSuggestionData] = useState<LeadListType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [item, setItem] = useState<LeadListType>();
  const newRef = useRef<any>(null);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value !== '') {
      const newFilteredData = leadsData.filter((data) => {
        return data.title.toLowerCase().includes(value.toLowerCase());
      });
      setSuggestionData(newFilteredData);
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [value, leadsData]);

  const handleOutsideClick = (e: any) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setIsSuggestionCardOpen(false);
      setIsOpen(false);
    }
  };

  const toggleSuggestionCard = () => {
    setIsSuggestionCardOpen(true);
  };

  return (
    <div className='mr-5 p-0 w-full max-w-[563px]' ref={newRef}>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3'>
          <SearchIcon />
        </div>
        <div className='w-full md:h-[35px] lg:h-[48px] m-0 md:pl-3 lg:pl-4 p-0 bg-white rounded-[14px] border-[#F3F3F3] border justify-start items-center gap-[5px] inline-flex focus-within:border-purple-500 focus-within:ring focus-within:ring-purple-200 transition-all duration-500'>
          <input
            className='w-full h-full rounded-[14px] outline-none p-[12px] placeholder-[#2B3674] text-[14px] font-medium ml-3'
            type='text'
            autoComplete='off'
            value={value}
            onChange={onChange}
            onClick={toggleSuggestionCard}
            onKeyDown={handleKeyDown}
            onFocus={toggleSuggestionCard}
          />
        </div>
      </div>
      {isSuggestionCardOpen && (
        <div className='bg-white shadow-md rounded-[10px] w-full m-0 p-0'>
          {suggestionData.slice(0, 3).map((item, index) => (
            <div key={index}>
              <SuggestionRow item={item} setIsOpen={setIsOpen} setItem={setItem} />
              <div className='mx-auto border-b border-solid border-[#E9F0FF] border-t-0 border-r-0 border-l-0 w-full'></div>
            </div>
          ))}
        </div>
      )}
      <Drawer open={isOpen} direction='right' size={450} enableOverlay={false}>
        <LeadDetails setIsOpen={setIsOpen} data={item} isOpen={isOpen} />
      </Drawer>
    </div>
  );
};

export default SearchBar;
