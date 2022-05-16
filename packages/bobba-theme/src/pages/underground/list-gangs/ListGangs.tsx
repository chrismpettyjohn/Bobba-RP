import React from 'react';
import {setURL} from '@instinct-web/core';
import {UndergroundLayout} from '../UndergroundLayout';

setURL('underground/gangs', <ListGangs />);

export function ListGangs() {
  return <UndergroundLayout>Gangs</UndergroundLayout>;
}
