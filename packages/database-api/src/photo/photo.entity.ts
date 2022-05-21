import {databaseType} from '../database.const';
import {HoloPhotoEntity} from './photo.holo.entity';
import {ArcturusPhotoEntity} from './photo.arcturus.entity';

export const PhotoEntity =
  databaseType === 'holo' ? HoloPhotoEntity : ArcturusPhotoEntity;
