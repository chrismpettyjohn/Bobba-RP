import './pages';
import React from 'react';
import './public/css/RoleplayTheme.scss';
import {RPUserContextProvider} from '@bobba-rp/web';
import {ContextProviders, Router} from '@instinct-web/core';
import {Bootstrap} from './components/utility/bootstrap/Bootstrap';
import {GameClient} from './components/templates/game-client/GameClient';

export function BobbaTheme() {
  return (
    <ContextProviders>
      <Bootstrap>
        <RPUserContextProvider>
          <Router />
          <GameClient />
        </RPUserContextProvider>
      </Bootstrap>
    </ContextProviders>
  );
}
