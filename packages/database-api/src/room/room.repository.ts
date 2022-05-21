import {Repository} from 'typeorm';
import {RoomEntity} from './room.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '../base.repository';
import {InjectRepository} from '@nestjs/typeorm';
import {RoomEntityStruct} from './room.types';

@Injectable()
export class RoomRepository extends BaseRepository<RoomEntityStruct> {
  constructor(
    @InjectRepository(RoomEntity) roomRepo: Repository<RoomEntityStruct>
  ) {
    super(roomRepo, ['owner']);
  }
}
