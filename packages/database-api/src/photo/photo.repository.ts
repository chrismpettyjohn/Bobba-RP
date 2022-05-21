import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {PhotoEntity} from './photo.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {PhotoEntityStruct} from './photo.types';

@Injectable()
export class PhotoRepository extends BaseRepository<PhotoEntityStruct> {
  constructor(
    @InjectRepository(PhotoEntity) photoRepo: Repository<PhotoEntityStruct>
  ) {
    super(photoRepo, [
      'user',
      'user.rank',
      'reactions',
      'reactions.user',
      'reactions.user.rank',
    ]);
  }
}
