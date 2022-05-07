import {PoliticalPartyDTO} from '@instinct-plugin/bobba-rp-types';

export interface EditPoliticalPartyProps {
  basePoliticalPartyDTO?: PoliticalPartyDTO;
  onSubmit(politicalPartyDTO: PoliticalPartyDTO): void;
}
