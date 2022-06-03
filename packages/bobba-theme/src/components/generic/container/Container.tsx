import React from 'react';
import {ContainerProps} from './Container.types';

export function Container({children, style}: ContainerProps) {
  return (
    <div className="page-content" style={style}>
      {children}
    </div>
  );
}
