import React from 'react';
import {useRoute} from 'wouter';
import {setURL} from '@instinct-web/core';
import {UserProfile} from '../../../components/templates/user-profile/UserProfile';

setURL('profile/:username', <UserProfilePage />);

export function UserProfilePage() {
  const [match, params] = useRoute<{username: string}>('/profile/:username');
  return <UserProfile username={params!.username} />;
}
