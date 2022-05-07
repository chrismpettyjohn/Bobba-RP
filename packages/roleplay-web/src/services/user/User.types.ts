import {UserRPStats} from '@instinct-plugin/bobba-rp-types';

export interface UserService {
  getRPStats(username: string): Promise<UserRPStats>;
}
