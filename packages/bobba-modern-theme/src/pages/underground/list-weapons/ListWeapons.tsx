import React from 'react';
import {setURL} from '@instinct-web/core';
import {UndergroundLayout} from '../UndergroundLayout';

setURL('underground/weapons', <ListWeapons />);

export function ListWeapons() {
  return <UndergroundLayout>Weapons</UndergroundLayout>;
}
