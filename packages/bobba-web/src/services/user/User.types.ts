import {UserRPStats} from '@bobba-rp/types';
import {User} from '@instinct-prj/interface';

export interface UserService {
  getRPStats(username: string): Promise<UserRPStats>;
  searchByUsername(username: string): Promise<User[]>;
}
