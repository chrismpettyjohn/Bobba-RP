import {useLocation} from 'wouter';
import {userService} from '@bobba-rp/web';
import React, {useEffect, useState} from 'react';
import {SearchUsersProps} from './SearchUsers.types';
import {SearchBar} from '../../../generic/search-bar/SearchBar';
import {SearchBarRow} from '../../../generic/search-bar/SearchBar.types';

export function SearchUsers({defaultUsername = ''}: SearchUsersProps) {
  const [location, setLocation] = useLocation();
  const [username, setUsername] = useState(defaultUsername);

  useEffect(() => {
    if (username !== defaultUsername) {
      setLocation(`/profile/${username}`);
    }
  }, [username, defaultUsername]);

  const searchForSimilarUsers = async (
    username: string
  ): Promise<SearchBarRow[]> => {
    const matchingUsers = await userService.searchByUsername(username);
    return matchingUsers.map(_ => ({
      label: _.username,
      value: _.id,
    }));
  };

  return (
    <SearchBar
      onSearch={searchForSimilarUsers}
      onSelect={e => setUsername(e.label)}
      defaultValue={username}
    />
  );
}
