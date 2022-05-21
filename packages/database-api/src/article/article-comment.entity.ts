import {ArticleEntity} from './article.entity';
import {UserEntity} from '../user/user/user.entity';
import {UserEntityStruct} from '../user/user/user.types';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('instinct_article_comments')
export class ArticleCommentEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({type: 'text'})
  content!: string;

  @CreateDateColumn({name: 'timestamp', type: 'int'})
  timestamp!: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntityStruct;

  @Column({name: 'article_id'})
  articleID!: number;

  @ManyToOne(() => ArticleEntity, article => article.comments)
  @JoinColumn({name: 'article_id'})
  article?: ArticleEntity;
}
