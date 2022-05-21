import {userWire} from '../user/user/user.wire';
import {Photo} from '@instinct-prj/interface';
import {PhotoEntityStruct} from './photo.types';

export function photoWire(photoEntity: PhotoEntityStruct): Photo {
  return {
    id: photoEntity.id!,
    userID: photoEntity.userID,
    user: photoEntity.user ? userWire(photoEntity.user) : undefined,
    imagePath: photoEntity.imagePath,
    createdAt: photoEntity.createdAt,
    reactions: photoEntity.reactions!.map(_ => ({
      user: userWire(_.user!),
      reaction: _.reaction,
    })),
  };
}
