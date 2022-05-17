import React from 'react';
import {ListingCard} from '../listing-card/ListingCard';
import {ArticleListingCardProps} from './ArticleListingCard.types';

export function ArticleListingCard({article}: ArticleListingCardProps) {
  return (
    <ListingCard
      image={{background: article.category.color, src: article.thumbnailImage}}
      title={article.title}
    >
      <p data-v-419af0ce="" style={{color: 'white'}}>
        {article.description}
      </p>
    </ListingCard>
  );
}
