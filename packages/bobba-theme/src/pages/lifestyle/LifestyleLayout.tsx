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
      <div className="container-fluid mb-4">
        <div className="row">
          <div className="col-12 mb-4">{header}</div>
          <div className="col-12">
            <TabBar tabs={LIFESTYLE_TABS} results={results} />
          </div>
        </div>
      </div>
      {children}
    </UserLayout>
  );
}
