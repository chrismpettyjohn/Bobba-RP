import {UserRPStats} from '@bobba-rp/types';
import {UserProfile} from '@instinct-prj/interface';

export interface UserProfileProps {
  username: string;
}

export interface UserProfileWidgetProps {
  profile?: UserProfile;
  rpStats?: UserRPStats;
}
