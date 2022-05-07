import React from 'react';
import {WebSocketContextProvider} from '@instinct-plugin/bobba-rp-web';
import {Bootstrap, ContextProviders} from '@instinct-web/core';
import {RPUserContextProvider} from '@instinct-plugin/bobba-rp-web';
import {GameClient} from './components/templates/game-client/GameClient';

export function RoleplayTheme() {
  return (
    <ContextProviders>
      <WebSocketContextProvider>
        <RPUserContextProvider>
          <Bootstrap />
          <GameClient />
        </RPUserContextProvider>
      </WebSocketContextProvider>
    </ContextProviders>
  );
}
