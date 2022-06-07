import React from 'react';
import {setURL} from '@instinct-web/core';
import {GangEditor} from './gang-editor/GangEditor';

setURL('gangs/create', <CreateGang />);

export function CreateGang() {
  return <GangEditor />;
}
