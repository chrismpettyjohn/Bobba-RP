import Countdown from 'react-countdown';
import {LOG_OUT_DELAY} from '../renew-sso.hook';
import React, {useContext, useState} from 'react';
import {Icon, sessionContext} from '@instinct-web/core';
import {GameClientRestartTimerProps} from './GameClientRestartTimer.types';

export function GameClientRestartTimer({
  children,
  className,
  onComplete,
  style,
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
    return (
      <>
        <Icon className="fa-spin" type="spinner" />
        Reloading in {seconds}s
      </>
    );
  }

  function onLoadingComplete() {
    setIsReloading(false);
    if (onComplete) {
      onComplete();
    }
  }

  return (
    <button
      className={className}
      disabled={isReloading}
      onClick={onReload}
      style={style}
      type="button"
    >
      {isReloading ? (
        <Countdown
          date={Date.now() + LOG_OUT_DELAY}
          renderer={renderTimer}
          onComplete={onLoadingComplete}
        />
      ) : (
        children
      )}
    </button>
  );
}
