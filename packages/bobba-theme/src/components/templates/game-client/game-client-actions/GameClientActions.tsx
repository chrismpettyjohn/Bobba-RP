import './GameClientActions.scss';
import {useLocation} from 'wouter';
import React, {useContext, useState} from 'react';
import {
  healthContext,
  themeContext,
  Icon,
  sessionContext,
} from '@instinct-web/core';

export function GameClientActions() {
  const [location, setLocation] = useLocation();
  const {health} = useContext(healthContext);
  const {setSSO} = useContext(sessionContext);
  const {showClient, setStore} = useContext(themeContext);
  const [isExpanded, setExpanded] = useState<boolean>(false);

  function toggleWebView(): void {
    setStore({showClient: !showClient});
    setLocation('/me');
  }

  async function toggleFullScreen(): Promise<void> {
    const action: Promise<void> = isExpanded
      ? document.exitFullscreen()
      : document.body.requestFullscreen();

    await action;
    setExpanded(!isExpanded);
  }

  function reloadPage(): void {
    setSSO(null as any);
  }

  return (
    <div className="actions">
      <button onClick={toggleWebView}>Web</button>
      <button onClick={toggleFullScreen}>
        <Icon
          className="mr-0"
          family="fas"
          type={isExpanded ? 'compress' : 'expand'}
        />
      </button>
      <button onClick={reloadPage}>
        <Icon className="mr-0" family="fas" type="sync" />
      </button>
      <button style={{cursor: 'default'}}>
        <Icon family="fas" type="user" />
        <b>{health.usersOnline}</b>
      </button>
    </div>
  );
}
