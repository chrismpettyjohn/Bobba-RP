import {createFetchHook} from '@instinct-web/core';
import {PoliticalParty} from '@bobba-rp/types';
import {politicalPartyService} from '../../services/political-party';

export const useFetchPoliticalParties = () =>
  createFetchHook<PoliticalParty[]>(politicalPartyService.getAll);
