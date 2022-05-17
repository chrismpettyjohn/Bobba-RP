import React, {useContext} from 'react';
import {Card} from '../../../components/card/Card';
import {UserLayout} from '../../../layout/user-layout/UserLayout';
import {NewsSlider} from '../../../components/news-slider/NewsSlider';
import {
  Avatar,
  configContext,
  sessionContext,
  setURL,
} from '@instinct-web/core';

setURL('me', <MePage />);

export function MePage() {
  const {user} = useContext(sessionContext);
  const {config} = useContext(configContext);

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
                          Hours Played
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <NewsSlider />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-12">
                <Card title="Announcement" subtitle="Beta Notice">
                  <p>
                    {config.siteName} is still undergoing development and
                    features may change suddenly without notice.
                  </p>
                  <p>
                    Please report any bugs you encounter on Discord in{' '}
                    <b>#feedback</b>
                  </p>
                </Card>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <Card title="Friends Online">
                  <div className="container">
                    <div className="row">
                      {Array.from(new Array(6)).map((_, index) => (
                        <div className="mb-4 col-2" key={`friend_${index}`}>
                          <div
                            style={{
                              background:
                                'linear-gradient(264.06deg, rgb(4, 18, 20) -68.99%, rgb(64, 200, 215) 60.01%, rgb(22, 96, 104) 130.88%)',
                              border: '1px solid white',
                              borderRadius: '100%',
                              height: 125,
                              width: 125,
                              textAlign: 'center',
                            }}
                          >
                            <img src="https://www.habbo.com.br/habbo-imaging/avatarimage?figure=hd-180-1.ch-3015-1426.lg-3023-110.sh-3252-91-1408.hr-802-40.cc-3246-1425.wa-3263-1325-66.ha-1021-110.&size=l&headonly=1" />
                          </div>
                          <div
                            style={{
                              background: '',
                              color: 'white',
                              marginTop: 10,
                              borderRadius: 5,
                              fontSize: 25,
                              width: 125,
                            }}
                          >
                            L{index}L TOE
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
