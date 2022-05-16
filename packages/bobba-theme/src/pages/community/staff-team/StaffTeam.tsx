import React from 'react';
import {setURL} from '@instinct-web/core';
import {CommunityLayout} from '../CommunityLayoutProps';

setURL('community/staff', <StaffTeam />);

export function StaffTeam() {
  return <CommunityLayout>Staff Team</CommunityLayout>;
}
