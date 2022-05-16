import React from 'react';
import {Link} from 'wouter';
import {setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';
import {exampleBusinessPosition} from '@instinct-plugin/bobba-rp-types';
import {SearchFilters} from '../../../components/search-filters/SearchFilters';
import {JobListingCard} from '../../../components/job-listing-card/JobListingCard';

setURL('lifestyle/jobs', <ListJobs />);

export function ListJobs() {
  const getSearchFilters = () => {
    return (
      <>
        <SearchFilters
          filters={[
            {
              type: 'select',
              label: 'Pay',
              options: [],
            },
            {
              type: 'select',
              label: 'Company',
              options: [],
            },
            {
              type: 'select',
              label: 'Level',
              options: [
                {
                  label: 'Beginner',
                  value: 'beginner',
                },
                {
                  label: 'Experienced',
                  value: 'experienced',
                },
                {
                  label: 'Management',
                  value: 'management',
                },
              ],
            },
            {
              type: 'select',
              label: 'Sector',
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
        <Link to="/lifestyle/jobs/1">
          <span style={{display: 'contents'}}>
            <JobListingCard job={exampleBusinessPosition} />
          </span>
        </Link>
      </div>
    </LifestyleLayout>
  );
}
