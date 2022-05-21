import {databaseType} from '../../database.const';
import {HoloUserEntity} from './user.holo.entity';
import {ArcturusUserEntity} from './user.arcturus.entity';

export const UserEntity =
  databaseType === 'holo' ? HoloUserEntity : ArcturusUserEntity;
