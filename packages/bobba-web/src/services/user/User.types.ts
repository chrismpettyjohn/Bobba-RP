import {UserRPStats} from '@bobba-rp/types';

export interface UserService {
  getRPStats(username: string): Promise<UserRPStats>;
}
