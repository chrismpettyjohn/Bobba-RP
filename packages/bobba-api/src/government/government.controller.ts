import {Controller, Get, CacheTTL} from '@nestjs/common';
import {BusinessService} from '../business/business.service';
import {businessWire} from '../database/business/business.wire';
import {IsGovernment} from '../database/business/business.types';
import {BusinessEntity} from '../database/business/business.entity';
import {BusinessRepository} from '../database/business/business.repository';
import {Business, BusinessPosition, RPUser} from '@bobba-rp/types';
import {HasSession} from '@instinct-api/session';
import {TWENTY_MINUTES_IN_MS} from '../time.const';

@Controller('government')
@HasSession()
export class GovernmentController {
  constructor(
    private readonly businessRepo: BusinessRepository,
    private readonly businessService: BusinessService
  ) {}

  @Get()
  @CacheTTL(TWENTY_MINUTES_IN_MS)
  async getGovernmentMembers(): Promise<BusinessPosition[]> {
    const governmentCorps = await this.businessRepo.find({
      isGovernment: IsGovernment.Yes,
    });

    const governmentMembers: Array<RPUser[]> = [];

    for (const governmentCorp of governmentCorps) {
      const corpMembers = await this.businessService.getUsersInBusiness(
        governmentCorp
      );
      governmentMembers.push(corpMembers);
    }

    const businesses = governmentCorps.map(
      (business: BusinessEntity, index: number) =>
        businessWire(business, governmentMembers[index])
    );

    return businesses
      .map((_: Business) => _.positions)
      .flat()
      .reverse();
  }
}
