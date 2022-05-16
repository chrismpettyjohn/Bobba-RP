import React from 'react';
import {setURL} from '@instinct-web/core';
import {UndergroundLayout} from '../UndergroundLayout';

setURL('underground/territory', <ListTerritory />);

export function ListTerritory() {
  return <UndergroundLayout>Territory</UndergroundLayout>;
}
