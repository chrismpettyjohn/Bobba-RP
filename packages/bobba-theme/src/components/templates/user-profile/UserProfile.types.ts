import {UserProfile} from '@instinct-prj/interface';
import {UserRPStats} from '@bobba-rp/types';

export interface UserProfileProps {
  username: string;
}

export interface UserProfileWidgetProps {
  profile?: UserProfile;
  rpStats?: UserRPStats;
}
