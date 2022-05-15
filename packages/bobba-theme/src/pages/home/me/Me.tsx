import React from 'react';
import {setURL} from '@instinct-web/core';
import {UserLayout} from '../../../layout/user-layout/UserLayout';

setURL('me', <MePage />);

export function MePage() {
  return <UserLayout>Me</UserLayout>;
}
