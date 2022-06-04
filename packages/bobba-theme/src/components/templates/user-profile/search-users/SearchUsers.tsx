import {useLocation} from 'wouter';
import React, {SyntheticEvent, useState} from 'react';

export function SearchUsers() {
  const [location, setLocation] = useLocation();
  const [username, setUsername] = useState('');

  const onSubmitUserSearch = (event: SyntheticEvent) => {
    event.preventDefault();
    setLocation(`/profile/${username}`);
  };

  return (
    <form onSubmit={onSubmitUserSearch}>
      <input
        className="form-control"
        placeholder="Search Users...."
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
    </form>
  );
}
