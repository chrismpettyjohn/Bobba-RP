import './GameClient.scss';
import React, {useContext} from 'react';
import {useRenewSSO} from './renew-sso.hook';
import {NitroClient} from '@instinct-web/nitro-client';
import {themeContext, UserGuard} from '@instinct-web/core';
import {GameClientActions} from './game-client-actions/GameClientActions';

export function GameClient() {
  useRenewSSO();
  const {showClient} = useContext(themeContext);

  return (
    <UserGuard redirect={false}>
      <div
        className={`hotel-container ${showClient ? 'visible' : 'not-visible'}`}
      >
        <GameClientActions />
        <NitroClient />
      </div>
    </UserGuard>
  );
}
