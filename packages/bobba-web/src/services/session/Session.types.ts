import {RPUser} from '@bobba-rp/types';

export interface RPSessionService {
  getRPUser(): Promise<RPUser>;
}
