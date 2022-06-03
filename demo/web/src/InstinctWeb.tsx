import React from 'react';
import {BobbaOriginalTheme} from '@bobba-rp/theme';
import {ContextProviders, Bootstrap} from '@instinct-web/core';
import {RPUserContextProvider} from '@bobba-rp/web';

export function InstinctWeb() {
  return (
    <ContextProviders>
      <RPUserContextProvider>
        <Bootstrap />
        <BobbaOriginalTheme />
      </RPUserContextProvider>
    </ContextProviders>
  );
}
