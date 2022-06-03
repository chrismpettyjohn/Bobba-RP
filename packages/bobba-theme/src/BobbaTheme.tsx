import './pages';
import React from 'react';
import './public/css/RoleplayTheme.scss';
import {RPUserContextProvider} from '@bobba-rp/web';
import {ContextProviders, Bootstrap} from '@instinct-web/core';
import {GameClient} from './components/templates/game-client/GameClient';

export function BobbaTheme() {
  return (
    <ContextProviders>
      <RPUserContextProvider>
        <Bootstrap />
        <GameClient />
      </RPUserContextProvider>
    </ContextProviders>
  );
}
