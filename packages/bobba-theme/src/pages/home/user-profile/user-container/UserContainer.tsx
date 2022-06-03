import Moment from 'moment';
import React from 'react';
import {UserProfileWidgetProps} from '../UserProfile.types';
import {Avatar, Icon} from '@instinct-web/core';
import {DetailsContainer} from './details-container';

export function UserContainer({profile}: UserProfileWidgetProps) {
  return (
    <aside className="default-section">
      <div className="row">
        <div className="col h-100" style={{width: 120}}>
          <div
            className="h-100 w-100"
            style={{
              background: 'url(https://i.imgur.com/5nou6fm.png)',
              borderRadius: 4,
            }}
          >
            <Avatar
              look={profile?.user?.figure ?? ''}
              direction={2}
              headDirection={2}
              size="l"
            />
          </div>
        </div>
        <div className="col h-100">
          <div className="profile-content">
            <DetailsContainer icon="hotel" header="Activity:">
              {profile?.user?.online ? (
                <strong className="text-success">online</strong>
              ) : (
                <strong className="text-danger">offline</strong>
              )}
            </DetailsContainer>
            <DetailsContainer icon="id-card" header="About:">
              {profile?.user?.motto}
            </DetailsContainer>
            <DetailsContainer icon="user" header="Joined:">
              {Moment(profile?.user?.joinDate).format('MM/DD/YYYY')}
            </DetailsContainer>
            <DetailsContainer icon="door-open" header="Last Online:">
              {Moment(profile?.user?.lastLoginDate).format('MM/DD/YYYY')}
            </DetailsContainer>
          </div>
        </div>
      </div>
    </aside>
  );
}
