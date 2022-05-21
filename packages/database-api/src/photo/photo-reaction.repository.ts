import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';
import {PhotoReactionEntity} from './photo-reaction.entity';

@Injectable()
export class PhotoReactionRepository extends BaseRepository<PhotoReactionEntity> {
  constructor(
    @InjectRepository(PhotoReactionEntity)
    photoReactionRepo: Repository<PhotoReactionEntity>
  ) {
    super(photoReactionRepo, []);
  }
}
