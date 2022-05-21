import {mediaWire} from './media.wire';
import {MediaReference} from '@instinct-prj/interface';
import {MediaReferenceEntity} from './media-reference.entity';

export function mediaReferenceWire(
  entity: MediaReferenceEntity,
  photoURL: string
): MediaReference {
  return {
    id: entity.id!,
    media: mediaWire(entity.media!, photoURL),
    feature: entity.feature,
    description: entity.description,
    createdAt: entity.createdAt!.toString(),
    updatedAt: entity.updatedAt!.toString(),
  };
}
