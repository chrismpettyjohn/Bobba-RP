import React from 'react';
import AsyncSelect from 'react-select/async';
import {SearchBarProps} from './SearchBar.types';

export function SearchBar({defaultValue, onSearch, onSelect}: SearchBarProps) {
  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={onSearch}
      defaultInputValue={defaultValue as any}
      onChange={e => onSelect(e as any)}
      styles={{
        control: (provided: any) => ({
          ...provided,
          color: 'black',
        }),
        input: (provided: any) => ({
          ...provided,
          color: 'black',
        }),
        singleValue: (provided: any) => ({
          ...provided,
          color: 'black',
        }),
        option: (provided: any) => ({
          ...provided,
          color: 'black',
        }),
      }}
    />
  );
}
