import {AxiosResponse} from 'axios';
import {UserService} from './User.types';
import {UserRPStats} from '@bobba-rp/types';
import {User} from '@instinct-prj/interface';
import {backendAPI} from '@instinct-web/core';

export class UserServiceImplementation implements UserService {
  async getRPStats(username: string) {
    const rpStats: AxiosResponse<UserRPStats> = await backendAPI.get(
      `users/profile/${username}/rp`
    );
    return rpStats.data;
  }

  async searchByUsername(username: string) {
    const matchingUsers: AxiosResponse<User[]> = await backendAPI.get(
      `search-users/${username}`
    );
    return matchingUsers.data;
  }
}
