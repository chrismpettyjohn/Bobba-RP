import {Link} from 'wouter';
import React, {ReactNode, useContext} from 'react';
import {configContext, Icon, sessionContext} from '@instinct-web/core';
import {AboutInstinct} from '../about-instinct/AboutInstinct';

export function Sidebar() {
  const {config} = useContext(configContext);
  const {user} = useContext(sessionContext);

  const navLinks: Array<{path: string; text: ReactNode; icon: string}> = [
    {
      path: '/',
      icon: 'home',
      text: 'Home',
    },
    {
      path: '/community/news',
      icon: 'users',
      text: 'Community',
    },
    {
      path: '/lifestyle/jobs',
      icon: 'building',

      text: 'Lifestyle',
    },
    // {
    //   path: '/underground/gangs',
    //   icon: 'skull',
    //   text: 'Underground',
    // },
  ];

  return (
    <div id="app" data-v-app="">
      <div
        className="wrapper rel auto-h"
        data-v-040b2c98=""
        style={{background: 'rgb(35, 35, 47)', position: 'relative'}}
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
                    <Icon
                      type={link.icon}
                      style={{
                        color: '#40C8D7',
                        fontSize: 24,
                        position: 'absolute',
                        top: 13,
                        left: 8,
                      }}
                    />
                    {link.text}
                  </span>
                </a>
              </Link>
            ))}
            <Link to="/play">
              <a
                className="nav-item nav-enter-hotel"
                data-v-65a92196=""
                style={{marginTop: 100}}
              >
                <span className="nav-label" data-v-65a92196="">
                  <Icon
                    type="gamepad-alt"
                    style={{
                      color: 'white',
                      fontSize: 24,
                      position: 'absolute',
                      top: 13,
                      left: 8,
                    }}
                  />
                  Play
                </span>
              </a>
            </Link>
            {user?.rank?.permissions?.websiteShowAdminPanel && (
              <a
                href={process.env.REACT_ADMIN_LINK}
                target="_blank"
                className="nav-item nav-enter-hotel"
                data-v-65a92196=""
                style={{marginTop: 100}}
              >
                <span className="nav-label" data-v-65a92196="">
                  <Icon
                    type="cogs"
                    style={{
                      color: 'white',
                      fontSize: 24,
                      position: 'absolute',
                      top: 13,
                      left: 8,
                    }}
                  />
                  Admin Panel
                </span>
              </a>
            )}
            <Link to="/logout">
              <a className="nav-item nav-logout" data-v-65a92196="">
                <span className="nav-label" data-v-65a92196="">
                  <Icon
                    type="sign-out"
                    style={{
                      color: 'white',
                      fontSize: 24,
                      position: 'absolute',
                      top: 13,
                      left: 8,
                    }}
                  />
                  Logout
                </span>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
