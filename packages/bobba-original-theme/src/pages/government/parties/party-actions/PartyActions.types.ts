import {PoliticalParty} from '@instinct-plugin/bobba-rp-types';

export interface PartyActionsProps {
  politicalParty: PoliticalParty;
  onChange(): void;
}
