import {databaseType} from '../database.const';
import {HoloRankEntity} from './rank.holo.entity';
import {ArcturusRankEntity} from './rank.arcturus.entity';

export const RankEntity =
  databaseType === 'holo' ? HoloRankEntity : ArcturusRankEntity;
