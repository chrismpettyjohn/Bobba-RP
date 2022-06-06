import {ToastContainer} from 'react-toastify';
import {BootstrapProps} from './Bootstrap.types';
import {SkeletonTheme} from 'react-loading-skeleton';
import React, {useContext, useEffect, useState} from 'react';
import {
  configContext,
  useBanListener,
  healthContext,
  BannedGuard,
  DataPolling,
  Router,
  sessionService,
  configService,
  sessionContext,
  RenderError,
  Icon,
} from '@instinct-web/core';

export function Bootstrap({children}: BootstrapProps) {
  useBanListener();
  const [ready, setReady] = useState(false);
  const [failedToLaunch, setFailedToLaunch] = useState(false);
  const {setConfig} = useContext(configContext);
  const {setHealth} = useContext(healthContext);
  const {setUser} = useContext(sessionContext);

  useEffect(() => {
    async function init() {
      try {
        const [user, config, health] = await Promise.all([
          sessionService.init(),
          configService.getConfig(),
          configService.getHealth(),
        ]);

        setUser(user);
        setConfig(config);
        setHealth(health);
        setReady(true);
      } catch {
        setReady(true);
        setFailedToLaunch(true);
      }
    }
    init();
  }, []);

  if (!ready) {
    return <i className="fa fa-spin fa-spinner" />;
  }

  if (failedToLaunch) {
    return (
      <div className="text-center">
        <h2 className="text-danger text-uppercase" style={{marginTop: '15%'}}>
          <Icon type="exclamation-triangle" />
          Failed to Launch
        </h2>
        <h4>There was a problem. Please try again later.</h4>
      </div>
    );
  }

  try {
    return (
      <React.StrictMode>
        <SkeletonTheme highlightColor="#1a4d6e">
          <ToastContainer />
          <BannedGuard>
            {children}
            <DataPolling />
          </BannedGuard>
        </SkeletonTheme>
      </React.StrictMode>
    );
  } catch {
    return <RenderError />;
  }
}
