import React from 'react';
import {setURL} from '@instinct-web/core';
import {GuestLayout} from '../../../layout/guest-layout/GuestLayout';

setURL('register', <RegisterPage />);

export function RegisterPage() {
  return <GuestLayout>Register</GuestLayout>;
}
