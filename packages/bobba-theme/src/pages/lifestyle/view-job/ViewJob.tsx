import React from 'react';
import {Link, useRoute} from 'wouter';
import {Icon, setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';
import {exampleBusinessPosition} from '@instinct-plugin/bobba-rp-types';

setURL('lifestyle/jobs/:jobID', <ViewJob />);

export function ViewJob() {
  const [match, params] = useRoute<{jobID: string}>('/lifestyle/jobs/:jobID');

  const job = exampleBusinessPosition;

  return (
    <LifestyleLayout>
      <div className="listings" data-v-37a7da9c="">
        <div data-v-8f0c54c8="">
          <div className="roomSingle" data-v-8f0c54c8="">
            <div className="left" data-v-8f0c54c8="">
              <Link to="/lifestyle/jobs">
                <div
                  className="back"
                  data-v-8f0c54c8=""
                  style={{cursor: 'pointer'}}
                >
                  <Icon type="caret-left" style={{marginRight: 4}} />
                  Back
                </div>
              </Link>
              <div className="nft-title-holder" data-v-8f0c54c8="">
                <h3 data-v-8f0c54c8="">{job.name}</h3>
              </div>
              <div className="nft-preview" data-v-8f0c54c8="">
                <div className="circle uncommon" data-v-8f0c54c8="" />
                <div className="fade uncommon" data-v-8f0c54c8="" />
                <img
                  className="room-image"
                  src={`https://www.habbo.com.br/habbo-imaging/avatarimage?figure=${job.maleUniform}&action=std,wav&gesture=eyb&direction=2&head_direction=2&size=n&img_format=png`}
                  data-v-8f0c54c8=""
                />
              </div>
            </div>
            <div className="right" data-v-8f0c54c8="">
              <div className="information-bar" data-v-b1f467f2="">
                <div className="info-segment" data-v-b1f467f2="">
                  <span className="tag" data-v-b1f467f2="">
                    Pay
                  </span>
                  <div
                    className="value-field no-background"
                    data-v-b1f467f2=""
                    style={{width: 'fit-content'}}
                  >
                    $ {job.shiftWage}
                    <br data-v-b1f467f2="" />
                    <span data-v-b1f467f2="" style={{color: 'grey'}}>
                      Per Shift
                    </span>
                  </div>
                </div>
                <div className="info-segment" data-v-b1f467f2="">
                  <span className="tag" data-v-b1f467f2="">
                    Sector
                  </span>
                  <div className="season1" data-v-b1f467f2="">
                    Security
                  </div>
                </div>
                <div className="vertical-line" data-v-b1f467f2="" />
                <div className="info-segment" data-v-b1f467f2="">
                  <span className="tag" data-v-b1f467f2="">
                    Positions Left
                  </span>
                  <div
                    className="value-field no-background"
                    data-v-b1f467f2=""
                    style={{width: 'fit-content'}}
                  >
                    {job.openPositions}
                  </div>
                </div>
                <div className="vertical-line" data-v-b1f467f2="" />
                <div className="info-segment" data-v-b1f467f2="">
                  <span className="tag" data-v-b1f467f2="">
                    Established
                  </span>
                  <div
                    className="value-field no-background"
                    data-v-b1f467f2=""
                    style={{width: 'fit-content'}}
                  >
                    May 01, 2022
                  </div>
                </div>
                <div className="info-segment" data-v-b1f467f2="">
                  <span className="tag" data-v-b1f467f2="">
                    Total Employees
                  </span>
                  <div
                    className="value-field no-background"
                    data-v-b1f467f2=""
                    style={{width: 'fit-content'}}
                  >
                    10
                  </div>
                </div>
              </div>
              <div className="buy-bar" data-v-8f0c54c8="">
                <div className="row">
                  <div className="col d-flex">
                    <Link
                      to="/lifestyle/companies/1"
                      style={{cursor: 'pointer'}}
                    >
                      <div className="ownerOf mr-4" data-v-b1f467f2="">
                        <span className="owner" data-v-b1f467f2="">
                          Company:
                        </span>
                        <span data-v-b1f467f2="">{job.businessName}</span>
                      </div>
                    </Link>
                    <Link to="/profiles/Chris" style={{cursor: 'pointer'}}>
                      <div className="ownerOf" data-v-b1f467f2="">
                        <span className="owner" data-v-b1f467f2="">
                          Owner:
                        </span>
                        <span data-v-b1f467f2="">Chris</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <button className="btn btn-success btn-block">
                      Accept Job
                    </button>
                  </div>
                </div>
                <div className="description" data-v-8f0c54c8="">
                  <h4 data-v-8f0c54c8="">Description</h4>
                  <p data-v-8f0c54c8="">Recruits suck</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LifestyleLayout>
  );
}
