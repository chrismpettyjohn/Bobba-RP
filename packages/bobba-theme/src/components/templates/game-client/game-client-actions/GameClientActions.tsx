import './GameClientActions.scss';
import {useLocation} from 'wouter';
import React, {useContext, useState} from 'react';
import {healthContext, themeContext, Icon} from '@instinct-web/core';
import {GameClientRestartTimer} from '../game-client-restart-timer/GameClientRestartTimer';
import {ExitGameClientButton} from './exit-game-client-button/ExitGameClientButton';

export function GameClientActions() {
  const [location, setLocation] = useLocation();
  const {health} = useContext(healthContext);
  const {setStore} = useContext(themeContext);
  const [isExpanded, setExpanded] = useState<boolean>(false);

  function toggleWebView(): void {
    setStore({showClient: false});
    setLocation('/me');
  }

  async function toggleFullScreen(): Promise<void> {
    const action: Promise<void> = isExpanded
      ? document.exitFullscreen()
      : document.body.requestFullscreen();

    await action;
    setExpanded(!isExpanded);
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
      <GameClientRestartTimer className="">
        <Icon className="mr-0" family="fas" type="sync" />
      </GameClientRestartTimer>
      <button style={{cursor: 'default'}}>
        <Icon family="fas" type="user" />
        <b>{health.usersOnline}</b>
      </button>
      <ExitGameClientButton />
    </div>
  );
}
