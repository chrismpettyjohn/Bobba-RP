import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {UserEntity} from '../user/user.entity';
import {UserEntityStruct} from '../user/user.types';

@Entity('bans')
export class HoloUserBanEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'username'})
  username!: string;

  @ManyToOne(() => UserEntity, (user: UserEntityStruct) => user.username)
  @JoinColumn({name: 'username'})
  user?: UserEntityStruct;

  @Column({name: 'ip_address'})
  ipAddress!: string;

  @Column({name: 'reason'})
  banReason!: string;

  @Column({name: 'machine'})
  machineID!: string;

  @Column({name: 'added_by', type: 'int4'})
  staffID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'added_by'})
  staffMember?: UserEntityStruct;

  @Column({name: 'added_date', type: 'timestamp'})
  banStartedTimestamp!: number;

  @Column({name: 'timestamp', type: 'timestamp'})
  banExpirationTimestamp!: number;
}
