import {LawDTO} from '@bobba-rp/types';

export interface EditLawProps {
  baseLawDTO?: LawDTO;
  onSubmit(newLawDTO: LawDTO): Promise<void>;
}
