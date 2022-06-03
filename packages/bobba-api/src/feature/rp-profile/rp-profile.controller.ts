import {UserRPStats} from '@bobba-rp/types';
import {RPUserService} from '../../user/user.service';
import {
  Controller,
  Get,
  Param,
  NotFoundException,
  CacheTTL,
} from '@nestjs/common';
import {RPUserRepository} from '../../database/user/user.repository';
import {HasSession} from '@instinct-api/session';
import {TWENTY_MINUTES_IN_MS} from '../../time.const';

@Controller('users/profile/:username/rp')
@HasSession()
export class RpProfileController {
  constructor(
    private readonly userRepo: RPUserRepository,
    private readonly rpUserService: RPUserService
  ) {}

  @Get()
  @CacheTTL(TWENTY_MINUTES_IN_MS)
  async getProfile(@Param('username') username: string): Promise<UserRPStats> {
    const user = await this.userRepo.findOne({username});

    if (!user) {
      throw new NotFoundException();
    }

    return this.rpUserService.getRPStatsForUser(user);
  }
}
