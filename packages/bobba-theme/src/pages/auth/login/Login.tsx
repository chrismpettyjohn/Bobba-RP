import React from 'react';
import {setURL} from '@instinct-web/core';
import {GuestLayout} from '../../../layout/guest-layout/GuestLayout';

setURL('login', <LoginPage />);

export function LoginPage() {
  return <GuestLayout>Login</GuestLayout>;
}
