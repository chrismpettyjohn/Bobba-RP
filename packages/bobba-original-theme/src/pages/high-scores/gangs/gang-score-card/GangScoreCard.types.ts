import {ReactNode} from 'react';
import {Gang} from '@instinct-plugin/bobba-rp-types';

export interface GangScoreCardProps {
  header: ReactNode;
  headerIcon: string;
  gangs: Gang[];
  gangStat: (user: Gang) => any;
  gangStatLabel: ReactNode;
}
