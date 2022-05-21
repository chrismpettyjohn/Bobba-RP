import {UserEntity} from '../user/user.entity';
import {UserEntityStruct} from '../user/user.types';
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity('instinct_guestbook')
export class UserGuestbookEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'profile_id', type: 'int'})
  profileID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'profile_id'})
  profile?: UserEntityStruct;

  @Column({name: 'author_id', type: 'int'})
  authorID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'author_id'})
  author?: UserEntityStruct;

  @Column({type: 'text'})
  content!: string;

  @Column({type: 'int'})
  timestamp!: number;
}
