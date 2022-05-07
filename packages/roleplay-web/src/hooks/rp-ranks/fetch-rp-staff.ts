import {createFetchHook} from '@instinct-web/core';
import {RPRank} from '@instinct-plugin/bobba-rp-types';
import {rpRanksService} from '../../services/rp-ranks';

export const useFetchRPStaff = () =>
  createFetchHook<RPRank[]>(rpRanksService.getStaffRanks);
