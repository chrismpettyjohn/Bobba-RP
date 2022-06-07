import {useRoute} from 'wouter';
import React, {useContext} from 'react';
import {Card} from '../../../generic/card/Card';
import {sessionContext} from '@instinct-web/core';
import {UserLayout} from '../../../layout/user/UserLayout';
import {Container} from '../../../generic/container/Container';
import {GameClientOnlineGuardProps} from './GameClientOnlineGuard.types';
import {GameClientRestartTimer} from '../game-client-restart-timer/GameClientRestartTimer';

export function GameClientOnlineGuard({children}: GameClientOnlineGuardProps) {
  const [userIsOnClient] = useRoute('/play');
  const {online, user} = useContext(sessionContext);

  if (userIsOnClient && user?.online && !online) {
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
              <GameClientRestartTimer className="btn btn-danger btn-block">
                End Client Session
              </GameClientRestartTimer>
            </div>
          </div>
        </Container>
      </UserLayout>
    );
  }

  return <>{children}</>;
}
