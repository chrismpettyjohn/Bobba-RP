import './pages';
import React from 'react';
import './public/css/BobbaRP.scss';
import {Bootstrap, ContextProviders} from '@instinct-web/core';

export function BobbaRPTheme() {
  return (
    <ContextProviders>
      <Bootstrap />
    </ContextProviders>
  );
}
