import {createFetchHook} from '@instinct-web/core';
import {BusinessPosition} from '@instinct-plugin/bobba-rp-types';
import {governmentService} from '../../services/government';

export const useFetchGovPositions = () =>
  createFetchHook<BusinessPosition[]>(governmentService.getAll);
