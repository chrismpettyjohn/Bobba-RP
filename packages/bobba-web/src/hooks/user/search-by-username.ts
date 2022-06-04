import {User} from '@instinct-prj/interface';
import {userService} from '../../services/user';
import {createFetchHook} from '@instinct-web/core';

export const searchByUsername = (username: string) =>
  createFetchHook<User[]>(
    () => userService.searchByUsername(username),
    username
  );
