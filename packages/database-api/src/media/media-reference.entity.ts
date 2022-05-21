import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {MediaEntity} from './media.entity';
import {UserEntity} from '../user/user/user.entity';
import {UserEntityStruct} from '../user/user/user.types';

@Entity('instinct_media_references')
export class MediaReferenceEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'media_id'})
  mediaID!: number;

  @Column({name: 'user_id'})
  userID!: number;

  @Column()
  feature!: string;

  @Column()
  description!: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt?: Date;

  @ManyToOne(() => MediaEntity, media => media.references)
  @JoinColumn({name: 'media_id'})
  media?: MediaEntity;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntityStruct;
}
