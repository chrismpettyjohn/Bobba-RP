import React, {useContext} from 'react';
import {LOG_OUT_DELAY} from '../../renew-sso.hook';
import {Icon, sessionContext} from '@instinct-web/core';
import {GameClientRestartTimer} from '../../game-client-restart-timer/GameClientRestartTimer';

export function ExitGameClientButton() {
  const {setSSO, setUser, setOnline, online} = useContext(sessionContext);

  async function onExitClient() {
    return new Promise(resolve => {
      setSSO(undefined);
      setUser({online: false});
      setOnline(false);
      setTimeout(() => {
        return resolve(undefined);
      }, LOG_OUT_DELAY);
    });
  }

  return (
    <GameClientRestartTimer
      onComplete={onExitClient}
      style={{background: 'red', borderColor: 'dark-red'}}
    >
      <Icon type="sign-out" />
    </GameClientRestartTimer>
  );
}
