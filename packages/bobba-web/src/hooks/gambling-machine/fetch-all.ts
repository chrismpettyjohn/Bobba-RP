import {createFetchHook} from '@instinct-web/core';
import {Food, GamblingMachine} from '@bobba-rp/types';
import {gamblingMachineService} from '../../services/gambling-machine';

export const useFetchAllGamblingMachines = (refresh = 0) =>
  createFetchHook<GamblingMachine[]>(gamblingMachineService.getAll, refresh);
