import './Sidebar.scss';
import {Link} from 'wouter';
import React, {ReactNode, useContext} from 'react';
import {configContext, Icon} from '@instinct-web/core';
import {AboutInstinct} from '../about-instinct/AboutInstinct';

export function Sidebar() {
  const {config} = useContext(configContext);

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
    {
      path: '/underground/gangs',
      icon: 'skull',
      text: 'Underground',
    },
  ];

  return (
    <>
      <img src={config.logoURL} />
      <div className="sidebar bg-primary">
        Sidebar
      </div>
    </>
  );
}
