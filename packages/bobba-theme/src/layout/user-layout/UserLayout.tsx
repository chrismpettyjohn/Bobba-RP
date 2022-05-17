import React from 'react';
import {LayoutProps} from '../Layout.types';
import {Sidebar} from '../../components/sidebar/Sidebar';

export function UserLayout({children}: LayoutProps) {
  return (
    <div id="app">
      <div className="wrapper rel auto-h">
        <div className="home">
          <Sidebar />
          <div
            className="marketplace"
            data-v-37a7da9c=""
            data-v-0632b20e=""
            style={{marginTop: 55}}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
