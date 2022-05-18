import React from 'react';
import {UserLayout} from '../../layout/user-layout/UserLayout';
import {UndergroundLayoutProps} from './UndergroundLayout.types';
import {TabBarChild} from '../../components/tab-bar/TabBar.types';
import {TabBar} from '../../components/tab-bar/TabBar';

export function UndergroundLayout({children}: UndergroundLayoutProps) {
  const UNDERGROUND_TABS: TabBarChild[] = [
    {
      path: '/underground/gangs',
      icon: 'mask',
      text: 'Gangs',
    },
    // {
    //   path: '/underground/territory',
    //   icon: 'city',
    //   text: 'Territory',
    // },
    {
      path: '/underground/weapons',
      icon: 'sword',
      text: 'Weapons',
    },
    {
      path: '/underground/bounties',
      icon: 'skull',
      text: 'Bounties',
    },
  ];

  return (
    <UserLayout>
      <TabBar tabs={UNDERGROUND_TABS} />
      <div className="listings" data-v-37a7da9c="">
        <div data-v-040b2c98="">{children}</div>
      </div>
    </UserLayout>
  );
}
