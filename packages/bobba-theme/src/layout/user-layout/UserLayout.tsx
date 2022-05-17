import React from 'react';
import {LayoutProps} from '../Layout.types';
import {Sidebar} from '../../components/sidebar/Sidebar';

export function UserLayout({children}: LayoutProps) {
  return (
    <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
      <div className="container-fluid p-4 h-100">
        <div className="row h-100">
          <div className="col" style={{width: 250}}>
            <Sidebar />
          </div>
          <div className="col">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
