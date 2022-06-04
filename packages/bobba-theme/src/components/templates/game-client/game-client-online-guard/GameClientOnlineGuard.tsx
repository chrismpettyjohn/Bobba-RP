import React, {useContext} from 'react';
import {Card} from '../../../generic/card/Card';
import {UserLayout} from '../../../layout/user/UserLayout';
import {Container} from '../../../generic/container/Container';
import {sessionContext, themeContext} from '@instinct-web/core';
import {GameClientOnlineGuardProps} from './GameClientOnlineGuard.types';

export function GameClientOnlineGuard({children}: GameClientOnlineGuardProps) {
  const {showClient} = useContext(themeContext);
  const {online, user, setSSO, setOnline, setUser} = useContext(sessionContext);

  const onEndClientSession = async () => {
    setSSO(null as any);
    setUser({online: false});
    setOnline(true);
  };

  if (showClient && user?.online && !online) {
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

  return <>{children}</>;
}
