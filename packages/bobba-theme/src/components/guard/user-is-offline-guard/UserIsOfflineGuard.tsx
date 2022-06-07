import React, {useContext} from 'react';
import {sessionContext} from '@instinct-web/core';
import {UserIsOfflineGuardProps} from './UserIsOfflineGuard.types';

export function UserIsOfflineGuard({
  children,
  hideWarning = false,
}: UserIsOfflineGuardProps) {
  const {user} = useContext(sessionContext);

  if (user?.online) {
    return !hideWarning ? (
      <div className="alert alert-danger text-center">
        You must be offline to use this feature
      </div>
    ) : null;
  }

  return <>{children}</>;
}
