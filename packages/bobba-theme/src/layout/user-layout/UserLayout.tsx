import React from 'react';
import {LayoutProps} from '../Layout.types';
import {Sidebar} from '../../components/sidebar/Sidebar';

export function UserLayout({children}: LayoutProps) {
  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-4">
          <Sidebar />
        </div>
        <div className="col-8">
          {children}
        </div>
      </div>
    </div>
  );
}
