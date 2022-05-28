import {rpUserContext} from './RPUser';
import {RPUser} from '@instinct-plugin/bobba-rp-types';
import {rpSessionService} from '../../services/session';
import React, {useContext, useEffect, useState} from 'react';
import {ContextProvidersProps, sessionContext} from '@instinct-web/core';

export function RPUserContextProvider({children}: ContextProvidersProps) {
  const {user} = useContext(sessionContext);
  const [rpUser, setRPUser] = useState<RPUser | undefined>(undefined);
  sudo yum install dotnet-sdk-6.0

  useEffect(() => {
    if (user?.id === undefined) {
      setRPUser(undefined);
      return;
    }

    async function fetchLatestRPUser() {
      const response = await rpSessionService.getRPUser();
      setRPUser(response);
    }

    fetchLatestRPUser();
  }, [user?.id]);

  function updateRPUser(changes?: Partial<RPUser>): void {
    setRPUser(_ => {
      if (!changes) return undefined;
      return {
        ..._,
        ...changes,
      } as any;
    });
  }

  return (
    <rpUserContext.Provider value={{rpUser: rpUser, setRPUser: updateRPUser}}>
      {children}
    </rpUserContext.Provider>
  );
}
