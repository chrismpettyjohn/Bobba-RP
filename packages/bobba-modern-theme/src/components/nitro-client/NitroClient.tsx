import './NitroClient.scss';
import React, {useContext} from 'react';
import {NitroClient as BaseNitroClient} from '@instinct-web/nitro-client';
import {ClientActions} from '../client-actions/ClientActions';
import {themeContext, UserGuard} from '@instinct-web/core';

export function NitroClient() {
  const {showClient} = useContext(themeContext);

  return (
    <UserGuard redirect={false}>
      <div
        className={`hotel-container ${showClient ? 'visible' : 'not-visible'}`}
      >
        <ClientActions />
        <BaseNitroClient />
      </div>
    </UserGuard>
  );
}
