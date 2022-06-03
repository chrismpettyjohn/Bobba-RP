import {AxiosResponse} from 'axios';
import {backendAPI} from '@instinct-web/core';
import {RPRanksService} from './rp-ranks.types';
import {RPRank} from '@bobba-rp/types';

export class RPRanksServiceImplementation implements RPRanksService {
  async getStaffRanks() {
    const staffRanks: AxiosResponse<RPRank[]> = await backendAPI.get(
      'rp-ranks/staff'
    );
    return staffRanks.data;
  }
}
