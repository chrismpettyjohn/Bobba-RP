import React from 'react';
import {setURL} from '@instinct-web/core';
import {CommunityLayout} from '../CommunityLayoutProps';

setURL('community/news', <ListNews />);

export function ListNews() {
  return <CommunityLayout>News</CommunityLayout>;
}
