import React from 'react';
import {setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';
import {ListingCard} from '../../../components/listing-card/ListingCard';

setURL('lifestyle/companies', <ListCompanies />);

export function ListCompanies() {
  return (
    <LifestyleLayout>
      <div className="cards" data-v-581a1f10="">
        <ListingCard title="Police">
          <div className="information" data-v-526082a5="">
            <div className="info-segment" data-v-526082a5="">
              <span className="tag" data-v-526082a5="">
                CEO
              </span>
              <div className="value-field" data-v-526082a5="">
                Chris
              </div>
            </div>
            <div className="info-segment" data-v-526082a5="">
              <span className="tag" data-v-526082a5="">
                Employees
              </span>
              <div className="value-field" data-v-526082a5="">
                1
              </div>
            </div>
          </div>
        </ListingCard>
      </div>
    </LifestyleLayout>
  );
}
