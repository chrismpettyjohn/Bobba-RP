import Moment from 'moment';
import {getRepository} from 'typeorm';
import {UserEntityStruct} from '../user/user/user.types';
import {userFactory} from '../user/user/user.factory';
import {PhotoEntity} from './photo.entity';
import {PhotoEntityStruct} from './photo.types';

export async function photoFactory(
  changes?: Partial<PhotoEntityStruct>
): Promise<PhotoEntityStruct> {
  const user: UserEntityStruct = await userFactory();
  return getRepository(PhotoEntity).save({
    id: undefined,
    user,
    roomID: 0,
    imagePath: '/blah.png',
    createdAt: Moment().unix(),
    ...changes,
  });
}
