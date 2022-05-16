import React from 'react';
import {useRoute} from 'wouter';
import {setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';

setURL('lifestyle/properties/:propertyID', <ViewProperty />);

export function ViewProperty() {
  const [match, params] = useRoute<{propertyID: string}>(
    '/lifestyle/properties/:propertyID'
  );

  return (
    <LifestyleLayout>
      <span style={{color: 'white', fontSize: 30}}>
        Property ID: {params?.propertyID}
      </span>
    </LifestyleLayout>
  );
}
