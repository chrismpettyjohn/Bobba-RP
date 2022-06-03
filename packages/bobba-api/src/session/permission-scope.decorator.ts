import {HasScope} from '@instinct-api/session';
import {RPPermissions} from '@instinct-plugin/bobba-rp-types';

export function HasRPScope(scope: keyof RPPermissions) {
  return HasScope(scope as any);
}
