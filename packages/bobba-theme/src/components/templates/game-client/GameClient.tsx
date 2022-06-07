import './GameClient.scss';
import React from 'react';
import {useRoute} from 'wouter';
import {useRenewSSO} from './renew-sso.hook';
import {UserGuard} from '@instinct-web/core';
import {NitroClient} from '@instinct-web/nitro-client';
import {GameClientActions} from './game-client-actions/GameClientActions';
import {GameClientOnlineGuard} from './game-client-online-guard/GameClientOnlineGuard';

export function GameClient() {
  const [userIsOnClient] = useRoute('/play');
  useRenewSSO();

  return (
    <UserGuard redirect={false}>
      <GameClientOnlineGuard>
        <div
          className={`hotel-container ${
            userIsOnClient ? 'visible' : 'not-visible'
          }`}
        >
          <GameClientActions />
          <NitroClient />
        </div>
      </GameClientOnlineGuard>
    </UserGuard>
  );
}
