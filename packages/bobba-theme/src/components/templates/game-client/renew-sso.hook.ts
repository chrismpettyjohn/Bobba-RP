import {toast} from 'react-toastify';
import {useContext, useEffect} from 'react';
import {sessionContext, sessionService} from '@instinct-web/core';

export function useRenewSSO() {
  const {user, setUser, sso, setSSO} = useContext(sessionContext);
  useEffect(() => {
    if (sso) {
      return;
    }

    async function fetchSSO() {
      const currentUserStatus = await sessionService.getCurrentUser();

      if (currentUserStatus.online) {
        toast.error("You're already online!");
        return;
      }

      setUser({online: true});

      const sso = await sessionService.createSSO();
      setSSO(sso);
    }

    fetchSSO();
  }, [user?.username, sso]);
}
