import './pages';
import React from 'react';
import './public/css/BobbaRP.scss';
import {Bootstrap, ContextProviders} from '@instinct-web/core';
import {NitroClient} from './components/nitro-client/NitroClient';
import {RPUserContextProvider} from '@instinct-plugin/bobba-rp-web';

export function BobbaRPTheme() {
  return (
    <React.StrictMode>
      <ContextProviders>
        <RPUserContextProvider>
          <Bootstrap />
          <NitroClient />
        </RPUserContextProvider>
      </ContextProviders>
    </React.StrictMode>
  );
}
