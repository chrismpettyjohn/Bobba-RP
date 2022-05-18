import React, {useContext} from 'react';
import {LayoutProps} from '../Layout.types';
import {configContext, Icon} from '@instinct-web/core';
import {AboutInstinct} from '../../components/about-instinct/AboutInstinct';

export function GuestLayout({children}: LayoutProps) {
  const {config} = useContext(configContext);

  return (
    <div
      className="d-flex justify-content-center flex-nowrap vertical-center h-100 w-100"
      style={{position: 'absolute', left: 0, top: 0}}
    >
      <div className="row" style={{width: '70%'}}>
        <div
          className="col-6 p-4"
          style={{
            background: 'linear-gradient(180deg,#2e2e3c 55.66%,#23232f 90.9%)',
            borderTop: '2px solid #2e2e3c',
            borderLeft: '2px solid #2e2e3c',
            borderBottom: '2px solid #2e2e3c',
          }}
        >
          {children}
        </div>
        <div
          className="col-6 p-4"
          style={{
            borderTop: '2px solid #2e2e3c',
            borderRight: '2px solid #2e2e3c',
            borderBottom: '2px solid #2e2e3c',
          }}
        >
          <div className="row mb-4">
            <div className="col-12" style={{textTransform: 'uppercase'}}>
              <h2>Explore The</h2>
              <h2 style={{color: 'rgb(64, 200, 215)'}}>
                {config.siteName} Ecosystem
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <div className="row">
                <div
                  className="col-3 text-center pb-2 mb-4"
                  style={{
                    background:
                      'linear-gradient(180deg,#2e2e3c 55.66%,#23232f 90.9%)',
                    borderRadius: 5,
                  }}
                >
                  <Icon
                    type="trophy mt-4"
                    className="fa-4x"
                    style={{color: 'yellow'}}
                  />
                </div>
                <div className="col text-left">
                  <div
                    style={{
                      fontSize: 30,
                      color: 'white',
                      textTransform: 'uppercase',
                    }}
                  >
                    SCOREBOARD
                  </div>
                  <div className="mt-2" style={{fontSize: 20, color: 'white'}}>
                    {config.siteName} will consist of a scoreboard with
                    different types of tournaments. This scoreboard will show
                    the top 20 players (in terms of wins) in the different
                    mini-games, and every (week/month) the top 5 players get
                    rewarded a rare NFT.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="row">
                <div
                  className="col-3 text-center pb-2 mb-4"
                  style={{
                    background:
                      'linear-gradient(180deg,#2e2e3c 55.66%,#23232f 90.9%)',
                    borderRadius: 5,
                  }}
                >
                  <Icon
                    type="users mt-4"
                    className="fa-4x"
                    style={{color: 'teal'}}
                  />
                </div>
                <div className="col text-left">
                  <div
                    style={{
                      fontSize: 30,
                      color: 'white',
                      textTransform: 'uppercase',
                    }}
                  >
                    SOCIALIZE
                  </div>
                  <div className="mt-2" style={{fontSize: 20, color: 'white'}}>
                    {config.siteName} will consist of general and private rooms
                    where player can interact with each other through text and
                    voice based communication.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="row">
                <div
                  className="col-3 text-center pb-2 mb-4"
                  style={{
                    background:
                      'linear-gradient(180deg,#2e2e3c 55.66%,#23232f 90.9%)',
                    borderRadius: 5,
                  }}
                >
                  <Icon
                    type="heart mt-4"
                    className="fa-4x"
                    style={{color: 'red'}}
                  />
                </div>
                <div className="col text-left">
                  <div
                    style={{
                      fontSize: 30,
                      color: 'white',
                      textTransform: 'uppercase',
                    }}
                  >
                    RELATIONSHIPS
                  </div>
                  <div className="mt-2" style={{fontSize: 20, color: 'white'}}>
                    Players will be able to proclaim in-game relationships.
                    Being in a relationship will have perks and proivde unique
                    Rewards to players. Similar to breeding in other bockchain
                    games this can become a lucrative endeavour to invest time
                    in.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 30,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <AboutInstinct />
      </div>
    </div>
  );
}
