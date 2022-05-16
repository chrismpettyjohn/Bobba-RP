import React from 'react';
import {Link, useRoute} from 'wouter';
import {Icon, setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';

setURL('lifestyle/jobs/:jobID', <ViewJob />);

export function ViewJob() {
  const [match, params] = useRoute<{jobID: string}>('/lifestyle/jobs/:jobID');

  return (
    <LifestyleLayout>
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
              <h3 data-v-8f0c54c8="">Police Officer</h3>
            </div>
            <div className="nft-preview" data-v-8f0c54c8="">
              <div className="circle uncommon" data-v-8f0c54c8="" />
              <div className="fade uncommon" data-v-8f0c54c8="" />
              <img
                className="room-image"
                src={
                  'https://www.habbo.com.br/habbo-imaging/avatarimage?figure=hd-629-15.ch-665-1331.he-3974-1408.ha-3763-1408.ca-4344-1408.fa-4185-97.hr-4182-1403-45.cc-4278-1325-1408.sh-908-110.lg-720-1331&action=std,wav&gesture=eyb&direction=2&head_direction=2&size=n&img_format=png'
                }
                data-v-8f0c54c8=""
              />
            </div>
          </div>
          <div className="right" data-v-8f0c54c8="">
            <div className="information-bar" data-v-8f0c54c8="">
              <div className="info-segment" data-v-8f0c54c8="">
                <span className="tag" data-v-8f0c54c8="">
                  Pay Per Shift
                </span>
                <div className="value-field" data-v-8f0c54c8="">
                  $30
                </div>
              </div>
              <div className="info-segment" data-v-8f0c54c8="">
                <span className="tag" data-v-8f0c54c8="">
                  Level
                </span>
                <div className="value-field" data-v-8f0c54c8="">
                  Experienced
                </div>
              </div>
              <div className="info-segment" data-v-8f0c54c8="">
                <span className="tag" data-v-8f0c54c8="">
                  Sector
                </span>
                <div className="value-field" data-v-8f0c54c8="">
                  Security
                </div>
              </div>
              <div className="info-segment" data-v-8f0c54c8="">
                <span className="tag" data-v-8f0c54c8="">
                  Company
                </span>
                <div className="value-field" data-v-8f0c54c8="">
                  Police
                </div>
              </div>
            </div>
            <div className="buy-bar" data-v-8f0c54c8="">
              <div className="ownerOf" data-v-8f0c54c8="">
                <span className="owner" data-v-8f0c54c8="">
                  Owner:
                </span>
                <span data-v-8f0c54c8=""> City of Bobba</span>
              </div>
              <div className="description" data-v-8f0c54c8="">
                <h4 data-v-8f0c54c8="">Description</h4>
                <p data-v-8f0c54c8="">
                  The pinnacle of degenerates, a true mascot for the short
                  squeeze movement and thereby flamboyantly against
                  short-sellers. Apes into projects but never sells, hodl's his
                  bags.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LifestyleLayout>
  );
}
