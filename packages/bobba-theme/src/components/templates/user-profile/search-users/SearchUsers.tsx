import {useLocation} from 'wouter';
import {userService} from '@bobba-rp/web';
import AsyncSelect from 'react-select/async';
import {SearchUsersProps} from './SearchUsers.types';
import React, {SyntheticEvent, useState} from 'react';

export function SearchUsers({defaultUsername = ''}: SearchUsersProps) {
  const [location, setLocation] = useLocation();
  const [username, setUsername] = useState(defaultUsername);

  const onSubmitUserSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    setLocation(`/profile/${username}`);
  };

  const searchForSimilarUsers = async (
    username: string
  ): Promise<Array<{label: string; value: number}>> => {
    if (username === '') {
      return [];
    }

    const matchingUsers = await userService.searchByUsername(username);
    return matchingUsers.map(_ => ({
      label: _.username,
      value: _.id,
    }));
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={searchForSimilarUsers}
      value={username}
      onChange={(e: any) => setUsername(e.value)}
    />
  );
}
