import {UserProfile} from '@instinct-prj/interface';
import {UserRPStats} from '@instinct-plugin/bobba-rp-types';

export interface UserProfileWidgetProps {
  profile?: UserProfile;
  rpStats?: UserRPStats;
}
