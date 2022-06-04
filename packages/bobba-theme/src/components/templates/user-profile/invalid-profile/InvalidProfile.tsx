import React, {useContext} from 'react';
import {Card} from '../../../generic/card/Card';
import {sessionContext, Icon} from '@instinct-web/core';
import {UserLayout} from '../../../layout/user/UserLayout';
import {Container} from '../../../generic/container/Container';

export function InvalidProfile() {
  const {user} = useContext(sessionContext);
  return (
    <UserLayout>
      <Container>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <Card>
              <Icon className="fa-2x" type="exclamation-triangle" />
              <h1>Profile Not Found</h1>
              <p>The profile entered does not exist.</p>
            </Card>
          </div>
        </div>
      </Container>
    </UserLayout>
  );
}
