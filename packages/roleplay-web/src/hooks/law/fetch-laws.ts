import {lawService} from '../../services/law';
import {createFetchHook} from '@instinct-web/core';
import {Law} from '@instinct-plugin/bobba-rp-types';

export const useFetchLaws = () => createFetchHook<Law[]>(lawService.getAll);
