import {userService} from '../../services/user';
import {UserRPStats} from '@bobba-rp/types';
import {createFetchHook} from '@instinct-web/core';

export const useFetchRPStatsByUsername = (username: string) =>
  createFetchHook<UserRPStats>(
    () => userService.getRPStats(username),
    username
  );
