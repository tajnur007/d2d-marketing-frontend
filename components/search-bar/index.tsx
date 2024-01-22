'use client';

import { useState, useEffect, useRef } from 'react';

import { SearchIcon } from '@/assets/icons';
import { SearchBarProps } from '@/models/global-types';
import { LEADS_DATA } from '@/utils/constants/leadslist-constant';
import { LEADS_DATA_TYPE } from '@/models/global-types';
import SuggestionRow from '@/components/search-bar/suggestion-row';

const SearchBar = ({
  value = '',
  setValue = () => {},
  handleKeyDown,
}: SearchBarProps) => {
  const [isSuggestionCardOpen, setIsSuggestionCardOpen] = useState<boolean>(false);
  const [suggestionData, setSuggestionData] = useState<LEADS_DATA_TYPE[]>([]);
  const newRef = useRef<any>(null);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value !== '') {
      const newFilteredData = LEADS_DATA.filter((data) => {
        return data.title.toLowerCase().includes(value.toLowerCase());
      });
      setSuggestionData(newFilteredData);
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [value]);

  const handleOutsideClick = (e: any) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setIsSuggestionCardOpen(false);
    }
  };

  const toggleSuggestionCard = () => {
    setIsSuggestionCardOpen(true);
  };

  return (
    <div className='mr-2 p-0' ref={newRef}>
      <div className='w-[30vw] h-14 m-0  pl-4 p-0 bg-white rounded-[14px] border-[#F3F3F3] border justify-start items-center gap-[5px] inline-flex '>
        <SearchIcon />
        <input
          className='w-full rounded-[14px]  outline-none py-4 px-3 placeholder-[#2B3674] text-[14px] font-medium'
          type='text'
          autoComplete='off'
          value={value}
          onChange={onChange}
          onClick={toggleSuggestionCard}
          onKeyDown={handleKeyDown}
          onFocus={toggleSuggestionCard}
        />
      </div>
      {isSuggestionCardOpen && (
        <div className='bg-white w-[30vw] m-0 p-0'>
          {suggestionData.slice(0, 5).map((item, index) => (
            <SuggestionRow key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
