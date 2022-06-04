import {Like} from 'typeorm';
import {User} from '@instinct-prj/interface';
import {userWire} from '@instinct-api/database';
import {HasSession} from '@instinct-api/session';
import {Controller, Get, Param} from '@nestjs/common';
import {RPUserRepository} from '../../database/user/user.repository';

@Controller('search-users')
@HasSession()
export class SearchUsersController {
  constructor(private readonly userRepo: RPUserRepository) {}

  @Get(':username')
  async getProfile(@Param('username') username: string): Promise<User[]> {
    const matchingUsers = await this.userRepo.find({
      username: Like(`%${username}%`),
    });
    return matchingUsers.map(_ => userWire(_));
  }
}
