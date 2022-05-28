import {userService} from '@instinct-web/core';

export async function isUsernameTaken(username: string): Promise<boolean> {
  try {
    await userService.getByUsername(username);
    return true;
  } catch {
    return false;
  }
}
