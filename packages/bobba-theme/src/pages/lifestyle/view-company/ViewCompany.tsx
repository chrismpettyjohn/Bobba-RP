import React from 'react';
import {Link, useRoute} from 'wouter';
import {Icon, setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';
import {exampleBusiness} from '@instinct-plugin/bobba-rp-types';

setURL('lifestyle/companies/:companyID', <ViewCompany />);

export function ViewCompany() {
  const [match, params] = useRoute<{companyID: string}>(
    '/lifestyle/companies/:companyID'
  );

  const business = exampleBusiness;

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
                <h3 data-v-8f0c54c8="">{business.name}</h3>
              </div>
              <div className="nft-preview" data-v-8f0c54c8="">
                <div className="circle uncommon" data-v-8f0c54c8="" />
                <div className="fade uncommon" data-v-8f0c54c8="" />
                <img
                  className="room-image"
                  src={'https://www.habborator.org/badges/badges/NWB.gif'}
                  data-v-8f0c54c8=""
                />
              </div>
            </div>
            <div className="right" data-v-8f0c54c8="">
              <div className="information-bar" data-v-b1f467f2="">
                <div className="info-segment" data-v-b1f467f2="">
                  <span className="tag" data-v-b1f467f2="">
                    Sector
                  </span>
                  <div className="season1" data-v-b1f467f2="">
                    Security
                  </div>
                </div>
                <div className="vertical-line" data-v-b1f467f2="" />
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
                    <button className="btn btn-secondary btn-block">
                      Open Positions
                    </button>
                  </div>
                </div>
                <div className="description" data-v-8f0c54c8="">
                  <h4 data-v-8f0c54c8="">Description</h4>
                  <p data-v-8f0c54c8="">{business.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LifestyleLayout>
  );
}
