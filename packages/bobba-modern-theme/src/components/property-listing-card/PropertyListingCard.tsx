import React from 'react';
import {ListingCard} from '../listing-card/ListingCard';
import {PropertyListingCardProps} from './PropertyListingCard.types';

export function PropertyListingCard({property}: PropertyListingCardProps) {
  return (
    <ListingCard title={property.room.roomName}>
      <div className="information" data-v-526082a5="">
        <div className="info-segment" data-v-526082a5="">
          <span className="tag" data-v-526082a5="">
            Listed Price
          </span>
          <div className="value-field" data-v-526082a5="">
            {property.buyNowPrice}
          </div>
        </div>
      </div>
    </ListingCard>
  );
}
