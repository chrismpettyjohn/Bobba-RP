import React from 'react';
import {LabelProps} from './Label.types';

export function Label({children}: LabelProps) {
  return <label className="sr-only">{children}</label>;
}
