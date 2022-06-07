import Countdown from 'react-countdown';
import {LOG_OUT_DELAY} from '../renew-sso.hook';
import React, {useContext, useState} from 'react';
import {Icon, sessionContext} from '@instinct-web/core';
import {GameClientRestartTimerProps} from './GameClientRestartTimer.types';

export function GameClientRestartTimer({
  children,
  className,
}: GameClientRestartTimerProps) {
  const {setSSO, setUser, setOnline} = useContext(sessionContext);
  const [isReloading, setIsReloading] = useState(false);

  function onReload() {
    setIsReloading(true);
    setSSO(null as any);
    setUser({online: false});
    setOnline(true);
  }

  function renderTimer({seconds}: {seconds: number}) {
    function renderTimer({seconds}: {seconds: number}) {
      return (
        <>
          <Icon className="mr-0 fa-spin" type="spinner" />
          Reloading in {seconds}s
        </>
      );
    }

    return (
      <>
        <Icon className="fa-spin" type="spinner" />
        Reloading in {seconds}s
      </>
    );
  }

  return (
    <button
      className={className}
      disabled={isReloading}
      onClick={onReload}
      type="button"
    >
      {isReloading ? (
        <Countdown
          date={Date.now() + LOG_OUT_DELAY}
          renderer={renderTimer}
          onComplete={() => setIsReloading(false)}
        />
      ) : (
        children
      )}
    </button>
  );
}
