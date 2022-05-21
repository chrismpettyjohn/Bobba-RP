import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {MediaReferenceEntity} from './media-reference.entity';
import {BaseRepository} from '../base.repository';

@Injectable()
export class MediaReferenceRepository extends BaseRepository<MediaReferenceEntity> {
  constructor(
    @InjectRepository(MediaReferenceEntity)
    mediaRepo: Repository<MediaReferenceEntity>
  ) {
    super(mediaRepo, []);
  }
}
