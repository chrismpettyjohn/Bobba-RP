import React from 'react';
import {SelectSearchFilterProps} from '../SearchFilters.types';

export function SelectSearchFilter({
  label,
  options,
  type,
}: SelectSearchFilterProps) {
  return (
    <>
      <select data-v-11b1ccfe="">
        <option disabled selected>
          {label}
        </option>
        {options.map(option => (
          <option
            value={option.value}
            data-v-11b1ccfe=""
            key={`select_search_filter_option_${option.value}`}
          >
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
