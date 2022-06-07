import {useContext, useEffect, useState} from 'react';
import {sessionContext, sessionService} from '@instinct-web/core';

export const LOG_OUT_DELAY = 15000;

export function useRenewSSO() {
  const [isInitialized, setIsInitialized] = useState(false);

  const {user, setUser, sso, setSSO, online, setOnline} =
    useContext(sessionContext);
  useEffect(() => {
    if (sso) {
      return;
    }

    async function fetchSSO() {
      const currentUserStatus = await sessionService.getCurrentUser();

      if (currentUserStatus.online && !online) {
        return;
      }

      setUser({online: true});
      setOnline(true);

      const sso = await sessionService.createSSO();
      setSSO(sso);
      setIsInitialized(true);
    }

    setTimeout(
      () => {
        fetchSSO();
      },
      isInitialized ? LOG_OUT_DELAY : 0
    );
  }, [user?.username, sso]);
}
