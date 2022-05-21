import {databaseType} from '../../database.const';
import {HoloUserBadgesEntity} from './user-badges.holo.entity';
import {ArcturusUserBadgesEntity} from './user-badges.arcturus.entity';

export const UserBadgesEntity =
  databaseType === 'holo' ? HoloUserBadgesEntity : ArcturusUserBadgesEntity;
