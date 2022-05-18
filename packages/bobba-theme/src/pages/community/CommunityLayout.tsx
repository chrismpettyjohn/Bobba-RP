import React from 'react';
import {CommunityLayoutProps} from './CommunityLayout.types';
import {UserLayout} from '../../layout/user-layout/UserLayout';
import {TabBar} from '../../components/tab-bar/TabBar';
import {TabBarChild} from '../../components/tab-bar/TabBar.types';

export function CommunityLayout({
  children,
  header,
  results,
}: CommunityLayoutProps) {
  const COMMUNITY_TABS: TabBarChild[] = [
    {
      path: '/community/news',
      icon: 'newspaper',
      text: 'News',
    },
    {
      path: '/community/staff',
      icon: 'clipboard-user',
      text: 'Staff',
    },
  ];

  return (
    <UserLayout>
      {header && header}
      <TabBar tabs={COMMUNITY_TABS} results={results} />
      <div className="listings" data-v-37a7da9c="">
        <div data-v-040b2c98="">{children}</div>
      </div>
    </UserLayout>
  );
}
