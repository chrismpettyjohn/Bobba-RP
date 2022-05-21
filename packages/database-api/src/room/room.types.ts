import {UserEntityStruct} from '../user/user/user.types';

export interface RoomEntityStruct {
  id: number;
  ownerID: number;
  owner: UserEntityStruct;
  name: string;
  description: string;
  model: string;
  password: string;
  users: number;
  usersMax: number;
}
