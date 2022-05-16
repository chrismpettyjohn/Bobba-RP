import React from 'react';
import {setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';
import {ListingCard} from '../../../components/listing-card/ListingCard';

setURL('lifestyle/jobs', <ListJobs />);

export function ListJobs() {
  return (
    <LifestyleLayout results={1}>
      <div className="cards" data-v-581a1f10="">
        <ListingCard
          title="Police Officer"
          image={{
            background: 'red',
            src: 'https://habbo-gifs.s3.amazonaws.com/2602898133.gif',
          }}
        >
          <div className="information" data-v-526082a5="">
            <div className="info-segment" data-v-526082a5="">
              <span className="tag" data-v-526082a5="">
                Pay Per Shift
              </span>
              <div className="value-field" data-v-526082a5="">
                $30
              </div>
            </div>
          </div>
        </ListingCard>
      </div>
    </LifestyleLayout>
  );
}
