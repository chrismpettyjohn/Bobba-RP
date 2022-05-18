import {Redirect} from 'wouter';
import React, {useContext, useEffect} from 'react';
import {sessionContext, setURL} from '@instinct-web/core';

setURL('logout', <Logout />);

export function Logout() {
  const {setUser} = useContext(sessionContext);

  useEffect(() => {
    setUser(undefined);
  }, []);

  return <Redirect to="/login" />;
}
