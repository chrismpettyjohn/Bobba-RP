import {Redirect} from 'wouter';
import React, {useContext} from 'react';
import {sessionContext, setURL} from '@instinct-web/core';

setURL('', <LandingPage />);

export function LandingPage() {
  const {user} = useContext(sessionContext);
  return <Redirect to={user ? '/me' : '/login'} />;
}
