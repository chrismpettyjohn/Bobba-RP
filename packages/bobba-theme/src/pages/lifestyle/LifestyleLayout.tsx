import React from 'react';
import {TabBar} from '../../components/tab-bar/TabBar';
import {LifestyleLayoutProps} from './LifestyleLayout.types';
import {UserLayout} from '../../layout/user-layout/UserLayout';
import {TabBarChild} from '../../components/tab-bar/TabBar.types';

export function LifestyleLayout({
  children,
  header,
  results,
}: LifestyleLayoutProps) {
  const LIFESTYLE_TABS: TabBarChild[] = [
    {
      path: '/lifestyle/jobs',
      icon: 'user-tie',
      text: 'Jobs',
    },
    {
      path: '/lifestyle/companies',
      icon: 'building',
      text: 'Companies',
    },
    // {
    //   path: '/lifestyle/properties',
    //   icon: 'house',
    //   text: 'Properties',
    // },
    // {
    //   path: '/lifestyle/stocks',
    //   icon: 'chart-line',
    //   text: 'Stocks',
    // },
  ];

  return (
    <UserLayout>
      {header}
      <TabBar tabs={LIFESTYLE_TABS} results={results} />
      {children}
    </UserLayout>
  );
}
