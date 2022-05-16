import React from 'react';
import {Link} from 'wouter';
import {setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';
import {exampleProperty} from '@instinct-plugin/bobba-rp-types';
import {SearchFilters} from '../../../components/search-filters/SearchFilters';
import {PropertyListingCard} from '../../../components/property-listing-card/PropertyListingCard';

setURL('lifestyle/properties', <ListJobs />);

export function ListJobs() {
  const getSearchFilters = () => {
    return (
      <>
        <SearchFilters
          filters={[
            {
              type: 'select',
              label: 'Price',
              options: [],
            },
            {
              type: 'select',
              label: 'Size',
              options: [],
            },
            {
              type: 'select',
              label: 'Neighborhood',
              options: [],
            },
            {
              type: 'select',
              label: 'Realtor',
              options: [],
            },
          ]}
        />
        <div style={{height: 15, width: '100%'}} />
      </>
    );
  };

  return (
    <LifestyleLayout results={1} header={getSearchFilters()}>
      <div className="cards" data-v-581a1f10="">
        <Link to="/lifestyle/properties/1">
          <span style={{display: 'contents'}}>
            <PropertyListingCard property={exampleProperty} />
          </span>
        </Link>
      </div>
    </LifestyleLayout>
  );
}
