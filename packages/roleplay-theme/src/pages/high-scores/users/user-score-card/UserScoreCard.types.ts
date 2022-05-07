import {ReactNode} from 'react';
import {RPUser} from '@instinct-plugin/bobba-rp-types';

export interface UserScoreCardProps {
  header: ReactNode;
  headerIcon: string;
  users: RPUser[];
  userStat: (user: RPUser) => any;
  userStatLabel: ReactNode;
}
