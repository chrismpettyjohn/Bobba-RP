import {LawDTO} from '@instinct-plugin/bobba-rp-types';

export interface EditLawProps {
  baseLawDTO?: LawDTO;
  onSubmit(newLawDTO: LawDTO): Promise<void>;
}
