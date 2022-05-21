import {Provider} from '@nestjs/common';
import {MediaReferenceEntity} from './media-reference.entity';
import {MediaReferenceRepository} from './media-reference.repository';
import {MediaEntity} from './media.entity';
import {MediaRepository} from './media.repository';

export const mediaEntities: Function[] = [MediaEntity, MediaReferenceEntity];

export const mediaRepositories: Provider[] = [
  MediaRepository,
  MediaReferenceRepository,
];
