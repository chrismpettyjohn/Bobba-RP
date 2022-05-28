import {ReactNode} from 'react';

export interface ListingCardProps {
  tag?: ListingCardTagProps;
  rating?: ListingCardRatingProps;
  image?: ListingCardImageProps;
  title: ReactNode;
  header?: ReactNode;
  children: ReactNode;
}

export interface ListingCardRatingProps {
  stars: 1 | 2 | 3 | 4 | 5;
  title: ReactNode;
}

export interface ListingCardTagProps {
  title: ReactNode;
  color: string;
}

export interface ListingCardImageProps {
  src: string;
  background: string;
}
