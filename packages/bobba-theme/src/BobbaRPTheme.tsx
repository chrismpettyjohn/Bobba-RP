import './pages';
import React from 'react';
import './public/css/BobbaRP.scss';
import {Bootstrap, ContextProviders} from '@instinct-web/core';
import {NitroClient} from './components/nitro-client/NitroClient';

export function BobbaRPTheme() {
  return (
    <ContextProviders>
      <Bootstrap />
      <NitroClient />
    </ContextProviders>
  );
}
