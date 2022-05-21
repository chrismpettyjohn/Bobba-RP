import {userWire} from '../user/user.wire';
import {UserBan} from '@instinct-prj/interface';
import {UserBanEntityStruct} from './bans.types';

export function userBanWire(banEntity: UserBanEntityStruct): UserBan {
  return {
    id: banEntity.id!,
    user: userWire(banEntity.user!),
    bannedBy: userWire(banEntity.staffMember!),
    banStart: banEntity.banStartedTimestamp,
    banEnd: banEntity.banExpirationTimestamp,
    banReason: banEntity.banReason,
  };
}
