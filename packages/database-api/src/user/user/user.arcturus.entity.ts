import {UserBanEntity} from '../bans/bans.entity';
import {RankEntity} from '../../rank/rank.entity';
import {RoomEntity} from '../../room/room.entity';
import {PhotoEntity} from '../../photo/photo.entity';
import {GroupEntity} from '../../group/group.entity';
import {UserBadgesEntity} from './user-badges.entity';
import {BetaCodeEntity} from '../../beta-code/beta-code.entity';
import {PhotoEntityStruct} from '../../photo/photo.types';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {UserEntity} from './user.entity';
import {ClientType} from '@instinct-prj/interface';
import {RankEntityStruct} from '../../rank';
import {UserEntityStruct} from './user.types';
import {UserBadgesEntityStruct} from './user-badges.types';
import {UserBanEntityStruct} from '../bans/bans.types';
import {RoomEntityStruct} from '../../room/room.types';
import {PhotoReactionEntity} from '../../photo/photo-reaction.entity';

@Entity('users')
export class ArcturusUserEntity implements UserEntityStruct {
  @PrimaryGeneratedColumn({name: 'id'})
  id?: number;

  @Column({name: 'username', unique: true})
  username!: string;

  @Column({name: 'real_name', nullable: true})
  realName?: string;

  @Column({name: 'password'})
  password!: string;

  @Column({name: 'mail'})
  email!: string;

  @Column({name: 'mail_verified', select: false, default: 0})
  mailVerified!: number;

  @Column({name: 'account_created'})
  accountCreated!: number;

  @Column({name: 'account_day_of_birth', default: 0})
  accountDayOfBirth!: number;

  @Column({name: 'last_login'})
  lastLogin!: number;

  @Column({name: 'last_online', default: 0})
  lastOnline!: number;

  @Column({name: 'motto', nullable: true, default: 'Nectar'})
  motto?: string;

  @Column({
    name: 'look',
    default: 'lg-270-82.hd-180-1.ch-210-66.sh-290-81.hr-100-40',
  })
  figure!: string;

  @Column({name: 'gender', type: 'enum', enum: ['M', 'F'], default: 'M'})
  gender!: string;

  @Column({name: 'rank'})
  rankID!: number;

  @ManyToOne(() => RankEntity)
  @JoinColumn({name: 'rank'})
  rank?: RankEntityStruct;

  @Column({name: 'credits'})
  credits!: number;

  @Column({name: 'pixels'})
  pixels!: number;

  @Column({name: 'points'})
  points!: number;

  @Column({name: 'online', type: 'enum', enum: ['0', '1', '2'], default: '0'})
  online!: '0' | '1' | '2';

  @Column({name: 'auth_ticket', nullable: true})
  authTicket?: string;

  @Column({name: 'ip_register', default: '127.0.0.1'})
  ipRegister!: string;

  @Column({name: 'ip_current', default: '127.0.0.1'})
  ipCurrent!: string;

  @Column({name: 'machine_id', nullable: true})
  machineID?: string;

  @Column({name: 'home_room', default: 0})
  homeRoom!: number;

  @Column({name: 'youtube_video'})
  favoriteYoutubeVideo!: string;

  @Column({name: 'user_of_the_week', type: 'tinyint'})
  userOfTheWeek!: number;

  @Column({name: 'client_type'})
  clientType!: ClientType;

  @Column({name: 'stripe_customer_id', nullable: true})
  stripeCustomerID?: string;

  @OneToMany(() => PhotoEntity, photo => photo.user)
  photos?: PhotoEntityStruct[];

  @OneToMany(() => RoomEntity, room => room.owner)
  rooms?: RoomEntityStruct[];

  @OneToMany(() => UserBadgesEntity, badge => badge.user)
  badges?: UserBadgesEntityStruct[];

  @ManyToMany(() => UserEntity)
  @JoinTable({
    name: 'messenger_friendships',
    joinColumn: {
      name: 'user_one_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_two_id',
      referencedColumnName: 'id',
    },
  })
  friends?: UserEntityStruct[];

  @OneToMany(() => GroupEntity, group => group.user)
  groups?: GroupEntity[];

  @ManyToMany(() => GroupEntity, group => group.members)
  joinedGroups?: GroupEntity[];

  @OneToMany(() => UserBanEntity, ban => ban.user)
  bans?: UserBanEntityStruct[];

  @OneToOne(() => BetaCodeEntity, betaCode => betaCode.user)
  betaCode?: BetaCodeEntity;

  @OneToMany(() => PhotoReactionEntity, photoReaction => photoReaction.user)
  reactions?: PhotoReactionEntity[];
}
