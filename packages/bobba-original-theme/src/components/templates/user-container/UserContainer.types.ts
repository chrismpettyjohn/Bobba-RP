import {RPUser} from '@instinct-plugin/bobba-rp-types';

export interface UserContainerProps {
  user: RPUser;
  showGang?: boolean;
  showJob?: boolean;
  showPolitics?: boolean;
}
