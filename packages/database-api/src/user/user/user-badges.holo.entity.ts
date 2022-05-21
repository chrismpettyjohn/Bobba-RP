import {UserEntity} from './user.entity';
import {UserEntityStruct} from './user.types';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user_badges')
export class HoloUserBadgesEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.badges)
  @JoinColumn({name: 'user_id'})
  user?: UserEntityStruct;

  @Column({name: 'badge_slot', default: 0})
  slotID!: number;

  @Column({name: 'badge_id'})
  code!: string;
}
