import React from 'react';
import {Card} from '../../../generic/card/Card';
import {UserProfileWidgetProps} from '../UserProfile.types';

export function RPStats({rpStats}: UserProfileWidgetProps) {
  const shownStats: Array<{label: string; value: number}> = [
    {
      label: 'Kills',
      value: rpStats?.kills?.total ?? 0,
    },
    {
      label: 'Deaths',
      value: rpStats?.deaths?.total ?? 0,
    },
    {
      label: 'Arrests Made',
      value: rpStats?.police?.arrestsMade ?? 0,
    },
    {
      label: 'Times Arrested',
      value: rpStats?.police?.timesArrested ?? 0,
    },
    {
      label: 'Times Evaded',
      value: rpStats?.police?.timesEvaded ?? 0,
    },
  ];

  return (
    <Card header="Stats">
      {shownStats.map((stat, statIndex) => (
        <div className="row mb-2" key={`rp_stat_${stat.label}_${statIndex}`}>
          <div className="col">
            <b>{stat.label}:</b>
          </div>
          <div className="col">{stat.value}</div>
        </div>
      ))}
    </Card>
  );
}
