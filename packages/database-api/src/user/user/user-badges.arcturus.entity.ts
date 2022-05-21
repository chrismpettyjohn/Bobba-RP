import {UserEntity} from './user.entity';
import {UserEntityStruct} from './user.types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {PhotoReactionEntity} from '../../photo/photo-reaction.entity';

@Entity('user_badges')
export class ArcturusUserBadgesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.badges)
  @JoinColumn({name: 'user_id'})
  user?: UserEntityStruct;

  @Column({name: 'slot_id', default: 0})
  slotID!: number;

  @Column({name: 'badge_code'})
  code!: string;

  @OneToMany(() => PhotoReactionEntity, photoReaction => photoReaction.user)
  reactions?: PhotoReactionEntity[];
}
