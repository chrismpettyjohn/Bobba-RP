import React from 'react';
import {SquareTabBar} from '../../components/tab-bar/SquareTabBar';
import {LifestyleLayoutProps} from './LifestyleLayout.types';
import {UserLayout} from '../../layout/user-layout/UserLayout';
import {TabBarChild} from '../../components/tab-bar/TabBar.types';

export function LifestyleLayout({children}: LifestyleLayoutProps) {
  const LIFESTYLE_TABS: TabBarChild[] = [
    {
      path: '/lifestyle/jobs/',
      text: 'Jobs',
    },
    {
      path: '/lifestyle/companies',
      text: 'Companies',
    },
    {
      path: '/lifestyle/properties',
      text: 'Properties',
    },
    {
      path: '/lifestyle/stocks',
      text: 'Stocks',
    },
  ];

  return (
    <UserLayout>
      <SquareTabBar tabs={LIFESTYLE_TABS} />
      <div className="listings" data-v-37a7da9c="">
        <div data-v-040b2c98="">{children}</div>
      </div>
    </UserLayout>
  );
}
