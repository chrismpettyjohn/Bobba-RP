import {MediaEntity} from './media.entity';
import {Media} from '@instinct-prj/interface';

export function mediaWire(entity: MediaEntity, photoURL: string): Media {
  return {
    id: entity.id!,
    url: photoURL,
    type: entity.type,
    createdAt: entity.createdAt!.toISOString(),
    updatedAt: entity.updatedAt!.toISOString(),
  };
}
