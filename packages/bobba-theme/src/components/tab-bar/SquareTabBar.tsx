import React from 'react';
import {Link, useLocation} from 'wouter';
import {TabBarProps} from './TabBar.types';

export function SquareTabBar({tabs}: TabBarProps) {
  const [location] = useLocation();

  return (
    <div className="filters" data-v-11b1ccfe="" data-v-37a7da9c="">
      <div className="scroll" data-v-11b1ccfe="">
        <div className="row row2" data-v-11b1ccfe="">
          {tabs.map(tab => (
            <Link to={tab.path} key={`square_tabs_${tab.path}`}>
              <div
                className={`wrapper ${
                  location === tab.path ? 'activeType' : ''
                }`}
                data-v-11b1ccfe=""
              >
                <div className="box" data-v-11b1ccfe="">
                  <span className="box-label" data-v-11b1ccfe="">
                    {tab.text}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
