import {UserEntity} from '../user/user/user.entity';
import {UserEntityStruct} from '../user/user/user.types';
import {
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  Entity,
} from 'typeorm';

@Entity('rooms')
export class HoloRoomEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'owner', type: 'int'})
  ownerID!: number;

  @ManyToOne(() => UserEntity, user => user.rooms)
  @JoinColumn({name: 'owner'})
  owner?: UserEntityStruct;

  @Column({name: 'caption', default: '', type: 'varchar', length: 50})
  name!: string;

  @Column({default: '', type: 'varchar', length: 512})
  description!: string;

  @Column({name: 'model_name', default: '', type: 'varchar', length: 20})
  model!: string;

  @Column({default: '', type: 'varchar', length: 20})
  password!: string;

  @Column({name: 'users_now', type: 'int'})
  users!: number;

  @Column({name: 'users_max', type: 'int'})
  usersMax!: number;
}
