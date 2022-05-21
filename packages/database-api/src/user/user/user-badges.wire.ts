import {Badge} from '@instinct-prj/interface';
import {UserBadgesEntityStruct} from './user-badges.types';

export function badgeWire(badge: UserBadgesEntityStruct): Badge {
  return {
    id: badge.id!,
    code: badge.code,
  };
}
