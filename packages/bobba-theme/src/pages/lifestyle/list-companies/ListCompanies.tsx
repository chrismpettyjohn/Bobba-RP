import React from 'react';
import {Link} from 'wouter';
import {setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';
import {exampleBusiness} from '@instinct-plugin/bobba-rp-types';
import {CompanyListingCard} from '../../../components/company-listing-card/CompanyListingCard';

setURL('lifestyle/companies', <ListCompanies />);

export function ListCompanies() {
  return (
    <LifestyleLayout results={0}>
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
