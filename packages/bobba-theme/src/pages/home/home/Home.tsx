import React, {useContext} from 'react';
import {setURL, sessionContext} from '@instinct-web/core';
import {UserProfile} from '../../../components/templates/user-profile/UserProfile';

setURL('me', <Home />);
setURL('home', <Home />);
setURL('welcome', <Home />);

export function Home() {
  const {user} = useContext(sessionContext);
  return <UserProfile username={user!.username} />;
}
