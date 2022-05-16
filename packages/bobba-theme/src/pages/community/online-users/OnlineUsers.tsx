import React from 'react';
import {setURL} from '@instinct-web/core';
import {CommunityLayout} from '../CommunityLayoutProps';

setURL('community/online', <OnlineUsers />);

export function OnlineUsers() {
  return <CommunityLayout>Online Users</CommunityLayout>;
}
