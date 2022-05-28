import React from 'react';

export function AboutInstinct() {
  return (
    <a
      href="https://instinct.dev"
      target="_blank"
      style={{textDecoration: 'none'}}
    >
      <div style={{margin: '0 auto'}}>
        <div
          style={{
            color: '#0D7776',
            fontSize: 35,
            fontWeight: 'bold',
            letterSpacing: 1.4,
            width: '100%',
          }}
        >
          INSTINCT
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
            letterSpacing: 1.4,
            marginLeft: 70,
            marginTop: -15,
          }}
        >
          By LeChris
        </div>
      </div>
    </a>
  );
}
