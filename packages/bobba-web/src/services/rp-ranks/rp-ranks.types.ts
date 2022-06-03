import {RPRank} from '@bobba-rp/types';

export interface RPRanksService {
  getStaffRanks(): Promise<RPRank[]>;
}
