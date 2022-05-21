import React from 'react';
import {BobbaRPTheme} from '@bobba-rp/theme';
import {AdminPanel} from '@instinct-web/admin';
// import {RoleplayTheme} from '@instinct-theme/bobba-rp';

export function InstinctWeb() {
  return (
    <>
      <BobbaRPTheme />
      <AdminPanel />
    </>
  );
}
