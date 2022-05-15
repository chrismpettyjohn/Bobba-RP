import {Link} from 'wouter';
import React, {ReactNode, useContext} from 'react';
import {configContext, Icon} from '@instinct-web/core';

export function Sidebar() {
  const {config} = useContext(configContext);

  const navLinks: Array<{path: string; text: ReactNode}> = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/community',
      text: 'Community',
    },
    {
      path: '/lifestyle',
      text: 'Lifestyle',
    },
    {
      path: '/underground',
      text: 'Underground',
    },
  ];

  return (
    <div id="app" data-v-app="">
      <div
        className="wrapper rel auto-h"
        data-v-040b2c98=""
        style={{background: 'rgb(35, 35, 47)'}}
      >
        <div
          className="navigation auto-wh"
          data-v-65a92196=""
          data-v-040b2c98=""
        >
          <Link to="/" className="logo" data-v-65a92196="">
            <img
              src={config.logoURL}
              alt="logo"
              data-v-65a92196=""
              style={{marginTop: 50}}
            />
            <div className="background-fade" data-v-65a92196="" />
          </Link>
          <nav className="" data-v-65a92196="">
            {navLinks.map(link => (
              <Link to={link.path} key={`sidebar_link_${link.path}`}>
                <a className="nav-item" data-v-65a92196="">
                  <span className="nav-label" data-v-65a92196="">
                    {link.text}
                  </span>
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
