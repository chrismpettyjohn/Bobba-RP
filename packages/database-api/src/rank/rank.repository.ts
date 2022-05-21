import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {RankEntity} from './rank.entity';
import {PermissionStatus, RankEntityStruct} from './rank.types';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';

@Injectable()
export class RankRepository extends BaseRepository<RankEntityStruct> {
  constructor(
    @InjectRepository(RankEntity) rankRepo: Repository<RankEntityStruct>
  ) {
    super(rankRepo, ['users']);
  }

  async create(rank: RankEntityStruct): Promise<RankEntityStruct> {
    const newRank = await super.create(rank);
    return this.findOneOrFail({id: newRank.id!});
  }

  getAll(): Promise<RankEntityStruct[]> {
    return this.find({}, {id: 'DESC'});
  }

  getStaff(): Promise<RankEntityStruct[]> {
    return this.repo.find({
      where: {
        websiteShowStaff: PermissionStatus.Enabled,
      },
      order: {
        id: 'DESC',
      },
      relations: this.eagerRelations,
    });
  }
}
