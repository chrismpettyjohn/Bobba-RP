import './UserProfile.scss';
import {Badges} from './badges';
import {Guestbook} from './guestbook';
import React, {useContext} from 'react';
import {UserContainer} from './user-container';
import {UserProfileProps} from './UserProfile.types';
import {useFetchRPStatsByUsername} from '@bobba-rp/web';
import {UserLayout} from '../../../components/layout/user/UserLayout';
import {Container} from '../../../components/generic/container/Container';
import {
  configContext,
  Loading,
  useFetchUserByUsername,
} from '@instinct-web/core';
import {MiniJumbotron} from '../../../components/generic/mini-jumbotron/MiniJumbotron';
import {MyEmploymentCard} from '../../../components/templates/my-employment-card/MyEmploymentCard';

export function UserProfile({username}: UserProfileProps) {
  const {config} = useContext(configContext);
  const profile = useFetchUserByUsername(username);
  const rpStats = useFetchRPStatsByUsername(username);

  return (
    <UserLayout section="profile">
      <Loading isLoading={profile === undefined}>
        <Container>
          <div className="row">
            <div className="col-12">
              <MiniJumbotron>
                <div className="row">
                  <div className="col">
                    <h1>{profile?.user?.username}'s Profile</h1>
                  </div>
                  <div className="col text-right">
                    {profile?.user?.rank?.permissions?.websiteShowStaff && (
                      <img
                        src={`${config.rankBadgeURL}/ADM.gif`}
                        height={55}
                        width={55}
                      />
                    )}
                  </div>
                </div>
              </MiniJumbotron>
            </div>
          </div>
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
