import React from 'react';
import './UserProfile.scss';
import {Badges} from './badges';
import {useRoute} from 'wouter';
import {Guestbook} from './guestbook';
import {UserContainer} from './user-container';
import {useFetchRPStatsByUsername} from '@instinct-plugin/bobba-rp-web';
import {UserLayout} from '../../../components/layout/user/UserLayout';
import {Container} from '../../../components/generic/container/Container';
import {Jumbotron} from '../../../components/generic/jumbotron/Jumbotron';
import {MyEmploymentCard} from '../../../components/templates/my-employment-card';
import {
  Column,
  Loading,
  setURL,
  useFetchUserByUsername,
} from '@instinct-web/core';

setURL('profile/:username', <UserProfile />);

export function UserProfile() {
  const [match, params] = useRoute<{username: string}>('/profile/:username');
  const profile = useFetchUserByUsername(params!.username);
  const rpStats = useFetchRPStatsByUsername(params!.username);

  return (
    <UserLayout section="profile">
      <Loading isLoading={profile === undefined}>
        <Jumbotron title={`The profile of ${profile?.user?.username}`} />
        <Container>
          <div className="row">
            <div className="col-4">
              <UserContainer profile={profile} />
            </div>
            <div className="col-8">
              {profile && rpStats && (
                <MyEmploymentCard user={{...(profile.user as any), rpStats}} />
              )}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-4">
              <Badges profile={profile} />
            </div>
            <div className="col-8">
              {profile && rpStats && <Guestbook profile={profile} />}
            </div>
          </div>
        </Container>
      </Loading>
    </UserLayout>
  );
}
