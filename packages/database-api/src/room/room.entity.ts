import {databaseType} from '../database.const';
import {HoloRoomEntity} from './room.holo.entity';
import {ArcturusRoomEntity} from './room.arcturus.entity';

export const RoomEntity =
  databaseType === 'holo' ? HoloRoomEntity : ArcturusRoomEntity;
