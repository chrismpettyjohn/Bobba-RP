import React from 'react';
import {useFetchAllBusinesses} from '@bobba-rp/web';
import {SearchBar} from '../../generic/search-bar/SearchBar';
import {BusinessSearchBarProps} from './BusinessSearchBar.types';
import {SearchBarRow} from '../../generic/search-bar/SearchBar.types';

export function BusinessSearchBar({
  business,
  onSelectBusiness,
}: BusinessSearchBarProps) {
  const businesses = useFetchAllBusinesses();

  async function onSearchBusinesses(
    businessName: string
  ): Promise<SearchBarRow[]> {
    return (
      businesses
        ?.filter(_ => _.name.toLowerCase().includes(businessName.toLowerCase()))
        ?.map(_ => ({label: _.name, value: _.id})) ?? []
    );
  }

  return (
    <SearchBar
      onSearch={onSearchBusinesses}
      onSelect={onSelectBusiness}
      defaultValue={business?.name}
    />
  );
}
