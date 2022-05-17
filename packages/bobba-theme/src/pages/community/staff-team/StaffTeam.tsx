import './StaffTeam.css';
import React from 'react';
import {setURL} from '@instinct-web/core';
import {CommunityLayout} from '../CommunityLayoutProps';

setURL('community/staff', <StaffTeam />);

export function StaffTeam() {
  return (
    <CommunityLayout>
      <div className="container">
        <div className="row w-100">
          <div className="col-12">
            <h2 className="text-center">Founders</h2>
          </div>
          {Array.from(Array(10)).map((_, index) => (
            <div className="col-4" key={`staff_${index}`}>
              <div className="team-item" data-v-e1e4453e="" data-v-211add89="">
                <img
                  className="bg-image"
                  src="https://bithotel.io/assets/team_photo_2.838ac104.png"
                  data-v-e1e4453e=""
                />
                <div className="circle teamCircle" data-v-e1e4453e="">
                  <img
                    src="https://www.habbo.com.br/habbo-imaging/avatarimage?figure=hd-180-1.ch-3015-1426.lg-3023-110.sh-3252-91-1408.hr-802-40.cc-3246-1425.wa-3263-1325-66.ha-1021-110.&size=l&headonly=1"
                    data-v-e1e4453e=""
                    style={{margin: '0 auto'}}
                  />
                </div>
                <div className="team-item-info" data-v-e1e4453e="">
                  <span className="name" data-v-e1e4453e="">
                    Chris
                  </span>
                  <span className="title" data-v-e1e4453e="">
                    Developer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommunityLayout>
  );
}
