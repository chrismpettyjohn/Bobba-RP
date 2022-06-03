import {createFetchHook} from '@instinct-web/core';
import {businessService} from '../../services/business';
import {BusinessPosition} from '@instinct-plugin/bobba-rp-types';

export const useFetchOpenPositions = () =>
  createFetchHook<BusinessPosition[]>(businessService.getOpenPositions);
