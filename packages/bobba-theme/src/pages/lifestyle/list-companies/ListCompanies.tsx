import React from 'react';
import {Link} from 'wouter';
import {setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';
import {exampleBusiness} from '@instinct-plugin/bobba-rp-types';
import {CompanyListingCard} from '../../../components/company-listing-card/CompanyListingCard';
import {SearchFilters} from '../../../components/search-filters/SearchFilters';

setURL('lifestyle/companies', <ListCompanies />);

export function ListCompanies() {
  const getSearchFilters = () => {
    return (
      <>
        <SearchFilters
          filters={[
            {
              type: 'select',
              label: 'Location',
              options: [],
            },
            {
              type: 'select',
              label: 'Industry',
              options: [],
            },
            {
              type: 'select',
              label: 'Company Size',
              options: [],
            },
            {
              type: 'select',
              label: 'Job Listings',
              options: [],
            },
          ]}
        />
        <div style={{height: 15, width: '100%'}} />
      </>
    );
  };

  return (
    <LifestyleLayout results={0} header={getSearchFilters()}>
      <div className="cards" data-v-581a1f10="">
        <Link to="/lifestyle/companies/1">
          <span style={{display: 'contents'}}>
            <CompanyListingCard company={exampleBusiness} />
          </span>
        </Link>
      </div>
    </LifestyleLayout>
  );
}
