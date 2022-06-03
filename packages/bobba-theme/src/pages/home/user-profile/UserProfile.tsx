import React, {useContext} from 'react';
import './UserProfile.scss';
import {Badges} from './badges';
import {useRoute} from 'wouter';
import {Guestbook} from './guestbook';
import {UserContainer} from './user-container';
import {useFetchRPStatsByUsername} from '@bobba-rp/web';
import {UserLayout} from '../../../components/layout/user/UserLayout';
import {Container} from '../../../components/generic/container/Container';
import {MyEmploymentCard} from '../../../components/templates/my-employment-card/MyEmploymentCard';
import {
  configContext,
  Loading,
  setURL,
  useFetchUserByUsername,
} from '@instinct-web/core';
import {MiniJumbotron} from '../../../components/generic/mini-jumbotron/MiniJumbotron';

setURL('profile/:username', <UserProfile />);

export function UserProfile() {
  const {config} = useContext(configContext);
  const [match, params] = useRoute<{username: string}>('/profile/:username');
  const profile = useFetchUserByUsername(params!.username);
  const rpStats = useFetchRPStatsByUsername(params!.username);

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
