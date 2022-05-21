import {PhotoEntity} from '../photo/photo.entity';
import {UserEntity} from '../user/user/user.entity';
import {PhotoReaction} from '@instinct-prj/interface';
import {PhotoEntityStruct} from '../photo/photo.types';
import {UserEntityStruct} from '../user/user/user.types';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('instinct_photos_reactions')
export class PhotoReactionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'photo_id', type: 'int'})
  photoID!: number;

  @ManyToOne(() => PhotoEntity, photo => photo.reactions)
  @JoinColumn({name: 'photo_id'})
  photo?: PhotoEntityStruct;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntityStruct;

  @Column()
  reaction!: PhotoReaction;
}
