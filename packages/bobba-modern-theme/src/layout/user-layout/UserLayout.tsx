import React from 'react';
import {LayoutProps} from '../Layout.types';
import {UserGuard} from '@instinct-web/core';
import {Sidebar} from '../../components/sidebar/Sidebar';
import {AboutInstinct} from '../../components/about-instinct/AboutInstinct';

export function UserLayout({children}: LayoutProps) {
  return (
    <UserGuard>
      <div id="app">
        <div className="wrapper rel auto-h">
          <div className="home">
            <Sidebar />
            <div
              className="marketplace"
              data-v-37a7da9c=""
              data-v-0632b20e=""
              style={{marginTop: 55, width: 'calc(100% - 300px)'}}
            >
              {children}
            </div>
          </div>
        </div>
        <div style={{position: 'absolute', bottom: 30, width: '100%'}}>
          <AboutInstinct />
        </div>
      </div>
    </UserGuard>
  );
}
