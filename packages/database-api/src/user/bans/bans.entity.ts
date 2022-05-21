import {databaseType} from '../../database.const';
import {HoloUserBanEntity} from './bans.holo.entity';
import {ArcturusUserBanEntity} from './bans.arcturus.entity';

export const UserBanEntity =
  databaseType === 'holo' ? HoloUserBanEntity : ArcturusUserBanEntity;
