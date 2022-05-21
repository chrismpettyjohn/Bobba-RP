import {getRepository} from 'typeorm';
import {UserEntity} from './user.entity';
import {UserEntityStruct} from './user.types';

export function userFactory(
  changes?: Partial<UserEntityStruct>
): Promise<UserEntityStruct> {
  return getRepository(UserEntity).save({
    username: 'Test',
    motto: 'Testing',
    email: 'test@testing.com',
    password: 'password',
    rankID: 0,
    figure: '-',
    credits: 10,
    pixels: 10,
    online: '1',
    ...changes,
  });
}
