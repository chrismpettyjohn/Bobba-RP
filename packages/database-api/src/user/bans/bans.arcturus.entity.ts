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
export class ArcturusUserBanEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int4'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntityStruct;

  @Column({name: 'ip'})
  ipAddress!: string;

  @Column({name: 'ban_reason'})
  banReason!: string;

  @Column({name: 'machine_id'})
  machineID!: string;

  @Column({name: 'user_staff_id', type: 'int4'})
  staffID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_staff_id'})
  staffMember?: UserEntityStruct;

  @Column({name: 'timestamp', type: 'timestamp'})
  banStartedTimestamp!: number;

  @Column({name: 'ban_expire', type: 'timestamp'})
  banExpirationTimestamp!: number;
}
