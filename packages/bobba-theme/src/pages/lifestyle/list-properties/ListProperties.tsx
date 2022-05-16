import React from 'react';
import {setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';

setURL('lifestyle/properties', <ListProperties />);

export function ListProperties() {
  return <LifestyleLayout results={0}>Properties</LifestyleLayout>;
}
