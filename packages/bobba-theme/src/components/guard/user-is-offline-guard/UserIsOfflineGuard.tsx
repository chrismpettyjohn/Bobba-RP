import React, {useContext} from 'react';
import {sessionContext} from '@instinct-web/core';
import {UserIsOfflineGuardProps} from './UserIsOfflineGuard.types';

export function UserIsOfflineGuard({children}: UserIsOfflineGuardProps) {
  const {user} = useContext(sessionContext);

  if (user?.online) {
    <div className="alert alert-danger">
      <b className="mr-2">Notice:</b>
      <span>You must be offline to use this feature</span>
    </div>;
  }

  return <>{children}</>;
}
