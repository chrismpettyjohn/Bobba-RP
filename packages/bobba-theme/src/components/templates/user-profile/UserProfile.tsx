import './UserProfile.scss';
import {Badges} from './badges';
import {Guestbook} from './guestbook';
import {UserRPStats} from '@bobba-rp/types';
import {UserContainer} from './user-container';
import {UserProfileProps} from './UserProfile.types';
import {SearchUsers} from './search-users/SearchUsers';
import {userService as rpUserService} from '@bobba-rp/web';
import React, {useContext, useEffect, useState} from 'react';
import {UserProfile as IUserProfile} from '@instinct-prj/interface';
import {configContext, Loading, userService} from '@instinct-web/core';
import {UserLayout} from '../../../components/layout/user/UserLayout';
import {Container} from '../../../components/generic/container/Container';
import {MiniJumbotron} from '../../../components/generic/mini-jumbotron/MiniJumbotron';
import {MyEmploymentCard} from '../../../components/templates/my-employment-card/MyEmploymentCard';
import {InvalidProfile} from './invalid-profile/InvalidProfile';

export function UserProfile({username}: UserProfileProps) {
  const {config} = useContext(configContext);
  const [profile, setProfile] = useState<IUserProfile>();
  const [rpStats, setRPStats] = useState<UserRPStats>();
  const [invalidProfile, setInvalidProfile] = useState(false);

  useEffect(() => {
    setProfile(undefined);
    setRPStats(undefined);
    setInvalidProfile(false);

    const fetchProfile = async (usernameToRetrieve: string) => {
      try {
        const profile = await userService.getByUsername(username);
        const rpStats = await rpUserService.getRPStats(username);
        if (usernameToRetrieve === username) {
          setProfile(profile);
          setRPStats(rpStats);
        }
      } catch {
        setInvalidProfile(true);
      }
    };

    fetchProfile(username);
  }, [username]);

  if (invalidProfile) {
    return <InvalidProfile />;
  }

  return (
    <UserLayout section="profile">
      <Loading isLoading={profile === undefined}>
        <Container>
          <div className="row mb-4">
            <div className="col-12">
              <SearchUsers />
            </div>
          </div>
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
