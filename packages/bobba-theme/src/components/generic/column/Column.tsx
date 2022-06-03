import React from 'react';
import {ColumnProps} from './Column.types';

export function Column({children, side, style}: ColumnProps) {
  return (
    <div className={`${side}-side`} style={style}>
      {children}
    </div>
  );
}
