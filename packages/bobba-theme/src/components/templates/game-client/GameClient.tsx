import './GameClient.scss';
import {Card} from '../../generic/card/Card';
import {useRenewSSO} from './renew-sso.hook';
import {NitroClient} from '@instinct-web/nitro-client';
import {UserLayout} from '../../layout/user/UserLayout';
import {Container} from '../../generic/container/Container';
import React, {useContext, useEffect, useState} from 'react';
import {GameClientActions} from './game-client-actions/GameClientActions';
import {
  themeContext,
  UserGuard,
  sessionService,
  sessionContext,
} from '@instinct-web/core';

export function GameClient() {
  useRenewSSO();
  const {showClient, setStore} = useContext(themeContext);
  const {setSSO} = useContext(sessionContext);
  const [isAlreadyOnline, setIsAlreadyOnline] = useState(false);

  useEffect(() => {
    const fetchOnlineStatus = async () => {
      const currentUserStatus = await sessionService.getCurrentUser();
      setIsAlreadyOnline(currentUserStatus.online);
    };

    fetchOnlineStatus();
  }, [showClient]);

  useEffect(() => {
    return () => {
      setStore({showClient: false});
    };
  }, []);

  const onEndClientSession = async () => {
    setSSO(null as any);
  };

  if (showClient && isAlreadyOnline) {
    return (
      <UserLayout>
        <Container>
          <div className="row mb-5">
            <div className="col-12 text-center">
              <Card>
                <h1>You're already online</h1>
                <p>You can only have the game open on one tab at a time.</p>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center" style={{color: 'white'}}>
              <p>
                You can use the button below to generate a new token regardless
                and end the existing session.
              </p>
              <button
                className="btn btn-danger btn-block"
                onClick={onEndClientSession}
              >
                End Client Session
              </button>
            </div>
          </div>
        </Container>
      </UserLayout>
    );
  }

  return (
    <UserGuard redirect={false}>
      <div
        className={`hotel-container ${showClient ? 'visible' : 'not-visible'}`}
      >
        <GameClientActions />
        <NitroClient />
      </div>
    </UserGuard>
  );
}
