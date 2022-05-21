import {getRepository} from 'typeorm';
import {RankEntity} from './rank.entity';
import {RankEntityStruct} from './rank.types';

export function rankFactory(
  changes?: Partial<RankEntityStruct>
): Promise<RankEntityStruct> {
  return getRepository(RankEntity).save({
    name: 'Testing',
    badge: 'BETA',
    level: 1,
    ...changes,
  });
}
