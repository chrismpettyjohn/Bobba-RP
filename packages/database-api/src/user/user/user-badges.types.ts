import {UserEntityStruct} from './user.types';

export interface UserBadgesEntityStruct {
  id?: number;
  userID: number;
  user?: UserEntityStruct;
  slotID: number;
  code: string;
}
