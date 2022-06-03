import {createFetchHook} from '@instinct-web/core';
import {Property} from '@bobba-rp/types';
import {propertyService} from '../../services/property';

export const useFetchAllProperties = (refresh = 0) =>
  createFetchHook<Property[]>(propertyService.getAll, refresh);
