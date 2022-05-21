import {MediaType} from '@instinct-prj/interface';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {MediaReferenceEntity} from './media-reference.entity';

@Entity('instinct_media')
export class MediaEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @Column({name: 'file_name'})
  fileName!: string;

  @Column({name: 'aws_s3_key'})
  awsS3Key!: string;

  @Column()
  type!: MediaType;

  @CreateDateColumn({name: 'created_at'})
  createdAt?: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt?: Date;

  @OneToMany(() => MediaReferenceEntity, mediaReference => mediaReference.media)
  references?: MediaReferenceEntity[];
}
