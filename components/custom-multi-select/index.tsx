'use client';

import { SelectProps } from '@/models/global-types';
import Select from 'react-select';
import { UserIcon } from '@/assets/icons';

export const CustomMultiSelect = ({
  setSelected = () => {},
  options = [],
  onSelectChange,
}: SelectProps) => {
  const handleChange = (selectedOptions: any) => {
    setSelected(selectedOptions.map((option: any): any => option.value));
    if (onSelectChange) {
      onSelectChange(selectedOptions.map((option: any) => option.value));
    }
  };

  return (
    <Select
      options={options}
      isMulti
      onChange={handleChange}
      isSearchable
      styles={{
        placeholder: (baseStyles) => ({ ...baseStyles, color: '#667085' }),
        control: (baseStyles: any, state: any) => ({
          ...baseStyles,

          border: state.isFocused ? 0 : 0,

          boxShadow: state.isFocused ? 0 : 0,
          '&:hover': {
            border: state.isFocused ? 0 : 0,
          },
        }),

        option: (baseStyles) => ({
          ...baseStyles,
          borderRadius: '50px',
        }),

        menuList: (base) => ({
          ...base,
          height: '170px',
          '::-webkit-scrollbar': {
            width: '4px',
            height: '0px',
          },
          '::-webkit-scrollbar-track': {
            background: 'white',
          },
          '::-webkit-scrollbar-thumb': {
            background: 'blue',
            borderRadius: '50px',
          },
        }),

        multiValue: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: '#4318FF',
          borderRadius: '50px',
          fontSize: '12px',
          fontWeight: '500',
          color: '#fff',
        }),

        multiValueRemove: (baseStyles) => ({
          ...baseStyles,
          color: '#fff',
          '&:hover': {
            backgroundColor: '#4318FF',
            color: '#fff',
            borderRadius: '50px',
          },
        }),

        clearIndicator: (baseStyles) => ({
          ...baseStyles,
          display: 'none',
        }),

        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: '#667085',
        }),

        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          display: 'none',
        }),

        multiValueLabel: (baseStyles) => ({
          ...baseStyles,
        }),
      }}
      components={{
        MultiValueLabel: (props) => (
          <div className='flex items-center justify-center'>
            <UserIcon />

            {props.children}
          </div>
        ),
      }}
    />
  );
};
