import React from 'react';
import {Bootstrap, ContextProviders} from '@instinct-web/core';
import {GameClient} from './components/templates/game-client/GameClient';
import {
  RPUserContextProvider,
  WebSocketContextProvider,
} from '@instinct-plugin/bobba-rp-web';

export function BobbaOriginalTheme() {
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
