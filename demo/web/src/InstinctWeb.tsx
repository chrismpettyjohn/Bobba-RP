import React from 'react';
import { AdminPanel } from '@instinct-web/admin';
import { RoleplayTheme } from '@instinct-theme/bobba-rp';

export function InstinctWeb() {
  return (
    <>
      <RoleplayTheme />
      <AdminPanel />
    </>
  );
}
