import Random from 'randomstring';
import {Repository} from 'typeorm';
import {UserEntity} from './user.entity';
import {Injectable} from '@nestjs/common';
import {UserEntityStruct} from './user.types';
import {InjectRepository} from '@nestjs/typeorm';
import {HashService} from '@instinct-api/common';
import {BaseRepository} from '../../base.repository';

@Injectable()
export class UserRepository extends BaseRepository<UserEntityStruct> {
  readonly eagerRelations: Array<keyof UserEntityStruct> = [
    'rank',
    'joinedGroups',
    'badges',
    'rooms',
    'friends',
    'betaCode',
    'bans',
  ];

  constructor(
    @InjectRepository(UserEntity) userRepository: Repository<UserEntityStruct>,
    private readonly hashService: HashService
  ) {
    super(userRepository, [
      'rank',
      'joinedGroups',
      'badges',
      'rooms',
      'friends',
      'betaCode',
      'bans',
    ]);
  }

  async create(user: UserEntityStruct): Promise<UserEntityStruct> {
    return super.create({
      ...user,
      password: this.hashService.generate(user.password),
    });
  }

  async createSSO(userID: number): Promise<string> {
    const authTicket: string = 'instinct_' + Random.generate(50) + '_' + userID;
    await this.update({id: userID}, {authTicket});
    return authTicket;
  }
}
