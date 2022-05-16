import React from 'react';
import {setURL} from '@instinct-web/core';
import {LifestyleLayout} from '../LifestyleLayout';

setURL('lifestyle/stocks', <ListStocks />);

export function ListStocks() {
  return <LifestyleLayout>Stcoks</LifestyleLayout>;
}
