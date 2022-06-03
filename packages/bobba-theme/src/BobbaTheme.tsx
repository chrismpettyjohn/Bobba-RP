import './pages';
import React from 'react';
import './public/css/RoleplayTheme.scss';
import {RPUserContextProvider} from '@bobba-rp/web';
import {ContextProviders, Bootstrap} from '@instinct-web/core';

export function BobbaTheme() {
  return (
    <ContextProviders>
      <RPUserContextProvider>
        <Bootstrap />
      </RPUserContextProvider>
    </ContextProviders>
  );
}
