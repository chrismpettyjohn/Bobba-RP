import React from 'react';
import {Icon} from '@instinct-web/core';
import {Link, useLocation} from 'wouter';
import {TabBarProps} from './TabBar.types';

export function TabBar({tabs, results}: TabBarProps) {
  const [location] = useLocation();

  return (
    <div className="filters w-100" data-v-11b1ccfe="" data-v-37a7da9c="">
      <div className="scroll w-100" data-v-11b1ccfe="">
        <div className="row w-100" data-v-11b1ccfe="">
          {tabs.map(tab => (
            <Link to={tab.path} key={`square_tabs_${tab.path}`}>
              <div
                className={`col wrapper w-100 ${
                  location.includes(tab.path) ? 'activeType' : ''
                }`}
                data-v-11b1ccfe=""
              >
                <div className="box" data-v-11b1ccfe="">
                  <span className="box-label" data-v-11b1ccfe="">
                    {tab.icon && (
                      <Icon type={tab.icon} style={{marginRight: 8}} />
                    )}
                    {tab.text}
                  </span>
                </div>
              </div>
            </Link>
          ))}
          {results !== undefined && (
            <div
              className="col results"
              data-v-11b1ccfe=""
              style={{textAlign: 'right'}}
            >
              {results} Result{results === 1 ? '' : 's'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
