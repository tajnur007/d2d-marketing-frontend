'use client';

import { SearchIcon } from '@/assets/icons';
import { SearchBarProps } from '@/models/global-types';
import { useState, useEffect } from 'react';
import { LEADS_DATA } from '@/utils/constants/leadslist-constant';
import { LEADS_DATA_TYPE } from '@/models/global-types';
import SuggestionRow from './suggestion-row';

const SearchBar = ({
  value = '',
  setValue = () => {},
  handleKeyDown,
}: SearchBarProps) => {
  const [isSuggestionCardOpen, setIsSuggestionCardOpen] = useState<boolean>(false);
  const [suggestionData, setSuggestionData] = useState<LEADS_DATA_TYPE[]>([]);

  const onChange = (e: any) => {
    setValue(e.target.value);
    console.log(value);
  };

  useEffect(() => {
    if (value !== '') {
      const newFilteredData = LEADS_DATA.filter((data) => {
        return data.title.toLowerCase().includes(value.toLowerCase());
      });
      setSuggestionData(newFilteredData);
    }
  }, [value]);

  const toggleSuggestionCard = () => {
    setIsSuggestionCardOpen(!isSuggestionCardOpen);
  };

  return (
    <div className='m-0 p-0'>
      <div className='w-[563px] h-12 p-3 bg-white rounded-[14px] border border-zinc-100 justify-start items-center gap-[5px] inline-flex'>
        <SearchIcon />
        <input
          className='w-full rounded-[10px] border-2 border-[#F3F3F3] outline-none border-solid py-4 px-3 placeholder-[#B9C1D9] text-[14px] font-medium'
          type='text'
          autoComplete='off'
          value={value}
          onChange={onChange}
          onClick={toggleSuggestionCard}
          onKeyDown={handleKeyDown}
        />
      </div>
      {isSuggestionCardOpen && (
        <div className='bg-white'>
          {suggestionData.map((item, index) => (
            <SuggestionRow key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;