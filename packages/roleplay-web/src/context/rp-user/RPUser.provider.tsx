import {rpUserContext} from './RPUser';
import {RPUser} from '@instinct-plugin/bobba-rp-types';
import {rpSessionService} from '../../services/session';
import React, {useContext, useEffect, useState} from 'react';
import {ContextProvidersProps, sessionContext} from '@instinct-web/core';

export function RPUserContextProvider({children}: ContextProvidersProps) {
  const {user} = useContext(sessionContext);
  const [rpUser, setRPUser] = useState<RPUser | undefined>(undefined);

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
      <div className="bg-danger" style={{position: 'absolute', top: 0, width: '100%', zIndex: 500}}>
        <b>User: </b> {user?.username ?? 'N/A'}
      </div>
      {children}
    </rpUserContext.Provider>
  );
}
