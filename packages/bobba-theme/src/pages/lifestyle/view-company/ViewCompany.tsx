import React from 'react';
import {useRoute} from 'wouter';
import {setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';

setURL('lifestyle/companies/:companyID', <ViewCompany />);

export function ViewCompany() {
  const [match, params] = useRoute<{companyID: string}>(
    '/lifestyle/companies/:companyID'
  );

  return (
    <LifestyleLayout>
      <span style={{color: 'white', fontSize: 30}}>
        Company ID: {params?.companyID}
      </span>
    </LifestyleLayout>
  );
}
