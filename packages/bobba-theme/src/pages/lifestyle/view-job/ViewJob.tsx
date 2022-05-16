import React from 'react';
import {useRoute} from 'wouter';
import {setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';

setURL('lifestyle/jobs/:jobID', <ViewJob />);

export function ViewJob() {
  const [match, params] = useRoute<{jobID: string}>('/lifestyle/jobs/:jobID');

  return (
    <LifestyleLayout>
      <span style={{color: 'white', fontSize: 30}}>
        JOB ID: {params?.jobID}
      </span>
    </LifestyleLayout>
  );
}
