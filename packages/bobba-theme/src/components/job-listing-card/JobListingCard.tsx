import React, {ReactNode} from 'react';
import {ListingCard} from '../listing-card/ListingCard';
import {JobListingCardProps} from './JobListingCard.types';

export function JobListingCard({job}: JobListingCardProps) {
  const jobInformation: Array<{label: ReactNode; value: ReactNode}> = [
    {
      label: 'Pay Per Shift',
      value: `$ ${job.shiftWage.toLocaleString()}`,
    },
    {
      label: 'Vacant Positions',
      value: job.openPositions.toLocaleString(),
    },
  ];

  return (
    <ListingCard
      title={job.name}
      image={{
        background: 'linear-gradient(90deg,#2500E0 33.58%,#F6F8F7 85.82%)',
        src: `https://www.habbo.com.br/habbo-imaging/avatarimage?figure=${job.maleUniform}&action=std,wav&gesture=eyb&direction=2&head_direction=2&size=n&img_format=png`,
      }}
    >
      <span style={{fontSize: 20, color: 'white', textTransform: 'uppercase'}}>
        {job.businessName}
      </span>
      <div style={{flexWrap: 'wrap'}}>
        {jobInformation.map(infoBlock => (
          <div
            className="information"
            data-v-526082a5=""
            key={`job_listing_${job.id}_${infoBlock.label}`}
            style={{marginTop: '4%'}}
          >
            <div className="info-segment" data-v-526082a5="">
              <span
                className="tag"
                data-v-526082a5=""
                style={{color: 'white', fontWeight: 'bold'}}
              >
                {infoBlock.label}
              </span>
              <div className="value-field" data-v-526082a5="">
                {infoBlock.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ListingCard>
  );
}
