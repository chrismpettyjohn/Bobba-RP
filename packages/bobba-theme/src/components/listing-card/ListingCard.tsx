import React from 'react';
import {ListingCardProps} from './ListingCard.types';

export function ListingCard({
  title,
  tag,
  rating,
  image,
  children,
}: ListingCardProps) {
  return (
    <div
      className="container"
      data-v-526082a5=""
      data-v-581a1f10=""
      style={{minHeight: 555}}
    >
      <div data-v-526082a5="">
        {tag && (
          <div
            className="season"
            data-v-526082a5=""
            style={{background: tag.color}}
          >
            {tag.title}
          </div>
        )}
        {rating && (
          <div className="rarity" data-v-526082a5="">
            {rating.title}
            <div
              className="rarity-holder"
              data-v-52ab2792=""
              data-v-526082a5=""
            >
              {Array.from(Array(rating.stars).keys()).map(
                (rating, ratingIndex) => (
                  <div
                    className="rarity-circle rare"
                    data-v-52ab2792=""
                    key={`listing_${title}_rating_${ratingIndex}`}
                  />
                )
              )}
            </div>
          </div>
        )}
        {image && (
          <div
            className="circle rare"
            data-v-526082a5=""
            style={{background: image.background}}
          >
            <img src={image.src} data-v-526082a5="" />
          </div>
        )}
        <div className="name" data-v-526082a5="">
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}
