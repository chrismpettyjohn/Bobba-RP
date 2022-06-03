import {GangPipe} from './gang.pipe';
import {GangService} from './gang.service';
import {Controller, Get, Param, CacheTTL} from '@nestjs/common';
import {Gang, RPUser} from '@bobba-rp/types';
import {GangEntity, GangRepository, gangWire} from '../database/gang';
import {HasSession} from '@instinct-api/session';
import {TWENTY_MINUTES_IN_MS} from '../time.const';

@Controller('gangs')
@HasSession()
export class GangController {
  constructor(
    private readonly gangRepo: GangRepository,
    private readonly gangService: GangService
  ) {}

  @Get()
  @CacheTTL(TWENTY_MINUTES_IN_MS)
  async getGangs(): Promise<Gang[]> {
    const gangs = await this.gangRepo.find();
    const gangMembers: Array<RPUser[]> = [];

    const fetchMembersForGang = async (gang: GangEntity) => {
      const members = await this.gangService.getUsersInGang(gang);
      gangMembers.push([...members]);
    };

    await Promise.all(gangs.map(gangID => fetchMembersForGang(gangID)));

    return gangs.map((gang, index) => gangWire(gang, gangMembers[index]));
  }

  @Get(':gangID')
  async getGangByID(
    @Param('gangID', GangPipe) gang: GangEntity
  ): Promise<Gang> {
    const gangMembers = await this.gangService.getUsersInGang(gang);
    return gangWire(gang, gangMembers);
  }
}
