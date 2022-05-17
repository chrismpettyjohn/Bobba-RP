import React, {useContext} from 'react';
import {Avatar, sessionContext, setURL} from '@instinct-web/core';
import {UserLayout} from '../../../layout/user-layout/UserLayout';

setURL('me', <MePage />);

export function MePage() {
  const {user} = useContext(sessionContext);

  return (
    <UserLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 data-v-ce61cb0e="">
              <div>
                <div style={{fontSize: 30}}>Welcome Back,</div>
              </div>
            </h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6">
            <div
              style={{
                background:
                  'linear-gradient(264.06deg,#041214 -68.99%,rgb(64, 200, 215) 60.01%,#166068 130.88%)',
                height: 250,
                width: '100%',
                borderRadius: 10,
              }}
            >
              <div className="container p-2">
                <div className="row">
                  <div style={{flex: 0, width: 128}}>
                    <Avatar look={user?.figure} size="l" />
                  </div>
                  <div
                    className="col"
                    style={{marginTop: 40, width: 'fit-content'}}
                  >
                    <h2>{user!.username}</h2>
                    <div
                      className="bg-dark p-4"
                      style={{
                        borderRadius: 5,
                        width: 'fit-content',
                        overflow: 'auto',
                        textAlign: 'left',
                        fontSize: 20,
                      }}
                    >
                      <div className="row">
                        <div className="col badge badge-danger mr-2">
                          <span
                            style={{
                              color: 'black',
                              textTransform: 'uppercase',
                              fontWeight: 'bold',
                            }}
                          >
                            Health:
                          </span>
                          100/100
                        </div>
                        <div className="col badge badge-success mr-2">
                          <span
                            style={{
                              color: 'black',
                              textTransform: 'uppercase',
                              fontWeight: 'bold',
                            }}
                          >
                            Energy:
                          </span>
                          100/100
                        </div>
                        <div className="col badge badge-primary mr-2">
                          <span
                            style={{
                              color: 'black',
                              textTransform: 'uppercase',
                              fontWeight: 'bold',
                            }}
                          >
                            Level:
                          </span>
                          100/100
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col badge badge-secondary mr-2">
                          <span
                            style={{
                              color: 'black',
                              textTransform: 'uppercase',
                              fontWeight: 'bold',
                            }}
                          >
                            Company:
                          </span>
                          Bobba Government
                        </div>
                        <div
                          className="col badge badge-warning mr-2"
                          style={{color: 'white'}}
                        >
                          <span
                            style={{
                              color: 'black',
                              textTransform: 'uppercase',
                              fontWeight: 'bold',
                            }}
                          >
                            Gang:
                          </span>
                          No Gang
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col"
                    style={{
                      marginTop: 40,
                      width: 'fit-content',
                      borderLeft: '2px solid white',
                    }}
                  >
                    <div className="row">
                      <div className="col-6 mb-4">
                        <span
                          style={{
                            color: 'white',
                            fontSize: '2.2rem',
                            fontWeight: 'bold',
                          }}
                        >
                          20
                        </span>
                        <br />
                        <span style={{color: 'white', fontSize: 25}}>
                          Kills
                        </span>
                      </div>
                      <div className="col-6 mb-4">
                        <span
                          style={{
                            color: 'white',
                            fontSize: '2.2rem',
                            fontWeight: 'bold',
                          }}
                        >
                          15
                        </span>
                        <br />
                        <span style={{color: 'white', fontSize: 25}}>
                          Deaths
                        </span>
                      </div>
                      <div className="col-6 mb-4">
                        <span
                          style={{
                            color: 'white',
                            fontSize: '2.2rem',
                            fontWeight: 'bold',
                          }}
                        >
                          1.33
                        </span>
                        <br />
                        <span style={{color: 'white', fontSize: 25}}>KDR</span>
                      </div>
                      <div className="col-6 mb-4">
                        <span
                          style={{
                            color: 'white',
                            fontSize: '2.2rem',
                            fontWeight: 'bold',
                          }}
                        >
                          30
                        </span>
                        <br />
                        <span style={{color: 'white', fontSize: 25}}>
                          hours played
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="jumbotron">
                  <h1>News Slider</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-12">
                <div className="jumbotron">
                  <h1>Hot Rooms</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="jumbotron">
                  <h1>Friends Online</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
