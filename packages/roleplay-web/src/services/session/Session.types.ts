import {RPUser} from '@instinct-plugin/bobba-rp-types';

export interface RPSessionService {
  getRPUser(): Promise<RPUser>;
}
