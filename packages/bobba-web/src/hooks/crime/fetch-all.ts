import {createFetchHook} from '@instinct-web/core';
import {Crime} from '@bobba-rp/types';
import {crimeService} from '../../services/crime';

export const useFetchAllCrimes = (refresh = 0) =>
  createFetchHook<Crime[]>(crimeService.getAll, refresh);
