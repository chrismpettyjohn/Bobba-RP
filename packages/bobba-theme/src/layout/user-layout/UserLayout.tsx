import React from 'react';
import {LayoutProps} from '../Layout.types';
import {Header} from '../../components/header/Header';
import {Sidebar} from '../../components/sidebar/Sidebar';

export function UserLayout({children}: LayoutProps) {
  return (
    <div id="app">
      <div className="wrapper rel auto-h">
        <div className="home">
          <Header />
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
