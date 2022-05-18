import React, {useContext} from 'react';
import {configContext, Icon, setURL} from '@instinct-web/core';
import {UserLayout} from '../../../layout/user-layout/UserLayout';

setURL('login', <LoginPage />);

export function LoginPage() {
  const {config} = useContext(configContext);
  return (
    <UserLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="pre-order" data-v-1a756e46="">
              <h2 data-v-da0d1626="">Login</h2>
              <form className="form" data-v-da0d1626="">
                <input
                  className="form-control mb-4"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                />
                <input
                  className="form-control mb-4"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <div className="row mb-4">
                  <div className="col-6">
                    <button className="btn btn-primary btn-block">Login</button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-success btn-block">
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row mb-4">
          <div className="col-12" style={{textTransform: 'uppercase'}}>
            <h2>Explore The</h2>
            <h2 style={{color: 'rgb(64, 200, 215)'}}>
              {config.siteName} Ecosystem
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mb-4">
            <div className="h-100 w-100 d-flex">
              <Icon type="trophy" className="fa-5x" style={{color: 'yellow'}} />
              <div className="ml-4 text-left">
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
                  {config.siteName} will consist of a scoreboard with different
                  types of tournaments. This scoreboard will show the top 20
                  players (in terms of wins) in the different mini-games, and
                  every (week/month) the top 5 players get rewarded a rare NFT.
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="h-100 w-100 d-flex">
              <Icon type="users" className="fa-5x" style={{color: 'teal'}} />
              <div className="ml-4 text-left">
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
          <div className="col-6 mb-4">
            <div className="h-100 w-100 d-flex">
              <Icon type="heart" className="fa-5x" style={{color: 'red'}} />
              <div className="ml-4 text-left">
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
                  Players will be able to proclaim in-game relationships. Being
                  in a relationship will have perks and proivde unique Rewards
                  to players. Similar to breeding in other bockchain games this
                  can become a lucrative endeavour to invest time in.
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="h-100 w-100 d-flex">
              <Icon type="trophy" className="fa-5x" style={{color: 'yellow'}} />
              <div className="ml-4 text-left">
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
                  {config.siteName} will consist of a scoreboard with different
                  types of tournaments. This scoreboard will show the top 20
                  players (in terms of wins) in the different mini-games, and
                  every (week/month) the top 5 players get rewarded a rare NFT.
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="h-100 w-100 d-flex">
              <Icon type="trophy" className="fa-5x" style={{color: 'yellow'}} />
              <div className="ml-4 text-left">
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
                  {config.siteName} will consist of a scoreboard with different
                  types of tournaments. This scoreboard will show the top 20
                  players (in terms of wins) in the different mini-games, and
                  every (week/month) the top 5 players get rewarded a rare NFT.
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="h-100 w-100 d-flex">
              <Icon type="trophy" className="fa-5x" style={{color: 'yellow'}} />
              <div className="ml-4 text-left">
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
                  {config.siteName} will consist of a scoreboard with different
                  types of tournaments. This scoreboard will show the top 20
                  players (in terms of wins) in the different mini-games, and
                  every (week/month) the top 5 players get rewarded a rare NFT.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
