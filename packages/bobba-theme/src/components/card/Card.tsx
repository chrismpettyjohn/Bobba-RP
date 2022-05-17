import React from 'react';
import {CardProps} from './Card.types';

export function Card({title, subtitle, children}: CardProps) {
  return (
    <div className="card">
      <div className="card-background" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {subtitle && (
          <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        )}
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
}
