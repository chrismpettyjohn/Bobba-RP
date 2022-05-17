import React from 'react';
import {Avatar} from '@instinct-web/core';

export function AltWelcomeBack() {
  return (
    <div style={{color: 'rgb(64, 200, 215)'}}>
      <div style={{display: 'flex'}}>
        <div
          style={{
            background: 'rgb(64, 200, 215)',
            padding: 0,
            height: 55,
            width: 55,
            textAlign: 'center',
            borderRadius: '100%',
            marginRight: 10,
          }}
        >
          <Avatar look="-" headOnly />
        </div>
        <div style={{marginTop: -5}}>Test</div>
      </div>
    </div>
  );
}
