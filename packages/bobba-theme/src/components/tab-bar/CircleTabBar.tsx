import React from 'react';
import {Link} from 'wouter';
import {TabBarProps} from './TabBar.types';

export function CircleTabBar({tabs}: TabBarProps) {
  return (
    <div className="abs nft-toggle mauto" data-v-040b2c98="">
      {tabs.map(tab => (
        <Link to={tab.path} key={`circle_tabs_${tab.path}`}>
          <a
            className="router-link-active router-link-exact-active characters rel"
            data-v-040b2c98=""
          >
            <span className="holder activeRight" data-v-040b2c98="">
              {tab.text}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
}
