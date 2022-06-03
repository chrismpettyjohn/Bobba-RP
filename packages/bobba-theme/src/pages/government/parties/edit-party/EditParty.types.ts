import {PoliticalPartyDTO} from '@bobba-rp/types';

export interface EditPoliticalPartyProps {
  basePoliticalPartyDTO?: PoliticalPartyDTO;
  onSubmit(politicalPartyDTO: PoliticalPartyDTO): void;
}
