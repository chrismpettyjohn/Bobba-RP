import React from 'react';
import {setURL} from '@instinct-web/core';
import {UndergroundLayout} from '../UndergroundLayout';

setURL('underground/bounties', <ListBounties />);

export function ListBounties() {
  return <UndergroundLayout>Bounties</UndergroundLayout>;
}
