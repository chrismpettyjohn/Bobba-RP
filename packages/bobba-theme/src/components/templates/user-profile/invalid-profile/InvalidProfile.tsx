import React from 'react';
import {Icon} from '@instinct-web/core';
import {Card} from '../../../generic/card/Card';
import {SearchUsers} from '../search-users/SearchUsers';
import {UserLayout} from '../../../layout/user/UserLayout';
import {Container} from '../../../generic/container/Container';

export function InvalidProfile() {
  return (
    <UserLayout>
      <Container>
        <div className="row mb-4">
          <div className="col-12 text-center">
            <SearchUsers />
          </div>
        </div>
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
