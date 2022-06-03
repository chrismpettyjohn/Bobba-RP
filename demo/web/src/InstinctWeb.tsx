import React from 'react';
import {BobbaOriginalTheme} from '@instinct-theme/bobba-rp';
import {ContextProviders, Bootstrap} from '@instinct-web/core';
import {RPUserContextProvider} from '@instinct-plugin/bobba-rp-web';

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
