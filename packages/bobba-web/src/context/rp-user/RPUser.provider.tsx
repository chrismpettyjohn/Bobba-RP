import {rpUserContext} from './RPUser';
import {RPUser} from '@bobba-rp/types';
import {rpSessionService} from '../../services/session';
import React, {useContext, useEffect, useState} from 'react';
import {ContextProvidersProps, sessionContext} from '@instinct-web/core';

export function RPUserContextProvider({children}: ContextProvidersProps) {
  const {user} = useContext(sessionContext);
  const [ready, setIsReady] = useState(false);
  const [rpUser, setRPUser] = useState<RPUser | undefined>(undefined);

  useEffect(() => {
    if (user?.id === undefined) {
      setRPUser(undefined);
      setIsReady(true);
      return;
    }

    async function fetchLatestRPUser() {
      setIsReady(false);
      const response = await rpSessionService.getRPUser();
      setRPUser(response);
      setIsReady(true);
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
      {ready ? children : null}
    </rpUserContext.Provider>
  );
}
