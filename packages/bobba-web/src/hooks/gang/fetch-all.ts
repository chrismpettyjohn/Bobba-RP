import {Gang} from '@bobba-rp/types';
import {gangService} from '../../services/gang';
import {createFetchHook} from '@instinct-web/core';

export const useFetchAllGangs = () =>
  createFetchHook<Gang[]>(gangService.getAll);
