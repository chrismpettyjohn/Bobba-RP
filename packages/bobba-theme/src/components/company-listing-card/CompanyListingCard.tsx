import React from 'react';
import {ListingCard} from '../listing-card/ListingCard';
import {CompanyListingCardProps} from './CompanyListingCard.types';

export function CompanyListingCard({company}: CompanyListingCardProps) {
  return (
    <ListingCard title={company.name}>
      <div className="information" data-v-526082a5="">
        <div className="info-segment" data-v-526082a5="">
          <span className="tag" data-v-526082a5="">
            CEO
          </span>
          <div className="value-field" data-v-526082a5="">
            {company.owner.username}
          </div>
        </div>
        <div className="info-segment" data-v-526082a5="">
          <span className="tag" data-v-526082a5="">
            About
          </span>
          <div className="value-field" data-v-526082a5="">
            {company.desc}
          </div>
        </div>
      </div>
    </ListingCard>
  );
}
