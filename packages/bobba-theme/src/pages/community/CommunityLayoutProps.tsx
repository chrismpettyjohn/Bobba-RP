import React from 'react';
import {CommunityLayoutProps} from './CommunityLayout.types';
import {UserLayout} from '../../layout/user-layout/UserLayout';
import {SquareTabBar} from '../../components/tab-bar/SquareTabBar';
import {TabBarChild} from '../../components/tab-bar/TabBar.types';

export function CommunityLayout({children}: CommunityLayoutProps) {
  const COMMUNITY_TABS: TabBarChild[] = [
    {
      path: '/community/news',
      text: 'News',
    },
    {
      path: '/community/staff',
      text: 'Staff',
    },
    {
      path: '/community/high-scores',
      text: 'High Scores',
    },
    {
      path: '/community/online',
      text: 'Online',
    },
  ];

  return (
    <UserLayout>
      <SquareTabBar tabs={COMMUNITY_TABS} />
      <div className="listings" data-v-37a7da9c="">
        <div data-v-040b2c98="">{children}</div>
      </div>
    </UserLayout>
  );
}
