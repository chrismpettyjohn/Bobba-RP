import {ReactNode} from 'react';
import {Gang} from '@bobba-rp/types';

export interface GangScoreCardProps {
  header: ReactNode;
  headerIcon: string;
  gangs: Gang[];
  gangStat: (user: Gang) => any;
  gangStatLabel: ReactNode;
}
