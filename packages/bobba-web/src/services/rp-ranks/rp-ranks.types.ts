import {RPRank} from '@instinct-plugin/bobba-rp-types';

export interface RPRanksService {
  getStaffRanks(): Promise<RPRank[]>;
}
