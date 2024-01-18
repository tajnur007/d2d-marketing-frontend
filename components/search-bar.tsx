'use client';

import { SearchIcon } from '@/assets/icons';
import { SearchBarProps } from '@/models/global-types';
import { useState } from 'react';

const SearchBar = ({ value, setValue = () => {}, handleKeyDown }: SearchBarProps) => {
  const [suggestionCardOpen, setSuggestionCardOpen] = useState<boolean>(false);

  const onChange = (e: any) => {
    setValue(e.target.value);
    console.log(value);
  };

  const toggleSuggestionCard = () => {
    setSuggestionCardOpen(!suggestionCardOpen);
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
      <div>
        <div className='w-[563px] h-[257px] bg-white rounded-[10px] shadow'></div>
      </div>
    </div>
  );
};

export default SearchBar;
