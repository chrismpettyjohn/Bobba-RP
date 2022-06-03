import {PoliticalParty} from '@bobba-rp/types';

export interface PartyActionsProps {
  politicalParty: PoliticalParty;
  onChange(): void;
}
