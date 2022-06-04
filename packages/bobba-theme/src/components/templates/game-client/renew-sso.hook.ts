import {useContext, useEffect} from 'react';
import {sessionContext, sessionService} from '@instinct-web/core';

export function useRenewSSO() {
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
    }

    fetchSSO();
  }, [user?.username, sso]);
}
