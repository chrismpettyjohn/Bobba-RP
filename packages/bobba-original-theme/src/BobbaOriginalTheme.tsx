import React from 'react';
import {Bootstrap, ContextProviders} from '@instinct-web/core';
import {GameClient} from './components/templates/game-client/GameClient';
import {RPUserContextProvider} from '@instinct-plugin/bobba-rp-web';

export function BobbaOriginalTheme() {
  return (
    <ContextProviders>
      <RPUserContextProvider>
        <Bootstrap />
        <GameClient />
      </RPUserContextProvider>
    </ContextProviders>
  );
}
