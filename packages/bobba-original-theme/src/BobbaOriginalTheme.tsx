import React from 'react';
import {Bootstrap, ContextProviders} from '@instinct-web/core';
import {RPUserContextProvider} from '@instinct-plugin/bobba-rp-web';
import {GameClient} from './components/templates/game-client/GameClient';

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