import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {UserBanEntity} from './bans.entity';
import {UserBanEntityStruct} from './bans.types';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../../base.repository';

@Injectable()
export class UserBanRepository extends BaseRepository<UserBanEntityStruct> {
  constructor(
    @InjectRepository(UserBanEntity)
    userBanRepo: Repository<UserBanEntityStruct>
  ) {
    super(userBanRepo, ['user', 'staffMember']);
  }
}
