import {useLocation} from 'wouter';
import {userService} from '@bobba-rp/web';
import AsyncSelect from 'react-select/async';
import React, {useEffect, useState} from 'react';
import {SearchUsersProps} from './SearchUsers.types';

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
      defaultInputValue={username}
      onChange={(e: any) => setUsername(e.label)}
    />
  );
}
