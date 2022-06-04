import './GameClient.scss';
import {useRenewSSO} from './renew-sso.hook';
import React, {useContext, useEffect} from 'react';
import {NitroClient} from '@instinct-web/nitro-client';
import {themeContext, UserGuard} from '@instinct-web/core';
import {GameClientActions} from './game-client-actions/GameClientActions';
import {GameClientOnlineGuard} from './game-client-online-guard/GameClientOnlineGuard';

export function GameClient() {
  useRenewSSO();
  const {showClient, setStore} = useContext(themeContext);

  return (
    <UserGuard redirect={false}>
      <GameClientOnlineGuard>
        <div
          className={`hotel-container ${
            showClient ? 'visible' : 'not-visible'
          }`}
        >
          <GameClientActions />
          <NitroClient />
        </div>
      </GameClientOnlineGuard>
    </UserGuard>
  );
}
