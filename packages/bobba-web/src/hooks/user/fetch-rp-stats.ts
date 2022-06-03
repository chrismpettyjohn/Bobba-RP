import {userService} from '../../services/user';
import {UserRPStats} from '@instinct-plugin/bobba-rp-types';
import {createFetchHook} from '@instinct-web/core';

export const useFetchRPStatsByUsername = (username: string) =>
  createFetchHook<UserRPStats>(
    () => userService.getRPStats(username),
    username
  );
