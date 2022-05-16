import React from 'react';
import {UserLayout} from '../../layout/user-layout/UserLayout';
import {UndergroundLayoutProps} from './UndergroundLayout.types';
import {TabBarChild} from '../../components/tab-bar/TabBar.types';
import {SquareTabBar} from '../../components/tab-bar/SquareTabBar';

export function UndergroundLayout({children}: UndergroundLayoutProps) {
  const UNDERGROUND_TABS: TabBarChild[] = [
    {
      path: '/underground/gangs',
      text: 'Gangs',
    },
    {
      path: '/underground/territory',
      text: 'Territory',
    },
    {
      path: '/underground/weapons',
      text: 'Weapons',
    },
    {
      path: '/underground/bounties',
      text: 'Bounties',
    },
  ];

  return (
    <UserLayout>
      <SquareTabBar tabs={UNDERGROUND_TABS} />
      <div className="listings" data-v-37a7da9c="">
        <div data-v-040b2c98="">{children}</div>
      </div>
    </UserLayout>
  );
}
