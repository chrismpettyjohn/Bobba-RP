import React from 'react';
import {Icon} from '@instinct-web/core';
import {Card} from '../../../generic/card/Card';
import {UserProfileWidgetProps} from '../UserProfile.types';

export function RPStats({rpStats}: UserProfileWidgetProps) {
  const shownStats: Array<{label: string; icon: string; value: number}> = [
    {
      label: 'Kills',
      icon: 'bullseye',
      value: rpStats?.kills?.total ?? 0,
    },
    {
      label: 'Deaths',
      icon: 'skull',
      value: rpStats?.deaths?.total ?? 0,
    },
    {
      label: 'Arrests Made',
      icon: 'siren',
      value: rpStats?.police?.arrestsMade ?? 0,
    },
    {
      label: 'Times Arrested',
      icon: 'lock',
      value: rpStats?.police?.timesArrested ?? 0,
    },
    {
      label: 'Times Evaded',
      icon: 'running',
      value: rpStats?.police?.timesEvaded ?? 0,
    },
  ];

  return (
    <Card header="Stats">
      {shownStats.map((stat, statIndex) => (
        <div className="row mb-2" key={`rp_stat_${stat.label}_${statIndex}`}>
          <div className="col">
            <b>
              <Icon type={stat.icon} />
              {stat.label}:
            </b>
          </div>
          <div className="col text-right">{stat.value}</div>
        </div>
      ))}
    </Card>
  );
}
