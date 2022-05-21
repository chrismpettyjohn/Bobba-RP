import {PhotoEntityStruct} from './photo.types';
import {UserEntity} from '../user/user/user.entity';
import {UserEntityStruct} from '../user/user/user.types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {PhotoReactionEntity} from './photo-reaction.entity';

@Entity('camera_web')
export class ArcturusPhotoEntity implements PhotoEntityStruct {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntityStruct;

  @Column({name: 'url'})
  imagePath!: string;

  @Column({name: 'timestamp'})
  createdAt!: number;

  @OneToMany(() => PhotoReactionEntity, photoReaction => photoReaction.photo)
  reactions?: PhotoReactionEntity[];
}
