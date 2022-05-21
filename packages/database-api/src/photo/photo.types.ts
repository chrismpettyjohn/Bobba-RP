import {UserEntityStruct} from '../user/user/user.types';
import {PhotoReactionEntity} from './photo-reaction.entity';

export interface PhotoEntityStruct {
  id?: number;
  userID: number;
  user?: UserEntityStruct;
  imagePath: string;
  createdAt: number;
  reactions?: PhotoReactionEntity[];
}
